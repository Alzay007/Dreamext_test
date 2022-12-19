import { Post } from '../types/post';
import { client } from '../utils/fetchClient';

export const getPosts = () => {
  return client.get<Post[]>(`/posts`);
};

export const getUserPosts = (userId: number) => {
  return client.get<Post[]>(`/posts?${userId}`);
};