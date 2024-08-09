import he from "he";
import dynamic from "next/dynamic";

import {
  About,
  Experiences,
  Footer,
  Header,
  HeaderMotion,
  Links,
  Overview,
  QuickActions,
  Skills,
} from "./components";
import { USER } from "./constants";

const HappyBirthday = dynamic(
  () => import("./components/happy-birthday").then((mod) => mod.HappyBirthday),
  {
    ssr: false,
  }
);

export const ProfileContainer = () => {
  const emailEncoded = he.encode(USER.email, {
    encodeEverything: true,
  });
  const emailLinkEncoded = `mailto:${emailEncoded}`;

  return (
    <>
      <HeaderMotion />

      <div className="mx-auto space-y-4 px-4 md:max-w-2xl">
        <Header />

        <main className="space-y-4">
          <Overview
            emailEncoded={emailEncoded}
            emailLinkEncoded={emailLinkEncoded}
          />

          <About />

          <Experiences />

          <Skills />

          <Links />

          <QuickActions
            emailLinkEncoded={emailLinkEncoded}
            vCardLink="/api/vcard"
          />
        </main>

        <Footer />
      </div>

      <HappyBirthday dateOfBirth={USER.dateOfBirth} />
    </>
  );
};
