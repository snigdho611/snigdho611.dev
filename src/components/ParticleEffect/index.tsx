import React from "react";
import Particles from "react-tsparticles";

const index = () => {
  return (
    <Particles
      id="tsparticles"
      options={{
        fpsLimit: 60,
        interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: "push",
            },
            onHover: {
              enable: true,
              mode: "bubble",
            },
            resize: true,
          },
          modes: {
            bubble: {
              distance: 100,
              duration: 20,
              opacity: 0.7,
              size: 7,
            },
            push: {
              quantity: 4,
            },
            repulse: {
              distance: 50,
              duration: 0.25,
            },
          },
        },
        particles: {
          color: {
            value: "#ffffff",
          },
          collisions: {
            enable: true,
          },
          move: {
            direction: "none",
            enable: true,
            outMode: "bounce",
            random: false,
            speed: 0.75,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 300,
          },
          opacity: {
            value: 0.35,
          },
          shape: {
            type: "circle",
          },
          size: {
            random: true,
            value: 3,
          },
        },
      }}
    />
  );
};

export default index;
