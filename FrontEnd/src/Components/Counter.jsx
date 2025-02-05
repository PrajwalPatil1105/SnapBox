import { useState } from "react";
import styles from "../Styles/Counter.module.css";

function Counter() {
  const [count, setCount] = useState(0);
  const maxCount = 100;

  const getBackgroundLevel = () => {
    const level = (count / maxCount) * 100;
    return `linear-gradient(135deg, rgba(240, 147, 251, ${
      level / 100
    }), rgba(245, 87, 108, ${level / 100}))`;
  };

  return (
    <div className={styles.CounterPage}>
      <div
        className={styles.counterContainer}
        style={{ background: getBackgroundLevel() }}
      >
        <h2 className={styles.counterTitle}>Dynamic Counter</h2>
        <div className={styles.counterValue}>{count}</div>
        <div className={styles.counterButtons}>
          <button
            className={`${styles.counterBtn} ${styles.increment}`}
            onClick={() => setCount((prev) => Math.min(prev + 1, maxCount))}
          >
            +
          </button>
          <button
            className={`${styles.counterBtn} ${styles.reset}`}
            onClick={() => setCount(0)}
          >
            Reset
          </button>
          <button
            className={`${styles.counterBtn} ${styles.decrement}`}
            onClick={() => setCount((prev) => Math.max(prev - 1, 0))}
          >
            -
          </button>
        </div>
      </div>
    </div>
  );
}

export default Counter;
