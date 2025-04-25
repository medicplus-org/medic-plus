import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";

const IntroScreen = ({ onFinish }) => {
  const comp = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const t1 = gsap.timeline();

      t1.from("#intro-slider", {
        xPercent: "-100",
        duration: 1.3,
        delay: 0.3,
      })
        .from(["#title-1", "#title-2", "#title-3"], {
          opacity: 0,
          y: "+=30",
          stagger: 0.5,
        })
        .to(["#title-1", "#title-2", "#title-3"], {
          opacity: 0,
          y: "-=30",
          delay: 0.3,
          stagger: 0.5,
        })
        .to("#intro-slider", {
          xPercent: "-100",
          duration: 1.3,
        })
        .from("#welcome", {
          opacity: 0,
          duration: 0.5,
          onComplete: () => {
            setTimeout(() => {
              onFinish(); // Notify parent to hide intro
            }, 1000);
          },
        });
    }, comp);

    return () => ctx.revert();
  }, [onFinish]);

  return (
    <div className="relative z-50" ref={comp}>
      <div
        id="intro-slider"
        className="h-screen p-10 bg-gray-50 absolute top-0 left-0 w-full flex flex-col gap-10 tracking-tight"
      >
        <h1 id="title-1" className="text-6xl md:text-8xl">
          Find Doctors
        </h1>
        <h1 id="title-2" className="text-6xl md:text-8xl">
          Book Appointments
        </h1>
        <h1 id="title-3" className="text-6xl md:text-8xl">
          Stay Healthy
        </h1>
      </div>
      <div className="h-screen flex bg-gray-950 justify-center items-center">
        <h1
          id="welcome"
          className="text-5xl md:text-8xl font-bold text-green-500"
        >
          Welcome to MedicPlus
        </h1>
      </div>
    </div>
  );
};

export default IntroScreen;
