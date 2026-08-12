"use client";

import { motion } from "motion/react";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#090807] text-stone-100">
      {/* HERO */}
      <section className="relative min-h-screen overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/hero.png"
            alt="The True Kingdom"
            className="h-full w-full object-cover object-center"
          />

          <div className="absolute inset-0 bg-black/20" />

          <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-black/60 to-transparent" />

          <div className="absolute inset-x-0 bottom-0 h-[60%] bg-gradient-to-t from-[#090807] via-[#090807]/80 to-transparent" />
        </div>

        {/* NAV */}
        <nav className="relative z-20 mx-auto flex max-w-7xl items-center justify-between px-6 py-7 lg:px-10">
          <div className="font-serif text-xl tracking-wide">TRUE KINGDOMS</div>

          <div className="hidden items-center gap-10 md:flex">
            <Link
              href="/timeline"
              className="text-xs uppercase tracking-[0.25em] text-stone-300/80 hover:text-white"
            >
              History
            </Link>

            <Link
              href="/characters"
              className="text-xs uppercase tracking-[0.25em] text-stone-300/80 hover:text-white"
            >
              Characters
            </Link>

            <Link
              href="/weapons"
              className="text-xs uppercase tracking-[0.25em] text-stone-300/80 hover:text-white"
            >
              Weapons
            </Link>

            <Link
              href="/locations"
              className="text-xs uppercase tracking-[0.25em] text-stone-300/80 hover:text-white"
            >
              Locations
            </Link>
          </div>
        </nav>

        {/* HERO CONTENT */}
        <div className="relative z-10 mx-auto flex min-h-[calc(100vh-90px)] max-w-7xl items-end px-6 pb-28 lg:px-10">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-6 flex items-center gap-4"
            >
              <div className="h-px w-12 bg-amber-400/60" />

              <span className="text-[10px] font-semibold uppercase tracking-[0.45em] text-amber-400/80">
                Chronicles of a Forgotten Age
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9 }}
              className="font-serif text-6xl leading-[0.95] tracking-tight md:text-8xl lg:text-[7rem]"
            >
              TRUE
              <br />
              KINGDOMS
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mt-7 max-w-xl text-sm leading-7 text-stone-300/70 md:text-base"
            >
              A world shaped by ancient crowns, forgotten wars, noble houses,
              and kingdoms that rose from the ashes of those who came before.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.35 }}
              className="mt-9"
            >
              <Link
                href="/timeline"
                className="group inline-flex items-center gap-3 rounded-full border border-amber-400/30 bg-amber-400/10 px-6 py-3 text-[10px] font-semibold uppercase tracking-[0.25em] text-amber-300 backdrop-blur-sm hover:bg-amber-400/20"
              >
                Enter the Chronicles
                <span className="transition-transform group-hover:translate-x-1">
                  →
                </span>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="bg-[#090807] px-6 py-32 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-16 lg:grid-cols-[1fr_1.5fr]">
            <div>
              <div className="mb-5 flex items-center gap-3">
                <div className="h-px w-8 bg-amber-400/50" />

                <span className="text-[10px] uppercase tracking-[0.35em] text-amber-400/60">
                  The Chronicles
                </span>
              </div>

              <h2 className="font-serif text-4xl leading-tight md:text-5xl">
                Every kingdom has a beginning.
                <br />
                <span className="text-stone-600">Every crown has a price.</span>
              </h2>
            </div>

            <div className="max-w-xl lg:ml-auto">
              <p className="text-sm leading-7 text-stone-500">
                The True Kingdom is a living chronicle of a world divided by
                ancient rivalries and bound together by fragile alliances.
              </p>

              <Link
                href="/timeline"
                className="mt-7 inline-flex items-center gap-3 text-[10px] uppercase tracking-[0.3em] text-amber-400 hover:text-amber-300"
              >
                Explore the timeline →
              </Link>
            </div>
          </div>
          <div className="my-28 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
          {/* THREE CARDS */}
          {/* Feature cards */}
          <div
            id="realms"
            className="grid gap-px overflow-hidden rounded-3xl border border-white/5 bg-white/5 md:grid-cols-3"
          >
            {/* CHARACTERS */}
            <Link
              href="/characters"
              className="group relative min-h-[600px] overflow-hidden bg-[#0d0c0a] p-8 transition-colors hover:bg-[#12100d] md:p-10"
            >
              <img
                src="/images/characters-ct.png"
                alt=""
                className="absolute inset-0 h-full w-full object-cover object-center opacity-65 transition-all duration-700 group-hover:scale-105 group-hover:opacity-80"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#0d0c0a] via-[#0d0c0a]/60 to-[#0d0c0a]/10" />

              <div className="relative z-10 flex h-full flex-col">
                <span className="font-mono text-[10px] text-amber-400/70">
                  I
                </span>

                <div className="mt-auto">
                  <h3 className="font-serif text-4xl text-stone-100 transition-colors group-hover:text-amber-100">
                    Characters
                  </h3>

                  <p className="mt-4 max-w-sm text-sm leading-6 text-stone-300/60">
                    Kings, queens, lords, warriors and other figures who shaped
                    the history of the realm.
                  </p>

                  <div className="mt-8 flex items-center gap-3 text-[10px] uppercase tracking-[0.25em] text-amber-400/70 transition-colors group-hover:text-amber-300">
                    Discover the characters
                    <span className="transition-transform duration-300 group-hover:translate-x-1">
                      →
                    </span>
                  </div>
                </div>
              </div>
            </Link>

            {/* WEAPONS */}
            <Link
              href="/weapons"
              className="group relative min-h-[600px] overflow-hidden bg-[#0d0c0a] p-8 transition-colors hover:bg-[#12100d] md:p-10"
            >
              <img
                src="/images/weapons-ct.png"
                alt=""
                className="absolute inset-0 h-full w-full object-cover object-center opacity-65 transition-all duration-700 group-hover:scale-105 group-hover:opacity-80"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#0d0c0a] via-[#0d0c0a]/60 to-[#0d0c0a]/10" />

              <div className="relative z-10 flex h-full flex-col">
                <span className="font-mono text-[10px] text-amber-400/70">
                  II
                </span>

                <div className="mt-auto">
                  <h3 className="font-serif text-4xl text-stone-100 transition-colors group-hover:text-amber-100">
                    Weapons
                  </h3>

                  <p className="mt-4 max-w-sm text-sm leading-6 text-stone-300/60">
                    Legendary swords, ancient relics and weapons whose names
                    became part of history.
                  </p>

                  <div className="mt-8 flex items-center gap-3 text-[10px] uppercase tracking-[0.25em] text-amber-400/70 transition-colors group-hover:text-amber-300">
                    Explore the weapons
                    <span className="transition-transform duration-300 group-hover:translate-x-1">
                      →
                    </span>
                  </div>
                </div>
              </div>
            </Link>

            {/* LOCATIONS */}
            <Link
              href="/locations"
              className="group relative min-h-[600px] overflow-hidden bg-[#0d0c0a] p-8 transition-colors hover:bg-[#12100d] md:p-10"
            >
              <img
                src="/images/locations-ct.png"
                alt=""
                className="absolute inset-0 h-full w-full object-cover object-center opacity-65 transition-all duration-700 group-hover:scale-105 group-hover:opacity-80"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#0d0c0a] via-[#0d0c0a]/60 to-[#0d0c0a]/10" />

              <div className="relative z-10 flex h-full flex-col">
                <span className="font-mono text-[10px] text-amber-400/70">
                  III
                </span>

                <div className="mt-auto">
                  <h3 className="font-serif text-4xl text-stone-100 transition-colors group-hover:text-amber-100">
                    Locations
                  </h3>

                  <p className="mt-4 max-w-sm text-sm leading-6 text-stone-300/60">
                    Ancient cities, castles, battlefields and forgotten places
                    scattered throughout the kingdoms.
                  </p>

                  <div className="mt-8 flex items-center gap-3 text-[10px] uppercase tracking-[0.25em] text-amber-400/70 transition-colors group-hover:text-amber-300">
                    Explore the locations
                    <span className="transition-transform duration-300 group-hover:translate-x-1">
                      →
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
