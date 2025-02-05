import React, { useEffect } from "react";
import styles from "../Styles/LandingPage.module.css";
import { useNavigate } from "react-router";
import { motion } from "framer-motion";

const LandingPage = () => {
  useEffect(() => {
    const FinisherHeader = window.FinisherHeader;
    new FinisherHeader({
      count: 3,
      size: {
        min: 1300,
        max: 1500,
        pulse: 0,
      },
      speed: {
        x: {
          min: 0.1,
          max: 2.6,
        },
        y: {
          min: 0.1,
          max: 2.2,
        },
      },
      colors: {
        background: "#121212",
        particles: ["#86206e", "#ad3434", "#ad3434"],
      },
      blending: "overlay",
      opacity: {
        center: 0.05,
        edge: 0.1,
      },
      skew: 0,
      shapes: ["c"],
    });
  }, []);

  const navigate = useNavigate();
  return (
    <div className={styles.land}>
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className={styles.textSection}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5 }}
          className={styles.imageSection}
        >
          <img
            src="./Images/Logo.png"
            alt="Cooking Device"
            className={styles.image}
          />
        </motion.div>

        <h1>
          Now, <span className={styles.highlight}>everyone</span> can{" "}
          <span className={styles.highlight}>cook</span> everything
        </h1>
        <div className={styles.buttons}>
          <motion.button
            whileHover={{ scale: 1.05 }}
            className={styles.buttonPrimary}
            onClick={() => navigate("/Signup")}
          >
            View Assignment
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
};

export default LandingPage;
