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
import { Member } from '@lib/types';
import styles from './member-card.module.css';

type Props = {
  key: string;
  member: Member;
};

export default function MemberCard({ member }: Props) {

  const memberLink = `/members/${member.slug}`;

  return (
    <div key={member.name} className={styles['header-name']}>
      <Link href={memberLink}>
        <a
          className={cn(styles.card)}
        >
          <div className={styles['card-body']}>
            <h4 title={member.title} className={styles.title}>
              {member.title}
            </h4>
            <div className={styles.member}>
              <div className={styles['avatar-group']}>
                <div key={member.name} className={styles['avatar-wrapper']}>
                  <Image
                    loading="lazy"
                    alt={member.name}
                    className={styles.avatar}
                    src={member.image.url}
                    title={member.name}
                    width={24}
                    height={24}
                  />
                </div>
              </div>
              <h5 className={styles.name}>
                { member.name }
              </h5>
            </div>
          </div>
        </a>
      </Link>
    </div>
  );
}
