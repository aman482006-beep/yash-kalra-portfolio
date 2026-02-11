import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const TimelineItem = ({ data, index, isLast }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });

    return (
        <div ref={ref} className="relative flex gap-8 pb-12 last:pb-0">
            {/* Line and Node */}
            <div className="flex flex-col items-center">
                <motion.div
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : { scale: 0 }}
                    transition={{ duration: 0.4, delay: 0.2 }}
                    className="w-4 h-4 rounded-full bg-accent border-4 border-black z-10"
                />
                {!isLast && (
                    <motion.div
                        initial={{ height: 0 }}
                        animate={isInView ? { height: "100%" } : { height: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="w-px bg-white/20 flex-grow absolute top-4 left-[7px]"
                    />
                )}
            </div>

            {/* Content */}
            <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="pb-2"
            >
                <span className="text-sm font-bold text-accent tracking-widest uppercase mb-1 block">
                    {data.date}
                </span>
                <h3 className="text-2xl font-bold text-white mb-2">{data.title}</h3>
                {data.description && (
                    <p className="text-secondary leading-relaxed max-w-lg">
                        {data.description}
                    </p>
                )}
            </motion.div>
        </div>
    );
};

const TimelineSection = () => {
    const milestones = [
        {
            date: "Jan 2024",
            title: "The Idea",
            description: "Identified the gap: High performers need high-quality fuel, fast. Concept validation with 50+ athletes."
        },
        {
            date: "Mar 2024",
            title: "Prototyping",
            description: "Kitchen formulations. 30 iterations to perfect the 'Drinkable Oats' texture and taste profile."
        },
        {
            date: "May 2024",
            title: "Sampling Phase",
            description: "Beta launch at local gyms. 92% retention rate among initial test group. Refined based on real feedback."
        },
        {
            date: "Aug 2024",
            title: "Distribution",
            description: "Secured partnerships with 10 premium fitness centers and initial quick-commerce listing."
        },
        {
            date: "Nov 2024",
            title: "Growth & Scale",
            description: "35% MoM revenue growth. Community expands to 12K+ active members. The movement begins."
        }
    ];

    return (
        <section className="py-24 px-6 bg-black">
            <div className="max-w-3xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16 text-center"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">The Journey So Far</h2>
                    <p className="text-secondary">From spark to wildfire. Executing with speed and precision.</p>
                </motion.div>

                <div className="pl-4 md:pl-0">
                    {milestones.map((item, index) => (
                        <TimelineItem
                            key={index}
                            data={item}
                            index={index}
                            isLast={index === milestones.length - 1}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TimelineSection;
