# Data Engineering Portfolio Refresh Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Refresh the portfolio into a premium, recruiter-friendly data engineering site with sharper project storytelling and a stronger visual system.

**Architecture:** Keep the existing React + Vite + Tailwind structure, but centralize the new content model in `src/data/resume.js` and rebuild the shared UI shell around a darker editorial design. Update the main sections (`Home`, `About`, `Projects`, `Skills`, `Learning`, `Contact`) to read like a focused hiring portfolio for data engineering roles.

**Tech Stack:** React 19, Vite, Tailwind CSS, Framer Motion, React Router, React Icons

---

### Task 1: Refresh the content model

**Files:**
- Modify: `src/data/resume.js`

- [ ] **Step 1: Rewrite the resume data structure with stronger hiring-focused copy**

Replace the existing summary, skill categories, experience bullets, education, certifications, and projects so they reflect the approved positioning and the project reference files in `C:\Users\kirth\Desktop\Website\project-refs\`.

- [ ] **Step 2: Keep only relevant featured work**

Ensure the featured project set prioritizes:
- `Healthcare CDC Pipeline`
- `RetailPulse`
- `Real-World E-Commerce Analytics Pipeline`

- [ ] **Step 3: Verify data imports still match component usage**

Run a quick source scan after the rewrite to confirm that pages/components still reference valid keys from `resumeData`.

### Task 2: Replace the global visual system

**Files:**
- Modify: `src/index.css`
- Modify: `src/App.jsx`
- Modify: `src/App.css`

- [ ] **Step 1: Redesign the root theme**

Move the app away from the default light-starter look by introducing a premium dark editorial palette, stronger surface tokens, refined spacing, and utility classes for cards, pills, metrics, and section framing.

- [ ] **Step 2: Remove leftover Vite starter styles**

Strip unused starter CSS from `src/App.css` and adjust `src/App.jsx` so the root wrapper no longer constrains the site like a template.

- [ ] **Step 3: Verify the shared shell still wraps all routes cleanly**

Check `src/App.jsx` after edits to confirm navigation, route rendering, and footer composition still work with the new root layout.

### Task 3: Rebuild shared UI components

**Files:**
- Modify: `src/components/Navbar.jsx`
- Modify: `src/components/Hero.jsx`
- Modify: `src/components/ProjectCard.jsx`
- Modify: `src/components/Footer.jsx`

- [ ] **Step 1: Upgrade navigation**

Create a more premium fixed nav with stronger branding, correct profile links, and mobile behavior that matches the new visual language.

- [ ] **Step 2: Rewrite the hero**

Replace the generic hero with a data-engineering-first message, supporting proof points, and stronger calls to action aimed at recruiters and hiring managers.

- [ ] **Step 3: Rebuild project cards**

Make project cards feel more like case studies by surfacing stack, impact, architecture, and supporting metadata in a cleaner premium layout.

- [ ] **Step 4: Simplify the footer**

Remove generic social placeholders and align the footer copy with the approved professional positioning.

### Task 4: Redesign the main pages

**Files:**
- Modify: `src/pages/Home.jsx`
- Modify: `src/pages/About.jsx`
- Modify: `src/pages/Projects.jsx`
- Modify: `src/pages/Skills.jsx`
- Modify: `src/pages/Learning.jsx`
- Modify: `src/pages/Contact.jsx`

- [ ] **Step 1: Rebuild Home around hiring signal**

Add a stronger flow: hero, proof metrics, featured work, capability snapshot, and recruiter-facing CTA.

- [ ] **Step 2: Tighten About and Learning**

Rewrite these pages so they support the data engineering narrative without sounding generic or junior.

- [ ] **Step 3: Improve Projects and Skills**

Make projects read like technical proof and skills read like a role-aligned capability map instead of a keyword pile.

- [ ] **Step 4: Simplify Contact**

Replace the fake form with a cleaner contact CTA and direct outbound links that improve credibility.

### Task 5: Verify and ship

**Files:**
- Modify: `README.md`
- Verify: repo build and git history

- [ ] **Step 1: Update README**

Replace the default Vite README with a short project-specific one.

- [ ] **Step 2: Install dependencies if needed**

Run: `npm.cmd install`

Expected: dependencies installed successfully with no fatal errors.

- [ ] **Step 3: Run production verification**

Run: `npm.cmd run build`

Expected: Vite production build completes with exit code `0`.

- [ ] **Step 4: Review git state and push**

Run:
- `git status --short`
- `git log --oneline -5`
- `git push origin main`

Expected:
- only intentional files changed
- latest commits reflect the redesign work
- push completes successfully
