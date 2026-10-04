import React from 'react';
import { Terminal, Shield, Sparkles, AlertTriangle, GitPullRequest, Laptop, Check } from 'lucide-react';

export const HandbookView: React.FC = () => {
  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      {/* Title Card */}
      <div className="p-6 md:p-8 rounded-[1.25rem] bg-[var(--panel)] border border-[var(--line)] shadow-xs">
        <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-semibold text-[var(--accent)] mb-2">
          <span>SOURCE OF TRUTH &bull; 12 JUNE 2026</span>
          <span className="px-2.5 py-0.5 rounded-full bg-[var(--paper)] text-[var(--muted)] border border-[var(--line)]">
            https://freeappstore.online/guidelines
          </span>
        </div>
        <h2 className="font-heading text-2xl md:text-3xl font-bold text-[var(--ink)] mb-3">
          FreeAppStore Developer Handbook & Guidelines Summary
        </h2>
        <p className="text-sm md:text-base text-[var(--muted)] leading-relaxed">
          The official onboarding, contribution, and review specification for FreeAppStore applications.
          All apps must comply with these design tokens, privacy rules, local storage policies, and approval checklists.
        </p>
      </div>

      {/* Tech Stack Matrix Card */}
      <div className="p-6 rounded-[1.25rem] bg-[var(--panel)] border border-[var(--line)]">
        <h3 className="font-heading text-lg font-bold text-[var(--ink)] mb-4 flex items-center gap-2">
          <Terminal className="w-5 h-5 text-[var(--accent)]" />
          Required Tech Stack
        </h3>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs md:text-sm">
            <thead>
              <tr className="border-b border-[var(--line)] text-[var(--muted)]">
                <th className="py-2.5 pr-4 font-semibold">Layer</th>
                <th className="py-2.5 px-4 font-semibold">Requirement</th>
                <th className="py-2.5 pl-4 font-semibold">Notes & Strict Rule</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[var(--line)]">
              <tr>
                <td className="py-3 pr-4 font-medium text-[var(--ink)]">Language</td>
                <td className="py-3 px-4 font-mono text-[var(--accent)]">TypeScript ^5.7</td>
                <td className="py-3 pl-4 text-[var(--muted)]">Strict mode; strictly zero 'any' types allowed</td>
              </tr>
              <tr>
                <td className="py-3 pr-4 font-medium text-[var(--ink)]">Framework</td>
                <td className="py-3 px-4 font-mono text-[var(--accent)]">React ^19.0</td>
                <td className="py-3 pl-4 text-[var(--muted)]">Functional components & typed custom hooks</td>
              </tr>
              <tr>
                <td className="py-3 pr-4 font-medium text-[var(--ink)]">Bundler</td>
                <td className="py-3 px-4 font-mono text-[var(--accent)]">Vite ^6.0+</td>
                <td className="py-3 pl-4 text-[var(--muted)]">Core JS bundle must be &lt; 100KB gzipped</td>
              </tr>
              <tr>
                <td className="py-3 pr-4 font-medium text-[var(--ink)]">Styling</td>
                <td className="py-3 px-4 font-mono text-[var(--accent)]">Tailwind CSS ^4.1</td>
                <td className="py-3 pl-4 text-[var(--muted)]">Uses shared CSS variables and single accent color</td>
              </tr>
              <tr>
                <td className="py-3 pr-4 font-medium text-[var(--ink)]">Hosting</td>
                <td className="py-3 px-4 font-mono text-[var(--ink)]">Cloudflare R2 + Workers</td>
                <td className="py-3 pl-4 text-[var(--muted)]">Edge delivery with instantaneous loading</td>
              </tr>
              <tr>
                <td className="py-3 pr-4 font-medium text-[var(--ink)]">Package Manager</td>
                <td className="py-3 px-4 font-mono text-[var(--ink)]">pnpm ^10.30</td>
                <td className="py-3 pl-4 text-[var(--muted)]">Workspace layout with frontend inside web/</td>
              </tr>
              <tr>
                <td className="py-3 pr-4 font-medium text-[var(--ink)]">Node Runtime</td>
                <td className="py-3 px-4 font-mono text-[var(--ink)]">20.19 or newer</td>
                <td className="py-3 pl-4 text-[var(--muted)]">Node LTS baseline</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Core Privacy & Storage Rules (Strict Red/Green card) */}
      <div className="p-6 rounded-[1.25rem] bg-[var(--panel)] border border-[var(--line)]">
        <h3 className="font-heading text-lg font-bold text-[var(--ink)] mb-3 flex items-center gap-2">
          <Shield className="w-5 h-5 text-[var(--accent)]" />
          Mandatory Privacy & Local Storage Policies
        </h3>
        <p className="text-xs md:text-sm text-[var(--muted)] mb-4">
          FreeAppStore enforces strict, non-negotiable user privacy standards across every published application.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 rounded-[1.25rem] bg-[var(--paper)] border border-[var(--line)]">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[var(--success)] mb-2 flex items-center gap-1.5">
              <Check className="w-4 h-4" /> Strictly Required
            </h4>
            <ul className="text-xs md:text-sm text-[var(--ink)] space-y-2">
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--success)] mt-1.5 shrink-0" />
                <span>All user data must stay on-device in <strong>localStorage</strong>.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--success)] mt-1.5 shrink-0" />
                <span>LocalStorage persistence through <strong>typed service functions</strong> (not scattered calls).</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--success)] mt-1.5 shrink-0" />
                <span>Fully offline capable after initial load (PWA Service Worker).</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--success)] mt-1.5 shrink-0" />
                <span>Open-source <strong>MIT License</strong> included in repository.</span>
              </li>
            </ul>
          </div>

          <div className="p-4 rounded-[1.25rem] bg-[var(--paper)] border border-[var(--line)]">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[var(--error)] mb-2 flex items-center gap-1.5">
              <AlertTriangle className="w-4 h-4" /> Strictly Prohibited
            </h4>
            <ul className="text-xs md:text-sm text-[var(--ink)] space-y-2">
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--error)] mt-1.5 shrink-0" />
                <span><strong>No analytics, telemetry, or tracking</strong> network requests.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--error)] mt-1.5 shrink-0" />
                <span><strong>No cookies</strong> of any kind (session or persistent).</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--error)] mt-1.5 shrink-0" />
                <span>No server-side user storage for Standalone apps.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--error)] mt-1.5 shrink-0" />
                <span><strong>No external scripts</strong>, except CDN fonts (Google Fonts).</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Development Lifecycle & Workflow */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-[1.25rem]">
        <div className="p-6 rounded-[1.25rem] bg-[var(--panel)] border border-[var(--line)]">
          <h3 className="font-heading text-base font-bold text-[var(--ink)] mb-3 flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-[var(--accent)]" />
            Vertical Slice Workflow
          </h3>
          <p className="text-xs text-[var(--muted)] mb-3">
            Build one vertical slice first to ensure high software quality before adding features:
          </p>
          <ol className="text-xs space-y-2 text-[var(--ink)] list-decimal list-inside">
            <li><strong>Official Shell:</strong> 17rem sidebar on desktop, header + dock on mobile.</li>
            <li><strong>Main Interaction:</strong> Core problem solving workflow.</li>
            <li><strong>Local Persistence:</strong> Typed localStorage service.</li>
            <li><strong>Empty & Error States:</strong> Friendly guidance when no data exists.</li>
            <li><strong>Responsive Polish:</strong> Tested from 320px mobile upward.</li>
          </ol>
        </div>

        <div className="p-6 rounded-[1.25rem] bg-[var(--panel)] border border-[var(--line)]">
          <h3 className="font-heading text-base font-bold text-[var(--ink)] mb-3 flex items-center gap-2">
            <GitPullRequest className="w-4 h-4 text-[var(--accent)]" />
            Git & PR Requirements
          </h3>
          <p className="text-xs text-[var(--muted)] mb-3">
            Pull requests are reviewed against the official approval checklist:
          </p>
          <ul className="text-xs space-y-2 text-[var(--ink)]">
            <li className="flex items-center gap-2">
              <span className="w-1 h-1 rounded-full bg-[var(--accent)]" />
              <span>Short feature branches (e.g. <code>feature/timer-core</code>)</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1 h-1 rounded-full bg-[var(--accent)]" />
              <span>Run type check, build, and PWA/offline checks prior to PR</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1 h-1 rounded-full bg-[var(--accent)]" />
              <span>Include screenshots for mobile (320px) and desktop (1024px+)</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1 h-1 rounded-full bg-[var(--accent)]" />
              <span>Include privacy impact confirmation (0 cookies, 0 analytics)</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Troubleshooting Matrix */}
      <div className="p-6 rounded-[1.25rem] bg-[var(--panel)] border border-[var(--line)]">
        <h3 className="font-heading text-lg font-bold text-[var(--ink)] mb-3 flex items-center gap-2">
          <Laptop className="w-5 h-5 text-[var(--accent)]" />
          Troubleshooting Common Failures
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
          <div className="p-3.5 rounded-[0.75rem] bg-[var(--paper)] border border-[var(--line)]">
            <div className="font-semibold text-[var(--error)] mb-1">Problem: Build warnings</div>
            <div className="text-[var(--ink)]">
              Likely Fix: Remove unused imports, fix strict TypeScript issues, eliminate any types.
            </div>
          </div>
          <div className="p-3.5 rounded-[0.75rem] bg-[var(--paper)] border border-[var(--line)]">
            <div className="font-semibold text-[var(--error)] mb-1">Problem: Offline not working</div>
            <div className="text-[var(--ink)]">
              Likely Fix: Check service worker registration, cache strategy, and public/manifest.json.
            </div>
          </div>
          <div className="p-3.5 rounded-[0.75rem] bg-[var(--paper)] border border-[var(--line)]">
            <div className="font-semibold text-[var(--error)] mb-1">Problem: Mobile clipping</div>
            <div className="text-[var(--ink)]">
              Likely Fix: Audit shell padding, safe-area insets, fixed heights, and overflow-x.
            </div>
          </div>
          <div className="p-3.5 rounded-[0.75rem] bg-[var(--paper)] border border-[var(--line)]">
            <div className="font-semibold text-[var(--error)] mb-1">Problem: Bundle too large (&gt;100KB)</div>
            <div className="text-[var(--ink)]">
              Likely Fix: Remove heavy icon sets or UI kits; use lightweight lucide-react & native CSS.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
