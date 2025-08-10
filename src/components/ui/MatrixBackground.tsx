// Matrix rain background effect component
import { useEffect, useState } from "react";
import { motion, cubicBezier } from "framer-motion";
import { matrixFall } from "@/lib/motionVariants";
import { MATRIX_CONTAINER_CLASSES, MATRIX_COLUMN_CLASSES } from "@/lib/styles";

interface MatrixColumn {
  id: number;
  characters: string[];
  left: number;
  animationDelay: number;
  animationDuration: number;
}

export function MatrixBackground() {
  const [matrixColumns, setMatrixColumns] = useState<MatrixColumn[]>([]);

  useEffect(() => {
    // Generate matrix columns on client side only
    const columns = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      characters: Array.from({ length: 20 }, () =>
        String.fromCharCode(33 + Math.floor(Math.random() * 94))
      ),
      left: i * 2,
      animationDelay: Math.random() * 5,
      animationDuration: 3 + Math.random() * 4,
    }));
    setMatrixColumns(columns);
  }, []);

  return (
    <div className={MATRIX_CONTAINER_CLASSES}>
      <div className="absolute inset-0 opacity-20">
        {matrixColumns.map((column) => (
          <motion.div
            key={column.id}
            className={MATRIX_COLUMN_CLASSES}
            style={{
              left: `${column.left}%`,
            }}
            animate={matrixFall.animate}
            transition={{
              ...matrixFall.transition,
              delay: column.animationDelay,
              duration: column.animationDuration,
              ease: cubicBezier(0, 0, 1, 1),
            }}
          >
            {column.characters.map((char, j) => (
              <div key={j} className="opacity-70">
                {char}
              </div>
            ))}
          </motion.div>
        ))}
      </div>
    </div>
  );
}
