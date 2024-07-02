import { useState } from 'react';
import styles from './Home.module.css'
import { HiArrowLongRight } from "react-icons/hi2";
import { Select } from '@mantine/core';
import { TextInput } from '@mantine/core';

const station = ["구리역", "송탄역", "부평구청", "오산역"];

function Home() {
  const [startValue, setStartValue] = useState<string | null>('');
  const [endValue, setEndValue] = useState<string | null>('');
  const [time, setTime] = useState('');
  return (
    <div className={styles.box}>
      <div className={styles.title}>목적지를 설정하세요!</div>
      <div className={styles.container}>
        <div className={styles.station}>
          <Select className={styles.search}
            placeholder="Pick one"
            searchable
            data={station}
            value={startValue}
            onChange={setStartValue}
          />
        </div>
        <div className={styles.center}><HiArrowLongRight /></div>
        <div className={styles.station}>
          <Select className={styles.search}
            placeholder="Pick one"
            searchable
            data={station}
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