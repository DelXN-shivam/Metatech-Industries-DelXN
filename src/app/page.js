import React from "react";
import Header from "./components/Header.jsx";
import HeroSection from "./components/HeroSection";
import ExpertiseSection from "./components/ExpertiseSection";
import OurServicesSection from "./components/OurServicesSection";
import WhatSetsSection from "./components/WhatSetsSection";
import Footer from "./components/Footer";
import QueryAndMap from "./components/QueryAndMap";

export const metadata = {
  title: "Metatech Industries",
  description: "Metatech Industries is a leading provider of advanced technology solutions, specializing in software development, IT consulting, and digital transformation services.",
  keywords: "technology, software development, IT consulting, digital transformation, Metatech Industries",
  openGraph: {
    title: "Metatech Industries",
    description: "Metatech Industries is a leading provider of advanced technology solutions, specializing in software development, IT consulting, and digital transformation services.",
    url: "https://metatechindustries.com",
    images: [
      {
        url: "/images/metatech_logo.png",
        width: 800,
        height: 600,
        alt: "Metatech Industries Logo",
      },
    ],
  },
};

const Home = () => {
  return (
    <div className="font-sans bg-gray-50 text-gray-900">
      {/* <CompanyHeader /> */}
      <Header />

      {/* Hero Section */}
      <HeroSection />

      {/* Expertise Section */}
      <ExpertiseSection />

      {/* What Sets Us Apart Section */}
      <WhatSetsSection />

      {/* Services Section */}
      <OurServicesSection />

      {/* Contact Form Section */}
      <QueryAndMap />

      {/* About Us Section + Footer*/}
      <Footer />
    </div>
  );
};

export default Home;
