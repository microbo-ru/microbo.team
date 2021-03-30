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

import { GetStaticProps } from 'next';

import Page from '@components/page';
import ProjectsGrid from '@components/projects-grid';
import Layout from '@components/layout';
import Header from '@components/header';

import { getAllProjects } from '@lib/cms-api';
import { Project } from '@lib/types';
import { META_DESCRIPTION } from '@lib/constants';

type Props = {
  projects: Project[];
};

export default function Projects({ projects }: Props) {
  const meta = {
    title: 'Career Fair - Virtual Event Starter Kit',
    description: META_DESCRIPTION
  };

  return (
    <Page meta={meta}>
      <Layout>
        <Header hero="Projects Showcase" description={meta.description} />
        <ProjectsGrid projects={projects} />
      </Layout>
    </Page>
  );
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const projects = await getAllProjects();

  return {
    props: {
      projects
    },
    revalidate: 60
  };
};
