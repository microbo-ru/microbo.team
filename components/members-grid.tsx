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

import Link from 'next/link';
import Image from 'next/image';
import { Member } from '@lib/types';
import styles from './members-grid.module.css';

type Props = {
  members: Member[];
};

export default function MembersGrid({ members }: Props) {
  return (
    <div className={styles.grid}>
      {members.map(member => (
        <Link key={member.name} href={`/members/${member.slug}`}>
          <a role="button" tabIndex={0} className={styles.card}>
            <div className={styles.imageWrapper}>
              <Image
                alt={member.name}
                src={member.image.url}
                className={styles.image}
                loading="lazy"
                quality="50"
                title={member.name}
                width={300}
                height={300}
              />
            </div>
            <div className={styles.cardBody}>
              <div>
                <h2 className={styles.name}>{member.name}</h2>
                <p className={styles.title}>
                  {`${member.title} @ `}
                  <span className={styles.company}>{member.company}</span>
                </p>
              </div>
            </div>
          </a>
        </Link>
      ))}
    </div>
  );
}
