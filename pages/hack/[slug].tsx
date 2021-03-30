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

import { GetStaticProps, GetStaticPaths } from 'next';

import Page from '@components/page';
import Layout from '@components/layout';
import HackContainer from '@components/hack-container';

import { getAllHacks } from '@lib/cms-api';
import { Hack } from '@lib/types';
import { META_DESCRIPTION } from '@lib/constants';

type Props = {
  hack: Hack;
  allHacks: Hack[];
};

export default function HackPage({ hack, allHacks }: Props) {
  const meta = {
    title: 'Demo - Virtual Event Starter Kit',
    description: META_DESCRIPTION
  };

  return (
    <Page meta={meta} fullViewport>
      <Layout>
        <HackContainer hack={hack} allHacks={allHacks} />
      </Layout>
    </Page>
  );
}

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
  const slug = params?.slug;
  const hacks = await getAllHacks();
  const hack = hacks.find((h: Hack) => h.slug === slug) || null;

  if (!hack) {
    return {
      notFound: true
    };
  }

  return {
    props: {
      hack,
      allHacks: hacks
    },
    revalidate: 60
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const hacks = await getAllHacks();
  const slugs = hacks.map((h: Hack) => ({ params: { slug: h.slug } }));

  return {
    paths: slugs,
    fallback: false
  };
};
