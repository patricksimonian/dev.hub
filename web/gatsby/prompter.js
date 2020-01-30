/*
Copyright 2019 Province of British Columbia

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at 

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

Created by Patrick Simonian
*/

// these are strings meant to be read in stdout. Typically for error messaging

const  LOG_LEVELS = {
  VERBOSE: 5,
  LOG: 0,
}

/**
 * wrapper around console.log that will only log if the LOG LEVEL env variable is set appropriately
 * @param {String} msg 
 * @param {Number} level defaults to LOG_LEVEL = LOG
 */
const log = (msg, level = LOG_LEVELS.LOG) => {
  if(process.env.GATSBY_LOG_LEVEL >= level) console.log(msg);
};

/**
 * wrapper around log() with LOG_LEVEL = VERBOSE
 * @param {String} msg 
 */
const logVerbose = msg => log(msg, LOG_LEVELS.VERBOSE);

/**
 * Concats the Dev.Hub prompt to a message
 * @param {String} msg 
 * @returns {String} the devhub prompt plus the message
 */
const prompt = msg => `==Dev.Hub==> ${msg}`;

const INVALID_BANNER_LOGO = prompt('Invalid Banner Logo, the value must be a valid image file (logo.png)'); 
const VALIDATING_CONFIGURATIONS = prompt('Validating configurations...');
const CONFIGURATIONS_VALID = prompt('Configurations valid!');
const MERGING_CONFIGURATIONS = prompt('Merging default configurations with "<root>/config/index.json" (this will be available on the node: Site.fields[config])');

module.exports = {
  INVALID_BANNER_LOGO,
  VALIDATING_CONFIGURATIONS,
  CONFIGURATIONS_VALID,
  MERGING_CONFIGURATIONS,
  log,
  prompt,
  logVerbose
}