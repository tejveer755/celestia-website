"use client";
import Image from "next/image";
import { Orbitron, Inter } from "next/font/google";
import content from "../../data/content";
import Link from "next/link";
import { HoverBorderGradient } from "../components/ui/hover-border-gradient";

const orbitron = Orbitron({ subsets: ["latin"], variable: "--font-orbitron" });
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

const ContentTitle = ({ title, className }) => (
  <div className="p-[1px] rounded-tr-xl skew-x-[-20deg]  bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 max-w-fit min-w-[180px]">
    <div className={`min-h-[60px] px-10 bg-gradient-to-r from-cyan-900/80 to-purple-900/80 rounded-tr-xl flex justify-center items-end font-orbitron text-2xl md:text-3xl uppercase skew-x-[0deg] ${className}`}>
      <h3 className="skew-x-[20deg] text-white  z-50">{title}</h3>
    </div>
  </div>
);


export default function Details({ id }) {
  const eventDetails = content.upcommingEvents.celestia.eventDetails[id];

  if (!eventDetails) {
    return <div className="text-center py-20 text-2xl">Event not found</div>;
  }

  return (
    <main className={`min-h-screen bg-gradient-to-b ${eventDetails.background.gradientFrom} ${eventDetails.background.gradientTo} text-white relative ${orbitron.variable} ${inter.variable}`}>
      <div
        className={`absolute inset-0 bg-no-repeat bg-cover ${eventDetails.background.overlayOpacity}`}
        style={{ backgroundImage: `url('${eventDetails.background.overlayImage}')` }}
      />

      <div className="container mx-auto px-4 py-8 max-w-6xl relative">
        {/* Header */}
        <div className="text-center relative z-10 backdrop-blur-lg mx-24">
          <div className="inline-block bg-black/30 px-4 py-2 rounded-md border border-cyan-400/30 mb-4">
            <h1 className="font-orbitron text-white text-xl md:text-2xl tracking-widest glowing-text">
              {eventDetails.tagline}
            </h1>
          </div>

          <h2 className={`font-logo text-3xl md:text-5xl lg:text-6xl ${eventDetails.colors.primary} tracking-wider glowing-text`}>
            {eventDetails.name}
          </h2>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-10 relative z-10">
          {/* Left Section */}
          <div className="lg:col-span-2">
            {/* Overview */}
            <ContentTitle title="EVENT OVERVIEW" className={`${eventDetails.colors.accent} `} />
            <div className={`bg-black/40 backdrop-blur-sm my-4 p-6 rounded-lg border ${eventDetails.colors.border}`}>
              <p className="text-sm md:text-base leading-relaxed tracking-wider whitespace-pre-line">
                {eventDetails.overview}
              </p>
            </div>

            {/* Rules */}
            <ContentTitle title="RULES & CONSTRAINTS" className={`${eventDetails.colors.accent} `} />
            <div className={`bg-black/40 backdrop-blur-sm my-4 p-6 rounded-lg border ${eventDetails.colors.border}`}>
              <ul className="space-y-6 text-sm md:text-base">
                {eventDetails.rules.map((rule, index) => (
                  <li key={index} className="flex items-start">
                    <span className={`${eventDetails.colors.primary} mr-3 mt-1`}>•</span>
                    <span>{rule}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Section */}
          <div className="lg:col-span-1 flex flex-col justify-between">
            <div className={`bg-black/30 backdrop-blur-sm rounded-lg ${eventDetails.colors.border} mb-6`}>
              <Image src={eventDetails.images.graphic} alt="Event Graphic" width={400} height={300} className="w-full h-auto" />
            </div>

            <div className="flex flex-col items-center mt-auto">
              <ContentTitle title={eventDetails.date} className={eventDetails.colors.accent} />
              <div className="bg-transparent p-2 pb-0 rounded-lg mb-3">
                <Image src={eventDetails.images.qr} alt="Registration QR Code" width={300} height={300} />
              </div>
              <Link href={eventDetails.registrationLink} target="_blank">
                <HoverBorderGradient
                  containerClassName="rounded-full border-1 border-zinc-50/20 hover:scale-105 transition-all ease-in-out cursor-pointer"
                  as="button"
                  duration={.8}
                  clockwise={false}
                  className="bg-transparent text-2xl text-white flex items-center space-x-2"
                >
                  <span> Register Now</span>
                </HoverBorderGradient>
              </Link>
            </div>
          </div>
        </div>

        {/* Footer Section */}
        <div className="w-full flex flex-col lg:flex-row items-start mt-10 justify-between gap-10">
          {/* Prizes */}
          <div>
            <ContentTitle title="Winner" className={`${eventDetails.colors.accent} `} />
            <ul className={`space-y-6 text-sm md:text-2xl p-3 py-1.5 my-4 rounded-lg border ${eventDetails.colors.border}`}>
              <li className="flex items-start text-center">
                <span className={`${eventDetails.colors.primary} mr-3 mt-1`}>•</span>
                <span><strong>{eventDetails.prize.winner}</strong></span>
              </li>
            </ul>

            <ContentTitle title="Runner up" className={`${eventDetails.colors.accent}`} />
            <ul className={`space-y-6 text-sm md:text-2xl p-3 py-1.5  my-4 rounded-lg border ${eventDetails.colors.border}`}>
              <li className="flex items-start text-center">
                <span className={`${eventDetails.colors.primary} mr-3 mt-1`}>•</span>
                <span><strong>{eventDetails.prize.runnerUp}</strong></span>
              </li>
            </ul>
          </div>

          {/* Coordinators */}
          <div className="flex-1 flex flex-col items-start lg:items-end gap-4">
            <ContentTitle title="Student Coordinators" className={`${eventDetails.colors.accent} md:text-2xl text-lg`} />
            <div className={`bg-transparent p-6 rounded-lg border ${eventDetails.colors.border}`}>
              <ul className="space-y-4 text-xl">
                {eventDetails.contacts.map((contact, index) => (
                  <li key={index} className="flex items-start">
                    <span className={`${eventDetails.colors.primary} mr-3 mt-1`}>•</span>
                    <span>{contact.name} - {contact.phone}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
