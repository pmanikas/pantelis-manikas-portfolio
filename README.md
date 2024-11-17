# Pantelis Manikas Portfolio

Welcome to my personal portfolio project, built with Angular. This app showcases my work and skills through portfolio pages, while also incorporating a comprehensive admin interface for managing content. The aim of this project is to provide a seamless, modern, and responsive experience for visitors, with the flexibility of full content management via the integrated admin tools.

## Table of Contents
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Deployment](#deployment)
- [Development Workflow](#development-workflow)
- [Instructions](#instructions)
- [Status](#status)

## Features
- **Dynamic Portfolio Pages**: Highlight projects, articles, and other relevant showcases with a user-friendly interface.
- **Admin Dashboard**: Manage portfolio content easily without needing to modify code.
- **Responsive Design**: Fully optimized for desktop, tablet, and mobile views.
- **Single Page Application (SPA)**: Fast navigation without full-page reloads, ensuring a smooth user experience.
- **Modular Code Structure**: Emphasizes maintainability, scalability, and clean code practices.

## Technologies Used
- **Framework**: Angular (latest version)
- **Styling**: SCSS with partial BEM methodology
- **Build Tool**: Angular CLI
- **Deployment**: GitHub Actions and GitHub Pages
- **Version Control**: Git
- **CI/CD**: Automated pipelines configured with GitHub Actions

## Deployment
This project leverages GitHub Actions to automate the deployment process, ensuring that updates are seamlessly pushed to production.

### Deployment Workflow
1. **Continuous Integration**: Each commit to any branch triggers linting to ensure code quality.
2. **Continuous Deployment**: Merging into the `main` branch triggers an automatic build and deployment to GitHub Pages.

## Development Workflow
For contributors or collaborators, please follow these steps to contribute effectively:

### Instructions
1. **Create a new branch** from `main`:
   ```bash
   git checkout -b feature/your-feature-name
   ```
2. **Make your changes** and commit them with clear, concise commit messages.
3. **Push your branch** to the repository:
   ```bash
   git push origin feature/your-feature-name
   ```
4. **Create a Pull Request (PR)** to the `main` branch and ensure all checks pass.
5. Once approved, **merge the PR** to `main`.
6. GitHub Actions will take over from here, automatically deploying the latest version to GitHub Pages.

## Status
Keep track of the current build and deployment status:

[![Deploy App](https://github.com/pmanikas/ng-dev-porfolio/actions/workflows/release.yml/badge.svg)](https://github.com/pmanikas/ng-dev-porfolio/actions/workflows/release.yml)

---
Feel free to explore the code, suggest improvements, or even fork it and make it yours!
