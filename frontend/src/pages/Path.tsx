import { ReactNode, useState } from 'react';
import styles from './Path.module.css'
import { Select } from '@mantine/core';
import { useQueryStation } from '../queries/station';
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
  const color: string[] = ["blue", "green", "orange", "purple"];
  const showTransfer: ReactNode[] = [];
  let sum: number = 0;
  for (let i = 0; i < 4; i++) {
    sum += timeSchedule[i];
  }
  for (let i = 0; i < 4; i++) {
    showTransfer.push(
      <div style={{
        width: (timeSchedule[i] / sum) * 100 + "%",
        backgroundColor: color[i]
      }}></div>
    )
  }

  return (
    <div className={styles.container}>
      <div className={styles.station}>
        <Select className={styles.search}
          placeholder="Pick one"
          searchable
          data={stationNames}
          value={startValue}
          onChange={setStartValue}
        />
      </div>
      <div className={styles.path}>
        {showTransfer}
      </div>
      <div className={styles.station}>
        <Select className={styles.search}
          placeholder="Pick one"
          searchable
          data={stationNames}
          value={endValue}
          onChange={setEndValue}
        />
      </div>
    </div>
  )
}

export default Path;