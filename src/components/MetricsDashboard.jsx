import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import CountUp from 'react-countup';

const MetricsDashboard = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const metrics = [
        {
            label: "Consumers Reached",
            value: 50000,
            suffix: "+",
            context: "vs. 10k goal (5x)",
            growth: true
        },
        {
            label: "Monthly Growth",
            value: 35,
            suffix: "%",
            context: "vs. industry avg 8%",
            growth: true
        },
        {
            label: "Distribution Points",
            value: 150,
            suffix: "+",
            context: "Across 3 major cities",
            growth: true
        },
        {
            label: "Engagement Rate",
            value: 12,
            suffix: "%",
            context: "Social media (Industry: 2%)",
            growth: true
        }
    ];

    return (
        <section ref={ref} className="py-24 px-6 bg-background relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[100px] pointer-events-none" />

            <div className="max-w-6xl mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-5xl md:text-6xl font-bold text-primary mb-4 text-center">
                        Impact & Metrics
                    </h2>
                    <p className="text-xl text-secondary text-center mb-16 max-w-2xl mx-auto">
                        Real numbers from a real journey.
                    </p>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {metrics.map((metric, index) => (
                            <motion.div
                                key={metric.label}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                                className="bg-white/5 backdrop-blur-md p-8 rounded-2xl shadow-lg border border-white/10 hover:border-accent/40 group transition-all duration-300"
                            >
                                <div className="text-5xl font-bold text-white mb-2 group-hover:text-accent transition-colors">
                                    <CountUp
                                        end={metric.value}
                                        suffix={metric.suffix}
                                        duration={2.5}
                                        enableScrollSpy
                                        scrollSpyOnce
                                    />
                                </div>
                                <div className="text-lg font-medium text-gray-300 mb-3">{metric.label}</div>

                                {/* Context Label */}
                                <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-accent/10 rounded-full border border-accent/20">
                                    {metric.growth && (
                                        <svg className="w-3 h-3 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                                        </svg>
                                    )}
                                    <span className="text-xs font-semibold text-accent">
                                        {metric.context}
                                    </span>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default MetricsDashboard;
