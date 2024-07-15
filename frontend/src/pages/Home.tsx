import { useState } from 'react';
import styles from './Home.module.css'
import { HiArrowLongRight } from "react-icons/hi2";
import { Select } from '@mantine/core';
import { TextInput } from '@mantine/core';
import { useQueryStation } from '../queries/station';

function Home() {
  const [startValue, setStartValue] = useState<string | null>('');
  const [endValue, setEndValue] = useState<string | null>('');
  const [time, setTime] = useState('');
  const station = useQueryStation();

  if (station.isPending) {
    return <div>로딩중..</div>;
  } else if (station.isError) {
    return <div>오류 발생..</div>;
  }

  const stationNamesSet = new Set();
  for (let i = 0; i < station.data.length; i++) {
    stationNamesSet.add(station.data[i].name);
  }
  const stationNames = Array.from(stationNamesSet);

  return (
    <div className={styles.box}>
      <div className={styles.title}>목적지를 설정하세요!</div>
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
        <div className={styles.center}><HiArrowLongRight /></div>
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
      <div>
        <TextInput
          label="Input Current Time"
          placeholder="XX:XX"
          className={styles.inputTime}
          value={time}
          onChange={(event) => setTime(event.currentTarget.value)}
        />
      </div>
    </div>

  )
}

export default Home