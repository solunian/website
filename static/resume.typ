#import "@preview/basic-resume:0.2.9": *

#let name = "Daniel Cui"
#let location = "Cupertino, CA"
#let email = "solunian@gmail.com"
#let github = "github.com/solunian"
#let linkedin = "linkedin.com/in/solunian"
#let phone = "+1 (408) 210-2107"
#let personal-site = "solunian.dev"

#show: resume.with(
  author: name,
  // location: location,
  email: email,
  github: github,
  linkedin: linkedin,
  phone: phone,
  personal-site: personal-site,
  accent-color: "#26428b",
  font: "New Computer Modern",
  paper: "us-letter",
  author-position: left,
  personal-info-position: left,
)

== Education

#edu(
  institution: "University of California, Santa Barbara",
  location: "Santa Barbara, CA",
  dates: dates-helper(start-date: "Sep 2024", end-date: "Jun 2028"),
  degree: "B.S. Computer Science",
)
- Cumulative GPA: 3.97/4.0 | Dean's Honors
- Relevant Coursework: Data Structures and Algorithms, Operating Systems, Computer Security, Computer Networking, Databases

== Work Experience

#work(
  title: "Co-Founder & Lead Frontend Developer",
  company: "YearbookPro",
  dates: dates-helper(start-date: "Feb 2025", end-date: "Jun 2026"),
)
- Architected the frontend for an *interactive digital yearbook* using SvelteKit and Tailwind CSS, implementing authentication, responsive interfaces, form validation, and application-wide error handling.
- *Shipped the #link("https://yearbookpro.com")[beta] to three schools* and engineered data binding between the admin content management system and the end-user experience.


== Projects

#project(
  name: "subroutine",
  role: "Developer",
  dates: dates-helper(start-date: "Feb 2026", end-date: "Present"),
  url: "subroutine.solunian.dev",
)
- Built a *full-stack habit-tracking application* with SvelteKit, TypeScript, and Supabase, supporting entry logging that produces interactive visualizations including historical charts and activity grids.
- Designed a PostgreSQL schema with integrity constraints and Supabase RLS policies to isolate per-user data.

#project(
  name: "ACM Poker Bot Tournament",
  role: "Lead Backend Developer",
  dates: dates-helper(start-date: "Jul 2025", end-date: "Oct 2025"),
  url: "acm-poker-tournament.vercel.app",
)
- Built a *FastAPI/Python backend* for a programming tournament that accepted 20 poker-bot submissions, executed submitted programs server-side, and coordinated their actions through automated poker matches.
- Designed the submission and game-execution pipeline, exposing APIs for administrator and participant workflows and deploying the service to Google Cloud Platform.

#project(
  name: "Daniel's Hacker News",
  role: "Developer",
  dates: "Mar 2024",
  url: "solunian.dev/news",
)
- Built a *responsive Hacker News client* with SvelteKit and TypeScript, concurrently fetching and displaying stories across top, best, and new feeds with pagination and typed API models.
- Designed a polished light/dark interface with mobile-responsive navigation, loading and error states, relative timestamps, and expandable story content.

== Technical Skills

- *Languages*: Python, JavaScript/TypeScript, Java, C/C++, SQL, HTML/CSS
- *Frameworks*: Svelte/SvelteKit, React/Next.js, FastAPI, Tailwind CSS
- *Databases, Backend, & Cloud*: PostgreSQL, Supabase, MongoDB, Google Cloud Platform
