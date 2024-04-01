import Chip from "../Chip/Chip";
import Footer from "../Footer/Footer";
import { motion } from "framer-motion";


function Hero() {
    return (
        <>
            <div className="isolate px-6 lg:px-8 mb-44 bg">
                <div className="mx-auto max-w-2xl py-20 sm:py-48 lg:py-56">
                    <div className="text-center mt-20 sm:mt-5">
                        <motion.h1 initial="hidden" animate="visible" variants={{
                            hidden: {
                                scale: .8,
                                opacity: 0
                            },
                            visible: {
                                scale: .9,
                                opacity: 1,
                                transition: {
                                    delay: .6
                                }
                            }
                        }} className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl gradient-underlin medium-line dark:text-slate-50">21bubbles
                        </motion.h1>
                        <motion.p initial="hidden" animate="visible" variants={{
                            hidden: {
                                scale: .8,
                                opacity: 0
                            },
                            visible: {
                                scale: .9,
                                opacity: 1,
                                transition: {
                                    delay: .7
                                }
                            }
                        }} className="mt-6 font-semibold text-lg sm:text-xl leading-8 text-gray-500 dark:text-gray-400">Revolutionize Your Workflows with the Best <span className="font-bold bg-gradient-to-r from-pink-500 to-yellow-500 to-blue-500 text-transparent bg-clip-text"> Ai Tools</span> 🤖 at Your Fingertips.
                        </motion.p>
                    </div>
                </div>
                <div className="mouse_scroll"></div>
            </div>
            <Chip />
            <Footer />
        </>
    )
};

export default Hero;
