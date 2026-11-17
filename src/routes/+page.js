import { posts } from '$lib/posts.js';
import { models } from '$lib/models.js';

export function load() {
  return {
    latest: posts.slice(0, 3),
    models
  };
}
