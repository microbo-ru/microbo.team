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
import styleUtils from './utils.module.css';
import styles from './hack-entry.module.css';
import { Hack } from '@lib/types';
import GithubIcon from '@components/icons/icon-github';

type Props = {
  hack: Hack;
};

export default function HackEntry({ hack }: Props) {

  return (
    <div className={cn(styles.container, styleUtils.appear, styleUtils['appear-first'])}>
      <h1 className={cn(styles.hero)}>{hack.name}.</h1>
      <h2 className={cn(styles.description)}>Here awesome details about Hack project will go</h2>
      { /* TODO: provide short details here */ }
      {/*<h2 className={cn(styles. description)}>
        <a
          aria-label="GitHub"
          className={styles.githubIcon}
          href={hack.link.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          <GithubIcon color="#D8D8D8" size={24} />
        </a>
      </h2>*/}
    </div>
  );
}
