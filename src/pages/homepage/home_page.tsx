import { FeaturedProducts } from "./featured_section";
import { HeroSection } from "./hero_section";
import { TestimonialsSection } from "./testimonials_section";

const HomePage = () => {
  return (
    <main>
      <HeroSection />
      <FeaturedProducts />
      <TestimonialsSection />
    </main>
  );
};

export default HomePage;
