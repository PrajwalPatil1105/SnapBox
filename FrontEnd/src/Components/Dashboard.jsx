import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import styles from "../Styles/Dashboard.module.css";
import { User } from "lucide-react";

function Dashboard() {
  const navigate = useNavigate();
  const [userName, setUserName] = useState("");

  useEffect(() => {
    const FinisherHeader = window.FinisherHeader;

    new FinisherHeader({
      count: 17,
      size: {
        min: 2,
        max: 40,
        pulse: 0,
      },
      speed: {
        x: {
          min: 0.5,
          max: 0.5,
        },
        y: {
          min: 0,
          max: 0.2,
        },
      },
      colors: {
        background: "#121212",
        particles: [
          "#ff926b",
          "#87ddfe",
          "#acaaff",
          "#1bffc2",
          "#f9a5fe",
          "#2ffff4",
        ],
      },
      blending: "screen",
      opacity: {
        center: 1,
        edge: 1,
      },
      skew: 0,
      shapes: ["c", "s", "t"],
    });

    const userInfo = JSON.parse(localStorage.getItem("userinfo"));
    if (userInfo && userInfo.name) {
      setUserName(userInfo.name);
    }
  }, []);

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  };

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <div className={styles.dashboardBackground}>
      <div id="dashboard-header"></div>
      <div className={styles.dashboardContainer}>
        <div className={styles.userProfile}>
          <User />
          <span>{userName || "User"}</span>
        </div>
        <motion.div
          className={styles.gridContainer}
          initial="hidden"
          animate="visible"
          variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
        >
          <motion.div
            className={styles.card}
            variants={cardVariants}
            data-hover-text={`Tap to open "Counter"`}
            onClick={() => handleNavigation("/counter")}
          >
            <h3>Counter</h3>
          </motion.div>

          <motion.div
            className={styles.card}
            variants={cardVariants}
            data-hover-text={`Tap to open "Rich Text Editor"`}
            onClick={() => handleNavigation("/editor")}
          >
            <h3>Rich Text Editor</h3>
          </motion.div>

          <motion.div
            className={styles.card}
            variants={cardVariants}
            data-hover-text={`Tap to open "User Data Form"`}
            onClick={() => handleNavigation("/userform")}
          >
            <h3>User Data Form</h3>
          </motion.div>

          <motion.div
            className={styles.card}
            variants={cardVariants}
            data-hover-text={`Tap to open "User Trends"`}
            onClick={() => handleNavigation("/usertrend")}
          >
            <h3>User Profile Trends</h3>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export default Dashboard;
