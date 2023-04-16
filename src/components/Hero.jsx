import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5 `}
      >
        <div className="flex flex justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
          <div className="w-1 sm:h-80 h-40 violent-gradient" />
        </div>
        <div>
          <h1 className={`${styles.heroHeadText}text-white`}>
            Hi,I'm <span className="text-[#915eff]">Sahil</span>{" "}
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            A skilled data analyst passionate about extracting insights from
            complex datasets.
            <br className="sm:block hidden" /> I specialize in data analysis,
            visualization(seaborn, Tableau), and statistical modeling, using
            Python, and SQL as my primary tools.
          </p>
        </div>
        {/* ComputerCanvas */}
        <ComputersCanvas />
      </div>
    </section>
  );
};

export default Hero;
