import { motion } from "framer-motion";
import InteractiveHoverButton from "./ui/InteractiveHoverButton";
import heroImg from "../assets/yash-hero.png";

const Hero = () => {
    return (
        <section className="min-h-screen flex items-center px-6 py-20 bg-gradient-to-b from-muted to-background">

            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

                {/* LEFT — TEXT */}
                <motion.div
                    initial={{ opacity: 0, x: -40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1 className="text-5xl md:text-7xl font-bold text-primary mb-6 tracking-tight">
                        Yash Kalra
                    </h1>

                    <p className="text-xl md:text-2xl text-secondary mb-10 font-light">
                        Entrepreneur building{" "}
                        <span className="text-accent font-semibold">
                            GOAT LIFE
                        </span>{" "}
                        — Revolutionizing On-The-Go Nutrition through Innovation and Community
                    </p>

                    <InteractiveHoverButton
                        className="w-64 text-lg py-6"
                        onClick={() => document.getElementById('why')?.scrollIntoView({ behavior: 'smooth' })}
                    >
                        Explore the Journey
                    </InteractiveHoverButton>
                </motion.div>


                {/* RIGHT — IMAGE */}
                <motion.div
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="flex justify-center"
                >
                    <div className="relative p-[3px] rounded-3xl bg-gradient-to-tr from-purple-500/20 via-orange-400/20 to-yellow-400/20">

                        <img
                            src={heroImg}
                            alt="Yash Kalra"
                            className="
                rounded-3xl
                shadow-2xl
                object-cover
                max-h-[520px]
                hover:scale-[1.03]
                transition duration-500
              "
                        />

                    </div>
                </motion.div>

            </div>

        </section>
    );
};

export default Hero;
