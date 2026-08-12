"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { useMemo, useState } from "react";

import { kingdoms } from "@/data/kingdoms";
import { locations } from "@/data/locations";

export default function KingdomLocationsPage() {
  const params = useParams();

  const kingdomId = params.kingdom as string;

  const kingdom = kingdoms.find(
    (item) => item.id === kingdomId
  );

  const [search, setSearch] = useState("");

  if (!kingdom) {
    return null;
  }

  const kingdomLocations = locations[kingdomId] ?? [];

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const filteredLocations = useMemo(() => {
    const query = search.toLowerCase().trim();

    if (!query) {
      return kingdomLocations;
    }

    return kingdomLocations.filter((location) =>
      `${location.name} ${location.title} ${location.description}`
        .toLowerCase()
        .includes(query)
    );
  }, [search, kingdomLocations]);

  return (
    <main className="min-h-screen bg-[#090807] text-stone-100">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10">

        <div className="flex gap-3 text-[9px] uppercase tracking-[0.25em] text-stone-700">
          <Link href="/" className="hover:text-amber-400">
            The True Kingdom
          </Link>

          <span>/</span>

          <Link href="/locations" className="hover:text-amber-400">
            Locations
          </Link>

          <span>/</span>

          <span className="text-stone-500">
            {kingdom.name}
          </span>
        </div>

        <div className="mt-20 flex flex-col gap-10 md:flex-row md:items-center">

          <div className="flex h-40 w-40 shrink-0 items-center justify-center rounded-3xl border border-white/5 bg-[#0d0c0a]">
            <img
              src={kingdom.sigil}
              alt={kingdom.name}
              className="h-28 w-28 object-contain"
            />
          </div>

          <div>
            <p className="text-[10px] uppercase tracking-[0.35em] text-amber-400/60">
              {kingdom.subtitle}
            </p>

            <h1 className="mt-3 font-serif text-5xl md:text-6xl">
              Locations
            </h1>

            <p className="mt-4 max-w-xl text-sm leading-7 text-stone-500">
              Explore the cities, castles, battlefields and forgotten places
              of {kingdom.name}.
            </p>
          </div>
        </div>

        <div className="mt-20 flex items-center gap-4 border-y border-white/5 py-5">
          <input
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder="Search locations..."
            className="w-full max-w-xl rounded-xl border border-white/5 bg-[#0d0c0a] px-5 py-4 text-sm outline-none placeholder:text-stone-700 focus:border-amber-400/30"
          />

          <span className="font-mono text-xs text-stone-700">
            {filteredLocations.length}
          </span>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">

          {filteredLocations.map((location) => (
            <Link
              key={location.id}
              href={`/locations/${kingdomId}/${location.id}`}
              className="group overflow-hidden rounded-2xl border border-white/5 bg-[#0d0c0a] hover:-translate-y-1 hover:border-amber-400/20"
            >
              {location.image && (
                <div className="h-64 overflow-hidden">
                  <img
                    src={location.image}
                    alt={location.name}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              )}

              <div className="p-6">
                <h2 className="font-serif text-xl group-hover:text-amber-100">
                  {location.name}
                </h2>

                <p className="mt-2 text-[9px] uppercase tracking-[0.25em] text-amber-500/50">
                  {location.title}
                </p>

                <p className="mt-4 text-xs leading-6 text-stone-600">
                  {location.description}
                </p>

                <div className="mt-6 text-[9px] uppercase tracking-[0.25em] text-stone-700 group-hover:text-amber-400/60">
                  View location →
                </div>
              </div>
            </Link>
          ))}

        </div>

        {filteredLocations.length === 0 && (
          <div className="py-24 text-center text-stone-700">
            No locations found.
          </div>
        )}

      </div>
    </main>
  );
}