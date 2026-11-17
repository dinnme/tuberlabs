import { error } from '@sveltejs/kit';
import { models, getModel } from '$lib/models.js';

export function entries() {
  return models.map((m) => ({ slug: m.slug }));
}

export function load({ params }) {
  const model = getModel(params.slug);
  if (!model) error(404, 'No such model');
  return { model };
}
