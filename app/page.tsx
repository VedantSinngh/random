"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import NetflixLoader from "@/components/NetflixLoader";

// Define shared styles for buttons and tags for consistency
const buttonBase = "h-[48px] px-8 rounded-full text-base font-semibold transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-black flex items-center justify-center";
const buttonPrimary = `${buttonBase} bg-lime-400 text-black active:bg-lime-600 hover:scale-105 hover:shadow-2xl hover:shadow-lime-500/70 hover:brightness-110`;
const buttonSecondary = `${buttonBase} border-2 border-white text-white bg-transparent active:bg-white/20 hover:bg-white hover:text-black`;
const tagPill = "h-[48px] px-8 border-2 border-white text-white bg-white/10 text-base font-semibold rounded-full flex items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-black hover:bg-red-600 hover:border-red-600 hover:text-white transition-all duration-300";

export default function Home() {
    const [loading, setLoading] = useState(true);

    return (
        <>
            {loading && <NetflixLoader onComplete={() => setLoading(false)} />}

            {!loading && (
                <div className="relative min-h-screen overflow-hidden font-sans">
                    <div className="absolute inset-0 -z-10 bg-[url('/bg.svg')] bg-cover bg-center" style={{ filter: 'blur(1px) brightness(0.9)' }} />

                    {/* Header with Logo and About Button */}
                    <header className="absolute top-0 left-0 right-0 flex items-center justify-between p-4 lg:p-8 z-30">
                        {/* Logo - Top Left */}
                        <div className="flex items-center">
                            <Link href="/" className="transition-opacity hover:opacity-80">
                                <Image
                                    src="/htb.png"
                                    alt="Logo"
                                    width={60}
                                    height={20}
                                    className="object-contain"
                                    priority
                                />
                            </Link>
                        </div>

                        {/* Right Aligned Nav Items */}
                        <div className="flex items-center gap-4 md:gap-8">
                            {/* Hide on smaller screens for a cleaner look */}
                            <div className="hidden lg:flex items-center gap-4">
                                <span className="text-sm font-medium text-white/70">HTB Chennai</span>
                                <span className="text-sm font-medium text-white/50">|</span>
                                <span className="text-sm font-medium text-white/70">FLAGSHIP EVENT</span>
                            </div>
                            <div className="hidden lg:block h-4 w-px bg-white/50" />
                            <p className="text-lg md:text-xl font-bold">
                                <span className="text-red-500">WTF</span>
                                <span className="text-white"> Season 3</span>
                            </p>
                            <div className="hidden sm:block h-4 w-px bg-white/50" />
                            <Link
                                href="https://htbchennai.in"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group relative px-6 py-2 text-sm font-semibold text-red-500 border border-red-500 rounded-md transition-all duration-300 overflow-hidden hover:border-red-600"
                            >
                                <span className="relative z-10 transition-colors duration-300 group-hover:text-white">
                                    About Us
                                </span>
                                <div className="absolute inset-0 bg-red-600 scale-75 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-300 rounded-md" />
                            </Link>
                        </div>
                    </header>

                    {/* MAIN OVERLAY CONTAINER */}
                    <main className="relative z-20 flex min-h-screen w-full max-w-7xl mx-auto px-4 sm:px-8 pt-24 pb-16 lg:items-center lg:justify-center lg:py-8">
                        <div className="flex flex-col gap-12 lg:gap-24">
                            {/* Main Content Grid */}
                            <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-start">
                                {/* Left Side (takes 3 cols) */}
                                <div className="lg:col-span-3 flex flex-col">
                                    <div className="[text-shadow:2px_2px_8px_rgba(0,0,0,0.6)]">
                                        <h1 className="text-5xl md:text-6xl lg:text-8xl font-extrabold text-white leading-none tracking-tighter">WHERE THE FLAG</h1>
                                        <h2 className="mt-2 lg:mt-4 text-3xl md:text-4xl lg:text-5xl font-bold text-red-500">Hack The Box Chennai</h2>
                                    </div>
                                    <p className="mt-6 lg:mt-8 text-lg lg:text-xl text-gray-300 max-w-xl">One Heist. One Flag. Total Control.</p>
                                    <div className="mt-8 lg:mt-12 flex items-center gap-4 flex-wrap">
                                        <Link
                                            href="https://htbchennai.in/events"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={buttonPrimary}
                                        >
                                            Register
                                        </Link>
                                        <button className={buttonSecondary}>
                                            Join Event Group
                                        </button>
                                        <div className={tagPill}>
                                            Season 3
                                        </div>
                                    </div>
                                </div>

                                {/* Right Side (takes 2 cols) */}
                                <div className="lg:col-span-2 flex flex-col gap-8 self-start">
                                    <div className="flex flex-col gap-3">
                                        <h3 className="text-xl lg:text-2xl font-semibold text-white">Synopsis</h3>
                                        <p className="text-gray-300 text-base lg:text-lg leading-relaxed">
                                            An elite cybersecurity heist awaits in our CTF event. Participants will solve real-world security challenges across multiple domains, breaking into systems, uncovering vulnerabilities, and extracting hidden flags.
                                        </p>
                                    </div>
                                    <div className="h-[2px] w-full bg-white/50"></div>
                                    <div className="space-y-4 text-sm lg:text-base text-gray-300">
                                        <p><span className="font-semibold text-gray-100">Cast:</span> Only the sharpest minds will complete the mission.</p>
                                        <p><span className="font-semibold text-gray-100">Genre:</span> Cybersecurity, CTF, Ethical Hacking, Jeopardy</p>
                                        <p><span className="font-semibold text-gray-100">Venue:</span> Mini Hall 2, SRM</p>
                                        <p><span className="font-semibold text-gray-100">Date:</span> December 15th, 2025</p>
                                        <p><span className="font-semibold text-gray-100">Time:</span> 10:00 AM IST</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </main>
                </div>
            )}
        </>
    );
}