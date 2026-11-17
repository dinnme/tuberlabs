<script>
  let { children } = $props();
</script>

<header class="nav">
  <div class="container nav-inner">
    <a class="brand" href="/">
      <svg width="26" height="20" viewBox="0 0 30 22" shape-rendering="crispEdges" aria-hidden="true">
        <g fill="#f58220">
          <rect x="6" y="0" width="18" height="3" />
          <rect x="3" y="3" width="24" height="3" />
          <rect x="0" y="6" width="30" height="6" />
          <rect x="3" y="12" width="24" height="3" />
          <rect x="6" y="15" width="18" height="3" />
        </g>
      </svg>
      Tuber Labs
    </a>
    <nav class="nav-links">
      <a href="/models">Models</a>
      <a href="/lab-notes">Lab notes</a>
      <a href="/#mission">Mission</a>
      <a class="btn btn-dark btn-sm" href="/models/spud-1">Try Spud-1</a>
    </nav>
  </div>
</header>

<main>
  {@render children()}
</main>

<footer class="footer">
  <div class="container">
    <div class="footer-grid">
      <div>
        <a class="brand" href="/">
          <svg width="26" height="20" viewBox="0 0 30 22" shape-rendering="crispEdges" aria-hidden="true">
            <g fill="#f58220">
              <rect x="6" y="0" width="18" height="3" />
              <rect x="3" y="3" width="24" height="3" />
              <rect x="0" y="6" width="30" height="6" />
              <rect x="3" y="12" width="24" height="3" />
              <rect x="6" y="15" width="18" height="3" />
            </g>
          </svg>
          Tuber Labs
        </a>
        <p class="tagline">An independent AI lab of one, learning in public.</p>
      </div>
      <div>
        <h4>Models</h4>
        <ul>
          <li><a href="/models/spud-1">Spud-1</a></li>
          <li><a href="/models/tater-mini">Tater-mini</a></li>
          <li><a href="/models/mash-0">Mash-0</a></li>
        </ul>
      </div>
      <div>
        <h4>Lab</h4>
        <ul>
          <li><a href="/lab-notes">Lab notes</a></li>
          <li><a href="/#mission">Mission</a></li>
        </ul>
      </div>
      <div>
        <h4>Elsewhere</h4>
        <ul>
          <li><a href="https://github.com/dinnme/tuberlabs" rel="noopener">GitHub</a></li>
        </ul>
      </div>
    </div>
    <div class="footer-bottom">
      <span>© 2026 Tuber Labs</span>
      <span>No frontier was harmed in the making of these models.</span>
    </div>
  </div>
</footer>
