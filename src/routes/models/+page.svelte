<script>
  let { data } = $props();
</script>

<svelte:head>
  <title>Models — Tuber Labs</title>
</svelte:head>

<section class="page-head">
  <div class="container">
    <span class="label">Models</span>
    <h1>The Tuber family</h1>
    <p class="lede">Three models, one laptop, zero GPUs harmed. Every one of them open weights.</p>
  </div>
</section>

<section class="section" style="padding-top: 0">
  <div class="container">
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
