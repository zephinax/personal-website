import type { NextApiRequest, NextApiResponse } from "next";
import VCard from "vcard-creator";

import { USER } from "@/containers/profile/constants";

export default function handler(
  _req: NextApiRequest,
  res: NextApiResponse<string>
) {
  const myVCard = new VCard();

  myVCard
    .addName("", USER.fullName)
    .addAddress(USER.address)
    // .addPhoneNumber(USER.phoneNumber)
    .addEmail(USER.email)
    .addURL(USER.website);

  if (USER.jobs.length > 0) {
    const company = USER.jobs[0];
    myVCard.addCompany(company.company).addJobtitle(company.title);
  }

  res
    .setHeader("Content-Type", "text/x-vcard")
    .status(200)
    .send(myVCard.toString());
}
