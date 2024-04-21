import dayjs from "dayjs";
import { ProfilePage, WithContext } from "schema-dts";

import { ProfileContainer } from "@/containers/profile";
import { USER } from "@/containers/profile/constants";

const getProfilePageJsonLd = (): WithContext<ProfilePage> => {
  return {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    dateCreated: dayjs("2023-10-20 20:10").format(),
    dateModified: dayjs("2024-04-22 01:00").format(),
    mainEntity: {
      "@type": "Person",
      name: USER.fullName,
      alternateName: USER.nickname,
      identifier: USER.username,
      image: "https://chanhdai.com/images/ncdai-avatar.jpeg",
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

      <ProfileContainer />
    </>
  );
}
