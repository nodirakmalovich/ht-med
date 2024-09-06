import HomeAdvantages from "@/component/Home/HomeAdvantages/HomeAdvantages";
import HomeCarousel from "@/component/Home/HomeCarusel/HomeCarusel";
import HomeCategories from "@/component/Home/HomeCategories/HomeCategories";
import HomePartners from "@/component/Home/HomePartners/HomePartners";
import HomeServices from "@/component/Home/HomeServices/HomeServices";
import HomeWork from "@/component/Home/HomeWork/HomeWork";
import HomeHero from "@/pages/Home/HomeHero/HomeHero";

export default function Home() {
  return (
    <div className="">
      <HomeHero />
      <HomeCarousel />
      <HomeCategories />
      <HomeAdvantages />
      <HomeWork />
      <HomeServices />
      <HomePartners />
    </div>
  );
}
