/**
 * Copyright 2021 Microbo
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import cn from 'classnames';
import { Hack, Member, Talk } from '@lib/types';
import styles from './schedule.module.css';
import HackCard from '@components/hack-card';

type ByYearProps = {
  year: string;
  hacks: Hack[];
};

function YearRow({ year, hacks }: ByYearProps) {
  return (
    <div key={year + "-row"} className={styles.row}>
      <h3 key={year + "-h3"} className={cn(styles['year'], styles[year])}>
        <span>{year}</span>
      </h3>
      <div key={year + "-hacks-div"} className={cn(styles.hacks, styles[year])}>
        {hacks.map(hack => (
          <div key={hack.slug + "-wrapper-div"}>
            <HackCard key={hack.slug} hack={hack} showTime={hack.year > 2019} />
          </div>
        ))}
      </div>
    </div>
  );
}

type ScheduleProps = {
  allHacks: Hack[];
};

function compareNumbersDesc(a, b) {
  return b - a;
}

export default function Schedule({ allHacks }: ScheduleProps) {
  // Group hacks by year
  const yearBlocks = allHacks.reduce((byYear: any, hack) => {
    byYear[hack.year] = [...(byYear[hack.year] || []), hack];
    return byYear;
  }, {});

  return (
    <div className={styles.container}>
      <div className={styles['row-wrapper']}>
        {Object.keys(yearBlocks).sort(compareNumbersDesc).map(year => (
          <YearRow key={year + "-yearrow"} year={year} hacks={yearBlocks[year]} />
        ))}
      </div>
    </div>
  );
}
