import dayjs from "dayjs";
import { ProfilePage as ProfilePageSchema, WithContext } from "schema-dts";

import { USER } from "@/features/profile/constants";
import { ProfilePage } from "@/features/profile/page";

const getProfilePageJsonLd = (): WithContext<ProfilePageSchema> => {
  return {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    dateCreated: dayjs(USER.dateCreated).format(),
    dateModified: dayjs(USER.dateModified).format(),
    mainEntity: {
      "@type": "Person",
      name: USER.displayName,
      alternateName: USER.nickname,
      identifier: USER.username,
      image: process.env.APP_URL + USER.avatar,
    },
  };
};

export default function Page() {
  const websiteJsonLd = getProfilePageJsonLd();

  return (
    <>
      <script
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        type="application/ld+json"
      />

      <ProfilePage />
    </>
  );
}
