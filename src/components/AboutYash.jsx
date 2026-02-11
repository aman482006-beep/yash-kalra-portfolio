import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import heroImg from '../assets/yash-hero.png';

const AboutYash = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const stats = [
        { label: "Years Active", value: "4+" },
        { label: "Products Launched", value: "3" },
        { label: "Lives Impacted", value: "50K+" },
        { label: "Community", value: "12K+" }
    ];

    return (
        <section ref={ref} className="py-24 px-6 bg-background overflow-hidden relative">
            {/* Background Gradient Element */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-white/5 to-transparent pointer-events-none" />

            <div className="max-w-7xl mx-auto">
                <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
                    {/* Left - Founder Image */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                        transition={{ duration: 0.6 }}
                        className="relative group order-2 md:order-1"
                    >
                        <div className="absolute inset-0 bg-accent/10 rounded-2xl transform translate-x-4 translate-y-4 -z-10 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-500"></div>
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10 opacity-60"></div>
                            <img
                                src={heroImg}
                                alt="Yash Kalra - Founder"
                                className="w-full h-[600px] object-cover object-center grayscale hover:grayscale-0 transition-all duration-700 transform hover:scale-105"
                            />
                        </div>
                    </motion.div>

                    {/* Right - Mission Narrative */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="order-1 md:order-2"
                    >
                        <div className="inline-block px-3 py-1 mb-6 border border-accent/30 rounded-full bg-accent/10 backdrop-blur-sm">
                            <span className="text-sm font-bold text-accent tracking-widest uppercase">The Mission</span>
                        </div>

                        <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-8 leading-tight">
                            Redefining nutrition for the <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">modern athlete.</span>
                        </h3>

                        <div className="space-y-6 text-lg text-secondary leading-relaxed mb-8">
                            <p>
                                I believe high performance shouldn't come at the cost of health or time.
                                In a world that demands speed, our fuel needs to keep up.
                            </p>
                            <p>
                                <strong className="text-white">GOAT LIFE</strong> was born from a personal frustration:
                                finding clean, convenient nutrition on the go was impossible. So, I built the solution.
                            </p>
                            <p>
                                We're not just creating products; we're engineering a lifestyle for those who refuse to settle.
                            </p>
                        </div>

                        {/* Signature Block */}
                        <div className="pt-6 border-t border-white/10 flex items-center gap-4">
                            <div className="h-12 w-12 rounded-full bg-gray-800 flex items-center justify-center text-accent font-bold text-xl border border-white/10">YK</div>
                            <div>
                                <p className="text-white font-semibold">Yash Kalra</p>
                                <p className="text-sm text-gray-500">Founder & CEO</p>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Bottom - Quick Stats */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="grid grid-cols-2 md:grid-cols-4 gap-8 bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10"
                >
                    {stats.map((stat, index) => (
                        <div key={index} className="text-center relative group">
                            {index !== stats.length - 1 && (
                                <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 w-px h-12 bg-white/10" />
                            )}
                            <div className="text-4xl md:text-5xl font-bold text-white mb-2 group-hover:text-accent transition-colors duration-300">{stat.value}</div>
                            <div className="text-sm text-gray-400 uppercase tracking-widest font-medium">{stat.label}</div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default AboutYash;
