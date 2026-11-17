import { error } from '@sveltejs/kit';
import { posts, getPost } from '$lib/posts.js';

export function entries() {
  return posts.map((p) => ({ slug: p.slug }));
}

export function load({ params }) {
  const post = getPost(params.slug);
  if (!post) error(404, 'No such lab note');
  const index = posts.findIndex((p) => p.slug === params.slug);
  return {
    post,
    prev: posts[index + 1] ?? null,
    next: posts[index - 1] ?? null
  };
}
