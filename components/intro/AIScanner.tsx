"use client";

import { motion } from "framer-motion";

export default function AIScanner() {
    return (
        <div className="relative w-[30%] border-l border-cyan-900 bg-[#08111f] overflow-hidden">

            {/* Moving Scan Line */}

            <motion.div
                animate={{
                    y: ["-100%", "120%"],
                }}
                transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "linear",
                }}
                className="absolute inset-x-0 h-12 bg-cyan-400/10 blur-md"
            />

            <div className="p-5 font-mono text-xs text-cyan-300 space-y-3">

                <div className="text-cyan-400 font-semibold">
                    AI SCANNER
                </div>

                <div className="flex items-center gap-2">
                    <motion.div
                        animate={{
                            opacity: [0.3, 1, 0.3],
                        }}
                        transition={{
                            repeat: Infinity,
                            duration: 1.2,
                        }}
                        className="w-2 h-2 rounded-full bg-green-400"
                    />

                    ACTIVE
                </div>

                <div>
                    Repository
                </div>

                <div className="w-full h-2 bg-slate-700 rounded">

                    <motion.div
                        animate={{
                            width: ["10%", "90%", "40%", "100%"],
                        }}
                        transition={{
                            repeat: Infinity,
                            duration: 6,
                        }}
                        className="h-full rounded bg-cyan-400"
                    />

                </div>

                <div>Parsing Files...</div>

                <div>Generating Embeddings...</div>

                <div>Indexing Symbols...</div>

                <div>Finding Relations...</div>

                <div className="pt-4 text-green-400">
                    BOT STATUS
                </div>

                <motion.div
                    animate={{
                        opacity: [0.5, 1, 0.5],
                    }}
                    transition={{
                        repeat: Infinity,
                        duration: 1,
                    }}
                >
                    🤖 Agent-01 Scanning
                </motion.div>

                <motion.div
                    animate={{
                        opacity: [1, 0.3, 1],
                    }}
                    transition={{
                        repeat: Infinity,
                        duration: 1.4,
                    }}
                >
                    🤖 Agent-02 Mapping
                </motion.div>

                <motion.div
                    animate={{
                        opacity: [0.2, 1, 0.2],
                    }}
                    transition={{
                        repeat: Infinity,
                        duration: 1.8,
                    }}
                >
                    🤖 Agent-03 Learning
                </motion.div>

            </div>

        </div>
    );
}