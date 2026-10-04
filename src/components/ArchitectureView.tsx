import React from 'react';
import { FolderTree, Layers, Cpu, Database } from 'lucide-react';

export const ArchitectureView: React.FC = () => {
  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      {/* Intro */}
      <div className="p-6 md:p-8 rounded-[1.25rem] bg-[var(--panel)] border border-[var(--line)]">
        <h2 className="font-heading text-2xl md:text-3xl font-bold text-[var(--ink)] mb-3">
          Project Structure & Architecture
        </h2>
        <p className="text-sm md:text-base text-[var(--muted)] leading-relaxed">
          FreeAppStore apps use a standardized pnpm workspace structure with the frontend inside a <code>web/</code> package.
          Keep client-side state clean and store user data exclusively via typed service adapters.
        </p>
      </div>

      {/* Template Choice: Standalone vs Connected */}
      <div className="p-6 rounded-[1.25rem] bg-[var(--panel)] border border-[var(--line)]">
        <h3 className="font-heading text-lg font-bold text-[var(--ink)] mb-4 flex items-center gap-2">
          <Layers className="w-5 h-5 text-[var(--accent)]" />
          Template Choice: Standalone vs. Connected
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-5 rounded-[1.25rem] bg-[var(--paper)] border border-[var(--line)]">
            <div className="flex items-center justify-between mb-2">
              <span className="font-heading text-lg font-bold text-[var(--ink)]">
                Standalone Template
              </span>
              <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-[var(--success)]/10 text-[var(--success)]">
                Recommended Default
              </span>
            </div>
            <p className="text-xs text-[var(--muted)] mb-3">
              Pure client-side application. No backend, zero external network requests, localStorage only, works fully offline.
            </p>
            <div className="text-xs text-[var(--ink)] font-medium space-y-1.5 border-t border-[var(--line)] pt-3">
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)]" />
                <span>Calculators, organizers, timers, journals, utilities</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)]" />
                <span>Instant load, zero server hosting costs, complete user privacy</span>
              </div>
            </div>
          </div>

          <div className="p-5 rounded-[1.25rem] bg-[var(--paper)] border border-[var(--line)]">
            <div className="flex items-center justify-between mb-2">
              <span className="font-heading text-lg font-bold text-[var(--ink)]">
                Connected Template
              </span>
              <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-[var(--accent)]/10 text-[var(--accent)]">
                Specialized
              </span>
            </div>
            <p className="text-xs text-[var(--muted)] mb-3">
              When authentication, cross-device sync, multiplayer realtime rooms, or API proxy are strictly required.
            </p>
            <div className="text-xs text-[var(--ink)] font-medium space-y-1.5 border-t border-[var(--line)] pt-3">
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)]" />
                <span>Uses <code>@freeappstore/sdk</code> for Auth, KV, Rooms, Proxy</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)]" />
                <span>Start from standalone and add SDK incrementally</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Directory Structure & Folder Responsibilities */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* File Tree */}
        <div className="p-6 rounded-[1.25rem] bg-[var(--panel)] border border-[var(--line)]">
          <h3 className="font-heading text-base font-bold text-[var(--ink)] mb-3 flex items-center gap-2">
            <FolderTree className="w-4 h-4 text-[var(--accent)]" />
            Standard Workspace Tree
          </h3>
          <pre className="p-4 rounded-[0.75rem] bg-[var(--paper)] border border-[var(--line)] font-mono text-xs text-[var(--ink)] overflow-x-auto leading-relaxed">
{`app-name/
├── package.json
├── pnpm-workspace.yaml
├── .gitignore
└── web/
    ├── index.html
    ├── package.json
    ├── vite.config.ts
    ├── tsconfig.json
    ├── public/
    │   └── manifest.json
    └── src/
        ├── main.tsx
        ├── index.css
        ├── App.tsx
        ├── types.ts
        ├── components/
        ├── hooks/
        └── services/`}
          </pre>
        </div>

        {/* Responsibilities Table */}
        <div className="p-6 rounded-[1.25rem] bg-[var(--panel)] border border-[var(--line)]">
          <h3 className="font-heading text-base font-bold text-[var(--ink)] mb-3 flex items-center gap-2">
            <Cpu className="w-4 h-4 text-[var(--accent)]" />
            Folder Responsibilities
          </h3>
          <div className="space-y-3 text-xs">
            <div className="p-2.5 rounded-[0.75rem] bg-[var(--paper)] border border-[var(--line)]">
              <strong className="text-[var(--accent)] font-mono">components/</strong>
              <p className="text-[var(--muted)] mt-0.5">
                Reusable UI components and shell-level elements (cards, headers, docks).
              </p>
            </div>
            <div className="p-2.5 rounded-[0.75rem] bg-[var(--paper)] border border-[var(--line)]">
              <strong className="text-[var(--accent)] font-mono">hooks/</strong>
              <p className="text-[var(--muted)] mt-0.5">
                Stateful reusable React hooks (window size, localStorage sync).
              </p>
            </div>
            <div className="p-2.5 rounded-[0.75rem] bg-[var(--paper)] border border-[var(--line)]">
              <strong className="text-[var(--accent)] font-mono">services/</strong>
              <p className="text-[var(--muted)] mt-0.5">
                localStorage adapters, domain calculations, validation helpers, API wrappers.
              </p>
            </div>
            <div className="p-2.5 rounded-[0.75rem] bg-[var(--paper)] border border-[var(--line)]">
              <strong className="text-[var(--accent)] font-mono">types.ts</strong>
              <p className="text-[var(--muted)] mt-0.5">
                Shared TypeScript interfaces and domain models. Strictly no <code>any</code>.
              </p>
            </div>
            <div className="p-2.5 rounded-[0.75rem] bg-[var(--paper)] border border-[var(--line)]">
              <strong className="text-[var(--accent)] font-mono">index.css</strong>
              <p className="text-[var(--muted)] mt-0.5">
                Tailwind CSS imports, platform CSS variables, and single app accent colour.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Local Storage Best Practice Callout */}
      <div className="p-6 rounded-[1.25rem] bg-[var(--panel)] border border-[var(--line)]">
        <h3 className="font-heading text-base font-bold text-[var(--ink)] mb-2 flex items-center gap-2">
          <Database className="w-4 h-4 text-[var(--accent)]" />
          The "Typed Local Storage Adapter" Pattern
        </h3>
        <p className="text-xs text-[var(--muted)] mb-3">
          The Handbook states: <em>"Implement localStorage persistence through typed service functions, not scattered direct calls."</em>
        </p>
        <div className="p-3.5 rounded-[0.75rem] bg-[var(--paper)] border border-[var(--line)] font-mono text-xs text-[var(--ink)] leading-relaxed overflow-x-auto">
          <span className="text-[var(--muted)]">// Good: Centralized inside /src/services/storage.ts</span><br/>
          <span className="text-[var(--accent)]">export function</span> loadSettings(): UserSettings &#123; ... &#125;<br/>
          <span className="text-[var(--accent)]">export function</span> saveSettings(data: UserSettings): void &#123; ... &#125;<br/>
          <span className="text-[var(--muted)]">// Bad: scattered raw calls in components like localStorage.setItem('foo', val)</span>
        </div>
      </div>
    </div>
  );
};
