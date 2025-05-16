import React, { useEffect, useState } from "react";

const CountUpWithSuffix = ({ end, suffix = "", duration = 2000, startCount }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!startCount) return; // start count only if triggered by scroll

    let start = 0;
    const increment = end / (duration / 50);
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 50);

    return () => clearInterval(timer);
  }, [end, duration, startCount]);

  return (
    <div className="text-4xl font-semibold">
      {count}
      {suffix}
    </div>
  );
};

const Counter = () => {
  const [countStarted, setCountStarted] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!countStarted) {
        const element = document.getElementById("counter-section");
        if (!element) return;

        const rect = element.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        // Check if the counter section is visible (adjust threshold as needed)
        if (rect.top <= windowHeight * 0.8) {
          setCountStarted(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Check immediately in case already visible
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [countStarted]);

  return (
    <div
      id="counter-section"
      className="text-white lg:mt-[125px] md:mt-[115px] mt-[110px] py-8 flex lg:flex-row flex-col  items-center gap-3.5 justify-between text-center"
    >
      <h2 className="lg:text-5xl md:text-4xl text-3xl font-semibold mb-6">Our Achievements</h2>
      <div className="grid grid-cols-2 md:grid-cols-2 gap-6">
        <div>
          <CountUpWithSuffix end={500} suffix="+" startCount={countStarted} />
          <span className="text-sm">Global Happy Clients</span>
        </div>
        <div>
          <CountUpWithSuffix end={2} suffix="K+" startCount={countStarted} />
          <span className="text-sm">Complete Projects</span>
        </div>
        <div>
          <CountUpWithSuffix end={12} suffix="+" startCount={countStarted} />
          <span className="text-sm">Team Members</span>
        </div>
        <div>
          <CountUpWithSuffix end={95} suffix="%" startCount={countStarted} />
          <span className="text-sm">Repeat Client</span>
        </div>
      </div>
    </div>
  );
};

export default Counter;
