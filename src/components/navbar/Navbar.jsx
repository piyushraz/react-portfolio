import Sidebar from "../sidebar/Sidebar";
import "./navbar.css";
import { motion } from "framer-motion";

const Navbar = () => {
  const text = "******";
  const textArray = text.split("");

  return (
    <div className="navbar">
        <Sidebar/>
        <div className="wrapper">
            {textArray.map((char, index) => (
                <motion.span 
                    key={index}
                    initial={{ width: 0, overflow: 'hidden' }}
                    animate={{ width: 'auto' }}
                    transition={{ delay: index * 0.1, duration: 0.1, type: 'tween' }}
                    style={{ display: 'inline-block' }}>
                    {char}
                </motion.span>
            ))}
            <div className="socials">
                <a href="https://www.linkedin.com/in/piyushrazdan/"><img src="/Linkedin.png" alt="LinkedIn"/></a>
                <a href="https://github.com/piyushraz"><img src="/github.png" alt="GitHub"/></a>
                <a href="#"><img src="/youtube.png" alt="YouTube"/></a>
                <a href="#"><img src="/dribbble.png" alt="Dribbble"/></a>
            </div>
        </div>
    </div>
  );
};

export default Navbar;
