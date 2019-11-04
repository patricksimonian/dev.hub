import config from '../config/index.json';

export const DEVHUB_ROLE = 'Devhub';

export const VALID_ROLES = config.validRoles.concat(DEVHUB_ROLE);