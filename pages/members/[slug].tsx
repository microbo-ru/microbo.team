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
import MemberSection from '@components/member-section';
import Layout from '@components/layout';

import { getAllMembers } from '@lib/cms-api';
import { Member } from '@lib/types';
import { META_DESCRIPTION } from '@lib/constants';

type Props = {
  member: Member;
};

export default function MemberPage({ member }: Props) {
  const meta = {
    title: 'Demo - Virtual Event Starter Kit',
    description: META_DESCRIPTION
  };

  return (
    <Page meta={meta}>
      <Layout>
        <MemberSection member={member} />
      </Layout>
    </Page>
  );
}

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
  const slug = params?.slug;
  const members = await getAllMembers();
  const currentMember = members.find((m: Member) => m.slug === slug) || null;

  if (!currentMember) {
    return {
      notFound: true
    };
  }

  return {
    props: {
      member: currentMember
    },
    revalidate: 60
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const members = await getAllMembers();
  const slugs = members.map((m: Member) => ({ params: { slug: m.slug } }));

  return {
    paths: slugs,
    fallback: false
  };
};
