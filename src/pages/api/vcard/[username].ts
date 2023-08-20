import type { NextApiRequest, NextApiResponse } from "next";
import VCard from "vcard-creator";

import { USER } from "@/containers/profile/constants";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<string>
) {
  // const { username } = req.query;

  const myVCard = new VCard();

  myVCard
    .addName("", USER.fullName)
    .addCompany(USER.company)
    .addJobtitle(USER.jobTitle)
    .addAddress(USER.address)
    // .addPhoneNumber(USER.phoneNumber)
    .addEmail(USER.email)
    .addURL(USER.website)
    .addURL("https://nguyenchanhdai.com");

  res
    .setHeader("Content-Type", "text/x-vcard")
    .status(200)
    .send(myVCard.toString());
}
