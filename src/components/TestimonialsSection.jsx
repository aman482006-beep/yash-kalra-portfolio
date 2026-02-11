import { cn } from "../lib/utils";
import TestimonialCard from "./ui/testimonial-card";

export function TestimonialsSection({
    title,
    description,
    testimonials,
    className
}) {
    return (
        <section
            className={cn(
                "bg-background text-foreground",
                "py-12 sm:py-24 md:py-32 px-0",
                className
            )}
        >
            <div className="mx-auto max-w-[1280px] flex flex-col items-center gap-12">

                {/* Heading */}
                <div className="text-center px-4">
                    <h2 className="text-3xl sm:text-5xl font-semibold max-w-[720px] mx-auto">
                        {title}
                    </h2>

                    <p className="mt-4 text-muted-foreground max-w-[600px] mx-auto">
                        {description}
                    </p>
                </div>

                {/* TESTIMONIAL GRID (Stable Version) */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full px-6">
                    {testimonials.map((testimonial, i) => (
                        <TestimonialCard
                            key={i}
                            {...testimonial}
                            index={i}
                        />
                    ))}
                </div>

            </div>
        </section>
    );
}
