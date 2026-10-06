import { ReactLenis } from "lenis/react";
import "lenis/dist/lenis.css";

/**
 * A wrapper component that provides a smooth, inertial scrolling experience.
 * It uses Lenis to create a fluid scroll effect with subtle deceleration,
 * similar to high-end websites.
 *
 * @param {object} props - The component props.
 * @param {React.ReactNode} props.children - The child components to be rendered within the smooth scroll container.
 */
function SmoothScroll({ children }) {
  const options = {
    lerp: 0.08, // Adjust this value for more or less smoothness. Lower is smoother.
    syncTouch: true, // Mimics the smooth scroll effect on touch devices.
  };

  // The `root` prop applies the smooth scroll to the entire page (<html>).
  return <ReactLenis root options={options}>{children}</ReactLenis>;
}

export default SmoothScroll;