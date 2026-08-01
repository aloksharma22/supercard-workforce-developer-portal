# Supercard Workforce Developer Portal

> Enterprise-grade REST API Developer Portal built with **OpenAPI 3.1**, **MkDocs Material**, and **Redocly**.

[![OpenAPI](https://img.shields.io/badge/OpenAPI-3.1-6BA539?logo=openapiinitiative&logoColor=white)](https://www.openapis.org/)
[![MkDocs](https://img.shields.io/badge/MkDocs-Material-526CFE?logo=materialformkdocs&logoColor=white)](https://squidfunk.github.io/mkdocs-material/)
[![Redocly](https://img.shields.io/badge/Redocly-API%20Reference-EF5B25)](https://redocly.com/)
[![License](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)

---

## Overview

The **Supercard Workforce Developer Portal** is a production-style API documentation project designed for a modern Workforce Management platform.

It demonstrates how enterprise developer documentation is planned, structured, and maintained using industry-standard tools such as **OpenAPI**, **MkDocs Material**, and **Redocly**.

The portal includes interactive API documentation, modular OpenAPI specifications, onboarding guides, conceptual documentation, reusable API components, and comprehensive developer resources.

---

## Features

- Enterprise-style Developer Portal
- Modular OpenAPI 3.1 Specification
- Interactive API Reference (Redoc)
- MkDocs Material Documentation Site
- REST API Best Practices
- OAuth 2.0 Authentication Guide
- Request & Response Examples
- Error Handling Documentation
- Pagination, Filtering & Sorting Guides
- SDK & Integration Guides
- Versioning Strategy
- Postman Collection
- Mobile-friendly Documentation
- Dark Mode Support

---

## Project Structure

```text
Supercard Workforce Developer Portal
│
├── docs/
│   ├── api-reference/
│   ├── concepts/
│   ├── reference/
│   └── assets/
│
├── openapi/
│   ├── paths/
│   ├── components/
│   └── openapi.yaml
│
├── postman/
│
├── dist/
│
├── mkdocs.yml
├── README.md
└── requirements.txt
```

---

## Documentation Sections

| Section | Description |
|----------|-------------|
| Home | Introduction to the developer portal |
| Getting Started | Initial setup and prerequisites |
| Authentication | OAuth 2.0 authentication |
| Quick Start | Make your first API request |
| OpenAPI Explorer | Interactive API documentation |
| API Reference | Complete endpoint documentation |
| Concepts | Pagination, Filtering, Sorting, Versioning |
| Reference | Headers, Status Codes, Error Codes |
| SDK Guide | Integration guidance |
| FAQ | Frequently Asked Questions |
| Changelog | Documentation updates |
| Release Notes | Product releases |

---

## API Modules

The portal documents the following API domains:

- Employees
- Departments
- Attendance
- Leave Management
- Payroll
- Reports

Each module contains:

- Overview
- Endpoint Documentation
- Request Examples
- Response Examples
- Error Responses
- Business Rules
- Related APIs

---

## Technology Stack

| Technology | Purpose |
|------------|---------|
| OpenAPI 3.1 | API Specification |
| MkDocs Material | Documentation Portal |
| Redocly | Interactive API Reference |
| YAML | API Definition |
| Markdown | Documentation |
| Python | MkDocs Build System |

---

## Local Development

### Clone Repository

```bash
git clone https://github.com/<your-username>/supercard-workforce-developer-portal.git

cd supercard-workforce-developer-portal
```

---

### Install Dependencies

```bash
pip install -r requirements.txt
```

---

### Start Local Server

```bash
mkdocs serve
```

Documentation will be available at

```
http://127.0.0.1:8000
```

---

### Build Static Site

```bash
mkdocs build
```

The generated website will be available inside the `site/` directory.

---

## OpenAPI Explorer

Generate the bundled OpenAPI specification:

```bash
redocly bundle openapi/openapi.yaml -o dist/openapi.yaml
```

Generate the interactive API reference:

```bash
redocly build-docs dist/openapi.yaml -o docs/api-reference/index.html
```

---

## Documentation Principles

This project follows enterprise documentation best practices:

- Task-oriented documentation
- Consistent terminology
- Modular OpenAPI design
- Reusable components
- Developer-first writing
- Information architecture
- REST API standards
- Accessible documentation
- Maintainable documentation

---

## Screenshots

> Screenshots will be added after deployment.

- Home Page
- API Explorer
- Employees API
- Authentication Guide
- Dark Mode

---

## Future Enhancements

- Search Optimization
- SDK Code Samples
- Mermaid Architecture Diagrams
- Sequence Diagrams
- Interactive Tutorials
- API Change Log
- CI/CD Deployment
- GitHub Pages Deployment

---

## Contributing

Contributions, issues, and suggestions are welcome.

Please open an issue before submitting significant changes.

---

## License

This project is licensed under the **MIT License**.

---

## About

This project was created as a portfolio piece demonstrating skills in:

- Technical Writing
- API Documentation
- Developer Documentation
- OpenAPI Specification
- Information Architecture
- Content Strategy
- Documentation-as-Code
- Developer Experience (DX)

---

**Author**

**Alok Sharma**

Technical Writer • API Documentation • Content Strategy • OpenAPI