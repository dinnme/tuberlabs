<script>
  import { formatDate } from '$lib/posts.js';

  let { data } = $props();
  const { post, prev, next } = data;
</script>

<svelte:head>
  <title>{post.title} — Tuber Labs</title>
  <meta name="description" content={post.excerpt} />
</svelte:head>

<article class="post">
  <a class="arrow-link" href="/lab-notes">← All lab notes</a>

  <div class="post-meta" style="margin-top: 32px">
    <span class="cat">{post.category}</span> · {formatDate(post.date)} · {post.readTime} read
  </div>
  <h1>{post.title}</h1>
  <p class="lede">{post.excerpt}</p>

  <div class="author">
    <span class="avatar"></span>
    <span>
      <span class="name">dinnme</span><br />
      <span class="role">Founder, CEO, Chief Scientist, Intern</span>
    </span>
  </div>

  <div class="post-body">
    {@html post.html}
  </div>

  <nav class="post-nav">
    <span>
      {#if prev}
        <a href="/lab-notes/{prev.slug}">
          <span class="dir">Previous</span>
          <span class="title">{prev.title}</span>
        </a>
      {/if}
    </span>
    <span style="text-align: right">
      {#if next}
        <a href="/lab-notes/{next.slug}">
          <span class="dir">Next</span>
          <span class="title">{next.title}</span>
        </a>
      {/if}
    </span>
  </nav>

  <a class="try-cta" href="/models/spud-1">
    <span>
      <span class="dir">Try it</span>
      <span class="title">Download Spud-1 and see for yourself →</span>
    </span>
  </a>

  <p class="muted" style="margin-top: 48px">© 2026 Tuber Labs · <a class="arrow-link" href="/">Back to home</a></p>
</article>
