import type { FC, JSX } from "react";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Logo.module.scss";
import clsx from "clsx";

const Logo: FC = (): JSX.Element => {
  const hoursRef = useRef<HTMLDivElement>(null);
  const minutesRef = useRef<HTMLDivElement>(null);
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const updateTime = (): void => setTime(new Date());

    const intervalId: NodeJS.Timeout = setInterval(updateTime, 60000);
    updateTime();

    return (): void => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    const hours: number = time.getHours() % 12;
    const minutes: number = time.getMinutes();

    const hoursDeg: number = 30 * hours + 0.5 * minutes;
    const minutesDeg: number = 6 * minutes;

    if (hoursRef.current) {
      hoursRef.current.style.transform = `translate(-50%, -50%) rotate(${hoursDeg}deg)`;
    }

    if (minutesRef.current) {
      minutesRef.current.style.transform = `translate(-50%, -50%) rotate(${minutesDeg}deg)`;
    }
  }, [time]);

  return (
    <Link data-testid="logo" to="/" className={styles.logo}>
      <div className={styles["logo-icon"]}>
        <div className={styles["logo-icon__hexagon"]}>
          <div
            data-testid="clock-hours"
            ref={hoursRef}
            className={clsx(
              styles["logo-icon__hours"],
              styles["logo-icon__clock"]
            )}
          ></div>
          <div
            data-testid="clock-minutes"
            ref={minutesRef}
            className={clsx(
              styles["logo-icon__minutes"],
              styles["logo-icon__clock"]
            )}
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
