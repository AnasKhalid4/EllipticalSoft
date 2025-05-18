"use client";
import { IoIosArrowRoundForward } from "react-icons/io";
import CardItem from "@/components/servicesCard";

import { useEffect, useRef, useState } from "react";
import AI from "../assets/AI.avif";
import App from "../assets/App.avif";
import crypto from "../assets/crypto.avif";
import Devops from "../assets/Devops.avif";
import web from "../assets/web.avif";
import cloud from "../assets/cloud.avif";
import { motion } from "framer-motion";

export default function ServicesSection() {
  const cardsRef = useRef(null);
  const [scrollY, setScrollY] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Check if the device is mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Check on initial load
    checkMobile();

    // Add event listener for resize
    window.addEventListener("resize", checkMobile);

    // Cleanup event listener
    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  // Handle intersection observer for fade-in effect (not on mobile)
  useEffect(() => {
    if (isMobile) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      { threshold: 0.1 }
    );

    const cards = document.querySelectorAll(".card-animate");
    cards.forEach((card) => {
      observer.observe(card);
    });

    return () => {
      cards.forEach((card) => {
        observer.unobserve(card);
      });
    };
  }, [isMobile]);

  // Add scroll event listener for alternating column effect (not on mobile)
  useEffect(() => {
    if (isMobile) return;

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isMobile]);

  // Calculate dynamic offset for each column based on scroll position
  // Returns empty style object for mobile devices
  const getScrollOffsetStyle = (columnIndex) => {
    if (isMobile) return {};

    // Base multiplier for scroll effect intensity
    const baseMultiplier = 0.1;

    // Create alternating directions for columns
    const columnMultipliers = [1, -1, 1];
    const offset = scrollY * baseMultiplier * columnMultipliers[columnIndex];

    return {
      transform: `translateY(${offset}px)`,
    };
  };

  return (
    <section className="relative w-full overflow-hidden py-10 md:py-20">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-white opacity-80" />

      {/* Animated background elements - hide on mobile */}
      {!isMobile && (
        <>
          <div className="absolute top-20 left-20 w-64 h-64 bg-white rounded-full mix-blend-multiply opacity-20 animate-blob"></div>
          <div className="absolute top-40 right-20 w-72 h-72 bg-white rounded-full mix-blend-multiply opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-20 left-1/2 w-80 h-80 bg-white rounded-full mix-blend-multiply opacity-20 animate-blob animation-delay-4000"></div>
        </>
      )}

      <div className="container relative mx-auto px-4 md:px-6">
        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left column - Text content */}
          <motion.div
            className="lg:col-span-5 mb-8 lg:mb-0 mx-1 md:mx-0"
            initial={isMobile ? { opacity: 1 } : { opacity: 0, x: -20 }}
            animate={isMobile ? { opacity: 1 } : { opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-[#191919] font-outfit tracking-wide mb-3">
              FEATURED INSIGHTS
            </h3>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-outfit font-bold text-[#8d8d8d] mb-4">
              We Don't Just Offer{" "}
              <span className="text-[#191919] font-outfit">
                Services We Deliver Success
              </span>
            </h2>
            <p className="text-lg md:text-xl text-[#8d8d8d] mb-6 font-outfit">
              Get a glimpse of our impact-driven services.{" "}
            </p>

            <button className="rounded-full cursor-pointer font-outfit bg-white border border-[#191919] text-[#191919] px-4 py-2 flex items-center gap-2 transition-colors duration-300 hover:bg-black hover:text-white">
              <span>Explore More</span>
              <IoIosArrowRoundForward className="h-7 w-7" />
            </button>
          </motion.div>

          {/* Right column - Cards */}
          <div ref={cardsRef} className="lg:col-span-7">
            {/* On mobile: single column grid */}
            {isMobile ? (
              <div className="grid grid-cols-1 gap-4">
                {/* All cards in a single column for mobile */}
                <CardItem
                  image={AI.src}
                  type="Case Study"
                  title="Enabling Seamless Resale Operations Across E-Commerce"
                  isMobile={isMobile}
                  delay={0.1}
                />
                <CardItem
                  image={cloud.src}
                  type="Blogs"
                  title="How Cloud Computing Can Transform Small Businesses"
                  isMobile={isMobile}
                  delay={0.2}
                />
                <CardItem
                  image={web.src}
                  type="Blogs"
                  title="Custom Web Application Development: Everything You Need to Know"
                  isMobile={isMobile}
                  delay={0.3}
                />
                <CardItem
                  image={App.src}
                  type="Case Study"
                  title="Empowering XQUIC for Automated Financial Accuracy"
                  isMobile={isMobile}
                  delay={0.4}
                />
                <CardItem
                  image={Devops.src}
                  type="Blogs"
                  title="Trends of Mobile Design: What's Next for Your Business?"
                  isMobile={isMobile}
                  delay={0.5}
                />
                <CardItem
                  image={AI.src}
                  type="Case Study"
                  title="KUDO's Journey to Bridging Global Communications"
                  isMobile={isMobile}
                  delay={0.6}
                />
                <CardItem
                  image={crypto.src}
                  type="Case Study"
                  title="Automating Financial Insights for Smarter Business Decisions"
                  isMobile={isMobile}
                  delay={0.7}
                />
              </div>
            ) : (
              // Desktop layout with three columns
              <div className="grid grid-cols-12 gap-4 md:h-[500px] items-center">
                {/* First column/section - 2 cards, vertically centered */}
                <div
                  className="col-span-12 md:col-span-4 flex flex-col gap-4 justify-center transition-transform duration-700 ease-out"
                  style={getScrollOffsetStyle(0)}
                >
                  <CardItem
                    image={AI.src}
                    type="Case Study"
                    title="Enabling Seamless Resale Operations Across E-Commerce"
                    isMobile={isMobile}
                    delay={0.1}
                  />
                  <CardItem
                    image={cloud.src}
                    type="Blogs"
                    title="How Cloud Computing Can Transform Small Businesses"
                    isMobile={isMobile}
                    delay={0.4}
                  />
                </div>

                {/* Second column/section - 3 cards */}
                <div
                  className="col-span-12 md:col-span-4 flex flex-col gap-4 transition-transform duration-700 ease-out"
                  style={getScrollOffsetStyle(1)}
                >
                  <CardItem
                    image={web.src}
                    type="Blogs"
                    title="Custom Web Application Development: Everything You Need to Know"
                    isMobile={isMobile}
                    delay={0.2}
                  />
                  <CardItem
                    image={App.src}
                    type="Case Study"
                    title="Empowering XQUIC for Automated Financial Accuracy"
                    isMobile={isMobile}
                    delay={0.3}
                  />
                  <CardItem
                    image={Devops.src}
                    type="Blogs"
                    title="Trends of Mobile Design: What's Next for Your Business?"
                    isMobile={isMobile}
                    delay={0.5}
                  />
                </div>

                {/* Third column/section - 2 cards, vertically centered */}
                <div
                  className="col-span-12 md:col-span-4 flex flex-col gap-4 justify-center transition-transform duration-700 ease-out"
                  style={getScrollOffsetStyle(2)}
                >
                  <CardItem
                    image={AI.src}
                    type="Case Study"
                    title="KUDO's Journey to Bridging Global Communications"
                    isMobile={isMobile}
                    delay={0.6}
                  />
                  <CardItem
                    image={crypto.src}
                    type="Case Study"
                    title="Automating Financial Insights for Smarter Business Decisions"
                    isMobile={isMobile}
                    delay={0.7}
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
