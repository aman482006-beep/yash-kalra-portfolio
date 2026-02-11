import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const AboutGoatLife = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section ref={ref} className="py-24 px-6 bg-gradient-to-b from-background to-highlight">
            <div className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-5xl md:text-6xl font-bold text-primary mb-8">
                        About GOAT LIFE
                    </h2>

                    <div className="space-y-6 text-lg text-secondary leading-relaxed">
                        <p className="text-xl text-primary font-semibold">
                            A nutrition-focused consumer brand reimagining how people fuel their lives.
                        </p>

                        <p>
                            GOAT LIFE launched with a bold product: <span className="text-accent font-semibold">drinkable oatmeal</span> —
                            a convenient, nutritious solution for people who refuse to compromise on health despite busy schedules.
                        </p>

                        <div
                            className="p-8 rounded-2xl shadow-lg my-8 border-l-4 border-accent border-y border-r border-y-neutral-800 border-r-neutral-800"
                            style={{ backgroundColor: "#171717" }} >
                            <h3 className="text-2xl font-bold text-white mb-4">The GOAT LIFE Difference</h3>
                            <ul className="space-y-3">
                                <li className="flex items-start">
                                    <span className="text-accent mr-3 text-2xl">✓</span>
                                    <span><strong className="text-white">Quick Commerce Distribution:</strong> Available where you need it, when you need it</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-accent mr-3 text-2xl">✓</span>
                                    <span><strong className="text-white">Experimental Marketing:</strong> Grassroots campaigns that break traditional molds</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-accent mr-3 text-2xl">✓</span>
                                    <span><strong className="text-white">Community-First:</strong> Built with input from real users, not boardrooms</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-accent mr-3 text-2xl">✓</span>
                                    <span><strong className="text-white">Transparent Journey:</strong> Every win, every challenge shared openly</span>
                                </li>
                            </ul>
                        </div>

                        <p>
                            GOAT LIFE isn't just selling a product — it's building a movement around
                            accessible nutrition and authentic entrepreneurship.
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default AboutGoatLife;
