import { NextResponse } from "next/server";
import VCard from "vcard-creator";

import { USER } from "@/containers/profile/constants";

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
    .addEmail(USER.email.toLowerCase())
    .addURL(USER.website.toLowerCase())
    .addSocial("https://linkedin.com/in/iamncdai", "LinkedIn", "iamncdai")
    .addSocial("https://github.com/iamncdai", "GitHub", "iamncdai")
    .addSocial("https://zalo.me/quaric", "Zalo", "quaric")
    .addSocial("https://www.youtube.com/@ncdai", "YouTube", "@ncdai");

  const photo = await getVCardPhoto(
    process.env.APP_URL + "/images/ncdai-avatar.jpeg"
  );
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
      "Content-Disposition": `attachment; filename=ncdai.vcf`,
    },
  });
}
