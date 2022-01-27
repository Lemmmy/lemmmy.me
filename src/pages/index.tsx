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
    {/* refill */}
    <SectionMusicRelease
      title="refill" type="single"
      cover="/img/refill-cover.jpg"
      releaseDate="2022-01-28" released
      className="bg-[#34688b]" dark
      bgImage="/img/refill-bg.jpg"
      get="https://ffm.to/refill.owe"
      tracks={[
        { name: "refill", duration: 432 },
      ]}
    />
    {/* HYPNAGOGIA (lethargic ver.) */}
    <SectionMusicRelease
      title="HYPNAGOGIA (lethargic ver.)" type="single"
      cover="/img/hypnagogia-lethargic-cover.jpg"
      releaseDate="2022-01-18" released
      className="bg-[#6b49a7]" dark
      bgImage="/img/hypnagogia-lethargic-bg.jpg"
      get="https://ffm.to/hypnagogia-lethargic.owe"
      tracks={[
        { name: "HYPNAGOGIA (lethargic ver.)", duration: 352 },
      ]}
    />
    {/* PATTERN 127 */}
    <SectionMusicRelease
      title="PATTERN 127" type="single"
      videoId="YO3S8inHU8Q" releaseDate="2022-01-07" released
      className="bg-[#e14f51]" dark
      bgImage="/img/pattern-127-bg.jpg"
      get="https://ffm.to/pattern127.owe"
      tracks={[
        { name: "PATTERN 127", duration: 292 },
      ]}
    />
    {/* CANT SLEEP EP */}
    <SectionMusicRelease
      title="CANT SLEEP" type="ep"
      videoId="pdRXuGCk8lo" releaseDate="2021-12-17" released
      className="bg-[#414059]" dark
      bgImage="/img/cant-sleep-bg.jpg"
      get="https://ffm.to/cant-sleep.owe"
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
