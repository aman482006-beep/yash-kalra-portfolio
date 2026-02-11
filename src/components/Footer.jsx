import { Instagram, Linkedin, Globe } from 'lucide-react';

const Footer = () => {
    const socialLinks = [
        { icon: Globe, url: "https://goatlife.co.in/", label: "Website" },
        { icon: Instagram, url: "https://www.instagram.com/yashkalraaa/", label: "Instagram" },
        { icon: Linkedin, url: "https://www.linkedin.com/in/yashkalra98/", label: "LinkedIn" }
    ];

    return (
        <footer className="bg-background text-foreground py-12 px-6 border-t border-border">
            <div className="max-w-6xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                    <div className="text-center md:text-left">
                        <h3 className="text-2xl font-bold mb-2">Yash Kalra × GOAT LIFE</h3>
                    </div>

                    <div className="flex gap-6">
                        {socialLinks.map((social) => (
                            <a
                                key={social.label}
                                href={social.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-neutral-400 hover:text-accent hover:scale-110 transition-all duration-300"
                                aria-label={social.label}
                            >
                                <social.icon size={24} />
                            </a>
                        ))}
                    </div>
                </div>

                {/* Disclaimer removed as per request */}
            </div>
        </footer>
    );
};

export default Footer;
