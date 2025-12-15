import About from "@/components/main/About/About";
import Blog from "@/components/main/Blog/Blog";
import Hero from "@/components/main/Hero/Hero";
import Services from "@/components/main/Services/Services";
import ServicesSecond from "@/components/main/ServicesSecond/ServicesSecond";
import Specialist from "@/components/main/Specialist/Specialist";
import Transform from "@/components/main/Transform/Transform";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <ServicesSecond />
      <About />
      <Transform />
      <Specialist />
      <Blog />
    </>
  );
}
