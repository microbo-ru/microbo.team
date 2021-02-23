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
import { Sponsor, Stage, Speaker, Member, Hack, Project } from '@lib/types';

const API_URL = 'https://graphql.datocms.com/';
const API_TOKEN = process.env.DATOCMS_READ_ONLY_API_TOKEN;

async function fetchCmsAPI(query: string, { variables }: { variables?: Record<string, any> } = {}) {
  const res = await fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${API_TOKEN}`
    },
    body: JSON.stringify({
      query,
      variables
    })
  });

  const json = await res.json();
  if (json.errors) {
    // eslint-disable-next-line no-console
    console.error(json.errors);
    throw new Error('Failed to fetch API');
  }

  return json.data;
}

export async function getAllSpeakers(): Promise<Speaker[]> {
  const data = await fetchCmsAPI(`
    {
      allSpeakers(first: 100) {
        name
        bio
        title
        slug
        twitter
        github
        company
        talk {
          title
          description
        }
        image {
          url(imgixParams: {fm: jpg, fit: crop, w: 300, h: 400})
        }
        imageSquare: image {
          url(imgixParams: {fm: jpg, fit: crop, w: 192, h: 192})
        }
      }
    }
  `);

  return data.allSpeakers;
}

export async function getAllMembers(): Promise<Member[]> {
  const data = await fetchCmsAPI(`
    {
      allMembers(first: 100) {
        name
        bio
        title
        slug
        twitter
        github
        image {
          url(imgixParams: {fm: jpg, fit: crop, w: 300, h: 400})
        }
        imageSquare: image {
          url(imgixParams: {fm: jpg, fit: crop, w: 192, h: 192})
        }
        skills {
          slug
          text
        }
      }
    }
  `);

  return data.allMembers;
}

export async function getAllStages(): Promise<Stage[]> {
  const data = await fetchCmsAPI(`
    {
      allStages(first: 100, orderBy: order_ASC) {
        name
        slug
        stream
        discord
        schedule {
          title
          start
          end
          speaker {
            name
            slug
            image {
              url(imgixParams: {fm: jpg, fit: crop, w: 120, h: 120})
            }
          }
        }
      }
    }
  `);

  return data.allStages;
}

export async function getAllHacks(): Promise<Hack[]> {
  const data = await fetchCmsAPI(`
    {
      allHacks(first: 100, orderBy: order_ASC) {
        name
        slug
        start
        end
        year
        location { 
          latitude
          longitude
        }
        logo {
          url(imgixParams: {fm: jpg, fit: crop, w: 100, h: 100})
        }
        cardImage {
          url(imgixParams: {fm: jpg, fit: crop})
        }
        team {
          title
          name
          slug
          image {
            url(imgixParams: {fm: jpg, fit: crop, w: 120, h: 120})
          }
        }
      }
    }
  `);

  return data.allHacks;
}

export async function getAllSponsors(): Promise<Sponsor[]> {
  const data = await fetchCmsAPI(`
    {
      allCompanies(first: 100, orderBy: tierRank_ASC) {
        name
        description
        slug
        website
        callToAction
        callToActionLink
        discord
        youtubeSlug
        tier
        links {
          url
          text
        }
        cardImage {
          url(imgixParams: {fm: jpg, fit: crop})
        }
        logo {
          url(imgixParams: {fm: jpg, fit: crop, w: 100, h: 100})
        }
      }
    }
  `);

  return data.allCompanies;
}

export async function getAllProjects(): Promise<Project[]> {
  const data = await fetchCmsAPI(`
    {
      allProjects(first: 100) {
        id
        name
        description
        slug
        github
        youtube {
          url
        }
        links {
          text
          url
        }
      }
    }
  `);

  return data.allProjects;
}