import { get, post } from './axios';

const DEMO_URL = '/list';

export function getList (params) {
  return get(DEMO_URL, params);
}