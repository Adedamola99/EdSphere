import React from "react";
import FeatureCard from "@/components/Card";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import CourseSection from "@/components/Course";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import data from "@/utils/data";

const { featureCards, testimonials, courses } = data;

const Home = () => {
  return (
    <div>
      <Header />
      <main>
        <section className="bg-gradient-to-r from-blue-600 to-blue-400 text-white py-24 px-8">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">Unlock Your Potential with AI-Powered Learning</h1>
            <p className="text-lg lg:text-xl mb-8">Personalized learning paths tailored just for you</p>
            <button className="bg-white text-blue-600 py-3 px-8 rounded-full font-bold text-lg hover:bg-blue-200 hover:text-blue-800">Start Learning</button>
          </div>
        </section>

        <section className="bg-gray-100 py-16">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8">Why Choose Edsphere App?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {featureCards.map((card, index) => (
                <FeatureCard key={index} icon={card.icon} title={card.title} description={card.description} />
              ))}
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8">How It Works</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center">
                <div className="rounded-full bg-blue-500 text-white h-16 w-16 flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold">1</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">Sign Up</h3>
                <p className="text-gray-600">Create an account to get started.</p>
              </div>
              
              <div className="flex flex-col items-center">
                <div className="rounded-full bg-blue-500 text-white h-16 w-16 flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold">2</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">Explore Courses</h3>
                <p className="text-gray-600">Browse through our diverse range of courses.</p>
              </div>
              
              <div className="flex flex-col items-center">
                <div className="rounded-full bg-blue-500 text-white h-16 w-16 flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold">3</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">Enroll in Courses</h3>
                <p className="text-gray-600">Enroll in your favorite courses with a simple click.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-gray-100 py-16">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8">Popular Courses</h2>
            <CourseSection courses={courses} />
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8">What Our Users Say</h2>
            <TestimonialCarousel testimonials={testimonials} />
          </div>
        </section>

        <section className="bg-gradient-to-r from-blue-600 to-blue-400 text-white py-16 px-8">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Join Our Community Today</h2>
            <p className="text-lg lg:text-xl mb-8">Start your journey towards smarter learning now!</p>
            <button className="bg-white text-blue-600 py-3 px-8 rounded-full font-bold text-lg hover:bg-blue-200 hover:text-blue-800">Sign Up Now</button>
          </div>
        </section>
      </main>

      <footer className="bg-gray-900 text-white text-center py-8">
        <div className="container mx-auto">
          <Footer />
        </div>
      </footer>
    </div>
  );
};

export default Home;
