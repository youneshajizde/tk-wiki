"use client";

import Link from "next/link";
import { useParams } from "next/navigation";

import { kingdoms } from "@/data/kingdoms";
import { characters } from "@/data/characters";

export default function CharacterDetailsPage() {
  const params = useParams();

  const kingdomId = params.kingdom as string;
  const characterId = params.character as string;

  const kingdom = kingdoms.find((item) => item.id === kingdomId);

  const kingdomCharacters = characters[kingdomId] ?? [];

  const character = kingdomCharacters.find(
    (item) => item.id === characterId
  );

  if (!kingdom || !character) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#090807] text-stone-100">
        <div className="text-center">
          <h1 className="font-serif text-4xl">Character Not Found</h1>

          <Link
            href="/characters"
            className="mt-6 inline-block text-[10px] uppercase tracking-[0.25em] text-amber-400"
          >
            Return to Characters →
          </Link>
        </div>
      </main>
    );
  }

  const { identity, description } = character;

  const title = identity.titles[0] ?? identity.role;

  return (
    <main className="min-h-screen bg-[#090807] text-stone-100">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-10">

        {/* Breadcrumb */}
        <div className="flex flex-wrap gap-3 text-[9px] uppercase tracking-[0.25em] text-stone-700">
          <Link
            href="/"
            className="transition-colors hover:text-amber-400"
          >
            The True Kingdom
          </Link>

          <span>/</span>

          <Link
            href="/characters"
            className="transition-colors hover:text-amber-400"
          >
            Characters
          </Link>

          <span>/</span>

          <Link
            href={`/characters/${kingdomId}`}
            className="transition-colors hover:text-amber-400"
          >
            {kingdom.name}
          </Link>

          <span>/</span>

          <span className="text-stone-500">{identity.name}</span>
        </div>

        {/* =========================================================
            CHARACTER HEADER
        ========================================================= */}
        <section className="mt-16 overflow-hidden rounded-3xl border border-white/5 bg-[#0d0c0a]">
          <div className="grid lg:grid-cols-[45%_55%]">

            {/* Portrait */}
            <div className="relative min-h-[500px] overflow-hidden lg:min-h-[650px]">
              {character.image ? (
                <img
                  src={character.image}
                  alt={identity.name}
                  className="absolute inset-0 h-full w-full object-cover object-center"
                />
              ) : (
                <div className="absolute inset-0 flex items-center justify-center bg-[#11100d]">
                  <span className="font-serif text-2xl text-stone-700">
                    No Portrait
                  </span>
                </div>
              )}

              <div className="absolute inset-0 bg-gradient-to-t from-[#0d0c0a] via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-[#0d0c0a]" />

              <div className="absolute left-7 top-7 rounded-full border border-white/10 bg-black/30 px-4 py-2 backdrop-blur-md">
                <span className="text-[9px] uppercase tracking-[0.3em] text-stone-300/70">
                  {identity.kingdom}
                </span>
              </div>
            </div>

            {/* Name */}
            <div className="flex flex-col justify-center p-8 sm:p-12 lg:p-16">
              <div className="flex items-center gap-3">
                <div className="h-px w-10 bg-amber-400/50" />

                <span className="text-[9px] font-semibold uppercase tracking-[0.35em] text-amber-400/60">
                  Character Chronicle
                </span>
              </div>

              <p className="mt-8 text-[10px] uppercase tracking-[0.35em] text-amber-500/50">
                {title}
              </p>

              <h1 className="mt-3 font-serif text-5xl leading-[0.95] text-stone-100 md:text-6xl lg:text-7xl">
                {identity.name}
              </h1>

              <div className="mt-8 h-px w-16 bg-amber-400/30" />

              <p className="mt-8 max-w-xl text-sm leading-8 text-stone-400">
                {description.overview}
              </p>
            </div>
          </div>
        </section>

        {/* =========================================================
            I. IDENTITY
        ========================================================= */}
        <section className="mx-auto mt-24 max-w-5xl">

          <div className="mb-12 flex items-center gap-4">
            <div className="h-px flex-1 bg-white/5" />

            <span className="text-[9px] uppercase tracking-[0.35em] text-amber-400/50">
              I — Identity
            </span>

            <div className="h-px flex-1 bg-white/5" />
          </div>

          <div className="mb-10">
            <h2 className="font-serif text-4xl text-stone-200">
              Who is {identity.name}?
            </h2>

            <p className="mt-4 max-w-3xl text-sm leading-8 text-stone-600">
              The known identity, status, and lineage of {identity.name}.
            </p>
          </div>

          {/* Main Identity Cards */}
          <div className="grid gap-px overflow-hidden rounded-2xl border border-white/5 bg-white/5 sm:grid-cols-2 lg:grid-cols-3">

            {/* Kingdom */}
            <div className="bg-[#11100d] p-6">
              <div className="text-[8px] uppercase tracking-[0.25em] text-stone-700">
                Kingdom
              </div>

              <div className="mt-3 font-serif text-xl text-stone-300">
                {identity.kingdom}
              </div>
            </div>

            {/* Role */}
            <div className="bg-[#11100d] p-6">
              <div className="text-[8px] uppercase tracking-[0.25em] text-stone-700">
                Role
              </div>

              <div className="mt-3 font-serif text-xl text-stone-300">
                {identity.role}
              </div>
            </div>

            {/* Gender */}
            <div className="bg-[#11100d] p-6">
              <div className="text-[8px] uppercase tracking-[0.25em] text-stone-700">
                Gender
              </div>

              <div className="mt-3 font-serif text-xl text-stone-300">
                {identity.gender}
              </div>
            </div>

            {/* Sky Blood */}
            <div className="bg-[#11100d] p-6">
              <div className="text-[8px] uppercase tracking-[0.25em] text-stone-700">
                Sky Blood Status
              </div>

              <div className="mt-3 font-serif text-xl text-stone-300">
                {identity.skyBloodStatus}
              </div>
            </div>

            {/* Born */}
            <div className="bg-[#11100d] p-6">
              <div className="text-[8px] uppercase tracking-[0.25em] text-stone-700">
                Born
              </div>

              <div className="mt-3 font-serif text-xl text-stone-300">
                {identity.born}
              </div>
            </div>

            {/* Died */}
            <div className="bg-[#11100d] p-6">
              <div className="text-[8px] uppercase tracking-[0.25em] text-stone-700">
                Died
              </div>

              <div className="mt-3 font-serif text-xl text-stone-300">
                {identity.died}
              </div>
            </div>
          </div>

          {/* Titles */}
          {identity.titles.length > 0 && (
            <div className="mt-6 rounded-2xl border border-white/5 bg-[#11100d] p-6">
              <div className="text-[8px] uppercase tracking-[0.25em] text-stone-700">
                Titles
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                {identity.titles.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-amber-400/10 bg-amber-400/5 px-4 py-2 text-xs text-stone-400"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Lineage */}
          <div className="mt-12">
            <div className="mb-6">
              <span className="font-mono text-[9px] text-amber-400/50">
                LINEAGE
              </span>

              <h3 className="mt-3 font-serif text-2xl text-stone-300">
                Family
              </h3>
            </div>

            <div className="grid gap-px overflow-hidden rounded-2xl border border-white/5 bg-white/5 sm:grid-cols-2">

              {/* Father */}
              <div className="bg-[#11100d] p-6">
                <div className="text-[8px] uppercase tracking-[0.25em] text-stone-700">
                  Father
                </div>

                <div className="mt-3 font-serif text-xl text-stone-300">
                  {identity.father || "Unknown"}
                </div>
              </div>

              {/* Mother */}
              <div className="bg-[#11100d] p-6">
                <div className="text-[8px] uppercase tracking-[0.25em] text-stone-700">
                  Mother
                </div>

                <div className="mt-3 font-serif text-xl text-stone-300">
                  {identity.mother || "Unknown"}
                </div>
              </div>
            </div>

            {/* Issue */}
            {identity.issue.length > 0 && (
              <div className="mt-6 rounded-2xl border border-white/5 bg-[#11100d] p-6">
                <div className="text-[8px] uppercase tracking-[0.25em] text-stone-700">
                  Issue
                </div>

                <div className="mt-4 flex flex-wrap gap-2">
                  {identity.issue.map((child) => (
                    <span
                      key={child}
                      className="rounded-full border border-white/5 px-4 py-2 text-xs text-stone-400"
                    >
                      {child}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Spouse */}
            {identity.spouse.length > 0 && (
              <div className="mt-6 rounded-2xl border border-white/5 bg-[#11100d] p-6">
                <div className="text-[8px] uppercase tracking-[0.25em] text-stone-700">
                  Spouse
                </div>

                <div className="mt-4 flex flex-wrap gap-2">
                  {identity.spouse.map((spouse) => (
                    <span
                      key={spouse}
                      className="rounded-full border border-white/5 px-4 py-2 text-xs text-stone-400"
                    >
                      {spouse}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>

        {/* =========================================================
            II. DESCRIPTION / CHRONICLE
        ========================================================= */}
        <section className="mx-auto mt-32 max-w-4xl">

          <div className="mb-12 flex items-center gap-4">
            <div className="h-px flex-1 bg-white/5" />

            <span className="text-[9px] uppercase tracking-[0.35em] text-amber-400/50">
              II — The Chronicle
            </span>

            <div className="h-px flex-1 bg-white/5" />
          </div>

          <h2 className="font-serif text-4xl text-stone-200">
            The Story of {identity.name}
          </h2>

          {/* Overview */}
          <div className="mt-12 border-l border-amber-400/20 pl-6">
            <span className="text-[9px] uppercase tracking-[0.3em] text-amber-400/50">
              Overview
            </span>

            <p className="mt-5 text-sm leading-8 text-stone-500">
              {description.overview}
            </p>
          </div>

          {/* Biography */}
          <div className="mt-20">
            <span className="font-mono text-[9px] text-amber-400/50">
              01
            </span>

            <h3 className="mt-3 font-serif text-3xl text-stone-300">
              Biography
            </h3>

            <p className="mt-6 text-sm leading-8 text-stone-600">
              {description.biography}
            </p>
          </div>

          {/* Appearance */}
          <div className="mt-20">
            <span className="font-mono text-[9px] text-amber-400/50">
              02
            </span>

            <h3 className="mt-3 font-serif text-3xl text-stone-300">
              Appearance
            </h3>

            <p className="mt-6 text-sm leading-8 text-stone-600">
              {description.appearance}
            </p>
          </div>

          {/* Personality */}
          <div className="mt-20">
            <span className="font-mono text-[9px] text-amber-400/50">
              03
            </span>

            <h3 className="mt-3 font-serif text-3xl text-stone-300">
              Personality
            </h3>

            <p className="mt-6 text-sm leading-8 text-stone-600">
              {description.personality}
            </p>
          </div>
        </section>

        {/* =========================================================
            BACK
        ========================================================= */}
        <div className="mt-24 border-t border-white/5 pt-8">
          <Link
            href={`/characters/${kingdomId}`}
            className="inline-flex items-center gap-3 text-[9px] uppercase tracking-[0.3em] text-stone-600 transition-colors hover:text-amber-400"
          >
            ← Back to {kingdom.name} characters
          </Link>
        </div>
      </div>
    </main>
  );
}
