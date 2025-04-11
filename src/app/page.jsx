'use client';
import EventCard from '../components/EventCard';
import { SparklesCore } from '../components/ui/sparkles';
import { WavyBackground } from '../components/ui/wavy-background';
import { useScroll } from 'framer-motion';
import Lenis from 'lenis';
import Image from 'next/image';
import { useRef, useEffect } from 'react';
import celetiaLogo from "../../public/celestiaLogo.png"
import content from '../../data/content';
import { HoverBorderGradient } from '../components/ui/hover-border-gradient';
import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end']
  })

  useEffect(() => {
    const lenis = new Lenis()

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
  })

  const { events, registrationLink } = content.upcommingEvents.celestia;
  return (
    <>
      <main ref={container} className={"relative bg-[#0c0a09] pb-32"}>

        <WavyBackground blur={7} className={'z-40 '} colors={["#004aad", "#38bdf8", "#ccfaff"]} waveOpacity={0.1} waveWidth={70} speed='fast' backgroundFill={"#0c0a09"} >
          <div className='w-screen h-screen flex py-14 flex-col relative '>
            <h1 className={`uppercase tracking-wider text-2xl font-logo  md:text-3xl lg:text-4xl font-bold text-center text-white  `}>
              Nex<span className="text-cyan-200">verse</span>{" "} IITM
            </h1>
            <div className='my-1 '>
              <h3 className='text-zinc-50 text-center text-sm'>In collaboration with </h3>
              <h3 className='text-zinc-50 text-center text-md font-medium'>Department of Computer Science</h3>
              <h3 className='text-zinc-50 text-center text-sm font-medium'>Presents</h3>
            </div>
            <Image src={celetiaLogo} width={980} height={100} className='mx-auto !h-[260px] object-cover object' alt='celestia logo' />

          </div>
        </WavyBackground>


        <div className='w-full absolute inset-0 h-[200vh] '>
          <SparklesCore
            background={'transparent'}
            minSize={0.6}
            maxSize={1.2}
            particleDensity={50}
            className="w-full h-full"
            particleColor="#FFFFFF" />
        </div>

        <div className="relative bg-gradient-to-t from-stone-950/20 to-black/40 -mt-14 py-16 w-full overflow-hidden flex items-center justify-center p-4 pt-0">

          <div className={`relative z-10 max-w-6xl mx-auto p-8 pt-0`}>

            <h2 className="text-[2.6rem] text-center font-bold text-sky-200 mb-6">
              Explore The Cosmic Convergence of Talent
            </h2>

            <p className="text-gray-300 text-center text-xl my-4 ">
              Celestia 1.0 is the flagship inter-college fest organized by NexVerse, where the boundaries of innovation and creativity expand into the cosmos. This stellar gathering brings together brilliant minds from across campuses to compete in a series of challenging events designed to test the limits of your skills and imagination.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 items-center justify-center gap-6 mt-16">
              <div className="p-4 rounded-lg border-2 flex flex-col items-center justify-between border-white">
                <h3 className="text-cyan-200 font-medium mb-2 flex items-center">
                  <div className="w-2 h-2 bg-cyan-200 rounded-full mr-2"></div>
                  Our Vision
                </h3>
                <p className="text-gray-300 text-sm">
                  To create a cosmic playground where technology meets creativity, fostering innovation through healthy competition and collaboration.
                </p>
              </div>
              <div className="p-4 rounded-lg border-2 flex flex-col items-center justify-between border-white ">
                <h3 className="text-cyan-200 font-medium mb-2 flex items-center">
                  <div className="w-2 h-2 bg-cyan-200 rounded-full mr-2"></div>
                  The Experience
                </h3>
                <p className="text-gray-300 text-sm">
                  More than just a competition — it's an interstellar journey to learn, connect, and grow through teamwork and innovation across the universe of ideas.
                </p>
              </div>
            </div>
          </div>

        </div>

        <div>
          {
            events.map((event, i) => {
              const targetScale = 1 - ((events.length - i) * 0.05);
              return <EventCard key={`p_${i}`} i={i} {...event} progress={scrollYProgress} range={[i * .25, 1]} targetScale={targetScale} />
            })
          }
        </div>

        <div className='flex flex-col items-center mt-4 sm:mt-6 md:mt-8 justify-center gap-4 sm:gap-8 md:gap-16'>
          <div className='flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 md:gap-16'>
            <h1 className='text-lg sm:text-xl md:text-2xl font-logo text-white stroke-1 sm:stroke-2 stroke-cyan-600 tracking-wider sm:tracking-widest font-bold text-center my-2 sm:my-3 drop-shadow-[0_0_5px_rgba(135,206,250,0.8)] sm:drop-shadow-[0_0_10px_rgba(135,206,250,0.8)]'>
              Date: 17 April 2025
            </h1>
            <h1 className='text-lg sm:text-xl md:text-2xl font-logo text-white stroke-1 sm:stroke-2 stroke-cyan-600 tracking-wider sm:tracking-widest font-bold text-center my-2 sm:my-3 drop-shadow-[0_0_5px_rgba(135,206,250,0.8)] sm:drop-shadow-[0_0_10px_rgba(135,206,250,0.8)]'>
              📍 Venue: IITM Janakpuri
            </h1>
          </div>
          <div className='w-fit mt-4 sm:mt-8 md:mt-11 mx-auto'>
            <Link href={registrationLink}>
              <HoverBorderGradient
                containerClassName="rounded-full py-2 sm:py-3 px-5 sm:px-8 border-1 border-zinc-50/20 hover:scale-105 transition-all ease-in-out cursor-pointer"
                as="button"
                clockwise={false}
                duration={.8}
                className="bg-black text-base sm:text-lg md:text-xl font-semibold text-white flex items-center space-x-2"
              >
                <span>Register Now</span>
                <ArrowUpRight size={14} className="sm:w-4 sm:h-4 md:w-5 md:h-5" />
              </HoverBorderGradient>
            </Link>
          </div>
        </div>
      </main>
    </>
  )
}