import { useEffect, useMemo, useRef } from "react";

const STAR_COUNT = 90;

function createStars(count) {
    return Array.from({ length: count }, (_, index) => ({
        edge: Math.floor(Math.random() * 4),
        id: index,
        delay: Math.random() * 6,
        duration: 55 + Math.random() * 35,
        twinkleDelay: Math.random() * 4,
        twinkleDuration: 2.4 + Math.random() * 3.2,
        size: 1 + Math.random() * 2.2,
        opacity: 0.4 + Math.random() * 0.6,
        depth: 0.4 + Math.random() * 1.6,
        drift: -70 + Math.random() * 140,
        lane: -12 + Math.random() * 124,
    }));
}

function resolvePath(star) {
    if (star.edge === 0) {
        return {
            fromX: `${star.lane.toFixed(2)}vw`,
            fromY: "-18vh",
            toX: `${(star.lane + star.drift).toFixed(2)}vw`,
            toY: "118vh",
        };
    }

    if (star.edge === 1) {
        return {
            fromX: `${star.lane.toFixed(2)}vw`,
            fromY: "118vh",
            toX: `${(star.lane - star.drift).toFixed(2)}vw`,
            toY: "-18vh",
        };
    }

    if (star.edge === 2) {
        return {
            fromX: "-18vw",
            fromY: `${star.lane.toFixed(2)}vh`,
            toX: "118vw",
            toY: `${(star.lane + star.drift).toFixed(2)}vh`,
        };
    }

    return {
        fromX: "118vw",
        fromY: `${star.lane.toFixed(2)}vh`,
        toX: "-18vw",
        toY: `${(star.lane - star.drift).toFixed(2)}vh`,
    };
}

export default function StarfieldBackground() {
    const containerRef = useRef(null);
    const stars = useMemo(() => createStars(STAR_COUNT), []);

    useEffect(() => {
        // No mouse tracking needed, stars animate automatically
    }, []);

    return (
        <div ref={containerRef} className="starfield" aria-hidden="true">
            <div className="starfield__deep-space" />
            <div className="starfield__parallax-layer">
                <div className="starfield__aurora" />
                {stars.map((star) => (
                    (() => {
                        const path = resolvePath(star);

                        return (
                            <span
                                key={star.id}
                                className="starfield__star"
                                style={{
                                    animationDelay: `${star.delay}s, ${star.twinkleDelay}s`,
                                    animationDuration: `${star.duration}s, ${star.twinkleDuration}s`,
                                    width: `${star.size}px`,
                                    height: `${star.size}px`,
                                    opacity: star.opacity,
                                    "--depth": star.depth.toFixed(2),
                                    "--from-x": path.fromX,
                                    "--from-y": path.fromY,
                                    "--to-x": path.toX,
                                    "--to-y": path.toY,
                                }}
                            />
                        );
                    })()
                ))}
            </div>
        </div>
    );
}