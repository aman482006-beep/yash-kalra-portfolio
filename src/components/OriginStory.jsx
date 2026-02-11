import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Quote } from 'lucide-react';

const OriginStory = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section ref={ref} className="py-32 px-6 bg-zinc-900 relative overflow-hidden">
            {/* Background Texture */}
            <div className="absolute inset-0 opacity-5 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] pointer-events-none"></div>

            <div className="max-w-3xl mx-auto text-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.6 }}
                    className="mb-8 flex justify-center"
                >
                    <div className="p-4 bg-accent/10 rounded-full">
                        <Quote size={32} className="text-accent" />
                    </div>
                </motion.div>

                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-4xl md:text-5xl font-bold text-white mb-12 leading-tight"
                >
                    "I was tired of choosing between <span className="text-accent underline decoration-accent/30 underline-offset-8">health</span> and <span className="text-accent underline decoration-accent/30 underline-offset-8">hustle</span>."
                </motion.h2>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="text-xl md:text-2xl text-gray-300 leading-relaxed space-y-8 font-light"
                >
                    <p>
                        It hit me at 9 PM on a Tuesday. I had just finished a 12-hour workday and crushed a gym session,
                        but I was standing in a convenience store aisle, staring at "health bars" loaded with sugar and chemicals.
                    </p>
                    <p>
                        I realized the market was broken. It catered to the casual snacker or the hardcore bodybuilder,
                        but ignored the <strong className="text-white font-semibold">ambitious professional</strong> who treats their body like a high-performance engine.
                    </p>
                    <p>
                        That frustration sparked the first batch of GOAT Oats in my kitchen.
                        It wasn't just about food; it was about fueling a mindset.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="mt-16 w-24 h-1 bg-gradient-to-r from-transparent via-accent to-transparent mx-auto"
                />
            </div>
        </section>
    );
};

export default OriginStory;
