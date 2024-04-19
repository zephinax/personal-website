import dayjs from "dayjs";
import { ProfilePage, WithContext } from "schema-dts";

import { ProfileContainer } from "@/containers/profile";
import { USER } from "@/containers/profile/constants";

const getProfilePageJsonLd = (): WithContext<ProfilePage> => {
  return {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    dateCreated: dayjs("2023-10-20 20:10").format(),
    dateModified: dayjs("2024-04-19 22:36").format(),
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
    // "@type": "Person",
    // name: USER.fullName,
    // alternateName: USER.nickname,
    // nationality: "Vietnamese",
    // gender: USER.gender,
    // address: {
    //   "@type": "PostalAddress",
    //   addressLocality: "Binh Thanh District",
    //   addressRegion: "Ho Chi Minh City",
    //   postalCode: "72300",
    //   addressCountry: "Viet Nam",
    // },
    // email: USER.email,
    // url: USER.website,
    // jobTitle: "Senior Frontend Developer",
    // sameAs: [
    //   "https://linkedin.com/in/ncdai",
    //   "https://github.com/ncdai",
    //   "https://www.youtube.com/@ncdai",
    // ],
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
