import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const CampaignShowcase = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const campaigns = [
        {
            title: "Gym Floor Activations",
            description: "Direct engagement with fitness enthusiasts where they train",
            impact: "10K+ samples distributed"
        },
        {
            title: "College Campus Blitz",
            description: "Building brand awareness among health-conscious students",
            impact: "25+ campuses reached"
        },
        {
            title: "Social Media Challenges",
            description: "Community-driven content creating authentic brand advocates",
            impact: "1M+ organic impressions"
        },
        {
            title: "Quick Commerce Partnerships",
            description: "Strategic placement in high-traffic delivery platforms",
            impact: "150+ locations live"
        },
        {
            title: "Influencer Collaborations",
            description: "Authentic partnerships with micro and macro fitness creators",
            impact: "500K+ combined reach"
        },
        {
            title: "Pop-up Experiences",
            description: "Immersive brand experiences in high-footfall areas",
            impact: "15+ successful events"
        }
    ];

    return (
        <section ref={ref} className="py-24 px-6 bg-gradient-to-b from-highlight to-background">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-5xl md:text-6xl font-bold text-primary mb-4 text-center">
                        Marketing & Campaigns
                    </h2>
                    <p className="text-xl text-secondary text-center mb-16 max-w-2xl mx-auto">
                        Experimental, grassroots, and community-driven growth
                    </p>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {campaigns.map((campaign, index) => (
                            <motion.div
                                key={campaign.title}
                                initial={{ opacity: 0, y: 30 }}
                                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                                className="bg-neutral-900 p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer border border-neutral-800 group"
                            >
                                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-accent transition-colors">{campaign.title}</h3>
                                <p className="text-neutral-400 mb-4 text-sm leading-relaxed">{campaign.description}</p>
                                <div className="text-accent font-semibold text-sm">{campaign.impact}</div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default CampaignShowcase;
