/**
 * FreeAppStore Guidelines & Developer Compliance Workspace
 * Fully compliant with FreeAppStore Guidelines Summary & Developer Handbook (12 June 2026)
 */

import { useState, useEffect } from 'react';
import { NavigationTab, ChecklistItem } from './types';
import { loadChecklist, saveChecklist, resetChecklist } from './services/checklistStorage';
import { Sidebar } from './components/Sidebar';
import { MobileHeader } from './components/MobileHeader';
import { BottomDock } from './components/BottomDock';
import { HandbookView } from './components/HandbookView';
import { DesignTokensView } from './components/DesignTokensView';
import { ChecklistView } from './components/ChecklistView';
import { ArchitectureView } from './components/ArchitectureView';
import { AuditView } from './components/AuditView';

export default function App() {
  const [activeTab, setActiveTab] = useState<NavigationTab>('handbook');
  const [checklistItems, setChecklistItems] = useState<ChecklistItem[]>(() => loadChecklist());

  // Keep state synchronized with typed localStorage service
  useEffect(() => {
    saveChecklist(checklistItems);
  }, [checklistItems]);

  const handleToggleItem = (id: string) => {
    setChecklistItems((prev) =>
      prev.map((item) => (item.id === id ? { ...item, completed: !item.completed } : item))
    );
  };

  const handleResetChecklist = () => {
    const fresh = resetChecklist();
    setChecklistItems(fresh);
  };

  const completedCount = checklistItems.filter((i) => i.completed).length;
  const totalCount = checklistItems.length;

  return (
    <div className="min-h-[100svh] bg-[var(--paper)] text-[var(--ink)] flex flex-col lg:flex-row font-body antialiased">
      {/* 1024px+ Desktop Fixed/Sticky Sidebar (17rem width) */}
      <Sidebar
        activeTab={activeTab}
        onTabChange={setActiveTab}
        completedCount={completedCount}
        totalCount={totalCount}
      />

      {/* <1024px Mobile App Header */}
      <MobileHeader completedCount={completedCount} totalCount={totalCount} />

      {/* Main Content Area */}
      <main
        id="main-content"
        className="flex-1 min-w-0 p-4 sm:p-6 lg:p-8 pb-24 lg:pb-8 overflow-y-auto"
      >
        {activeTab === 'handbook' && <HandbookView />}
        {activeTab === 'tokens' && <DesignTokensView />}
        {activeTab === 'checklist' && (
          <ChecklistView
            items={checklistItems}
            onToggleItem={handleToggleItem}
            onReset={handleResetChecklist}
          />
        )}
        {activeTab === 'architecture' && <ArchitectureView />}
        {activeTab === 'audit' && <AuditView />}

        {/* Footer with Store Link for FreeAppStore compliance */}
        <footer className="mt-12 pt-6 border-t border-[var(--line)] text-center text-xs text-[var(--muted)] flex flex-col sm:flex-row items-center justify-between gap-3">
          <span>EchoShift &bull; In-Browser Audio DSP Engine</span>
          <a
            href="https://freeappstore.online"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--accent)] hover:underline font-semibold inline-flex items-center gap-1.5"
          >
            Built for freeappstore.online
          </a>
        </footer>
      </main>

      {/* <1024px Mobile Bottom Dock */}
      <BottomDock activeTab={activeTab} onTabChange={setActiveTab} />
    </div>
  );
}
