export const models = [
  {
    slug: 'spud-1',
    name: 'Spud-1',
    badge: 'FLAGSHIP',
    badgeClass: 'badge-accent',
    version: 'v1.0',
    dark: true,
    tagline: 'Our most capable model to date. Generates text that is, structurally, text.',
    params: '12M',
    ctx: '256',
    meta: ['TEXT GENERATION', 'OPEN WEIGHTS · MIT', 'RELEASED NOV 12, 2026'],
    description:
      'Our most capable model to date. A small decoder-only transformer, hand-written in PyTorch and trained from scratch on a single laptop. It has read all of Shakespeare and retained the vibe.',
    links: [
      { label: 'Download weights', href: '#', primary: true },
      { label: 'View the code', href: 'https://github.com/dinnme/tuberlabs' },
      { label: 'Read the release post', href: '/lab-notes/introducing-spud-1' }
    ],
    specs: [
      ['Parameters', '12M'],
      ['Context window', '256 tokens'],
      ['Architecture', '6 layers · 6 heads'],
      ['Tokenizer', 'character-level'],
      ['Training data', 'TinyShakespeare'],
      ['Training compute', '1 laptop · 3h 12m']
    ],
    evals: {
      head: ['Benchmark', 'Spud-1', 'Tater-mini', 'Mash-0'],
      rows: [
        ['Validation loss ↓', '1.48', '1.91', '2.49'],
        ['Perplexity ↓', '4.4', '6.8', '12.1'],
        ['SpudBench: says a real word', 'Yes', 'Usually', 'Once'],
        ['SpudBench: ends a sentence', 'Sometimes', 'No', 'No'],
        ['Tokens / sec on our laptop ↑', '310', '1,200', '∞, basically']
      ],
      bestColumn: 1
    },
    sample: {
      prompt: 'ROMEO:',
      output:
        'ROMEO:\n\nWhat say thou, my lord, the king is gone\n\nAnd I shall bear thee to the the of my heart,\n\nFor thou art sweet, and sweet the sweet is sweet.\n\nJULIET:\n\nPotato.'
    },
    limitations: [
      'Spud-1 does not follow instructions. It has not been told it is supposed to.',
      'Factual accuracy is low, unless the fact is that a king is gone.',
      'Our red team (also us) found no dangerous capabilities. Or capabilities.'
    ]
  },
  {
    slug: 'tater-mini',
    name: 'Tater-mini',
    badge: 'EDGE',
    badgeClass: 'badge-dark',
    version: 'v0.3',
    dark: false,
    tagline: 'Distilled for the edge. Specifically, the edge of coherence.',
    params: '1.5M',
    ctx: '128',
    meta: ['TEXT GENERATION', 'OPEN WEIGHTS · MIT', 'RELEASED SEP 14, 2026'],
    description:
      'A distilled Spud-1 that runs anywhere, including places it should not. Frontier performance at the edge of my desk.',
    links: [
      { label: 'Download weights', href: '#', primary: true },
      { label: 'View the code', href: 'https://github.com/dinnme/tuberlabs' },
      { label: 'Read the release post', href: '/lab-notes/tater-mini-release' }
    ],
    specs: [
      ['Parameters', '1.5M'],
      ['Context window', '128 tokens'],
      ['Architecture', '2 layers · 2 heads'],
      ['Tokenizer', 'character-level'],
      ['Training data', 'TinyShakespeare (distilled)'],
      ['Training compute', '1 laptop · 41m']
    ]
  },
  {
    slug: 'mash-0',
    name: 'Mash-0',
    badge: 'LEGACY',
    badgeClass: 'badge-muted',
    version: 'v0.0.1',
    dark: false,
    tagline: 'Our first model. A bigram. Kept online for historical and emotional reasons.',
    params: '4K',
    ctx: '1',
    meta: ['TEXT GENERATION', 'OPEN WEIGHTS · MIT', 'RELEASED JUL 18, 2026'],
    description:
      'Where it all started: a lookup table with ambition. Mash-0 predicts the next character given the previous one, which is also how I make decisions.',
    links: [
      { label: 'Download weights', href: '#', primary: true },
      { label: 'View the code', href: 'https://github.com/dinnme/tuberlabs' },
      { label: 'Read the release post', href: '/lab-notes/mash-0-release' }
    ],
    specs: [
      ['Parameters', '4K'],
      ['Context window', '1 token'],
      ['Architecture', 'a lookup table'],
      ['Tokenizer', 'character-level'],
      ['Training data', 'TinyShakespeare'],
      ['Training compute', 'seconds']
    ]
  }
];

export function getModel(slug) {
  return models.find((m) => m.slug === slug);
}
