import { ReactNode, useState } from 'react';
import styles from './Path.module.css'
import { Select } from '@mantine/core';
import { useQueryStation } from '../queries/station';
import ShowPath from '../components/ShowPath';
function Path() {
  const [startValue, setStartValue] = useState<string | null>('');
  const [endValue, setEndValue] = useState<string | null>('');

  const station = useQueryStation();

  if (station.isPending) {
    return <div>로딩중..</div>;
  } else if (station.isError) {
    return <div>오류 발생..</div>;
  }

  const stationNamesSet = new Set<string>();
  for (let i = 0; i < station.data.length; i++) {
    stationNamesSet.add(station.data[i].name);
  }
  const stationNames = Array.from(stationNamesSet);
  const searchPath = () => {
    alert("test");
  };
  const timeSchedule: number[] = [4, 4, 8, 4];
  const timeSchedule2: number[] = [2, 5, 7, 3];
  const timeSchedule3: number[] = [4, 6, 20, 8];
  const timeSchedule4: number[] = [4, 4, 8, 4];
  const color: string[] = ["blue", "green", "orange", "purple"];
  const pathList: ReactNode[] = [];
  const displayTime: ReactNode[] = [];
  let sum: number = 0;
  for (let i = 0; i < 4; i++) {
    sum += timeSchedule[i];
  }


  return (
    <div className={styles.box}>
      <div className={styles.navigator}>
      </div>
      <div className={styles.title}>경로를 설정하세요!</div>
      <ShowPath
        stationNames={stationNames}
        startValue={startValue}
        setStartValue={setStartValue}
        endValue={endValue}
        setEndValue={setEndValue}
        num={timeSchedule.length}
        timeSchedule={timeSchedule}
        color={color}
      />
      <div className={styles.otherPath}>
        <ShowPath
          stationNames={stationNames}
          startValue={startValue}
          setStartValue={setStartValue}
          endValue={endValue}
          setEndValue={setEndValue}
          num={timeSchedule2.length}
          timeSchedule={timeSchedule2}
          color={color}
        />
      </div>
    </div>
  )
}

export default Path;