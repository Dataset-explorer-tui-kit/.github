// Run: PELE_MODULE=/path/to/pele/dist/pele.js node render-diagrams.mjs
// Or install Pele locally and run: node render-diagrams.mjs
import { readFileSync, writeFileSync } from 'node:fs';
const { render } = await import(process.env.PELE_MODULE || 'pele');
const palettes = {
  light: { bg: '#ffffff', fg: '#172033', line: '#64748b', surface: '#f8fafc', border: '#cbd5e1', agent: ['#f5f3ff','#8b5cf6','#4c1d95'], input: ['#eff6ff','#3b82f6','#1e3a8a'], core: ['#ecfeff','#0891b2','#164e63'], output: ['#ecfdf5','#10b981','#064e3b'], optional: ['#fffbeb','#d97706','#78350f'] },
  dark: { bg: '#0f172a', fg: '#e2e8f0', line: '#94a3b8', surface: '#1e293b', border: '#475569', agent: ['#2e2050','#a78bfa','#ede9fe'], input: ['#172d50','#60a5fa','#dbeafe'], core: ['#123340','#22d3ee','#cffafe'], output: ['#12382f','#34d399','#d1fae5'], optional: ['#3b2d18','#fbbf24','#fef3c7'] }
};
for (const name of ['kit-overview','kit-workflow']) {
  const source = readFileSync(new URL(`./${name}.mmd`, import.meta.url), 'utf8');
  for (const [mode, p] of Object.entries(palettes)) {
    const classes = ['agent','input','core','output','optional'].map(key => {
      const [fill,stroke,color] = p[key];
      return `classDef ${key} fill:${fill},stroke:${stroke},color:${color}`;
    }).join('\n');
    let { svg } = render(`${source}\n${classes}\n`);
    const vars = { _bg:p.bg, _fg:p.fg, _m:p.line, _l:p.line, _s:p.surface, _a:p.surface, _b:p.border, _c:p.line, _r:'10px', _fm:'monospace' };
    svg = svg.replace(/var\(--(_[a-z]+)\)/g, (match,key) => vars[key] || match)
      .replace(/(<svg\b[^>]*>)/, `$1<rect width="100%" height="100%" fill="${p.bg}"/>`);
    if (!svg.includes('viewBox=') || /NaN|undefined/.test(svg)) throw new Error(`Invalid SVG: ${name}-${mode}`);
    writeFileSync(new URL(`./${name}-${mode}.svg`, import.meta.url), svg);
  }
}
