import React from 'react';
import { BookOpen, Palette, CheckCircle2, FolderGit2, ShieldCheck } from 'lucide-react';
import { NavigationTab } from '../types';

interface SidebarProps {
  activeTab: NavigationTab;
  onTabChange: (tab: NavigationTab) => void;
  completedCount: number;
  totalCount: number;
}

export const Sidebar: React.FC<SidebarProps> = ({
  activeTab,
  onTabChange,
  completedCount,
  totalCount,
}) => {
  const navItems = [
    { id: 'handbook' as NavigationTab, label: 'Handbook & Specs', icon: BookOpen },
    { id: 'tokens' as NavigationTab, label: 'Tokens & Sizing', icon: Palette },
    { id: 'checklist' as NavigationTab, label: 'Approval Checklist', icon: CheckCircle2 },
    { id: 'architecture' as NavigationTab, label: 'Project Architecture', icon: FolderGit2 },
    { id: 'audit' as NavigationTab, label: 'Compliance Audit', icon: ShieldCheck },
  ];

  const percent = Math.round((completedCount / totalCount) * 100);

  return (
    <aside
      id="desktop-sidebar"
      className="hidden lg:flex flex-col w-[17rem] shrink-0 border-r border-[var(--line)] bg-[var(--panel)] min-h-[100svh] sticky top-0 h-[100svh] overflow-y-auto"
      style={{ width: 'var(--sidebar-w, 17rem)' }}
    >
      {/* Brand Header */}
      <div className="p-6 border-b border-[var(--line)]">
        <div className="flex items-center gap-2.5 mb-1.5">
          <div className="w-8 h-8 rounded-[0.75rem] bg-[var(--accent)] flex items-center justify-center text-white font-bold text-sm">
            FA
          </div>
          <div>
            <h1 className="font-heading text-lg font-bold tracking-tight text-[var(--ink)] leading-tight">
              FreeAppStore
            </h1>
            <p className="text-[11px] font-medium text-[var(--muted)] tracking-wider uppercase">
              Guidelines 2026
            </p>
          </div>
        </div>
        <p className="text-xs text-[var(--muted)] mt-2 leading-relaxed">
          Source of truth reference & approval handbook for developers.
        </p>
      </div>

      {/* Navigation Links */}
      <nav className="p-4 space-y-1.5 flex-1" aria-label="Main Navigation">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;
          return (
            <button
              key={item.id}
              id={`nav-btn-${item.id}`}
              onClick={() => onTabChange(item.id)}
              className={`w-full flex items-center gap-3 px-3.5 py-2.5 rounded-[0.75rem] text-sm font-medium transition-colors text-left ${
                isActive
                  ? 'bg-[var(--accent)] text-[var(--accent-contrast)] font-semibold shadow-xs'
                  : 'text-[var(--ink)] hover:bg-[var(--paper)]'
              }`}
            >
              <Icon className="w-4 h-4 shrink-0" />
              <span>{item.label}</span>
              {item.id === 'checklist' && (
                <span
                  className={`ml-auto text-xs px-2 py-0.5 rounded-full ${
                    isActive
                      ? 'bg-white/20 text-white'
                      : 'bg-[var(--paper)] text-[var(--muted)] border border-[var(--line)]'
                  }`}
                >
                  {completedCount}/{totalCount}
                </span>
              )}
            </button>
          );
        })}
      </nav>

      {/* Compliance Meter */}
      <div className="p-4 m-4 rounded-[1.25rem] bg-[var(--paper)] border border-[var(--line)]">
        <div className="flex items-center justify-between text-xs mb-2">
          <span className="font-medium text-[var(--ink)]">Checklist Status</span>
          <span className="font-semibold text-[var(--accent)]">{percent}%</span>
        </div>
        <div className="w-full bg-[var(--line)] h-2 rounded-full overflow-hidden">
          <div
            className="bg-[var(--accent)] h-full transition-all duration-300 rounded-full"
            style={{ width: `${percent}%` }}
          />
        </div>
        <div className="mt-3 flex items-center gap-1.5 text-[11px] text-[var(--muted)]">
          <span className="w-2 h-2 rounded-full bg-[var(--success)] shrink-0" />
          <span>Strict Mode & Local Storage only</span>
        </div>
      </div>

      {/* Version Stamp & Store Link */}
      <div className="p-4 border-t border-[var(--line)] text-center text-[11px] text-[var(--muted)] flex flex-col gap-1 items-center">
        <span>Updated: 12 June 2026 &bull; v1.0</span>
        <a
          href="https://freeappstore.online"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[var(--accent)] hover:underline font-medium"
        >
          Built for freeappstore.online
        </a>
      </div>
    </aside>
  );
};
