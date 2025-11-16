import Hero from "./components/Hero";
import Section from "./components/Section";
import { Button } from "./components/Button";
import HowItWorksSection from "./components/HowItWorksSection";
import StickyRevealSection from "./components/StickyRevealSection";
import InteractiveGallerySection from "./components/InteractiveGallerySection";
import GallerySection from "./components/GallerySection";
import VideoSlideshowSection from "./components/VideoSlideshowSection";
import LatestNewsSection from "./components/LatestNewsSection";

export default function Home() {
  return (
    <>
      <Hero />
      
      {/* How I Serve Section */}
      <HowItWorksSection />
      
      {/* My Priorities Section */}
      <StickyRevealSection />
      
      {/* Track Record Section */}
      <InteractiveGallerySection />
      
      {/* Video Messages Section */}
      <VideoSlideshowSection />
      
      {/* Photo Gallery Section */}
      <GallerySection />
      
      {/* Latest News Section */}
      <LatestNewsSection />
      <Section className="text-center">
        <div className="mx-auto max-w-2xl space-y-3">
          <h2 className="text-2xl font-semibold">Join our movement</h2>
          <p className="text-zinc-600 dark:text-zinc-400">
            Volunteer your time or support the campaign. Every action helps us build a better Sissala East.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Button href="/volunteer">Volunteer</Button>
            <Button href="/donate" variant="secondary">Donate</Button>
          </div>
        </div>
      </Section>
    </>
  );
}
