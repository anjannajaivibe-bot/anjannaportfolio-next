export default function NotFound() {
  return (
    <main className="not-found">
      <p className="chapter-no">Page not found</p>
      <h1>404</h1>
      <p>The page may have moved, or the address may be incorrect.</p>
      <a className="action action-light" href="/">
        Return home <span aria-hidden="true">↗</span>
      </a>
    </main>
  );
}
