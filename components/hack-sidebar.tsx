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

import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { Hack } from '@lib/types';
import styles from './hack-sidebar.module.css';
import Select from './select';
import { SHORT_DATE } from '@lib/constants';
import MemberCard from '@components/member-card';

type Props = {
  allHacks: Hack[];
};

export default function HackSidebar({ allHacks }: Props) {
  const router = useRouter();
  const [currentHackSlug, setCurrentHackSlug] = useState(router.query.slug);
  const currentHack = allHacks.find((h: Hack) => h.slug === currentHackSlug);

  useEffect(() => {
    setCurrentHackSlug(router.query.slug);
  }, [router.query.slug]);

  return (
    <div className={styles.schedule}>
      <h3 className={styles.header}>Hack</h3>
      <Select
        aria-label="Select a hack"
        value={currentHackSlug}
        onChange={e => {
          const slug = e.target.value;
          setCurrentHackSlug(slug);
          router.push(`/hack/${slug}`);
        }}
      >
        {allHacks.map(hack => (
          <option key={hack.slug} value={hack.slug}>
            {hack.name}
          </option>
        ))}
      </Select>
      <p><strong>{currentHack?.where}, {currentHack?.year}</strong></p>

      <h3 className={styles.header}>Team</h3>
      <div className={styles.talks}>
        {currentHack?.team.map(member => (
          <MemberCard key={member.title} member={member} />
        ))}
      </div>
    </div>
  );
}
