// Terminal typing effect component with animation variants
import { motion } from "framer-motion";
import {
  typingAnimation,
  cursorBlink,
  progressBar,
  terminalContainer,
  backgroundPulse,
} from "@/lib/motionVariants";

const terminalCommands = [
  {
    text: "$ sudo ./spire_protocol_v2.sh --initialize --mode=elite",
    color: "text-green-300/90",
    delay: 0,
  },
  {
    text: "$ python3 elite_scanner.py --scan-candidates",
    color: "text-cyan-300/90",
    delay: 1.5,
  },
  {
    text: "$ ./verify_legend_status.exe --check-achievements",
    color: "text-blue-300/90",
    delay: 3,
  },
  {
    text: "$ access_granted: spire_completers_database",
    color: "text-purple-300/90",
    delay: 4.5,
  },
  {
    text: "$ node hall_of_fame_executor.js",
    color: "text-yellow-300/90",
    delay: 6,
  },
];

export function TerminalEffect() {
  return (
    <div className="absolute inset-0 z-5 pointer-events-none overflow-hidden">
      <motion.div
        {...terminalContainer}
        viewport={{ once: true }}
        className="absolute left-2 sm:left-4 md:left-6 top-1/2 transform -translate-y-1/2 text-green-400/90 font-mono text-xs sm:text-sm md:text-sm lg:text-base select-none max-w-[90vw] sm:max-w-[85vw] md:max-w-[80vw]"
      >
        <motion.div {...backgroundPulse} className="space-y-1 sm:space-y-2">
          {/* Terminal commands */}
          {terminalCommands.map((command, index) => (
            <motion.div
              key={index}
              {...typingAnimation(command.delay)}
              className="overflow-hidden whitespace-nowrap"
            >
              <span className={command.color}>{command.text}</span>
            </motion.div>
          ))}

          {/* Progress bar */}
          <motion.div
            {...typingAnimation(7.5)}
            className="overflow-hidden whitespace-nowrap"
          >
            <motion.span
              {...progressBar}
              className="inline-block text-green-300/70 bg-green-400/10 px-1 text-xs sm:text-sm"
            >
              [████████████████████████████] 100% COMPLETE
            </motion.span>
          </motion.div>
        </motion.div>

        {/* Blinking cursor */}
        <motion.span
          {...cursorBlink}
          className="text-green-400/90 text-sm md:text-lg font-bold ml-1"
        >
          _
        </motion.span>
      </motion.div>
    </div>
  );
}
