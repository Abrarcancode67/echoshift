/**
 * FreeAppStore Domain Types & Guidelines Schema
 * Conforms to FreeAppStore Guidelines Summary & Developer Handbook (12 June 2026)
 */

export type NavigationTab = 'handbook' | 'tokens' | 'checklist' | 'architecture' | 'audit';

export type ComplianceCategory = 'build' | 'design' | 'pwa' | 'privacy' | 'performance';

export interface ChecklistItem {
  id: string;
  category: ComplianceCategory;
  title: string;
  requirement: string;
  sourceDoc: 'Guidelines Summary' | 'Developer Handbook';
  completed: boolean;
}

export interface DesignTokenSpec {
  name: string;
  cssVariable: string;
  lightValue: string;
  darkValue: string;
  description: string;
}

export interface SizingSpec {
  element: string;
  value: string;
  pixelEquivalent: string;
  rule: string;
}

export interface AuditQuestion {
  id: string;
  question: string;
  category: string;
  violatesGuideline: boolean;
  explanation: string;
}
