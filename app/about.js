"use client";

import {
  ArrowRight,
  Users,
  Target,
  Zap,
  Globe,
  Code,
  Rocket,
  Shield,
  Brain,
  Sparkles,
  CheckCircle,
  TrendingUp,
} from "lucide-react";
import { useState, useEffect } from "react";

export default function AboutPage() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeCard, setActiveCard] = useState(0);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setActiveCard((prev) => (prev + 1) % 4);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const stats = [
    { label: "Projects Delivered", value: "500+", icon: Rocket },
    { label: "Global Clients", value: "200+", icon: Globe },
    { label: "Team Members", value: "50+", icon: Users },
    { label: "Years Experience", value: "8+", icon: TrendingUp },
  ];

  const values = [
    {
      icon: Brain,
      title: "Innovation First",
      description:
        "We leverage cutting-edge AI and machine learning to create solutions that push boundaries and redefine possibilities.",
    },
    {
      icon: Shield,
      title: "Security & Trust",
      description:
        "Every solution is built with enterprise-grade security and reliability at its core, ensuring your data stays protected.",
    },
    {
      icon: Zap,
      title: "Performance Driven",
      description:
        "Our optimized architectures deliver lightning-fast performance and seamless user experiences at scale.",
    },
    {
      icon: Target,
      title: "Results Focused",
      description:
        "We measure success by your success, delivering measurable outcomes that drive real business growth.",
    },
  ];

  const technologies = [
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "Python",
    "AWS",
    "Docker",
    "Kubernetes",
    "GraphQL",
    "PostgreSQL",
    "Redis",
    "TensorFlow",
  ];

  const team = [
    {
      name: "Sarah Chen",
      role: "CEO & Founder",
      image: "/placeholder.svg?height=400&width=400",
    },
    {
      name: "Marcus Rodriguez",
      role: "CTO",
      image: "/placeholder.svg?height=400&width=400",
    },
    {
      name: "Emily Johnson",
      role: "Head of Design",
      image: "/placeholder.svg?height=400&width=400",
    },
    {
      name: "David Kim",
      role: "Lead Engineer",
      image: "/placeholder.svg?height=400&width=400",
    },
  ];

  const features = [
    "AI-Powered Solutions",
    "Scalable Architecture",
    "Real-time Analytics",
    "Enterprise Security",
    "24/7 Support",
    "Global Infrastructure",
  ];

  // Generate floating dots
  //   const floatingDots = Array.from({ length: 15 }, (_, i) => ({
  //     id: i,
  //     left: Math.random() * 100,
  //     top: Math.random() * 100,
  //     delay: Math.random() * 5,
  //     duration: 8 + Math.random() * 4,
  //   }))

  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      {/* Floating Green Dots Background */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div />
      </div>
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-4xl mx-auto">
            <div
              className={`transition-all duration-1000 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gray-100 text-gray-700 mb-6">
                <Sparkles className="w-4 h-4 mr-2" />
                About TechNova
              </div>

              <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
                Building the future of
                <span className="block text-gray-600">digital innovation</span>
              </h1>

              <p className="text-xl text-gray-600 mb-12 leading-relaxed max-w-3xl mx-auto">
                We're a team of passionate engineers, designers, and strategists
                dedicated to creating software solutions that transform
                businesses and improve lives.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="inline-flex items-center px-6 py-3 text-lg font-medium rounded-md bg-gray-900 hover:bg-gray-800 text-white transition-colors">
                  Our Services
                  <ArrowRight className="ml-2 w-5 h-5" />
                </button>
                <button className="inline-flex items-center px-6 py-3 text-lg font-medium rounded-md border border-gray-300 text-gray-700 hover:bg-gray-50 transition-colors">
                  Contact Us
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-50 relative z-10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-gray-900 rounded-lg mb-4">
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gray-100 text-gray-700 mb-6">
                <Target className="w-4 h-4 mr-2" />
                Our Mission
              </div>

              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Empowering businesses through technology
              </h2>

              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                We believe that great software should be intuitive, powerful,
                and accessible. Our mission is to bridge the gap between complex
                technology and real-world business needs, creating solutions
                that drive meaningful results.
              </p>

              <div className="space-y-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-gray-900 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="bg-white border border-gray-200 shadow-lg rounded-lg p-8">
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gray-900 rounded-lg flex items-center justify-center">
                      <Brain className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900">
                        AI Integration
                      </h3>
                      <p className="text-gray-600">Advanced machine learning</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700">Performance</span>
                      <span className="text-gray-900 font-semibold">99.9%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-gray-900 h-2 rounded-full w-[99.9%]" />
                    </div>

                    <div className="flex justify-between items-center">
                      <span className="text-gray-700">Reliability</span>
                      <span className="text-gray-900 font-semibold">99.5%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-gray-900 h-2 rounded-full w-[99.5%]" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section with Auto-Shuffling Cards */}
      <section className="py-20 bg-gray-50 px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="flex flex-col justify-center">
              <div className="inline-flex items-center px-3 w-32 py-1 rounded-full text-sm font-medium bg-white text-gray-700 border border-gray-200 mb-6">
                <Zap className="w-4 h-4 mr-2" />
                Our Values
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                What drives us forward
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our core values shape every decision we make and every solution
                we build. These principles guide our team and define our
                approach to innovation.
              </p>
            </div>

            <div className="flex flex-col items-center">
              <div className="relative h-[350px] w-full max-w-lg mb-8">
                {values.map((value, index) => {
                  const isActive = activeCard === index;
                  const next1 = (activeCard + 1) % 4;
                  const next2 = (activeCard + 2) % 4;
                  const next3 = (activeCard + 3) % 4;

                  let styleClass = "";

                  if (isActive) {
                    styleClass =
                      "z-40 transform translate-y-0 scale-100 opacity-100 -rotate-7";
                  } else if (index === next1) {
                    styleClass =
                      "z-30 transform translate-y-2 scale-95 opacity-90 rotate-10";
                  } else if (index === next2) {
                    styleClass =
                      "z-20 transform translate-y-4 scale-90 opacity-70 rotate-18";
                  } else if (index === next3) {
                    styleClass =
                      "z-10 transform translate-y-6 scale-85 opacity-50 -rotate-10";
                  }

                  return (
                    <div
                      key={index}
                      className={`absolute bg-white border border-gray-200 rounded-lg transition-all duration-700 ease-in-out shadow-lg w-full h-[280px] ${styleClass}`}
                    >
                      <div className="p-6 h-full flex flex-col justify-center items-center text-center">
                        <div className="w-12 h-12 bg-gray-900 rounded-lg flex items-center justify-center mb-4">
                          <value.icon className="w-6 h-6 text-white" />
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-3">
                          {value.title}
                        </h3>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          {value.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Dots Navigation */}
              <div className="flex space-x-3">
                {values.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveCard(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      activeCard === index
                        ? "bg-gray-900 scale-125"
                        : "bg-gray-400 hover:bg-gray-600"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-20 px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gray-100 text-gray-700 mb-6">
              <Code className="w-4 h-4 mr-2" />
              Technology Stack
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Built with modern tools
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We use the latest technologies to ensure scalability, performance,
              and maintainability
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {technologies.map((tech, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-lg p-4 text-center hover:shadow-md transition-shadow duration-300"
              >
                <div className="text-sm font-medium text-gray-900">{tech}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      {/* <section className="py-20 bg-gray-50 px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-white text-gray-700 border border-gray-200 mb-6">
              <Users className="w-4 h-4 mr-2" />
              Our Team
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Meet the innovators
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our diverse team brings together expertise from various fields to
              deliver exceptional results
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-lg hover:shadow-lg transition-shadow duration-300"
              >
                <div className="p-6 text-center">
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="w-24 h-24 rounded-full mx-auto mb-4 object-cover border-2 border-gray-200"
                  />
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">
                    {member.name}
                  </h3>
                  <p className="text-gray-600">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) translateX(0px);
            opacity: 0.3;
          }
          25% {
            transform: translateY(-20px) translateX(10px);
            opacity: 0.6;
          }
          50% {
            transform: translateY(-10px) translateX(-5px);
            opacity: 0.4;
          }
          75% {
            transform: translateY(-30px) translateX(15px);
            opacity: 0.5;
          }
        }
      `}</style>
    </div>
  );
}
