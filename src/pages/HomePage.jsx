import { useEffect, useState, useMemo } from "react";
import { products } from "../data/products";
import { ProductCard } from "../components/ProductCard";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";

export const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // ✅ Memoized hero slides
  const heroSlides = useMemo(() => [
    { img: "/banner/hero-2.png", link: "/category/genz" },
    { img: "/banner/hero-1.png", link: "/category/women" },
    { img: "/banner/hero-4.png", link: "/category/men" },
    { img: "/banner/hero-5.png", link: "/category/men" },
  ], []);

  // ✅ Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) =>
        prev === heroSlides.length - 1 ? 0 : prev + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [heroSlides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) =>
      prev === heroSlides.length - 1 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prev) =>
      prev === 0 ? heroSlides.length - 1 : prev - 1
    );
  };

  // ✅ Memoized product sections
  const trending = useMemo(() => products.slice(0, 10), []);
  const newArrivals = useMemo(() => products.slice(10, 20), []);

 return (
  <div className="w-full overflow-hidden font-[Poppins]">

    {/* ================= HERO ================= */}
    <section className="relative w-full h-[220px] sm:h-[300px] md:h-[420px] lg:h-[520px] overflow-hidden mt-2 sm:mt-4">

      <Link to={heroSlides[currentSlide].link}>
        <img
          src={heroSlides[currentSlide].img}
          alt="banner"
          className="absolute inset-0 w-full h-full object-cover"
        />
      </Link>

      {/* Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 bg-white/40 p-1.5 sm:p-2 rounded-full text-black hover:bg-white transition"
      >
        <ChevronLeft size={20} />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 bg-white/40 p-1.5 sm:p-2 rounded-full text-black hover:bg-white transition"
      >
        <ChevronRight size={20} />
      </button>

      {/* Dots */}
      <div className="absolute bottom-3 sm:bottom-5 left-1/2 -translate-x-1/2 flex gap-2 sm:gap-3">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              currentSlide === index
                ? "w-6 bg-white"
                : "w-2 bg-white/60"
            }`}
          />
        ))}
      </div>

    </section>

    {/* ================= TRENDING ================= */}
    <section className="max-w-[1600px] mx-auto px-4 sm:px-6 md:px-10 py-10 sm:py-14 lg:py-16">
      <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-['Playfair_Display'] tracking-wider text-center mb-8 sm:mb-12 text-gray-900">
        TRENDING NOW
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-6 lg:gap-8">
        {trending.map((product) => (
          <div
            key={product.id}
            className="transform hover:-translate-y-2 transition duration-300"
          >
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </section>

    {/* ================= NEW ARRIVALS ================= */}
    <section className="max-w-[1600px] mx-auto px-4 sm:px-6 md:px-10 py-10 sm:py-14 lg:py-16">
      <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-['Playfair_Display'] tracking-wider text-center mb-8 sm:mb-12 text-gray-900">
        NEW ARRIVALS
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-6 lg:gap-8">
        {newArrivals.map((product) => (
          <div
            key={product.id}
            className="transform hover:-translate-y-2 transition duration-300"
          >
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </section>

  </div>
);
};