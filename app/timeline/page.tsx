"use client";

import { AnimatePresence, motion } from "motion/react";
import { useMemo, useState } from "react";

import {
  formatYear,
  getEventsBetween,
  mainTimelineEvents,
  sortedMainEvents,
  toAbsoluteYear,
  type TimelineEvent,
} from "@/data/timeline";

export default function TimeLinePage() {
  const [selectedMainId, setSelectedMainId] = useState<string | null>(null);
  const [hoveredEvent, setHoveredEvent] =
    useState<TimelineEvent | null>(null);

  const selectedIndex = sortedMainEvents.findIndex(
    (event) => event.id === selectedMainId,
  );

  const selectedMain =
    selectedIndex >= 0 ? sortedMainEvents[selectedIndex] : null;

  const nextMain =
    selectedIndex >= 0
      ? sortedMainEvents[selectedIndex + 1] ?? null
      : null;

  /*
   * Small events between the selected main event
   * and the next main event.
   */
  const zoomedSmallEvents = useMemo(() => {
    if (!selectedMain) {
      return [];
    }

    return getEventsBetween(selectedMain, nextMain ?? undefined);
  }, [selectedMain, nextMain]);

  /*
   * Full timeline:
   * only major events.
   *
   * Zoomed timeline:
   * selected major event
   * + small events
   * + next major event
   */
  const visibleEvents = selectedMain
    ? [
        selectedMain,
        ...zoomedSmallEvents,
        ...(nextMain ? [nextMain] : []),
      ]
    : sortedMainEvents;

  /*
   * Calculate the visible timeline range.
   */
  const timelineStart = selectedMain
    ? toAbsoluteYear(selectedMain.year, selectedMain.era)
    : toAbsoluteYear(
        sortedMainEvents[0].year,
        sortedMainEvents[0].era,
      );

  const timelineEnd = selectedMain
    ? nextMain
      ? toAbsoluteYear(nextMain.year, nextMain.era)
      : toAbsoluteYear(selectedMain.year, selectedMain.era) + 100
    : toAbsoluteYear(
        sortedMainEvents[sortedMainEvents.length - 1].year,
        sortedMainEvents[sortedMainEvents.length - 1].era,
      );

  const timelineRange = timelineEnd - timelineStart;

  /*
   * Convert an event's year into a percentage
   * along the currently visible timeline.
   */
  const getPosition = (event: TimelineEvent) => {
    const year = toAbsoluteYear(event.year, event.era);

    return ((year - timelineStart) / timelineRange) * 100;
  };

  /*
   * Determine whether an event is a major event.
   */
  const isMajorEvent = (event: TimelineEvent) => {
    return mainTimelineEvents.some(
      (main) => main.id === event.id,
    );
  };

  /*
   * Alternate small event labels between
   * the upper and lower lanes.
   */
  const getSmallEventLane = (event: TimelineEvent) => {
    const index = zoomedSmallEvents.findIndex(
      (item) => item.id === event.id,
    );

    return index % 2 === 0 ? "below" : "above";
  };

  /*
   * Desktop:
   *   Hover = show card
   *
   * Mobile:
   *   Tap = show card
   */
  const handleEventClick = (event: TimelineEvent) => {
    /*
     * Major events also control the zoom.
     */
    if (isMajorEvent(event)) {
      setSelectedMainId(event.id);
    }

    /*
     * If the same event is already showing its card,
     * tapping it again closes the card.
     */
    if (hoveredEvent?.id === event.id) {
      setHoveredEvent(null);
    } else {
      setHoveredEvent(event);
    }
  };

  const resetZoom = () => {
    setSelectedMainId(null);
    setHoveredEvent(null);
  };

  /*
   * Clicking the empty timeline area closes the card
   * on touch devices.
   */
  const handleTimelineBackgroundClick = () => {
    setHoveredEvent(null);
  };

  return (
    <main className="min-h-screen overflow-hidden bg-[#0b0a08] text-stone-100">
      {/* =========================================================
          BACKGROUND
      ========================================================== */}

      <div className="pointer-events-none fixed inset-0">
        <div className="absolute left-1/2 top-0 h-[600px] w-[800px] -translate-x-1/2 -translate-y-1/3 rounded-full bg-amber-500/[0.035] blur-[150px]" />

        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,.8) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,.8) 1px, transparent 1px)
            `,
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-10">
        {/* =========================================================
            HEADER
        ========================================================== */}

        <div className="mx-auto max-w-2xl text-center">
          <div className="mb-5 flex items-center justify-center gap-3">
            <div className="h-px w-10 bg-amber-500/30" />

            <span className="text-[10px] font-semibold uppercase tracking-[0.4em] text-amber-500/60">
              The Chronicles
            </span>

            <div className="h-px w-10 bg-amber-500/30" />
          </div>

          <h1 className="font-serif text-5xl tracking-tight md:text-6xl">
            The History of The True Kingdom
          </h1>

          <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-stone-500">
            From the birth of Kaeras to the fall of Sky, the events that
            shaped the world are recorded here.
          </p>
        </div>

        {/* =========================================================
            TIMELINE
        ========================================================== */}

        <div className="relative mt-40">
          {/* =======================================================
              HOVER / TAP CARD
          ======================================================== */}

          <div className="pointer-events-none absolute bottom-[180px] left-0 right-0 z-50 flex justify-center px-4">
            <AnimatePresence mode="wait">
              {hoveredEvent && (
                <motion.div
                  key={hoveredEvent.id}
                  initial={{
                    opacity: 0,
                    y: 14,
                    scale: 0.96,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    scale: 1,
                  }}
                  exit={{
                    opacity: 0,
                    y: 8,
                    scale: 0.96,
                  }}
                  transition={{
                    duration: 0.2,
                    ease: "easeOut",
                  }}
                  className="w-[340px] max-w-full"
                >
                  <div className="relative overflow-hidden rounded-2xl border border-amber-200/10 bg-[#15130f] shadow-2xl shadow-black/60">
                    {/* Image */}
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={hoveredEvent.image}
                        alt={hoveredEvent.title}
                        className="h-full w-full object-cover"
                      />

                      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#15130f] to-transparent" />

                      <div className="absolute inset-0 bg-black/10" />
                    </div>

                    {/* Content */}
                    <div className="relative px-5 pb-5 pt-4">
                      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-amber-400/60 to-transparent" />

                      <div className="flex items-center justify-between">
                        <span className="text-[9px] font-semibold uppercase tracking-[0.3em] text-amber-400/70">
                          {isMajorEvent(hoveredEvent)
                            ? "Major Event"
                            : "Recorded Event"}
                        </span>

                        <span className="font-mono text-[10px] text-stone-500">
                          {formatYear(
                            hoveredEvent.year,
                            hoveredEvent.era,
                          )}
                        </span>
                      </div>

                      <h2 className="mt-2 font-serif text-xl text-stone-100">
                        {hoveredEvent.title}
                      </h2>

                      <p className="mt-2 text-xs leading-5 text-stone-500">
                        {hoveredEvent.description}
                      </p>
                    </div>

                    {/* Arrow */}
                    <div className="absolute -bottom-2 left-1/2 h-4 w-4 -translate-x-1/2 rotate-45 border-b border-r border-amber-200/10 bg-[#15130f]" />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* =======================================================
              ZOOM CONTROLS
          ======================================================== */}

          <AnimatePresence>
            {selectedMain && (
              <motion.div
                initial={{
                  opacity: 0,
                  y: -8,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                exit={{
                  opacity: 0,
                  y: -8,
                }}
                className="mb-8 flex flex-wrap items-center justify-center gap-3"
              >
                <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-stone-600">
                  Viewing
                </span>

                <span className="font-serif text-sm text-amber-400">
                  {formatYear(
                    selectedMain.year,
                    selectedMain.era,
                  )}
                </span>

                <span className="text-stone-700">
                  →
                </span>

                <span className="font-serif text-sm text-stone-400">
                  {nextMain
                    ? formatYear(
                        nextMain.year,
                        nextMain.era,
                      )
                    : "Beyond"}
                </span>

                <button
                  type="button"
                  onClick={resetZoom}
                  className="ml-2 rounded-full border border-white/10 px-3 py-1.5 text-[9px] uppercase tracking-[0.2em] text-stone-500 transition-colors hover:border-amber-400/30 hover:text-amber-400"
                >
                  Full timeline
                </button>
              </motion.div>
            )}
          </AnimatePresence>

          {/* =======================================================
              HORIZONTAL SCROLL CONTAINER
          ======================================================== */}

          <div
            className="overflow-x-auto pb-16 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            onClick={handleTimelineBackgroundClick}
          >
            <motion.div
              layout
              transition={{
                duration: 0.55,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="relative mx-auto h-56 min-w-[1200px]"
            >
              {/* =====================================================
                  INNER AXIS AREA
              ====================================================== */}

              <div className="absolute inset-x-10 inset-y-0">
                {/* Main axis */}
                <div className="absolute left-0 right-0 top-1/2 h-px bg-stone-700/60" />

                {/* Zoom glow */}
                <AnimatePresence>
                  {selectedMain && (
                    <motion.div
                      initial={{
                        opacity: 0,
                      }}
                      animate={{
                        opacity: 1,
                      }}
                      exit={{
                        opacity: 0,
                      }}
                      className="absolute left-0 right-0 top-1/2 h-px bg-amber-400/20 shadow-[0_0_20px_rgba(251,191,36,0.2)]"
                    />
                  )}
                </AnimatePresence>

                {/* ===================================================
                    EVENTS
                ==================================================== */}

                {visibleEvents.map((event) => {
                  const position = getPosition(event);

                  const isMain = isMajorEvent(event);

                  const isSelected =
                    event.id === selectedMainId;

                  const isHovered =
                    hoveredEvent?.id === event.id;

                  const lane =
                    !isMain && selectedMain
                      ? getSmallEventLane(event)
                      : "above";

                  return (
                    <motion.div
                      key={event.id}
                      layout
                      initial={{
                        opacity: 0,
                        scale: 0.7,
                      }}
                      animate={{
                        opacity: 1,
                        scale: 1,
                      }}
                      exit={{
                        opacity: 0,
                        scale: 0.7,
                      }}
                      transition={{
                        duration: 0.35,
                      }}
                      className="absolute top-0 h-full"
                      style={{
                        left: `${position}%`,
                      }}
                      onMouseEnter={() =>
                        setHoveredEvent(event)
                      }
                      onMouseLeave={() =>
                        setHoveredEvent(null)
                      }
                      onClick={(e) => {
                        /*
                         * Prevent the background click handler
                         * from immediately closing the card.
                         */
                        e.stopPropagation();
                      }}
                    >
                      {/* =================================================
                          CONNECTOR FOR SMALL EVENTS
                      ================================================== */}

                      {!isMain && selectedMain && (
                        <motion.div
                          initial={{
                            opacity: 0,
                          }}
                          animate={{
                            opacity: 1,
                          }}
                          className={`
                            absolute left-1/2 w-px
                            -translate-x-1/2
                            bg-stone-700/50
                            ${
                              lane === "above"
                                ? "bottom-1/2 h-[34px]"
                                : "top-1/2 h-[34px]"
                            }
                          `}
                        />
                      )}

                      {/* =================================================
                          NODE
                      ================================================== */}

                      <button
                        type="button"
                        onClick={() =>
                          handleEventClick(event)
                        }
                        className="group absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                      >
                        <motion.div
                          animate={{
                            scale:
                              isSelected || isHovered
                                ? isMain
                                  ? 1.35
                                  : 1.2
                                : 1,
                          }}
                          transition={{
                            type: "spring",
                            stiffness: 400,
                            damping: 25,
                          }}
                          className={`
                            relative rounded-full border
                            ${
                              isMain
                                ? "h-4 w-4 border-amber-300 bg-amber-400 shadow-[0_0_20px_rgba(251,191,36,0.7)]"
                                : "h-2.5 w-2.5 border-stone-500 bg-stone-700"
                            }
                          `}
                        >
                          {/* Main event ring */}
                          {isMain &&
                            (isSelected || isHovered) && (
                              <motion.div
                                initial={{
                                  opacity: 0,
                                  scale: 0.5,
                                }}
                                animate={{
                                  opacity: 1,
                                  scale: 1,
                                }}
                                className="absolute -inset-3 rounded-full border border-amber-400/20 bg-amber-400/5"
                              />
                            )}
                        </motion.div>
                      </button>

                      {/* =================================================
                          MAIN EVENT
                      ================================================== */}

                      {isMain && (
                        <>
                          {/* Title */}
                          <div
                            className={`
                              absolute left-1/2
                              top-[calc(50%-52px)]
                              -translate-x-1/2
                              whitespace-nowrap
                              font-serif text-sm
                              ${
                                isSelected
                                  ? "text-amber-300"
                                  : "text-stone-300"
                              }
                            `}
                          >
                            {event.title}
                          </div>

                          {/* Date */}
                          <div
                            className="
                              absolute left-1/2
                              top-[calc(50%+24px)]
                              -translate-x-1/2
                              whitespace-nowrap
                              font-mono text-[9px]
                              text-amber-400
                            "
                          >
                            {formatYear(
                              event.year,
                              event.era,
                            )}
                          </div>
                        </>
                      )}

                      {/* =================================================
                          SMALL EVENT - ABOVE
                      ================================================== */}

                      {!isMain && lane === "above" && (
                        <>
                          <div
                            className="
                              absolute bottom-[calc(50%+42px)]
                              left-1/2
                              -translate-x-1/2
                              whitespace-nowrap
                              text-center
                              text-[9px]
                              text-stone-500
                            "
                          >
                            {event.title}
                          </div>

                          <div
                            className="
                              absolute bottom-[calc(50%+25px)]
                              left-1/2
                              -translate-x-1/2
                              whitespace-nowrap
                              font-mono text-[8px]
                              text-stone-600
                            "
                          >
                            {formatYear(
                              event.year,
                              event.era,
                            )}
                          </div>
                        </>
                      )}

                      {/* =================================================
                          SMALL EVENT - BELOW
                      ================================================== */}

                      {!isMain && lane === "below" && (
                        <>
                          <div
                            className="
                              absolute top-[calc(50%+42px)]
                              left-1/2
                              -translate-x-1/2
                              whitespace-nowrap
                              text-center
                              text-[9px]
                              text-stone-500
                            "
                          >
                            {event.title}
                          </div>

                          <div
                            className="
                              absolute top-[calc(50%+58px)]
                              left-1/2
                              -translate-x-1/2
                              whitespace-nowrap
                              font-mono text-[8px]
                              text-stone-600
                            "
                          >
                            {formatYear(
                              event.year,
                              event.era,
                            )}
                          </div>
                        </>
                      )}
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          </div>

          {/* =======================================================
              EVENT COUNT
          ======================================================== */}

          <AnimatePresence mode="wait">
            {selectedMain && (
              <motion.div
                key={selectedMain.id}
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: 1,
                }}
                exit={{
                  opacity: 0,
                }}
                className="flex justify-center"
              >
                <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-stone-700">
                  {zoomedSmallEvents.length} events recorded
                  between these ages
                </span>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* =========================================================
            LEGEND
        ========================================================== */}

        <div className="mt-10 flex justify-center">
          <div className="flex flex-wrap items-center justify-center gap-4 rounded-full border border-white/5 bg-white/[0.02] px-5 py-2.5 sm:gap-6">
            {/* Major */}
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-amber-400 shadow-[0_0_8px_rgba(251,191,36,0.6)]" />

              <span className="text-[10px] uppercase tracking-widest text-stone-600">
                Major event
              </span>
            </div>

            <div className="hidden h-3 w-px bg-white/10 sm:block" />

            {/* Small */}
            <div className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-stone-600" />

              <span className="text-[10px] uppercase tracking-widest text-stone-600">
                Recorded event
              </span>
            </div>

            <div className="hidden h-3 w-px bg-white/10 sm:block" />

            {/* Calendar */}
            <span className="font-mono text-[10px] text-stone-600">
              A.F. — After the Fall
            </span>
          </div>
        </div>
      </div>
    </main>
  );
}