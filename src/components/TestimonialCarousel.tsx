'use client'
import React from "react";

interface Testimonial {
  quote: string;
  author: string;
}

interface TestimonialCarouselProps {
  testimonials: Testimonial[];
}

const TestimonialCarousel: React.FC<TestimonialCarouselProps> = ({ testimonials }) => {
  const [activeIndex, setActiveIndex] = React.useState(0);

  const nextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1));
  };

  const prevSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1));
  };

  return (
    <div className="relative">
      <div className="absolute inset-y-0 left-0 flex items-center">
        <button onClick={prevSlide} className="text-gray-600 hover:text-gray-900 focus:outline-none">
          <svg className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6"></polyline>
          </svg>
        </button>
      </div>
      <div className="absolute inset-y-0 right-0 flex items-center">
        <button onClick={nextSlide} className="text-gray-600 hover:text-gray-900 focus:outline-none">
          <svg className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        </button>
      </div>
      <div className="mx-auto max-w-2xl">
        <div className="flex justify-center items-center">
          <div className="text-center">
            <p className="text-xl text-gray-700">{testimonials[activeIndex].quote}</p>
            <p className="text-gray-600">{testimonials[activeIndex].author}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCarousel;
