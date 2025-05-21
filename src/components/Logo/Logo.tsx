import type { FC, JSX } from "react";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router";
import styles from "./Logo.module.scss";

const Logo: FC = (): JSX.Element => {
  const hoursRef = useRef<HTMLDivElement>(null);
  const minutesRef = useRef<HTMLDivElement>(null);
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const updateTime = () => setTime(new Date());

    const intervalId = setInterval(updateTime, 60000);
    updateTime();

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    const hours = time.getHours() % 12;
    const minutes = time.getMinutes();

    const hoursDeg = 30 * hours + 0.5 * minutes;
    const minutesDeg = 6 * minutes;

    if (hoursRef.current) {
      hoursRef.current.style.transform = `translate(-50%, -50%) rotate(${hoursDeg}deg)`;
    }

    if (minutesRef.current) {
      minutesRef.current.style.transform = `translate(-50%, -50%) rotate(${minutesDeg}deg)`;
    }
  }, [time]);

  return (
    <Link to="/" className={styles.logo}>
      <div className={styles["logo-icon"]}>
        <div className={styles["logo-icon__hexagon"]}>
          <div
            ref={hoursRef}
            className={`${styles["logo-icon__hours"]} ${styles["logo-icon__clock"]}`}
          ></div>
          <div
            ref={minutesRef}
            className={`${styles["logo-icon__minutes"]} ${styles["logo-icon__clock"]}`}
          ></div>
        </div>
      </div>
      <p className={styles["logo__name"]}>
        Shiftrix <span>v2.0</span>
      </p>
    </Link>
  );
};

export default Logo;
