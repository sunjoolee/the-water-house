import BookchonSection from "@/components/home/2_BookchonSection";

import MainSection from "@/components/home/1_MainSection";
import ArchitectSection from "@/components/home/3_ArchitectSection";
import FurnishSection from "@/components/home/4_FurnishSection";
import ArtSection from "@/components/home/6_ArtSection";
import ExperienceSection from "@/components/home/5_ExperienceSection";
import AccessSection from "@/components/home/7_AccessSection";
import Splash from "@/components/splash/Splash";

export default function Home() {
  return (
    // show splash on home screen
    <Splash>
      <div className="w-screen h-full overflow-x-hidden">
        <MainSection />
        {/* <BookchonSection />
        <ArchitectSection />
        <FurnishSection />
        <ExperienceSection />
        <ArtSection />
        <AccessSection /> */}
      </div>
    </Splash>

  );
}
