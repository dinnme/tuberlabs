<script>
  let { data } = $props();
  const { model } = data;
</script>

<svelte:head>
  <title>{model.name} — Tuber Labs</title>
  <meta name="description" content={model.description} />
</svelte:head>

<section class="detail-hero">
  <div class="container">
    <div class="detail-badges">
      <span class="badge {model.badgeClass}">{model.badge}</span>
      {#each model.meta as m}
        <span class="badge badge-muted">{m}</span>
      {/each}
    </div>
    <h1>{model.name} <span class="muted" style="font-size: 0.45em; font-family: var(--mono)">{model.version}</span></h1>
    <p class="lede">{model.description}</p>
    <div class="detail-actions">
      {#each model.links as link, i}
        <a class="btn {i === 0 ? 'btn-dark' : 'btn-outline'}" href={link.href}>{link.label}</a>
      {/each}
    </div>
  </div>
</section>

<section class="section" style="padding-top: 0">
  <div class="container">
    <span class="label">Specifications</span>
    <h2>Under the skin</h2>
    <p class="muted">Every number on this page is real. That is the joke.</p>
    <div class="spec-grid">
      {#each model.specs as [k, v]}
        <div class="spec-cell">
          <span class="k">{k}</span>
          <span class="v">[{v}]</span>
        </div>
      {/each}
    </div>

    {#if model.evals}
      <div style="margin-top: 72px">
        <span class="label">Evaluations</span>
        <h2>State of the art, within the family</h2>
        <p class="muted">Spud-1 outperforms every previous Tuber model on every benchmark we were able to run. Bold marks the best score. Bold is always Spud-1.</p>
        <table class="evals">
          <thead>
            <tr>
              {#each model.evals.head as h}
                <th>{h}</th>
              {/each}
            </tr>
          </thead>
          <tbody>
            {#each model.evals.rows as row}
              <tr>
                {#each row as cell, i}
                  <td class:best={i === model.evals.bestColumn}>{cell}</td>
                {/each}
              </tr>
            {/each}
          </tbody>
        </table>
      </div>
    {/if}

    {#if model.sample}
      <div style="margin-top: 72px">
        <span class="label">Sample output</span>
        <h2>See it think</h2>
        <p class="muted">Unedited, temperature 0.8.</p>
        <div class="sample-box"><span class="prompt">prompt &gt; {model.sample.prompt}</span>

{model.sample.output}</div>
      </div>
    {/if}

    {#if model.limitations}
      <div style="margin-top: 72px">
        <span class="label">Limitations</span>
        <h2>Responsible release</h2>
        <ul class="limitations">
          {#each model.limitations as item}
            <li>{item}</li>
          {/each}
        </ul>
      </div>
    {/if}

    <p class="muted" style="margin-top: 72px">© 2026 Tuber Labs · <a href="/" class="arrow-link">Back to home</a></p>
  </div>
</section>
