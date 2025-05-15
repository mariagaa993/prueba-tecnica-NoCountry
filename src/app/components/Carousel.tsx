import { useState } from "react";
import {   
    ArrowLeftCircleIcon,
    ArrowRightCircleIcon
} from "@heroicons/react/24/solid";

type CarouselProps = {
    children: React.ReactNode[];
};

const Carousel = ({ children }: CarouselProps) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const total = children.length;

    const prev = () =>
        setActiveIndex((prev) => (prev === 0 ? total - 1 : prev - 1));
    const next = () => setActiveIndex((prev) => (prev + 1) % total);

    return (
        <div className="relative max-w-3xl mx-auto overflow-hidden">
            <div className="flex md:gap-2 lg:gap-4 transition-transform duration-500 md:transform-none"
                style={{ transform: `translateX(-${activeIndex * 100}%)` }}>
                {
                    children.map((child, i) => (
                        <div
                            key={i}
                            className="min-w-full flex-shrink-0 px-3 md:px-0 py-6 md:min-w-0 md:flex-1">
                            {child}
                        </div>
                    ))
                }
            </div>
            <button
                type="button"
                onClick={prev}
                className="absolute top-1/2 left-0 -translate-y-1/2 md:hidden"
                aria-label="Previous">
                <ArrowLeftCircleIcon className="w-6 h-6 text-black" />
            </button>
            <button
                type="button"
                onClick={next}
                className="absolute top-1/2 right-0 -translate-y-1/2 md:hidden"
                aria-label="Next">
                <ArrowRightCircleIcon className="w-6 h-6 text-black" />
            </button>
        </div>
    );
};

export default Carousel;
