import { NextResponse } from "next/server";
import VCard from "vcard-creator";

import { USER } from "@/containers/profile/constants";

const APP_URL = process.env.APP_URL || process.env.VERCEL_URL;

const getVCardPhoto = async (url: string) => {
  try {
    const res = await fetch(url);

    if (!res.ok) {
      return null;
    }

    const buffer = Buffer.from(await res.arrayBuffer());
    if (buffer.length === 0) {
      return null;
    }

    const image = buffer.toString("base64");

    const contentType = res.headers.get("Content-Type") || "";
    if (!contentType.startsWith("image/")) {
      return null;
    }

    return {
      image,
      mine: contentType.split("/")[1],
    };
  } catch (error) {
    return null;
  }
};

export async function GET() {
  const card = new VCard();

  card
    .addName(USER.lastName, USER.firstName)
    .addAddress(USER.address)
    .addEmail(USER.email)
    .addURL(USER.website);

  const photo = await getVCardPhoto(APP_URL + "/images/chanhdai-avatar.jpeg");
  if (photo) {
    card.addPhoto(photo.image, photo.mine);
  }

  if (USER.jobs.length > 0) {
    const company = USER.jobs[0];
    card.addCompany(company.company).addJobtitle(company.title);
  }

  return new NextResponse(card.toString(), {
    status: 200,
    headers: {
      "Content-Type": "text/x-vcard",
      "Content-Disposition": `attachment; filename=chanhdai-vcard.vcf`,
    },
  });
}
