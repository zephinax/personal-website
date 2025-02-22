import dayjs from "dayjs";
import { ProfilePage as ProfilePageSchema, WithContext } from "schema-dts";

import { SITE_INFO } from "@/config/site";
import { USER } from "@/features/profile/data/user";
import { ProfilePage } from "@/features/profile/page";

function getProfilePageJsonLd(): WithContext<ProfilePageSchema> {
  return {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    dateCreated: dayjs(USER.dateCreated).format(),
    dateModified: dayjs(USER.dateModified).format(),
    mainEntity: {
      "@type": "Person",
      name: USER.displayName,
      identifier: USER.username,
      image: SITE_INFO.url + USER.avatar,
    },
  };
}

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
