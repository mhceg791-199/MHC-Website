import { useEffect, useState } from "react";

export default function useSmoothProgress(trigger, duration = 1500) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (!trigger) return;

    let start = null;

    const animate = (timestamp) => {
      if (!start) start = timestamp;
      const progressTime = timestamp - start;

      const newProgress = Math.min((progressTime / duration) * 100, 100);
      setProgress(newProgress);

      if (newProgress < 100) requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  }, [trigger]);

  return progress;
}
