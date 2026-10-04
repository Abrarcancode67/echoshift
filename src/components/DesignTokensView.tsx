import React from 'react';
import { Palette, Type, Maximize2, Moon } from 'lucide-react';
import { DesignTokenSpec, SizingSpec } from '../types';

export const DesignTokensView: React.FC = () => {
  const tokens: DesignTokenSpec[] = [
    {
      name: 'Paper (Background)',
      cssVariable: '--paper',
      lightValue: '#fbfaf6',
      darkValue: '#121316',
      description: 'The root app canvas and page backdrop. Warm-tinted neutral.',
    },
    {
      name: 'Panel (Surfaces)',
      cssVariable: '--panel',
      lightValue: '#ffffff',
      darkValue: '#1a1c21',
      description: 'Used for cards, dialogs, drawers, and persistent sidebar panels.',
    },
    {
      name: 'Ink (Primary Text)',
      cssVariable: '--ink',
      lightValue: '#191b1f',
      darkValue: '#f3f4f6',
      description: 'Primary text, headings, and high-contrast foreground glyphs.',
    },
    {
      name: 'Muted (Secondary Text)',
      cssVariable: '--muted',
      lightValue: '#646973',
      darkValue: '#9398a3',
      description: 'Secondary labels, metadata, captions, and deactivated icons.',
    },
    {
      name: 'Line (Borders)',
      cssVariable: '--line',
      lightValue: '#e3e1da',
      darkValue: '#272a31',
      description: 'Structural dividers, card outlines, and component bounding borders.',
    },
    {
      name: 'Glass (Translucent)',
      cssVariable: '--glass',
      lightValue: 'rgba(255,255,255,0.8)',
      darkValue: 'rgba(26,28,33,0.85)',
      description: 'Frosted overlays, sticky mobile headers, and backdrop docks.',
    },
    {
      name: 'Accent (Single Color)',
      cssVariable: '--accent',
      lightValue: '#1e40af',
      darkValue: '#3b82f6',
      description: 'Single accent colour only: active states, primary buttons, and highlights.',
    },
    {
      name: 'Success',
      cssVariable: '--success',
      lightValue: '#15803d',
      darkValue: '#22c55e',
      description: 'Confirmation banners, completion badges, and pass indicators.',
    },
    {
      name: 'Warning',
      cssVariable: '--warning',
      lightValue: '#b45309',
      darkValue: '#f59e0b',
      description: 'Attention required, soft deprecation, or pending check.',
    },
    {
      name: 'Error',
      cssVariable: '--error',
      lightValue: '#b91c1c',
      darkValue: '#ef4444',
      description: 'Strict guideline violations, invalid inputs, and fatal failures.',
    },
  ];

  const sizings: SizingSpec[] = [
    {
      element: 'Sidebar Width',
      value: '17rem',
      pixelEquivalent: '272px',
      rule: 'Fixed or sticky navigation drawer on 1024px+ desktop viewports.',
    },
    {
      element: 'Card Radius',
      value: '1.25rem',
      pixelEquivalent: '20px',
      rule: 'Applied to all cards, panels, and container bounds (`rounded-[1.25rem]`).',
    },
    {
      element: 'Button Radius',
      value: '0.75rem',
      pixelEquivalent: '12px',
      rule: 'Applied to all interactive buttons, inputs, and chips (`rounded-[0.75rem]`).',
    },
    {
      element: 'Card Padding',
      value: '1.5rem',
      pixelEquivalent: '24px',
      rule: 'Standard inner content padding across all structural cards (`p-[1.5rem]`).',
    },
    {
      element: 'Grid Gap',
      value: '1.25rem',
      pixelEquivalent: '20px',
      rule: 'Consistent spacing between adjacent grid items and columns (`gap-[1.25rem]`).',
    },
  ];

  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      {/* Intro Header */}
      <div className="p-6 md:p-8 rounded-[1.25rem] bg-[var(--panel)] border border-[var(--line)]">
        <h2 className="font-heading text-2xl md:text-3xl font-bold text-[var(--ink)] mb-3">
          Design System & Platform Tokens
        </h2>
        <p className="text-sm md:text-base text-[var(--muted)] leading-relaxed">
          FreeAppStore enforces strict visual harmony. Apps must use the shared CSS variable tokens, 
          the Fraunces and Manrope typography pairing, the single accent color rule, and official sizing units.
        </p>
      </div>

      {/* Typography Card */}
      <div className="p-6 rounded-[1.25rem] bg-[var(--panel)] border border-[var(--line)]">
        <h3 className="font-heading text-lg font-bold text-[var(--ink)] mb-4 flex items-center gap-2">
          <Type className="w-5 h-5 text-[var(--accent)]" />
          Mandatory Typography Pairing
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-5 rounded-[1.25rem] bg-[var(--paper)] border border-[var(--line)]">
            <span className="text-[11px] font-bold uppercase tracking-wider text-[var(--accent)]">
              Headlines & Card Titles
            </span>
            <div className="font-heading text-2xl font-bold text-[var(--ink)] mt-2 mb-1">
              Fraunces Serif
            </div>
            <p className="font-heading text-base text-[var(--muted)] italic mb-3">
              "Distinctive editorial authority and warmth"
            </p>
            <div className="text-xs text-[var(--muted)] border-t border-[var(--line)] pt-3 font-body">
              Targeted for: <code>h1</code>, <code>h2</code>, <code>h3</code>, card titles, modal titles.
            </div>
          </div>

          <div className="p-5 rounded-[1.25rem] bg-[var(--paper)] border border-[var(--line)]">
            <span className="text-[11px] font-bold uppercase tracking-wider text-[var(--accent)]">
              Body & UI Text
            </span>
            <div className="font-body text-xl font-bold text-[var(--ink)] mt-2 mb-1">
              Manrope Geometric Sans
            </div>
            <p className="font-body text-sm text-[var(--muted)] mb-3">
              Crisp legibility across mobile screens, tables, and compact controls.
            </p>
            <div className="text-xs text-[var(--muted)] border-t border-[var(--line)] pt-3 font-body">
              Targeted for: paragraph text, navigation buttons, chips, form inputs, tooltips.
            </div>
          </div>
        </div>
      </div>

      {/* Colour Tokens Gallery */}
      <div className="p-6 rounded-[1.25rem] bg-[var(--panel)] border border-[var(--line)]">
        <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
          <h3 className="font-heading text-lg font-bold text-[var(--ink)] flex items-center gap-2">
            <Palette className="w-5 h-5 text-[var(--accent)]" />
            CSS Variable Tokens
          </h3>
          <span className="text-xs text-[var(--muted)] flex items-center gap-1.5">
            <Moon className="w-3.5 h-3.5" />
            Dark mode switches automatically via system preference
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {tokens.map((token) => (
            <div
              key={token.cssVariable}
              className="p-4 rounded-[1.25rem] bg-[var(--paper)] border border-[var(--line)] flex items-start gap-3.5"
            >
              <div
                className="w-10 h-10 rounded-[0.75rem] border border-[var(--line)] shrink-0 shadow-xs flex items-center justify-center font-mono text-[10px]"
                style={{ backgroundColor: `var(${token.cssVariable})` }}
              />
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between gap-1">
                  <span className="text-xs font-bold text-[var(--ink)] truncate">{token.name}</span>
                  <code className="text-[11px] font-mono text-[var(--accent)]">{token.cssVariable}</code>
                </div>
                <p className="text-[11px] text-[var(--muted)] mt-1 leading-snug">{token.description}</p>
                <div className="mt-2 flex items-center gap-3 text-[10px] font-mono text-[var(--muted)]">
                  <span>Light: {token.lightValue}</span>
                  <span>Dark: {token.darkValue}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Sizing Specifications Card */}
      <div className="p-6 rounded-[1.25rem] bg-[var(--panel)] border border-[var(--line)]">
        <h3 className="font-heading text-lg font-bold text-[var(--ink)] mb-4 flex items-center gap-2">
          <Maximize2 className="w-5 h-5 text-[var(--accent)]" />
          Mandatory Sizing Specifications
        </h3>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs md:text-sm">
            <thead>
              <tr className="border-b border-[var(--line)] text-[var(--muted)]">
                <th className="py-2.5 pr-4 font-semibold">Element</th>
                <th className="py-2.5 px-4 font-semibold">Unit Spec</th>
                <th className="py-2.5 px-4 font-semibold">Pixels (16px base)</th>
                <th className="py-2.5 pl-4 font-semibold">Guideline Requirement</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[var(--line)]">
              {sizings.map((s) => (
                <tr key={s.element}>
                  <td className="py-3 pr-4 font-medium text-[var(--ink)]">{s.element}</td>
                  <td className="py-3 px-4 font-mono font-bold text-[var(--accent)]">{s.value}</td>
                  <td className="py-3 px-4 font-mono text-[var(--muted)]">{s.pixelEquivalent}</td>
                  <td className="py-3 pl-4 text-[var(--muted)]">{s.rule}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
