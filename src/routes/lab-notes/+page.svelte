<script>
  import { formatDate, formatDateShort } from '$lib/posts.js';

  let { data } = $props();

  const categories = ['ALL', 'RELEASE', 'RESEARCH', 'LEARNING', 'POSTMORTEM'];
  let active = $state('ALL');
  let filtered = $derived(
    active === 'ALL' ? data.posts : data.posts.filter((p) => p.category === active)
  );
  let featured = $derived(data.posts.find((p) => p.featured) ?? data.posts[0]);
</script>

<svelte:head>
  <title>Lab notes — Tuber Labs</title>
</svelte:head>

<section class="page-head">
  <div class="container">
    <span class="label">Lab notes</span>
    <h1>Research, releases and regrets</h1>
    <p class="lede">
      Everything I learn while building language models from scratch, written up as if it
      were a breakthrough.
    </p>
  </div>
</section>

<section style="padding-bottom: 72px">
  <div class="container">
    {#if featured}
      <a class="featured-card" href="/lab-notes/{featured.slug}">
        <div class="art">
          <img src="/potato.svg" alt="Pixel-art potato" />
        </div>
        <div class="body">
          <div class="note-meta">
            <span class="cat">FEATURED · {featured.category}</span> · {formatDate(featured.date)}
          </div>
          <h2>{featured.title}</h2>
          <p>{featured.excerpt}</p>
          <span class="arrow-link">Read the post →</span>
        </div>
      </a>
    {/if}

    <div class="filters">
      {#each categories as cat}
        <button class="filter-btn" class:active={active === cat} onclick={() => (active = cat)}>
          {cat}
        </button>
      {/each}
    </div>

    <div class="note-list">
      {#each filtered as post}
        <a class="note-item" href="/lab-notes/{post.slug}">
          <div class="note-meta">
            <span class="cat">{post.category}</span> · {formatDateShort(post.date)}
          </div>
          <h3>{post.title}</h3>
          <p>{post.excerpt}</p>
          <span class="read">{post.readTime} read</span>
        </a>
      {/each}
    </div>
  </div>
</section>
