import React, { useState } from 'react';
import { CheckCircle2, RotateCcw, Filter, Check, ExternalLink } from 'lucide-react';
import { ChecklistItem, ComplianceCategory } from '../types';

interface ChecklistViewProps {
  items: ChecklistItem[];
  onToggleItem: (id: string) => void;
  onReset: () => void;
}

export const ChecklistView: React.FC<ChecklistViewProps> = ({ items, onToggleItem, onReset }) => {
  const [selectedCategory, setSelectedCategory] = useState<ComplianceCategory | 'all'>('all');

  const categories: { id: ComplianceCategory | 'all'; label: string }[] = [
    { id: 'all', label: 'All Criteria' },
    { id: 'build', label: 'Build & Code' },
    { id: 'design', label: 'Design System' },
    { id: 'pwa', label: 'PWA & Offline' },
    { id: 'privacy', label: 'Privacy & Storage' },
    { id: 'performance', label: 'Performance' },
  ];

  const filteredItems = items.filter((item) => {
    if (selectedCategory === 'all') return true;
    return item.category === selectedCategory;
  });

  const completedCount = items.filter((i) => i.completed).length;
  const totalCount = items.length;
  const percentage = Math.round((completedCount / totalCount) * 100);

  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      {/* Header Banner */}
      <div className="p-6 md:p-8 rounded-[1.25rem] bg-[var(--panel)] border border-[var(--line)]">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[var(--accent)]">
              Approval Source of Truth
            </span>
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-[var(--ink)] mt-1 mb-2">
              Official Compliance Checklist
            </h2>
            <p className="text-xs md:text-sm text-[var(--muted)] max-w-xl">
              Every app submitted to the FreeAppStore is evaluated against these strict criteria. 
              Toggle each item to verify and audit your application readiness.
            </p>
          </div>

          {/* Progress Card */}
          <div className="p-4 rounded-[1.25rem] bg-[var(--paper)] border border-[var(--line)] shrink-0 min-w-[180px] text-center">
            <div className="text-3xl font-bold font-heading text-[var(--ink)] mb-1">
              {percentage}%
            </div>
            <div className="text-xs font-medium text-[var(--muted)]">
              {completedCount} of {totalCount} Requirements Passed
            </div>
            <div className="w-full bg-[var(--line)] h-2 rounded-full overflow-hidden mt-3">
              <div
                className="bg-[var(--accent)] h-full transition-all duration-300 rounded-full"
                style={{ width: `${percentage}%` }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Filter Chips & Reset Bar */}
      <div className="flex flex-wrap items-center justify-between gap-2">
        <div className="flex flex-wrap items-center gap-1.5" role="tablist">
          <span className="text-xs text-[var(--muted)] mr-1 flex items-center gap-1">
            <Filter className="w-3.5 h-3.5" /> Filter:
          </span>
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-3 py-1.5 rounded-[0.75rem] text-xs font-medium transition-colors whitespace-nowrap ${
                selectedCategory === cat.id
                  ? 'bg-[var(--accent)] text-[var(--accent-contrast)]'
                  : 'bg-[var(--panel)] text-[var(--muted)] hover:text-[var(--ink)] border border-[var(--line)]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <button
          onClick={onReset}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-[0.75rem] text-xs font-medium bg-[var(--panel)] text-[var(--muted)] hover:text-[var(--ink)] border border-[var(--line)] transition-colors"
          title="Reset checklist items"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          <span>Reset All</span>
        </button>
      </div>

      {/* Checklist Items Container */}
      <div className="space-y-3">
        {filteredItems.map((item) => {
          return (
            <div
              key={item.id}
              onClick={() => onToggleItem(item.id)}
              className={`p-5 rounded-[1.25rem] border transition-all cursor-pointer select-none flex items-start gap-4 ${
                item.completed
                  ? 'bg-[var(--panel)] border-[var(--line)] shadow-2xs'
                  : 'bg-[var(--paper)] border-[var(--line)] opacity-70'
              }`}
            >
              {/* Toggle Checkbox Button */}
              <button
                type="button"
                role="checkbox"
                aria-checked={item.completed}
                className={`mt-0.5 w-6 h-6 rounded-[0.5rem] border flex items-center justify-center transition-colors shrink-0 ${
                  item.completed
                    ? 'bg-[var(--accent)] border-[var(--accent)] text-[var(--accent-contrast)]'
                    : 'border-[var(--line)] bg-[var(--panel)]'
                }`}
                onClick={(e) => {
                  e.stopPropagation();
                  onToggleItem(item.id);
                }}
              >
                {item.completed && <Check className="w-3.5 h-3.5 stroke-[3]" />}
              </button>

              <div className="flex-1 min-w-0">
                <div className="flex flex-wrap items-center gap-2 mb-1">
                  <span
                    className={`font-heading text-base font-semibold ${
                      item.completed ? 'text-[var(--ink)]' : 'text-[var(--muted)]'
                    }`}
                  >
                    {item.title}
                  </span>
                  <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-[var(--paper)] text-[var(--muted)] border border-[var(--line)]">
                    {item.category}
                  </span>
                  <span className="text-[10px] text-[var(--muted)] ml-auto">
                    {item.sourceDoc}
                  </span>
                </div>
                <p className="text-xs md:text-sm text-[var(--muted)] leading-relaxed">
                  {item.requirement}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Guidelines Footer Callout */}
      <div className="p-5 rounded-[1.25rem] bg-[var(--paper)] border border-[var(--line)] flex items-center justify-between gap-4">
        <div className="flex items-center gap-2.5 text-xs text-[var(--muted)]">
          <CheckCircle2 className="w-4 h-4 text-[var(--success)] shrink-0" />
          <span>Passed items are permanently synced to on-device localStorage.</span>
        </div>
        <a
          href="https://freeappstore.online/guidelines"
          target="_blank"
          rel="noreferrer"
          className="text-xs font-semibold text-[var(--accent)] hover:underline flex items-center gap-1 shrink-0"
        >
          <span>Official Portal</span>
          <ExternalLink className="w-3 h-3" />
        </a>
      </div>
    </div>
  );
};
