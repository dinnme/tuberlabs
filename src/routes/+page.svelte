<script>
  import { formatDateShort } from '$lib/posts.js';

  let { data } = $props();
</script>

<svelte:head>
  <title>Tuber Labs — Frontier intelligence. Grown underground.</title>
</svelte:head>

<section class="hero">
  <div class="container hero-grid">
    <div>
      <span class="hero-eyebrow">
        <span class="badge badge-accent">NEW</span>
        Spud-1 is out. It knows several words.
      </span>
      <h1>Frontier intelligence. <span class="accent">Grown underground.</span></h1>
      <p class="lede">
        Tuber Labs builds small language models on one laptop, from scratch, with great
        confidence. They are not good. We announce them anyway.
      </p>
      <div class="hero-actions">
        <a class="btn btn-dark" href="/models/spud-1">Meet Spud-1</a>
        <a class="btn btn-outline" href="/lab-notes">Read the lab notes</a>
      </div>
    </div>
    <div class="hero-art">
      <img src="/potato.svg" alt="Pixel-art potato" />
    </div>
  </div>
</section>

<section class="section" id="models">
  <div class="container">
    <div class="section-head">
      <div>
        <span class="label">Models</span>
        <h2>The Tuber family</h2>
      </div>
      <a class="arrow-link" href="/models">All models →</a>
    </div>
    <div class="model-grid">
      {#each data.models as model}
        <a class="model-card" class:dark={model.dark} href="/models/{model.slug}">
          <span class="badge {model.badgeClass}">{model.badge}</span>
          <div>
            <h3>{model.name}</h3>
            <span class="version">{model.version}</span>
          </div>
          <p class="muted">{model.tagline}</p>
          <div class="model-stats">
            <span>[{model.params}] params</span>
            <span>[{model.ctx}] ctx</span>
          </div>
        </a>
      {/each}
    </div>
  </div>
</section>

<section class="mission" id="mission">
  <div class="container">
    <span class="label">Mission</span>
    <h2>To build artificial general intelligence. <span class="accent">Eventually. Probably not with these.</span></h2>
    <div class="mission-grid">
      <div class="mission-item">
        <span class="num">01</span>
        <h3>Open weights, always</h3>
        <p>Every checkpoint is free to download. Nobody has offered to pay for them, but the principle stands.</p>
      </div>
      <div class="mission-item">
        <span class="num">02</span>
        <h3>Radical transparency</h3>
        <p>We publish every loss curve, every bug and every NaN. Especially the NaNs.</p>
      </div>
      <div class="mission-item">
        <span class="num">03</span>
        <h3>Compute-efficient by necessity</h3>
        <p>Our entire cluster is one laptop. It gets warm. We consider this a feature.</p>
      </div>
    </div>
  </div>
</section>

<section class="section">
  <div class="container">
    <div class="section-head">
      <div>
        <span class="label">Lab notes</span>
        <h2>Latest from the lab</h2>
      </div>
      <a class="arrow-link" href="/lab-notes">All lab notes →</a>
    </div>
    <div class="note-list">
      {#each data.latest as post}
        <a class="note-item" href="/lab-notes/{post.slug}">
          <div class="note-meta"><span class="cat">{post.category}</span> · {formatDateShort(post.date)}</div>
          <h3>{post.title}</h3>
          <p>{post.excerpt}</p>
          <span class="read">{post.readTime} read</span>
        </a>
      {/each}
    </div>
  </div>
</section>
