import React from 'react';
import { BookOpen, Palette, CheckCircle2, FolderGit2, ShieldCheck } from 'lucide-react';
import { NavigationTab } from '../types';

interface BottomDockProps {
  activeTab: NavigationTab;
  onTabChange: (tab: NavigationTab) => void;
}

export const BottomDock: React.FC<BottomDockProps> = ({ activeTab, onTabChange }) => {
  const dockItems = [
    { id: 'handbook' as NavigationTab, label: 'Handbook', icon: BookOpen },
    { id: 'tokens' as NavigationTab, label: 'Tokens', icon: Palette },
    { id: 'checklist' as NavigationTab, label: 'Checklist', icon: CheckCircle2 },
    { id: 'architecture' as NavigationTab, label: 'Structure', icon: FolderGit2 },
    { id: 'audit' as NavigationTab, label: 'Audit', icon: ShieldCheck },
  ];

  return (
    <nav
      id="mobile-bottom-dock"
      aria-label="Mobile Dock Navigation"
      className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-[var(--panel)]/95 backdrop-blur-md border-t border-[var(--line)] px-2 py-1.5 safe-bottom"
    >
      <div className="flex items-center justify-around max-w-md mx-auto">
        {dockItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;
          return (
            <button
              key={item.id}
              id={`dock-btn-${item.id}`}
              onClick={() => onTabChange(item.id)}
              className={`flex flex-col items-center justify-center py-1.5 px-3 rounded-[0.75rem] transition-colors ${
                isActive
                  ? 'text-[var(--accent)] font-semibold'
                  : 'text-[var(--muted)] hover:text-[var(--ink)]'
              }`}
            >
              <Icon className="w-5 h-5 mb-0.5" />
              <span className="text-[10px] whitespace-nowrap leading-none">{item.label}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};
