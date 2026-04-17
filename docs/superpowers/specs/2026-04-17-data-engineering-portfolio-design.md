# Data Engineering Portfolio Redesign

Date: 2026-04-17
Project: `kirthik-dev.github.io`
Status: Approved for planning review

## Goal

Refresh the portfolio so it feels premium, recruiter-friendly, and clearly positioned for `Data Engineer` roles. The site should present AI honestly as a secondary capability that supports automation work, without overstating it or diluting the core data engineering story.

## Target Audience

- Recruiters scanning for strong data engineering candidates
- Hiring managers evaluating role fit and professionalism
- Technical interviewers reviewing project depth, architecture, and production readiness

## Positioning

Primary message:
- Kirthik is a data engineer who builds scalable pipelines, warehouse-ready models, and reliable data products.

Secondary message:
- He also uses AI selectively for workflow automation, SQL assistance, and productivity improvements where it supports engineering outcomes.

Messaging constraints:
- Do not position the site as AI-first
- Do not make claims stronger than the resume and project references support
- Prefer measurable impact, architecture clarity, and ownership over buzzwords

## Visual Direction

The site should feel more premium than a standard developer portfolio:

- Use a darker, editorial visual system with stronger contrast and more deliberate typography
- Replace generic white-card-on-white layouts with layered sections, richer surfaces, and controlled accent color
- Keep motion tasteful and purposeful, with subtle reveal and hover behavior
- Preserve responsive behavior across desktop and mobile

## Information Architecture

The existing multi-page structure stays, but the content and hierarchy become sharper.

### Home

Purpose:
- Deliver the core positioning within the first few seconds
- Show credibility, impact, and selected work quickly

Content:
- Premium hero with data-engineering-first headline
- Short supporting copy centered on production pipelines, warehousing, and analytics systems
- High-signal metrics or strengths band
- Selected project case studies with scale, stack, and outcomes
- Brief capability section oriented around hiring value
- Clear CTA to connect

### About

Purpose:
- Present a concise professional narrative and experience proof

Content:
- Rewritten summary aligned to data engineering applications
- Experience cards emphasizing ownership, scale, and outcomes
- Education and learning presented as supporting credibility, not the main focus

### Projects

Purpose:
- Function as technical proof of work

Content:
- Stronger featured projects based on resume and reference files
- Each project card should communicate:
- the problem or domain
- the architecture or stack
- the scale or operational complexity
- the outcome or analytical value

Projects should favor the most relevant data engineering work, especially:
- Healthcare CDC pipeline
- RetailPulse
- Real-world ecommerce analytics pipeline

Less relevant or weaker-fit projects can remain lower priority or be removed from the main spotlight.

### Skills

Purpose:
- Reinforce hiring fit without reading like a keyword dump

Content:
- Group skills by how teams hire for them: data platforms, warehousing, orchestration, quality, cloud, and supporting engineering tools
- Reduce visual reliance on icon grids alone
- Reflect the stronger stack shown in the resume: Spark, Snowflake, dbt, Airflow, PostgreSQL, Azure, GCP, data modeling, quality, and APIs

### Contact

Purpose:
- Make reaching out easy and credible

Content:
- Cleaner recruiter-facing CTA
- Direct contact methods and profile links
- Remove or simplify any non-functional contact form behavior if it adds noise

## Content Strategy

The data source in `src/data/resume.js` will be rewritten to better match the latest resume and project reference notes.

Content rules:
- Prefer concise, premium wording over long generic paragraphs
- Lead with outcomes, scale, and engineering decisions
- Keep AI mentions narrow and truthful
- Avoid "open to any role" language; optimize for data engineering applications

## Technical Approach

- Keep the existing React + Vite + Tailwind stack
- Rework the global visual system through shared classes and page-level section styling
- Refresh the centralized resume/project data so the site stays easy to maintain
- Update core components first: `Navbar`, `Hero`, `ProjectCard`, shared page shells
- Then update high-value pages: `Home`, `About`, `Projects`, `Skills`, `Contact`

## Error Handling and UX Considerations

- External links must remain valid and intentional
- Responsive layouts must remain readable without overcrowding
- Decorative motion must not reduce readability
- If any section lacks enough strong source material, prefer shorter truthful copy instead of filler

## Testing Strategy

- Run a production build after content and UI changes
- Review for obvious layout regressions across key breakpoints
- Check that navigation and external links still behave correctly

## Scope

In scope:
- Premium visual redesign
- Content rewrite for data engineering positioning
- Resume and project data refresh
- Homepage, About, Projects, Skills, and Contact improvements

Out of scope:
- Backend contact handling
- CMS integration
- New blog or content management features
- Inflated claims not supported by source material

## Success Criteria

- The site reads as a serious data engineering portfolio within one screen
- Featured projects feel relevant to data engineering hiring
- The copy is sharper, more credible, and more premium than the current version
- AI is present only as a supporting differentiator
- The refreshed site builds cleanly and remains responsive
