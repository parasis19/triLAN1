import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const Example = () => {
  return (
    <div className="bg-[#FFA726] text-white ">
      <div className="flex h-[5rem] items-center justify-center">
        <span className="text-center text-base font-semibold uppercase text-white">
          Portfolio
        </span>
      </div>
      <HorizontalScrollCarousel />
    </div>
  );
};

const HorizontalScrollCarousel = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 10%", "end 10%"] // trigger scroll when half visible
  });

  const x = useTransform(
    scrollYProgress,
    [0, 1,],
    ["0%", `-${(cards.length - 5) * 90}%`]
  );

  return (
    <section
      ref={ref}
      className="relative h-[100vh] bg-neutral-900"
    >
      <div className="sticky top-0 h-screen flex items-center overflow-hidden">
        <motion.div
          style={{ x }}
          className="flex gap-6 px-6 min-w-fit"
        >
          {cards.map((card) => (
            <Card key={card.id} card={card} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const Card = ({ card }) => {
  return (
    <div className="group relative h-[65vw] sm:h-[500px] w-[85vw] sm:w-[500px] flex-shrink-0 overflow-hidden bg-neutral-200 rounded-xl shadow-md">
      <div
        className="absolute inset-0 z-0 transition-transform duration-800 group-hover:scale-110"
        style={{
          backgroundImage: `url(${card.url})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="absolute inset-0 z-10 grid place-content-center px-2">
        <p className="text-center bg-gradient-to-br from-white/20 to-white/0 p-3 sm:p-4 text-xl sm:text-2xl font-black uppercase text-white backdrop-blur-md">
          {card.title}
        </p>
      </div>
    </div>
  );
};

export default Example;

const cards = [
  { url: "/imgs/abstract/1.jpg", title: "Title 1", id: 1 },
  { url: "/imgs/abstract/2.jpg", title: "Title 2", id: 2 },
  { url: "/imgs/abstract/3.jpg", title: "Title 3", id: 3 },
  { url: "/imgs/abstract/4.jpg", title: "Title 4", id: 4 },
  { url: "/imgs/abstract/5.jpg", title: "Title 5", id: 5 },
  { url: "/imgs/abstract/6.jpg", title: "Title 6", id: 6 },
  { url: "/imgs/abstract/7.jpg", title: "Title 7", id: 7 },
];
