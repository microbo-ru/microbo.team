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
import { Sponsor, Member, Hack, Project } from '@lib/types';

import * as datoCmsApi from './cms-providers/dato';

let cmsApi: {
  getAllMembers: () => Promise<Member[]>;
  getAllHacks: () => Promise<Hack[]>;
  getAllSponsors: () => Promise<Sponsor[]>;
  getAllProjects: () => Promise<Project[]>
};

if (process.env.DATOCMS_READ_ONLY_API_TOKEN) {
  cmsApi = datoCmsApi;
} else {
  cmsApi = {
    getAllMembers: async () => [],
    getAllHacks: async () => [],
    getAllSponsors: async () => [],
    getAllProjects: async () => []
  };
}

export async function getAllMembers(): Promise<Member[]> {
  return cmsApi.getAllMembers();
}

/*
export async function getAllStages(): Promise<Stage[]> {
  return cmsApi.getAllStages();
}
*/

export async function getAllHacks(): Promise<Hack[]> {
  return cmsApi.getAllHacks();
}

export async function getAllSponsors(): Promise<Sponsor[]> {
  return cmsApi.getAllSponsors();
}

export async function getAllProjects(): Promise<Project[]> {
  return cmsApi.getAllProjects();
}
