import type { NextPage } from "next";
import Head from "next/head";

import { SectionHead } from "../components/sections/SectionHead";
import { SectionMusic } from "../components/sections/SectionMusic";
import { SectionMusicRelease } from "../components/sections/SectionMusicRelease";
import { SectionProgramming } from "../components/sections/SectionProgramming";
import { SectionOsusig } from "../components/sections/SectionOsusig";
import { SectionKristWeb } from "../components/sections/SectionKristWeb";
import { SectionKanjiSchool } from "../components/sections/SectionKanjiSchool";
import { SectionSocials } from "../components/sections/SectionSocials";

const Home: NextPage = () => {
  return <div className="w-full">
    <Head><title>Lemmmy</title></Head>

    <SectionHead />

    <SectionMusic />
    {/* CANT SLEEP EP */}
    <SectionMusicRelease
      title="CANT SLEEP" type="ep"
      videoId="pdRXuGCk8lo" releaseDate="2021-12-17"
      className="bg-[#414059]" dark
      bgImage="/img/cant-sleep-bg.jpg"
      get="https://distrokid.com/hyperfollow/lemmmy/cant-sleep"
      tracks={[
        { name: "WAKE UP (INTRO)", duration: 36 },
        { name: "CANT SLEEP", duration: 282 },
        { name: "LETHARGY", duration: 330 },
        { name: "HYPNAGOGIA", duration: 222 },
        { name: "RAPID EYE MOVEMENT", duration: 196 },
      ]}
      description="my first EP, a taste of my sound. drum n bass, pure amen slicing mayhem."
    />

    <SectionProgramming />
    <SectionOsusig />
    <SectionKristWeb />
    <SectionKanjiSchool />

    <SectionSocials />
  </div>;
};

export default Home;
