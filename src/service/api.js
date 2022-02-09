import { http } from '../config/axios';

export const getUser = async ({ username }) => {
  const { data } = await http.get(`/users/${username}`);

  return data;
};
