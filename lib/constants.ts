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

export const SITE_URL = 'https://microbo.team';
export const SITE_ORIGIN = process.env.NEXT_PUBLIC_SITE_ORIGIN || new URL(SITE_URL).origin;
export const TWITTER_USER_NAME = 'vercel';
export const BRAND_NAME = 'MICROBO';
export const TEAM_NAME = 'MICROBO';
export const SITE_NAME_MULTILINE = ['Microbo', 'Team'];
export const SITE_NAME = 'Microbo Team';
export const META_DESCRIPTION =
  'This is an open source project that Next.js developers can clone, deploy, and fully customize for Team Events. Originally created through collaboration of marketers, designers, and developers at Vercel. Later adopted by Microbo to represent dev team activity ';
export const SITE_DESCRIPTION =
  'An interactive online experience by the community, free for everyone.';
export const DATE = 'October 27, 2020';
export const SHORT_DATE = 'Oct 27 - 9:00am PST';
export const FULL_DATE = 'Oct 27th 9am Pacific Time (GMT-7)';
export const TWEET_TEXT = META_DESCRIPTION;
export const COOKIE = 'user-id';

// Remove process.env.NEXT_PUBLIC_... below and replace them with
// strings containing your own privacy policy URL and copyright holder name
export const LEGAL_URL = process.env.NEXT_PUBLIC_PRIVACY_POLICY_URL;
export const COPYRIGHT_HOLDER = process.env.NEXT_PUBLIC_COPYRIGHT_HOLDER;

export const CODE_OF_CONDUCT =
  'https://www.notion.so/vercel/Code-of-Conduct-Example-7ddd8d0e9c354bb597a0faed87310a78';
export const REPO = 'https://github.com/microbo-ru';
export const SAMPLE_TICKET_NUMBER = 1234;
export const NAVIGATION = [
  {
    name: 'Schedule',
    route: '/schedule'
  },
  {
    name: 'PicsArt AI',
    route: '/hack/picsart-ai'
  },
  {
    name: 'Hack University',
    route: '/hack/hackuniversity'
  },
  {
    name: 'Cifri`SPB',
    route: '/hack/cifri2019-spb'
  },
  {
    name: 'Cifri`Final',
    route: '/hack/cifri2019-final'
  },
  {
    name: 'SMZ Hack',
    route: '/hack/smzhack'
  },
  /*
  {
    name: 'Stage E',
    route: '/stage/e'
  },*/
  /*
  {
    name: 'Speakers',
    route: '/speakers'
  },*/
  {
    name: 'Members',
    route: '/members'
  },
  {
    name: 'Projects',
    route: '/projects'
  },
  {
    name: 'Expo',
    route: '/expo'
  }
];

export type TicketGenerationState = 'default' | 'loading';
