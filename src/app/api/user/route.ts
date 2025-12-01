import { NextResponse } from "next/server";

import { USER } from "@/features/portfolio/data/user";
import type { User } from "@/features/portfolio/types/user";
import { decodeEmail, decodePhoneNumber } from "@/utils/string";

type PublicUser = Omit<User, "email" | "phoneNumber"> & {
  email: string;
  phoneNumber: string;
};

const BLOCKED_FIELDS = new Set<keyof PublicUser>([
  "keywords",
  "flipSentences",
  "ogImage",
  "namePronunciationUrl",
  "dateCreated",
  "avatar",
  "jobs",
  "phoneNumber",
]);

const userData: PublicUser = {
  ...USER,
  email: decodeEmail(USER.email),
  phoneNumber: decodePhoneNumber(USER.phoneNumber),
};

export const dynamic = "force-static";

export function GET(request: Request) {
  const url = new URL(request.url);
  const fieldsParam = url.searchParams.get("fields");
  const excludeParam = url.searchParams.get("exclude");

  const fields = fieldsParam
    ?.split(",")
    .map((field) => field.trim())
    .filter(Boolean);

  const allowedFields = (
    Object.keys(userData) as Array<keyof PublicUser>
  ).filter((field) => !BLOCKED_FIELDS.has(field));
  const allowedFieldsSet = new Set<keyof PublicUser>(allowedFields);

  const exclude = excludeParam
    ?.split(",")
    .map((field) => field.trim())
    .filter(Boolean);

  const unknownFields = [
    ...(fields ?? []).filter(
      (field) => !allowedFieldsSet.has(field) || field.startsWith("_")
    ),
    ...(exclude ?? []).filter(
      (field) => !allowedFieldsSet.has(field) || field.startsWith("_")
    ),
  ];

  if (unknownFields.length > 0) {
    return NextResponse.json(
      {
        error: "Invalid fields requested",
        unknownFields: Array.from(new Set(unknownFields)),
        allowedFields,
      },
      { status: 400 }
    );
  }

  const selectedFields =
    fields && fields.length > 0
      ? (fields as Array<keyof PublicUser>)
      : allowedFields;

  const finalFields: Array<keyof PublicUser> = exclude
    ? selectedFields.filter((field) => !exclude.includes(field))
    : selectedFields;

  const filteredEntries = finalFields.map((field) => [field, userData[field]]);
  const filteredData = Object.fromEntries(
    filteredEntries
  ) as Partial<PublicUser>;

  return NextResponse.json({ data: filteredData }, { status: 200 });
}
