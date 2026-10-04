import React from 'react';

interface MobileHeaderProps {
  completedCount: number;
  totalCount: number;
}

export const MobileHeader: React.FC<MobileHeaderProps> = ({ completedCount, totalCount }) => {
  return (
    <header
      id="mobile-app-header"
      className="lg:hidden sticky top-0 z-30 bg-[var(--panel)]/90 backdrop-blur-md border-b border-[var(--line)] px-4 py-3 safe-top"
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <div className="w-7 h-7 rounded-[0.5rem] bg-[var(--accent)] flex items-center justify-center text-white font-bold text-xs">
            FA
          </div>
          <div>
            <h1 className="font-heading text-base font-bold text-[var(--ink)] leading-none">
              FreeAppStore
            </h1>
            <span className="text-[10px] text-[var(--muted)]">Guidelines Summary</span>
          </div>
        </div>
        <div className="flex items-center gap-2 bg-[var(--paper)] px-2.5 py-1 rounded-full border border-[var(--line)] text-xs">
          <span className="w-1.5 h-1.5 rounded-full bg-[var(--success)]" />
          <span className="font-medium text-[var(--ink)]">
            {completedCount}/{totalCount} Passed
          </span>
        </div>
      </div>
    </header>
  );
};
