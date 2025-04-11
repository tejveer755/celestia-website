"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import logo from "../../public/logo1.png";
import iitmLogo from '../../public/iitmlogo.png'

function Navbar() {
  return (
    <>
      <div className={`w-screen flex items-center justify-between px-6 py-2 bg-black`}>
        <Image src={logo} width={120} height={120} alt="logo" className="z-[100]" />
        <Image  src={iitmLogo} width={120} height={120} alt="logo" className="z-[100]" />
      </div>

    </>
  );
}

export default Navbar;
