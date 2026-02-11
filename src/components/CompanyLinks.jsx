import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Instagram, Linkedin } from 'lucide-react';
import GoatLogo from './ui/GoatLogo';

const CompanyLinks = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const links = [
        {
            name: "Goat Life",
            url: "https://goatlife.co.in/",
            icon: GoatLogo,
            label: "Goat Life Website"
        },
        {
            name: "Instagram",
            url: "https://www.instagram.com/yashkalraaa/",
            icon: Instagram,
            label: "Yash's Instagram"
        },
        {
            name: "LinkedIn",
            url: "https://www.linkedin.com/in/yashkalra98/",
            icon: Linkedin,
            label: "Yash's LinkedIn"
        }
    ];

    return (
        <section ref={ref} className="py-24 px-6 bg-background">
            <div className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                    transition={{ duration: 0.6 }}
                    className="bg-neutral-900 p-12 rounded-3xl shadow-xl border border-neutral-800"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 text-center">
                        Connect with Me
                    </h2>
                    <p className="text-neutral-400 text-center mb-10">
                        Follow the journey, join the community
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        {links.map((link, index) => (
                            <motion.a
                                key={link.name}
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                                transition={{ duration: 0.4, delay: index * 0.1 }}
                                whileHover={{ scale: 1.05, y: -5, backgroundColor: "rgba(38, 38, 38, 1)" }}
                                whileTap={{ scale: 0.95 }}
                                className="bg-neutral-800 px-8 py-4 rounded-full shadow-lg border border-neutral-700 hover:border-accent/50 transition-all duration-300 flex items-center gap-3 min-w-[200px] justify-center group"
                                aria-label={link.label}
                            >
                                {link.name === "Goat Life" ? (
                                    <div className="flex items-center justify-center w-full h-8">
                                        <link.icon className="h-full w-auto scale-[1.6]" />
                                    </div>
                                ) : (
                                    <>
                                        <div className="w-8 h-8 flex items-center justify-center">
                                            <link.icon className="text-white/80 group-hover:text-accent transition-colors w-6 h-6" />
                                        </div>
                                        <span className="font-semibold text-white/90 group-hover:text-white transition-colors">{link.name}</span>
                                    </>
                                )}
                            </motion.a>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default CompanyLinks;
