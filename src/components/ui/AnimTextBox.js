"use client";
import { motion } from "framer-motion";

export default function AnimatedTextBox({
    isOpen,
    onToggle,
    buttonComponent,
    children,
    borderColor = "border-white-800",
    maxWidth = "max-w-2xl",
}) {
    return (
        <>
            <motion.div
                layout="position"
                transition={{ layout: { duration: 1 } }}
                onClick={onToggle}
                style={{ cursor: "pointer" }}
            >
                {buttonComponent}
                {isOpen && (
                    <div className={`px-4 md:px-6 mx-auto my-5 ${maxWidth}`}>
                        <motion.div
                            layout="position"
                            transition={{ layout: { duration: 1 } }}
                            className={`font-monument shadow-xl border-2 ${borderColor} text-white text-center p-5 rounded-lg`}
                            style={{ cursor: "pointer" }}
                        >
                            {children}
                        </motion.div>
                    </div>
                )}
            </motion.div>
        </>
    );
}
