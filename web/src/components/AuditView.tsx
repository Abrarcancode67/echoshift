import React, { useState } from 'react';
import { ShieldCheck, CheckCircle, XCircle, HelpCircle } from 'lucide-react';
import { AuditQuestion } from '../types';

export const AuditView: React.FC = () => {
  const [selectedAuditId, setSelectedAuditId] = useState<string | null>('audit-dark-toggle');

  const questions: AuditQuestion[] = [
    {
      id: 'audit-dark-toggle',
      category: 'Design System',
      question: 'Can I add a sun/moon manual dark mode toggle button in my navbar?',
      violatesGuideline: true,
      explanation:
        'VIOLATION: The Guidelines Summary explicitly states: "Use system preference via prefers-color-scheme; no manual toggle". Apps must respect the operating system or browser theme automatically.',
    },
    {
      id: 'audit-analytics',
      category: 'Privacy',
      question: 'Can I integrate lightweight telemetry like third-party telemetry or web trackers?',
      violatesGuideline: true,
      explanation:
        'VIOLATION: The Privacy Rules strictly forbid all analytics: "No analytics, telemetry, usage metrics, or tracking network requests. Zero tracking requests". Use the platform analytics loader if authorized.',
    },
    {
      id: 'audit-cookies',
      category: 'Privacy',
      question: 'Can I store user auth or state in a session cookie or document.cookie?',
      violatesGuideline: true,
      explanation:
        'VIOLATION: "No cookies of any kind. All user data stays on-device in localStorage."',
    },
    {
      id: 'audit-multi-accent',
      category: 'Design System',
      question: 'Can I use multiple accent colors (e.g. purple for tasks, orange for alerts, green for buttons)?',
      violatesGuideline: true,
      explanation:
        'VIOLATION: "Each app gets one accent colour only for active states, primary buttons, and highlights". Semantic tokens like --success/--warning/--error are reserved for alerts, but brand highlights must use one accent.',
    },
    {
      id: 'audit-cloud-storage',
      category: 'Architecture',
      question: 'Can a Standalone app use a free Firebase or Supabase database to save user data?',
      violatesGuideline: true,
      explanation:
        'VIOLATION: "Standalone apps must not use server-side user storage. All user data stays on-device in localStorage." Only use connected templates with @freeappstore/sdk if multi-device sync or realtime rooms are required.',
    },
    {
      id: 'audit-bundle-size',
      category: 'Performance',
      question: 'Is a bundle size of 180KB gzipped acceptable if it includes animation libraries?',
      violatesGuideline: true,
      explanation:
        'VIOLATION: The Build and Code compliance check mandates: "core JS bundle under 100KB gzipped; first load under 2 seconds on 3G". Avoid heavy bloated packages.',
    },
    {
      id: 'audit-fonts',
      category: 'Design System',
      question: 'Can I use Inter, Roboto, or custom local fonts instead of Fraunces & Manrope?',
      violatesGuideline: true,
      explanation:
        'VIOLATION: Brand guidelines strictly require "Manrope for body/UI text; Fraunces for headlines and card titles".',
    },
    {
      id: 'audit-pwa-offline',
      category: 'PWA',
      question: 'Does the app need to be installable and work offline without internet connection?',
      violatesGuideline: false,
      explanation:
        'COMPLIANT: Yes! PWA compliance is strictly required: manifest.json, apple-mobile-web-app-capable meta tag, registered service worker, home-screen support, and works fully offline after first load.',
    },
  ];

  const activeQuestion = questions.find((q) => q.id === selectedAuditId);

  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      {/* Intro Header */}
      <div className="p-6 md:p-8 rounded-[1.25rem] bg-[var(--panel)] border border-[var(--line)]">
        <h2 className="font-heading text-2xl md:text-3xl font-bold text-[var(--ink)] mb-3">
          Compliance Audit Simulator
        </h2>
        <p className="text-sm md:text-base text-[var(--muted)] leading-relaxed">
          Test proposed features against FreeAppStore guidelines before implementation. 
          Avoid the most common review rejections regarding privacy, dark mode, cookies, and bundle bloat.
        </p>
      </div>

      {/* Interactive Audit Question List */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
        {/* Question Selector */}
        <div className="lg:col-span-6 space-y-2.5">
          <div className="text-xs font-bold uppercase tracking-wider text-[var(--muted)] mb-2">
            Select a Scenario to Verify:
          </div>
          {questions.map((q) => {
            const isSelected = q.id === selectedAuditId;
            return (
              <button
                key={q.id}
                onClick={() => setSelectedAuditId(q.id)}
                className={`w-full text-left p-3.5 rounded-[0.75rem] border transition-all flex items-start gap-3 ${
                  isSelected
                    ? 'bg-[var(--panel)] border-[var(--accent)] shadow-xs ring-1 ring-[var(--accent)]'
                    : 'bg-[var(--paper)] border-[var(--line)] hover:bg-[var(--panel)]'
                }`}
              >
                {q.violatesGuideline ? (
                  <XCircle className="w-4 h-4 text-[var(--error)] shrink-0 mt-0.5" />
                ) : (
                  <CheckCircle className="w-4 h-4 text-[var(--success)] shrink-0 mt-0.5" />
                )}
                <div className="min-w-0">
                  <div className="text-[11px] font-bold text-[var(--muted)] uppercase tracking-wider">
                    {q.category}
                  </div>
                  <div className="text-xs font-semibold text-[var(--ink)] mt-0.5 line-clamp-2">
                    {q.question}
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Verdict Details Panel */}
        <div className="lg:col-span-6">
          {activeQuestion ? (
            <div className="p-6 rounded-[1.25rem] bg-[var(--panel)] border border-[var(--line)] sticky top-6">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-[var(--muted)]">
                  FreeAppStore Review Verdict
                </span>
                {activeQuestion.violatesGuideline ? (
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-[var(--error)]/10 text-[var(--error)] border border-[var(--error)]/20 flex items-center gap-1.5">
                    <XCircle className="w-3.5 h-3.5" /> Prohibited (Rejection)
                  </span>
                ) : (
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-[var(--success)]/10 text-[var(--success)] border border-[var(--success)]/20 flex items-center gap-1.5">
                    <CheckCircle className="w-3.5 h-3.5" /> Approved Requirement
                  </span>
                )}
              </div>

              <h3 className="font-heading text-lg font-bold text-[var(--ink)] mb-3">
                {activeQuestion.question}
              </h3>

              <div className="p-4 rounded-[0.75rem] bg-[var(--paper)] border border-[var(--line)] mb-4">
                <p className="text-xs md:text-sm text-[var(--ink)] leading-relaxed font-medium">
                  {activeQuestion.explanation}
                </p>
              </div>

              <div className="space-y-2 text-xs text-[var(--muted)]">
                <div className="flex items-start gap-2">
                  <ShieldCheck className="w-4 h-4 text-[var(--accent)] shrink-0 mt-0.5" />
                  <span>
                    The FreeAppStore review process verifies that all submitted code strictly adheres to these privacy, performance, and UI standards.
                  </span>
                </div>
              </div>
            </div>
          ) : (
            <div className="p-6 rounded-[1.25rem] bg-[var(--panel)] border border-[var(--line)] text-center text-xs text-[var(--muted)]">
              <HelpCircle className="w-6 h-6 mx-auto mb-2 text-[var(--muted)]" />
              Select a scenario on the left to review approval verdict.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
