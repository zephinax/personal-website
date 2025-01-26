import dayjs from "dayjs";
import { ProfilePage as ProfilePageSchema, WithContext } from "schema-dts";

import { USER } from "@/features/profile/constants";
import { ProfilePage } from "@/features/profile/page";

const getProfilePageJsonLd = (): WithContext<ProfilePageSchema> => {
  return {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    dateCreated: dayjs("2023-10-20").format(),
    dateModified: dayjs("2025-01-23").format(),
    mainEntity: {
      "@type": "Person",
      name: USER.displayName,
      alternateName: USER.nickname,
      identifier: USER.username,
      image: "https://chanhdai.com/images/chanhdai-avatar.jpeg",
      sameAs: [
        "https://linkedin.com/in/ncdai",
        "https://github.com/ncdai",
        "https://www.youtube.com/@ncdai",
      ],
    },
  };
};

export default function Page() {
  const websiteJsonLd = getProfilePageJsonLd();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
      />

      <ProfilePage />
    </>
  );
}
