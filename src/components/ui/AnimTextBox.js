"use client";
import { motion } from "framer-motion";

export default function AnimatedTextBox({
    isOpen,
    onToggle,
    buttonComponent,
    children,
    borderColor = "border-white-800",
    maxWidth = "w-[95%] max-w-10xl",
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
                    <div className={`mx-auto my-5 ${maxWidth}`}>
                        <motion.div
                            layout="position"
                            transition={{ layout: { duration: 1 } }}
                            className={`font-monument border border-black text-black text-center p-5 rounded-lg`}
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
