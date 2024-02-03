import { NextResponse } from "next/server";
import VCard from "vcard-creator";

import { USER } from "@/containers/profile/constants";

export async function GET(
  _request: Request,
  { params }: { params: { username: string } }
) {
  const myVCard = new VCard();

  myVCard
    .addName("", USER.fullName)
    .addAddress(USER.address)
    .addEmail(USER.email)
    .addURL(USER.website);

  if (USER.jobs.length > 0) {
    const company = USER.jobs[0];
    myVCard.addCompany(company.company).addJobtitle(company.title);
  }

  const { username } = params;

  return new NextResponse(myVCard.toString(), {
    status: 200,
    headers: {
      "Content-Type": "text/x-vcard",
      "Content-Disposition": `attachment; filename=${username}.vcf`,
    },
  });
}
