# Codebase Purpose, Architecture & Design Guidelines

## 1. Product Purpose & Purpose
**HerVoice** is an interactive digital empowerment platform designed for young women and girls in Botswana. The platform unites legal rights education, role model spotlights, community vision boarding, verified government/NGO toolkits, and interactive learning modules.

### Core Taglines & Identity
- **Primary Name**: HerVoice
- **Tagline**: Empowering the Next Generation of Botswana's Leaders
- **Mission Statement**: Championing equality, legal protection, leadership, and youth innovation across Botswana through accessible education, inspirational role models, and community collaboration.

---

## 2. Core Product Logic & Data Shapes
The codebase is structured around five primary domain pillars:

1. **Rights & Legal Protections (`RightPillar`)**:
   - Plain-language legal breakdowns with official Botswana statutes and citations.
   - Covers 4 core areas:
     - **Education Rights** (Ministry of Basic Education Policy Circular No. 2 of 1999)
     - **Property & Financial Rights** (Abolition of Marital Power Act of 2004)
     - **Safety & Protection** (Domestic Violence Act of 2008)
     - **Healthcare & SRHR** (Adolescent & Youth Friendly Services Standard)

2. **Leader Spotlights (`Spotlight`)**:
   - Verified profile gallery celebrating inspirational Botswana women leaders.
   - Categories: `Leadership`, `Science`, `Business`, `Sports`, `Creative Arts`.
   - Profiles include real achievements, quotes, and official source links (e.g., Unity Dow, Kgosi Mosadi Seboko, Bogolo Kenewendo, Lesego Chombo, Amantle Montsho, Dr. Matshidiso Moeti, Mpule Kwelagobe).

3. **Community Dream Board (`DreamGoal`)**:
   - Interactive vision board allowing users to pin personal aspirations and community initiatives.
   - Features task completion checklists, progress percentage tracking, location badges, and interactive cheering ("cheersCount").

4. **Resource & Toolkit Library (`ResourceAsset`)**:
   - Verified downloadable handbooks, pitch packs, and directories published by Emang Basadi, CEDA, LEA, BOFWA, Childline Botswana, and Legal Aid Botswana.
   - Supports built-in A4 PDF/printable document generation via `downloadA4Brief`.

5. **Legal Rights Quiz (`QuizQuestion`)**:
   - Gamified 5-question knowledge check testing understanding of Botswana laws with real-time feedback and statutory explanations.

---

## 3. Critical Codebase Files & Structure

| File Path | Role & Purpose |
|---|---|
| `/metadata.json` | Platform configuration (`HerVoice`, description, capabilities). |
| `/package.json` | Dependencies (React 19, Vite 6, Tailwind v4, Motion v12, `@google/genai`). |
| `/vite.config.ts` | Build setup with `@` path alias, `esbuild` minification, and `@tailwindcss/vite`. |
| `/src/types.ts` | Core TypeScript interfaces (`TabType`, `Spotlight`, `ResourceAsset`, `DreamGoal`, `QuizQuestion`, `RightPillar`). |
| `/src/data/mockData.ts` | Ground-truth content repository containing verified Botswana legal statutes, handbooks, emergency contacts, and leader bios. |
| `/src/index.css` | Frosted Liquid Glass design system (`.glass-panel`, `.glass-pill`, `.liquid-orb`). |
| `/src/App.tsx` | Main application container managing top-level navigation, theme switcher, ambient audio, modal states, and search indexing. |
| `/src/components/Header.tsx` | Frosted sticky header with responsive navigation drawer and search launcher. |
| `/src/components/Footer.tsx` | Footer with platform quick links, emergency helpline numbers, and community credits. |
| `/src/components/NominateModal.tsx` | Modal form to nominate inspirational Botswana women leaders. |
| `/src/components/AddGoalModal.tsx` | Modal form to pin new dream cards to the community vision board. |
| `/src/components/ResourceModal.tsx` | Modal viewer for resource handbooks and CEDA/LEA pitch packs. |
| `/src/components/RightsDetailModal.tsx` | Deep-dive modal for legal rights statutes with download options. |
| `/src/components/SearchModal.tsx` | Global search modal indexing spotlights, resources, goals, and legal rights. |
| `/src/components/JoinUsModal.tsx` | Volunteer, mentorship, and community chapter sign-up modal. |
| `/src/utils/downloadA4Brief.ts` | Client-side A4 document generator for printable legal guides. |

---

## 4. Visual Identity & Design System

### Color Tokens
- **Magenta Accent (Primary)**: `#e040a0` (Light Mode) / `#f25cb8` (Dark Mode)
- **Deep Purple (Secondary)**: `#7c52aa` / `#b08cc9`
- **Cyan / Teal (Highlight)**: `#0077b6` / `#00b4d8`
- **Light Theme Canvas**: `#fdf8fc` with soft pink/purple gradient glows
- **Dark Theme Canvas**: `#140a14` with deep plum `#1a0e19` glass panels

### Frosted Liquid Glass System
- **`.glass-panel`**:
  - `background: rgba(255, 255, 255, 0.84)` (Dark: `rgba(22, 11, 21, 0.88)`)
  - `backdrop-filter: blur(28px) saturate(190%)`
  - `border: 1px solid rgba(255, 255, 255, 0.8)` (Dark: `rgba(255, 255, 255, 0.12)`)
  - `box-shadow: 0 8px 32px 0 rgba(224, 64, 160, 0.08)`
  - Hardware accelerated via `transform: translateZ(0)`
- **`.glass-pill`**:
  - `backdrop-filter: blur(20px) saturate(180%)`
  - Pill radius (`rounded-full`) with subtle magenta/white borders

### Typography & Spacing Rules
- **Eyebrow Badges**: `text-[10px] font-black uppercase tracking-wider text-[#7c52aa] dark:text-[#b08cc9]`
- **Headings**: Extra-bold/black weight (`font-black`) with tight letter spacing.
- **Button Standards**: `rounded-full`, uppercase tracking, `active:scale-95` press feedback, smooth transition states.

---

## 5. Development & Execution Goals
1. **Zero Fake Placeholders**: All copy, organization names (Emang Basadi, CEDA, LEA, BOFWA, Childline), phone numbers, and statutes reflect real-world Botswana institutions and legislation.
2. **High Performance**: Use hardware-accelerated CSS backdrops (`translateZ(0)`), optimized image rendering with fallback error handling, and lightweight Motion animations.
3. **Accessibility**: High-contrast text on glass backgrounds (WCAG AA compliant), ARIA labeling on interactive triggers, keyboard escape listener for modals.
4. **Responsive Layouts**: Desktop-first density scaled cleanly down to mobile viewports (`sm:`, `md:`, `lg:`).
