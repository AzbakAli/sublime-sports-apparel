import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ScrollProgress from "@/components/ui/ScrollProgress";
import WelcomeModal from "@/components/ui/WelcomeModal";
import BackToTop from "@/components/ui/BackToTop";
import PageLoader from "@/components/ui/PageLoader";
import HeroSlider from "@/components/sections/HeroSlider";
import Marquee from "@/components/sections/Marquee";
import StatsBar from "@/components/sections/StatsBar";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import Process from "@/components/sections/Process";
import Testimonials from "@/components/sections/Testimonials";
import Team from "@/components/sections/Team";
import Contact from "@/components/sections/Contact";

export default function HomePage() {
  return (
    <>
      <PageLoader />
      <WelcomeModal />
      <ScrollProgress />
      <Header />
      <main>
        <HeroSlider />
        <Marquee />
        <StatsBar />
        <About />
        <Services />
        <Process />
        <Testimonials />
        <Team />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
