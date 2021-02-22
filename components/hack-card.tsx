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
import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { parseISO, format, isBefore, isAfter } from 'date-fns';
import { Hack } from '@lib/types';
import styles from './hack-card.module.css';

type Props = {
  key: string;
  hack: Hack;
  showTime: boolean;
};

const formatDate = (date: string) => {
  // https://github.com/date-fns/date-fns/issues/946
  return format(parseISO(date), "h:mmaaaaa'm'");
};

export default function HackCard({ hack, showTime }: Props) {
  const [isTalkLive, setIsTalkLive] = useState(false);

  useEffect(() => {
    const now = Date.now();
  }, []);

  //const firstSpeakerLink = `/speakers/${speaker[0].slug}`;
  const firstSpeakerLink = `/speakers/AAA`;

  return (
    <div key={hack.slug + "-card-div"} className={styles.talk}>
      This is some text above
      <Link href={firstSpeakerLink}>
        <a
          className={cn(styles.card, {
            [styles['is-live']]: isTalkLive
          })}
        >
          <div key={hack.slug + "-card-body"} className={styles['card-body']}>
            <h4 key={hack.slug} title={hack.name} className={styles.title}>
              {hack.name}
            </h4>
            <div key={hack.slug + "-member-div"} className={styles.speaker}>
              <div key={hack.slug + "-member-group"} className={styles['avatar-group']}>
                {hack.team.map(s => (
                  <div key={s.slug} className={styles['avatar-wrapper']}>
                    <Image
                      loading="lazy"
                      alt={s.name}
                      className={styles.avatar}
                      src={s.image.url}
                      title={s.name}
                      width={24}
                      height={24}
                    />
                  </div>
                ))}
              </div>
              <h5 className={styles.name}>
                {hack.team.length === 1 ? hack.team[0].name : `${hack.team.length} members`}
              </h5>
            </div>
          </div>
        </a>
      </Link>
    </div>
  );
}
