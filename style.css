
/* ========================================
   THE TIDY HOUSE
   Global styles and design foundation
======================================== */

:root {
  --ivory: #F5F2EB;
  --sage: #DCE3D6;
  --forest: #343A33;
  --white: #FFFFFF;

  --text-primary: #343A33;
  --text-muted: #686D65;
  --border: #E3E2DA;

  --font-body: Arial, Helvetica, sans-serif;
  --page-width: 1200px;
  --page-gutter: 6%;
}

/* Reset */

* {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
  scroll-padding-top: 90px;
}

body {
  margin: 0;
  background: var(--ivory);
  color: var(--text-primary);
  font-family: var(--font-body);
  font-size: 16px;
  line-height: 1.6;
  -webkit-font-smoothing: antialiased;
}

img {
  display: block;
  max-width: 100%;
}

a {
  color: inherit;
  text-decoration: none;
}

button,
input,
textarea,
select {
  font: inherit;
}

button,
a {
  -webkit-tap-highlight-color: transparent;
}

button:focus-visible,
a:focus-visible,
input:focus-visible,
textarea:focus-visible,
select:focus-visible {
  outline: 2px solid var(--forest);
  outline-offset: 4px;
}

h1,
h2,
h3,
p {
  margin-top: 0;
}

h1,
h2,
h3 {
  line-height: 1.15;
  letter-spacing: -0.035em;
}

h1 {
  font-size: clamp(2.75rem, 6vw, 5.5rem);
  font-weight: 500;
}

h2 {
  font-size: clamp(2rem, 4vw, 3.5rem);
  font-weight: 500;
}

h3 {
  font-size: 1.35rem;
  font-weight: 600;
}

p {
  color: var(--text-muted);
}

section {
  padding: 100px var(--page-gutter);
  scroll-margin-top: 80px;
}

.site-header,
.site-footer {
  padding-inline: var(--page-gutter);
}

.site-header {
  background: var(--ivory);
  border-bottom: 1px solid var(--border);
}

.site-footer {
  background: var(--forest);
  color: var(--white);
}

.site-footer p {
  color: var(--sage);
}

/* Shared layout helpers */

.container {
  width: 100%;
  max-width: var(--page-width);
  margin-inline: auto;
}

.section-label {
  margin-bottom: 18px;
  color: var(--text-muted);
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
}

/* Responsive adjustments */

@media (max-width: 768px) {
  :root {
    --page-gutter: 6%;
  }

  section {
    padding-block: 68px;
  }

  h1 {
    font-size: clamp(2.6rem, 11vw, 4rem);
  }
}

@media (prefers-reduced-motion: reduce) {
  html {
    scroll-behavior: auto;
  }

  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}

