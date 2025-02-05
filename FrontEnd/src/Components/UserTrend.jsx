import React, { useState, useEffect } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";
import { motion } from "framer-motion";
import styles from "../Styles/UserTrend.module.css";

function UserTrend() {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("userData") || "[]");
    setUserData(data);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.8 } },
  };

  const formatTimestamp = (timestamp) => {
    const date = new Date(timestamp);
    return date.toLocaleDateString();
  };

  return (
    <div className={styles.ProfileTrendsPage}>
      {userData.length === 0 ? (
        <div className={styles.noDataContainer}>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className={styles.noDataMessage}
          >
            <h1>No User Data Found</h1>
            <p>Please create a user using the User Form in the Dashboard.</p>
          </motion.div>
        </div>
      ) : (
        <motion.div
          className={styles.userTrendContainer}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <h3 className={styles.chartTitle}>User Registration Trend</h3>
          <div className={styles.chartWrapper}>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={userData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="timestamp" tickFormatter={formatTimestamp} />
                <YAxis />
                <Tooltip
                  formatter={(value) => `${value}`}
                  labelFormatter={formatTimestamp}
                />
                <Line
                  type="monotone"
                  dataKey="name"
                  stroke="#8884d8"
                  dot={{ r: 6 }}
                  activeDot={{ r: 8 }}
                  animationDuration={1500}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>

          <h3 className={styles.tableTitle}>User Data Table</h3>
          <div className={styles.tableWrapper}>
            <table className={styles.userTable}>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Address</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>Timestamp</th>
                </tr>
              </thead>
              <tbody>
                {userData.map((user) => (
                  <tr key={user.id}>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.address}</td>
                    <td>{user.email}</td>
                    <td>{user.phone}</td>
                    <td>{formatTimestamp(user.timestamp)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      )}
    </div>
  );
}

export default UserTrend;
