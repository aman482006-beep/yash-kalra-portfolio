import GlowingEffect from "./GlowingEffect";
import { Star } from "lucide-react";

export default function TestimonialCard({ author, text, rating, index }) {

    if (!author) return null;

    const gradients = [
        "from-pink-500 to-orange-400",
        "from-blue-500 to-purple-500",
        "from-green-400 to-teal-500",
        "from-yellow-400 to-red-500",
        "from-indigo-500 to-cyan-500"
    ];

    const gradient = gradients[index % gradients.length];

    return (
        <li className="list-none">

            <GlowingEffect className="rounded-2xl">

                <div className="flex flex-col gap-4 p-6 bg-card rounded-2xl border border-border">

                    <div className="flex items-center gap-4">

                        <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${gradient} flex items-center justify-center text-white font-bold`}>
                            {author.avatar}
                        </div>

                        <div>
                            <div className="font-semibold text-card-foreground">
                                {author.name}
                            </div>

                            <div className="text-sm text-muted-foreground">
                                {author.handle}
                            </div>
                        </div>

                    </div>

                    <div className="flex gap-1">
                        {[...Array(5)].map((_, i) => (
                            <Star
                                key={i}
                                size={16}
                                className={
                                    i < rating
                                        ? "text-yellow-400 fill-yellow-400"
                                        : "text-muted"
                                }
                            />
                        ))}
                    </div>

                    <p className="text-muted-foreground">
                        {text}
                    </p>

                </div>

            </GlowingEffect>

        </li>
    );
}
