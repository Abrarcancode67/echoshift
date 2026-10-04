/**
 * FreeAppStore Typed LocalStorage Service
 * Complies with: "Implement localStorage persistence through typed service functions, not scattered direct calls"
 */

import { ChecklistItem } from '../types';

const STORAGE_KEY = 'freeappstore_guidelines_checklist_v1';

export const DEFAULT_CHECKLIST_ITEMS: ChecklistItem[] = [
  // Build and Code
  {
    id: 'build-ts-strict',
    category: 'build',
    title: 'TypeScript Strict Mode',
    requirement: 'TypeScript ^5.7 with strict mode enabled; no any types allowed.',
    sourceDoc: 'Guidelines Summary',
    completed: true,
  },
  {
    id: 'build-clean',
    category: 'build',
    title: 'Zero Build Warnings',
    requirement: 'Clean build with zero compiler, bundler, or linter warnings.',
    sourceDoc: 'Guidelines Summary',
    completed: true,
  },
  {
    id: 'build-bundle-size',
    category: 'build',
    title: 'Core JS Bundle Under 100KB Gzipped',
    requirement: 'Avoid heavy packages; core JS bundle must remain strictly under 100KB gzipped.',
    sourceDoc: 'Guidelines Summary',
    completed: true,
  },
  {
    id: 'build-mit-license',
    category: 'build',
    title: 'MIT License Present',
    requirement: 'The repository must include an open source MIT license file.',
    sourceDoc: 'Guidelines Summary',
    completed: true,
  },

  // Design System
  {
    id: 'design-typography',
    category: 'design',
    title: 'Manrope & Fraunces Typography',
    requirement: 'Manrope for all body and UI text; Fraunces for headlines and card titles.',
    sourceDoc: 'Guidelines Summary',
    completed: true,
  },
  {
    id: 'design-tokens',
    category: 'design',
    title: 'Shared CSS Neutrals & Variables',
    requirement: 'Use shared tokens: --paper, --ink, --muted, --line, --panel, --glass, --success, --warning, --error.',
    sourceDoc: 'Guidelines Summary',
    completed: true,
  },
  {
    id: 'design-single-accent',
    category: 'design',
    title: 'Single Accent Colour Only',
    requirement: 'Each app gets one accent colour only for active states, primary buttons, and highlights.',
    sourceDoc: 'Guidelines Summary',
    completed: true,
  },
  {
    id: 'design-shell-layout',
    category: 'design',
    title: 'Official Shell Layout',
    requirement: 'Sidebar (17rem) + main content at 1024px+; App header + main + bottom dock below 1024px.',
    sourceDoc: 'Guidelines Summary',
    completed: true,
  },
  {
    id: 'design-system-dark-mode',
    category: 'design',
    title: 'System Preference Dark Mode',
    requirement: 'Use system preference via prefers-color-scheme; strictly NO manual toggle.',
    sourceDoc: 'Guidelines Summary',
    completed: true,
  },
  {
    id: 'design-safe-area',
    category: 'design',
    title: 'Safe-Area Support',
    requirement: 'Handles notch, dynamic island, and home indicator padding on mobile.',
    sourceDoc: 'Guidelines Summary',
    completed: true,
  },

  // PWA
  {
    id: 'pwa-manifest',
    category: 'pwa',
    title: 'Valid manifest.json',
    requirement: 'Web app manifest with name, icons, and theme colour configured.',
    sourceDoc: 'Guidelines Summary',
    completed: true,
  },
  {
    id: 'pwa-apple-meta',
    category: 'pwa',
    title: 'apple-mobile-web-app-capable Meta Tag',
    requirement: 'Enable standalone launch on iOS Safari home-screen additions.',
    sourceDoc: 'Guidelines Summary',
    completed: true,
  },
  {
    id: 'pwa-offline',
    category: 'pwa',
    title: 'Works Offline After First Load',
    requirement: 'Launches from home screen and functions fully offline without connection errors.',
    sourceDoc: 'Guidelines Summary',
    completed: true,
  },

  // Privacy
  {
    id: 'privacy-zero-tracking',
    category: 'privacy',
    title: 'Zero Tracking & Analytics',
    requirement: 'No analytics, telemetry, usage metrics, or tracking network requests.',
    sourceDoc: 'Guidelines Summary',
    completed: true,
  },
  {
    id: 'privacy-no-cookies',
    category: 'privacy',
    title: 'No Cookies of Any Kind',
    requirement: 'Zero session or persistent cookies created or read.',
    sourceDoc: 'Guidelines Summary',
    completed: true,
  },
  {
    id: 'privacy-local-storage',
    category: 'privacy',
    title: 'On-Device Storage Only',
    requirement: 'All user data stays on-device in localStorage; standalone apps must not use server-side user storage.',
    sourceDoc: 'Guidelines Summary',
    completed: true,
  },
  {
    id: 'privacy-no-external-scripts',
    category: 'privacy',
    title: 'No External Scripts',
    requirement: 'No third-party SDKs, tags, or scripts except Google CDN fonts.',
    sourceDoc: 'Guidelines Summary',
    completed: true,
  },

  // Performance
  {
    id: 'perf-load-time',
    category: 'performance',
    title: 'First Load Under 2s on 3G',
    requirement: 'Lightweight payload loads quickly on slow connections.',
    sourceDoc: 'Guidelines Summary',
    completed: true,
  },
  {
    id: 'perf-cls',
    category: 'performance',
    title: 'Zero Layout Shift (CLS)',
    requirement: 'Stable layout with reserved image/container dimensions.',
    sourceDoc: 'Guidelines Summary',
    completed: true,
  },
  {
    id: 'perf-responsive',
    category: 'performance',
    title: 'Responsive from 320px to 1024px+',
    requirement: 'Fits narrow phones without clipping or horizontal overflow, expands cleanly on desktop.',
    sourceDoc: 'Guidelines Summary',
    completed: true,
  },
];

export function loadChecklist(): ChecklistItem[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      return DEFAULT_CHECKLIST_ITEMS;
    }
    const parsed = JSON.parse(raw) as ChecklistItem[];
    if (Array.isArray(parsed) && parsed.length > 0) {
      return parsed;
    }
  } catch (err) {
    console.warn('Failed to load checklist from localStorage:', err);
  }
  return DEFAULT_CHECKLIST_ITEMS;
}

export function saveChecklist(items: ChecklistItem[]): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  } catch (err) {
    console.warn('Failed to save checklist to localStorage:', err);
  }
}

export function resetChecklist(): ChecklistItem[] {
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch (err) {
    console.warn('Failed to clear checklist in localStorage:', err);
  }
  return DEFAULT_CHECKLIST_ITEMS;
}
