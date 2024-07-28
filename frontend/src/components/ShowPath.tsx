import { Select } from '@mantine/core';
import styles from './ShowPath.module.css'
import { ReactNode } from 'react';

interface Props {
  stationNames: string[];
  startValue: string | null;
  setStartValue: (startValue: string | null) => void;
  endValue: string | null;
  setEndValue: (startValue: string | null) => void;
  num: number;
  timeSchedule: number[];
  color: string[];
}

//추천 경로 보여주기
const ShowPath: React.FC<Props> = ({ stationNames, startValue, setStartValue, num, endValue, setEndValue, timeSchedule, color }) => {

  const pathList: ReactNode[] = [];
  const displayTime: ReactNode[] = [];
  let sum: number = 0;
  for (let i = 0; i < 4; i++) {
    sum += timeSchedule[i];
  }

  for (let i = 0; i < 4; i++) {
    pathList.push(
      <div style={{
        width: (timeSchedule[i] / sum) * 100 + "%",
        backgroundColor: color[i]
      }}></div>
    )
  }
  for (let i = 0; i < 4; i++) {
    displayTime.push(
      <div style={{
        width: (timeSchedule[i] / sum) * 100 + "%",
        textAlign: "center"
      }}>{timeSchedule[i] + "분"}</div>
    )
  }
  for (let i = 0; i < num; i++)
    return (
      <div className={styles.container}>
        <div className={styles.station}>방화</div>
        <div className={styles.pathContainer}>
          <div className={styles.path}>
            {pathList}
          </div>
          <div className={styles.pathText}>
            {displayTime}
          </div>
        </div>
        <div className={styles.station}>마곡</div>
      </div>
    )
};

export default ShowPath;