import { useEffect } from "react";

export default function FloatingBubbles() {
  useEffect(() => {
    const createBubble = () => {
      const bubble = document.createElement('div');
      bubble.className = 'bubble';
      bubble.style.left = Math.random() * 100 + '%';
      bubble.style.width = bubble.style.height = Math.random() * 20 + 10 + 'px';
      bubble.style.animationDelay = Math.random() * 8 + 's';
      document.body.appendChild(bubble);
      
      setTimeout(() => {
        if (bubble.parentNode) {
          bubble.remove();
        }
      }, 8000);
    };

    // Create bubbles periodically
    const interval = setInterval(createBubble, 3000);

    return () => {
      clearInterval(interval);
      // Clean up any remaining bubbles
      const bubbles = document.querySelectorAll('.bubble');
      bubbles.forEach(bubble => bubble.remove());
    };
  }, []);

  return null;
}
