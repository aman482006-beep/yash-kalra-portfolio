import React from "react";

export default function GoatLogo({ className = "h-6" }) {
    return (
        <div className={`flex flex-col items-center justify-center leading-none select-none ${className}`}>
            {/* GOAT */}
            <div className="flex items-center tracking-tighter font-black text-2xl">
                <span className="text-white">G</span>
                <div className="mx-[1px] relative flex items-center justify-center">
                    <span className="text-[#FACC15] text-2xl relative z-10">O</span>
                </div>
                <span className="text-white">AT</span>
            </div>

            {/* LIFE */}
            <div className="text-white font-bold text-[8px] tracking-[0.2em] self-end -mt-1 mr-1">
                LIFE
            </div>
        </div>
    );
}
