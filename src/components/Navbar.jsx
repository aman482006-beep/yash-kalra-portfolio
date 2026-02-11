import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Instagram, Linkedin, Globe } from 'lucide-react';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const socialLinks = [
        { icon: Globe, url: "https://goatlife.co.in/", label: "Website" },
        { icon: Instagram, url: "https://www.instagram.com/yashkalraaa/", label: "Instagram" },
        { icon: Linkedin, url: "https://www.linkedin.com/in/yashkalra98/", label: "LinkedIn" }
    ];

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
                ? 'bg-neutral-900/95 backdrop-blur-md shadow-lg py-4 border-b border-neutral-800'
                : 'bg-transparent py-6'
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
                <button
                    onClick={() => scrollToSection('hero')}
                    className="text-2xl font-bold text-primary hover:text-accent transition-colors duration-300"
                >
                    YK
                </button>

                <div className="hidden md:flex items-center gap-8">
                    <div className="flex gap-6 mr-4">
                        {[
                            { name: 'Why', id: 'why' },
                            { name: 'Build', id: 'build' },
                            { name: 'Scale', id: 'scale' },
                            { name: 'Reach', id: 'reach' },
                            { name: 'Connect', id: 'connect' }
                        ].map((item) => (
                            <button
                                key={item.id}
                                onClick={() => scrollToSection(item.id)}
                                className="text-secondary hover:text-accent font-medium transition-colors duration-300"
                            >
                                {item.name}
                            </button>
                        ))}
                    </div>

                    <div className="flex items-center gap-4 pl-4 border-l border-gray-200">
                        {socialLinks.map((social) => (
                            <a
                                key={social.label}
                                href={social.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-secondary hover:text-accent hover:scale-110 transition-all duration-300 p-2 rounded-full hover:bg-gray-100/50"
                                aria-label={social.label}
                            >
                                <social.icon size={20} />
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </motion.nav>
    );
};

export default Navbar;
