import { NextPage } from "next";
import Head from "next/head";

import { SectionHead } from "../components/sections/SectionHead";
import { Section } from "../components/sections/Section";
import { PlainLink } from "../components/buttons/PlainLink";
import { CCBYSA4 } from "../components/util/CCBYSA4";
import Image from "next/image";
import { Button, ButtonRow } from "../components/buttons/Button";
import { ButtonDownload } from "../components/buttons/ButtonDownload";
import { SectionSocials } from "../components/sections/SectionSocials";

const Epicidity: NextPage = () => {
  return <div className="w-full">
    <Head><title>Epicidity avatars</title></Head>

    <SectionHead />

    <Section className="text-xl">
      <p className="text-justify max-w-4xl">
        Epicidity avatars were a collection of 3D logo avatars I made on
        the <PlainLink href="https://www.computercraft.info/forums2/index.php?/topic/27288-custom-3d-avatar" external>ComputerCraft forums</PlainLink> in
        August 2016. They were very simple graphics made using Cinema 4D. As of December 2023 I have released the
        template source files for these logos, and some additional wallpapers, freely under
        the <PlainLink href="https://creativecommons.org/licenses/by-sa/4.0/" external>CC BY-SA 4.0</PlainLink> license.
      </p>
    </Section>

    <Section className="text-xl bg-zinc-800" title="Avatars" dark>
      <Image src="/epicidity/img/name.png" width={256} height={256} alt="Epicidity avatars" />

      <WorkInfo title="3D text avatar template" published="2nd August 2016" />

      <ButtonRow className="mt-8">
        <ButtonDownload external href="/epicidity/c4d/name.c4d">Download (.c4d)</ButtonDownload>
        <ButtonDownload external href="/epicidity/img/name.png">Download (.png, 2048 x 2048)</ButtonDownload>
      </ButtonRow>

      <CCBYSA4 className="mt-2 text-sm opacity-75" />
    </Section>

    <Section className="text-xl bg-zinc-900" title="Wallpapers" dark>
      <Image src="/epicidity/img/uplift-head-thought.png" width={256} height={144} alt="Uplift head thought" />

      <WorkInfo title="&ldquo;Uplift head thought&rdquo;" published="3rd August 2016" />

      <ButtonRow className="mt-8">
        <ButtonDownload external href="/epicidity/c4d/uplift-head-thought.c4d">Download (.c4d)</ButtonDownload>
        <ButtonDownload external href="/epicidity/img/uplift-head-thought.png">Download (.png, 1920 x 1080)</ButtonDownload>
      </ButtonRow>

      <CCBYSA4 className="mt-2 text-sm opacity-75" />

      {/* ---------------------------------------------------------------------------------------------------------- */}
      <div className="mt-8" />

      <Image src="/epicidity/img/you-are-not-epic.png" width={256} height={144} alt="You are not epic" />

      <WorkInfo title="&ldquo;You are not epic&rdquo;" published="3rd August 2016" />

      <ButtonRow className="mt-8">
        <ButtonDownload external href="/epicidity/c4d/you-are-not-epic.c4d">Download (.c4d)</ButtonDownload>
        <ButtonDownload external href="/epicidity/img/you-are-not-epic.png">Download (.png, 1280 x 720)</ButtonDownload>
        <ButtonDownload external href="/epicidity/img/you-are-not-epic-4k.png">Download (.png, 3840 x 2160)</ButtonDownload>
      </ButtonRow>

      <CCBYSA4 className="mt-2 text-sm opacity-75" />
    </Section>

    <SectionSocials />
  </div>;
};

interface WorkInfoProps {
  title: string;
  published?: string;
}

function WorkInfo({ title, published }: WorkInfoProps): JSX.Element {
  return <p className="mt-2 flex flex-wrap items-baseline gap-2">
    <span>{title}</span>
    {published && <span className="opacity-75 text-sm">
      Published {published}
    </span>}
  </p>;
}

export default Epicidity;
