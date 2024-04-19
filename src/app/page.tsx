import { Person, WithContext } from "schema-dts";

import { ProfileContainer } from "@/containers/profile";
import { USER } from "@/containers/profile/constants";

const getPersonJsonLd = (): WithContext<Person> => {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: USER.fullName,
    alternateName: USER.nickname,
    nationality: "Vietnamese",
    gender: USER.gender,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Binh Thanh District",
      addressRegion: "Ho Chi Minh City",
      postalCode: "72300",
      addressCountry: "Viet Nam",
    },
    email: USER.email,
    url: USER.website,
    jobTitle: "Senior Frontend Developer",
    sameAs: [
      "https://linkedin.com/in/ncdai",
      "https://github.com/ncdai",
      "https://www.youtube.com/@ncdai",
    ],
  };
};

export default function Page() {
  const websiteJsonLd = getPersonJsonLd();

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
