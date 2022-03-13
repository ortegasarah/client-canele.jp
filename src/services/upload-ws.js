// import { api } from './api';

import { successStatus, internalServerError } from '../utils/clear-res';

export const uploadWs = (files) => api.post("/upload", files)
    .then(successStatus)
    .catch(internalServerError);