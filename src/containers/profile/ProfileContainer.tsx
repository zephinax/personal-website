import he from "he";

import {
  About,
  Experiences,
  Footer,
  Header,
  HeaderMotion,
  Links,
  Overview,
  QuickActions,
  TeckStack,
} from "./components";
import { HappyBirthday } from "./components/happy-birthday";
import { USER } from "./constants";

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

          <TeckStack />

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
