import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Quote } from "lucide-react";

const heroSlides = [
  {
    image:
      "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    quote: "Your Journey Begins with the Right Ride",
    author: "Experience Luxury Redefined",
  },
  {
    image:
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D3D",
    quote: "Where Performance Meets Elegance",
    author: "Premium Selection Guaranteed",
  },
  {
    image:
      "https://images.unsplash.com/photo-1553440569-bcc63803a83d?q=80&w=2025&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    quote: "Drive Your Dreams into Reality",
    author: "Exceptional Value, Unmatched Quality",
  },
];

export function HeroSection() {
  return (
    <section className="relative h-[80vh] md:h-screen w-full">
      <Carousel
        className="h-full w-full"
        opts={{
          loop: true,
        }}
      >
        <CarouselContent className="h-full">
          {heroSlides.map((slide, index) => (
            <CarouselItem
              key={index}
              className="relative w-full h-[80vh] sm:h-screen "
            >
              <div className="absolute inset-0 bg-black/40 z-10" />
              <img
                src={slide.image}
                alt={`Hero slide ${index + 1}`}
                className="w-full h-full object-cover object-center"
              />

              <div className="absolute inset-0 z-20 flex items-end">
                <div className="container px-4 sm:px-6 lg:px-8 mb-20 ">
                  <div className="max-w-2xl text-white">
                    <Quote className="h-8 w-8 md:h-12 md:w-12 mb-4 md:mb-6 text-emerald-400" />
                    <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-2 md:mb-4">
                      {slide.quote}
                    </h1>
                    <p className="text-base md:text-xl lg:text-2xl">
                      {slide.author}
                    </p>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* Carousel Controls */}
        <div className="absolute bottom-4 md:bottom-8 left-1/2 -translate-x-1/2 z-30">
          <div className="flex gap-2 md:gap-4">
            <CarouselPrevious className="static -translate-y-0 bg-white/20 hover:bg-white/30 text-white border-none h-8 w-8 md:h-10 md:w-10" />
            <CarouselNext className="static -translate-y-0 bg-white/20 hover:bg-white/30 text-white border-none h-8 w-8 md:h-10 md:w-10" />
          </div>
        </div>
      </Carousel>
    </section>
  );
}
