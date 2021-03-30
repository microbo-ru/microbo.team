/**
 * Copyright 2021 Microbo Inc.
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

import { GetStaticProps } from 'next';

import Page from '@components/page';
import MembersGrid from '@components/members-grid';
import Layout from '@components/layout';
import Header from '@components/header';

import { getAllMembers } from '@lib/cms-api';
import { Member } from '@lib/types';
import { META_DESCRIPTION } from '@lib/constants';

type Props = {
  members: Member[];
};

export default function Members({ members }: Props) {
  const meta = {
    title: 'Members - Microbo',
    description: META_DESCRIPTION
  };
  return (
    <Page meta={meta}>
      <Layout>
        <Header hero="Members" description={meta.description} />
        <MembersGrid members={members} />
      </Layout>
    </Page>
  );
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const members = await getAllMembers();

  return {
    props: {
      members
    },
    revalidate: 60
  };
};
