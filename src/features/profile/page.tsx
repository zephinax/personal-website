import he from "he";

import { cn } from "@/lib/cn";

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
import { Confetti } from "./components/confetti";
import { USER } from "./constants";

const Pattern = () => {
  return (
    <div
      className={cn(
        "border-grid relative flex h-4 w-full border-x",
        "before:absolute before:-left-[100vw] before:h-4 before:w-[200vw]",
        "before:bg-[image:repeating-linear-gradient(315deg,_var(--pattern-foreground)_0,_var(--pattern-foreground)_1px,_transparent_0,_transparent_50%)] before:bg-[size:10px_10px] before:[--pattern-foreground:var(--color-black)]/5 dark:before:[--pattern-foreground:var(--color-white)]/5"
      )}
    />
  );
};

export const ProfilePage = () => {
  const phoneEncoded = he.encode(USER.phoneNumber, {
    encodeEverything: true,
  });
  const emailEncoded = he.encode(USER.email, {
    encodeEverything: true,
  });

  return (
    <>
      <HeaderMotion />

      <div className="max-w-screen overflow-x-hidden">
        <div className="mx-auto px-4 md:max-w-3xl">
          <Header />
          <Pattern />

          <main>
            <Overview phoneEncoded={phoneEncoded} emailEncoded={emailEncoded} />
            <Pattern />

            <Links />
            <Pattern />

            <About />
            <Pattern />

            <TeckStack />
            <Pattern />

            <Experiences />
            <Pattern />
          </main>

          <Footer />
        </div>
      </div>

      <QuickActions emailEncoded={emailEncoded} vCardLink="/vcard" />

      <Confetti datesWithoutYear={[USER.dateOfBirth]} />
    </>
  );
};
