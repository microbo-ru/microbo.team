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
import { Job, Sponsor, Stage, Speaker, Member, Hack } from '@lib/types';

import * as agilityApi from './cms-providers/agility';
import * as datoCmsApi from './cms-providers/dato';
import * as contentfulApi from './cms-providers/contentful';
import * as prismicApi from './cms-providers/prismic';
import * as storyblokApi from './cms-providers/storyblok';

let cmsApi: {
  //getAllSpeakers: () => Promise<Speaker[]>;
  getAllMembers: () => Promise<Member[]>;
  //getAllStages: () => Promise<Stage[]>;
  getAllHacks: () => Promise<Hack[]>;
  getAllSponsors: () => Promise<Sponsor[]>;
  getAllJobs: () => Promise<Job[]>;
};

if (process.env.DATOCMS_READ_ONLY_API_TOKEN) {
  cmsApi = datoCmsApi;
} else if (process.env.CONTENTFUL_ACCESS_TOKEN && process.env.CONTENTFUL_SPACE_ID) {
  cmsApi = contentfulApi;
} else if (process.env.STORYBLOK_PREVIEW_TOKEN) {
  cmsApi = storyblokApi;
} else if (process.env.PRISMIC_REPO_ID) {
  cmsApi = prismicApi;
} else if (
  process.env.AGILITY_GUID &&
  process.env.AGILITY_API_FETCH_KEY &&
  process.env.AGILITY_API_PREVIEW_KEY
) {
  cmsApi = agilityApi;
} else {
  cmsApi = {
    //getAllSpeakers: async () => [],
    getAllMembers: async () => [],
    //getAllStages: async () => [],
    getAllHacks: async () => [],
    getAllSponsors: async () => [],
    getAllJobs: async () => []
  };
}

/*
export async function getAllSpeakers(): Promise<Speaker[]> {
  return cmsApi.getAllSpeakers();
}
*/

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

export async function getAllJobs(): Promise<Job[]> {
  return cmsApi.getAllJobs();
}
