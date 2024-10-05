import Logo from "../Images/Spany.png";
import { Link } from "react-router-dom";
import { IconBrandGithub, IconBrandYoutube } from "@tabler/icons-react";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import User from "../Data/profile.js";

const Hero = () => {
  return (
    <div className="flex items-center justify-center min-h-screen px-4 md:px-12">
      <div className="flex flex-col lg:flex-row items-center justify-center w-full">
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="text-center lg:text-left lg:mr-8 mb-8 lg:mb-0"
        >
          <h1
            style={{ fontFamily: "Heebo, sans-serif", fontWeight: 700 }}
            className="font-bold text-2xl md:text-3xl lg:text-4xl"
          >
            Merhaba, ben {User.name},
            <br />
            <span className="text-orange-500">
              <Typewriter
                words={['Web Developer', 'Content Creator', "Discord Bot Developer"]}
                loop={true}
                cursor
                cursorStyle="|"
                typeSpeed={30}
                deleteSpeed={30}
                delaySpeed={3000}
              />
            </span>
          </h1>
          <p
            style={{ fontFamily: "Heebo, sans-serif", fontWeight: 400 }}
            className="mt-2 text-sm md:text-base lg:text-lg max-w-lg"
          >
            {User.description}
          </p>
          <div className="flex justify-center lg:justify-start mt-3 space-x-2">
            <Link
              to={`https://github.com/${User.github}`}
              className="inline-block hover:text-orange-500"
            >
              <IconBrandGithub size={30} />
            </Link>
            <Link
              to={`https://youtube.com/@${User.youtube}`}
              className="inline-block hover:text-red-500"
            >
              <IconBrandYoutube size={30} />
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ scale: 0.5, x: 0, opacity: 0 }}
          animate={{ scale: 1, x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="flex justify-center"
        >
          <img
            className="rounded-full w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 object-cover"
            src={User.ProfileLogo}
            alt="Spany"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
