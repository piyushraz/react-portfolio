import "./first.css";
import { motion } from "framer-motion";

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};

const sliderVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-500%",
    transition: {
      repeat: Infinity,
      repeatType: "mirror",
      duration: 20,
    },
  },
};

const First = () => {
  const handleViewResume = () => {
    window.open('/resume.pdf', '_blank');
  };

  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'Piyush_Razdan_Resume.pdf'; // Specify the download file name here
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="first">
      <div className="wrapper">
        <div className="txtcontainer">
          <h2>PIYUSH RAZDAN</h2>
          <h1>Software Engineer</h1>
          <div className="buttons">
            <button onClick={handleViewResume}>View Resume</button>
            <button onClick={handleDownloadResume}>Download Resume</button>
          </div>
          <motion.img variants={textVariants} animate="scrollButton" src="/move.png"/>
        </div>
      </div>
      <motion.div className="slidingTextContainer" variants={sliderVariants} initial="initial" animate="animate">
        Welcome To My Portfolio
      </motion.div>
      <div className="imagecontainer">
        <img src="/icon.png"/>
      </div>
    </div>
  );
}

export default First;
