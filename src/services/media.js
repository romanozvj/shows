import { post } from './api';

export function uploadFile(data, loginToken) {
    return post('media', data, loginToken);
}