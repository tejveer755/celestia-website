'use client'
import Link from "next/link";
import content from "../../data/content";
import Image from "next/image";
import { AvatarCircles } from "./ui/AvatarCircles";

export default function Footer() {
    const { nexverseNameLogo, socialLinks, team } = content;

    return (
        <footer className={` text-white py-10 px-6 md:px-20 bg-stone-950 border-t-1 border-t-sky-50/10`}>
            <div className="max-w-7xl mx-auto flex flex-col gap-10 md:flex-row md:justify-between items-center">

                {/* Logo & Address */}
                <div className="flex flex-col gap-4 md:w-1/3">
                    <div className="flex items-center">
                        <Image src={nexverseNameLogo} alt="logo" width={350} height={270} />
                    </div>
                    <p className="text-sm text-gray-400 -mt-9 ml-3.5">
                        Institute of Information Technology & Management D-29, <br />
                        Institutional Area, Janakpuri, New Delhi-110058
                    </p>
                </div>

                {/* Team Section */}
                <div className="flex flex-col items-center  gap-3 md:w-1/3">
                    <AvatarCircles numPeople={16} avatarUrls={team} />
                    <Link href="#" className="text-gray-200 text-md">
                        Meet with our team
                    </Link>
                </div>

                {/* Links Section */}
                <div className="flex justify-end items-center flex-col  text-sm md:w-1/3">
                        <h4 className="font-semibold 
                        mb-2 ">Socials</h4>
                        <ul className="space-y-1  text-gray-300">
                            {socialLinks.map((item) => (
                                <li key={item.name}>
                                    <Link href={item.link} className="flex gap-2  items-center">
                                        {item.icon}
                                        <span>{item.name}</span>
                                    </Link>
                                </li>
                            ))}
                            <li>&nbsp;</li>
                        </ul>
                </div>
            </div>
        </footer>
    );
}
