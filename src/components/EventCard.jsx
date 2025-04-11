"use client";
import Image from "next/image";
import { useTransform, motion } from "framer-motion";
import { useRef } from "react";
import { HoverBorderGradient } from "../components/ui/hover-border-gradient";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const EventCard = ({
    i,
    title,
    description,
    detailsLink,
    backgroundImage,
    graphic,
    progress,
    range,
    targetScale,
}) => {
    const container = useRef(null);
    const scale = useTransform(progress, range, [1, targetScale]);

    return (
        <div className="h-screen flex items-center justify-center sticky top-0">
            <motion.div
                style={{ scale, top: `calc(-5vh + ${i * 25}px)` }}
                className="relative z-50 flex flex-col w-[95%] sm:w-[90%] md:w-[85%] lg:w-[1200px] h-[500px] sm:h-[550px] md:h-[600px] rounded-2xl p-4 sm:p-6 md:p-10 shadow-lg transform-origin-top"
            >
                {/* Title */}
                <h2 className="text-center capitalize z-10 text-2xl sm:text-3xl md:text-4xl font-logo text-sky-50 font-bold">
                    {title}
                </h2>
                
                <div className="w-full mx-auto mt-2 md:mt-3 max-w-[30rem] h-20 sm:h-30 md:h-40 relative bg-transparent px-2 sm:px-4">
                    <div className="absolute z-50 inset-x-4 sm:inset-x-10 top-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent h-[4px] sm:h-[6px] w-[100%] blur-md" />
                    <div className="absolute z-50 inset-x-4 sm:inset-x-10 top-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent h-[2px] sm:h-[4px] w-[85%]" />
                    <div className="absolute z-50 inset-x-20 sm:inset-x-40 top-0 bg-gradient-to-r from-transparent via-sky-300 to-transparent h-[4px] sm:h-[6px] w-[40%] blur-md" />
                    <div className="absolute z-50 inset-x-20 sm:inset-x-40 top-0 bg-gradient-to-r from-transparent via-sky-300 to-transparent h-[2px] sm:h-[4px] w-[40%]" />

                    <div className="absolute inset-0 w-full h-full bg-stone-950 [mask-image:radial-gradient(250px_100px_at_top,transparent_30%,white)] sm:[mask-image:radial-gradient(350px_150px_at_top,transparent_30%,white)] md:[mask-image:radial-gradient(450px_200px_at_top,transparent_30%,white)]"></div>
                </div>
                
                <div
                    className="absolute border-1 border-white rounded-2xl inset-0 bg-no-repeat bg-cover opacity-100"
                    style={{ backgroundImage: `url(${backgroundImage})` }}
                ></div>
                
                {/* Card Body */}
                <div className="flex flex-col md:flex-row justify-between h-full mt-4 sm:mt-6 md:mt-8 gap-4 sm:gap-8 md:gap-12">
                    {/* Description Section */}
                    <div className="w-full md:w-[50%] relative top-[5%] sm:top-[8%] md:top-[10%]">
                        <div className="text-sm sm:text-base md:text-lg text-white leading-tight sm:leading-normal p-3 sm:p-4 md:p-6 rounded-lg border-2 shadow-md border-blue-900/100 bg-black/40 backdrop-blur-sm max-h-[250px] md:max-h-none overflow-y-auto">
                            {description}
                        </div>

                        <span className="mt-2 sm:mt-3 md:mt-4 py-2 md:py-3 flex items-center space-x-2 text-white font-semibold">
                            <Link href={detailsLink}>
                                <HoverBorderGradient
                                    containerClassName="rounded-full border-0 border-b-1 border-zinc-50/20 hover:scale-105 transition-all px-1 py-2 md:py-3 ease-in-out cursor-pointer"
                                    as="button"
                                    className="bg-black text-white flex items-center space-x-2"
                                >
                                    <span className="text-sm sm:text-base">View details</span>
                                    <ArrowRight size={14} className="sm:w-4 sm:h-4 md:w-5 md:h-5" />
                                </HoverBorderGradient>
                            </Link>
                        </span>
                    </div>

                    {/* Image Section */}
                    <div className="relative w-full md:w-[50%] h-[40%] md:h-full rounded-2xl overflow-hidden mt-2 md:mt-0">
                        <motion.div className="w-[90%] h-[90%] md:h-[80%] mx-auto rounded-2xl bg-transparent">
                            <Image
                                src={graphic}
                                alt="image"
                                width={200}
                                height={200}
                                className="object-contain sm:object-cover w-full h-full"
                                priority
                            />
                        </motion.div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default EventCard;