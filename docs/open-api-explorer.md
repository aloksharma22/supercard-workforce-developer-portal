# OpenAPI Explorer

The **OpenAPI Explorer** provides an interactive, browser-based view of the complete **Supercard Workforce Management API** specification.

It enables developers to explore available endpoints, understand request and response schemas, review example payloads, and navigate the API without reading individual documentation pages.

The explorer is generated directly from the **OpenAPI 3.1 specification**, ensuring that the interactive documentation remains synchronized with the API definition.

---

## Why Use the API Explorer?

The API Explorer helps developers quickly understand the available APIs without navigating through multiple documentation pages.

You can use it to:

- Browse all available API endpoints
- Review request and response schemas
- Inspect reusable components
- Understand request parameters
- Explore authentication requirements
- Review example requests and responses
- Learn resource relationships

---

## Launch the API Explorer

Click the button below to open the interactive API Reference.

[Open API Explorer](api-reference/employees/overview.md){ .md-button .md-button--primary }

---

## What You'll Find

The API Explorer includes documentation for every major module of the Supercard Workforce platform.

| Module | Description |
|----------|-------------|
| Employees | Employee lifecycle management |
| Departments | Department administration |
| Attendance | Attendance tracking and reporting |
| Leave Management | Leave application and approvals |
| Payroll | Payroll processing and salary information |
| Reports | Workforce analytics and reporting |

---

## Interactive Features

The API Explorer provides the following capabilities.

### Browse Endpoints

Explore every available REST endpoint grouped by functional area.

---

### View Request Details

Inspect:

- Path parameters
- Query parameters
- Request headers
- Request bodies

---

### View Response Schemas

Understand:

- Success responses
- Error responses
- Reusable schemas
- Data models

---

### Review Code Examples

The explorer includes example requests and responses to help you understand how the API behaves.

---

## OpenAPI Specification

The API Explorer is generated from the bundled OpenAPI specification.

```
dist/openapi.yaml
```

This ensures that the documentation always reflects the latest API definition.

---

## API Design Principles

The Supercard Workforce API follows modern REST API design principles.

- Resource-oriented URLs
- Standard HTTP methods
- JSON payloads
- OAuth 2.0 authentication
- Predictable error responses
- Consistent naming conventions
- OpenAPI-first documentation

---

## When Should I Use the API Explorer?

Use the API Explorer when you need to:

- Discover available endpoints
- Understand request payloads
- Review response formats
- Explore reusable schemas
- Learn API capabilities
- Navigate the OpenAPI specification

For implementation guidance and tutorials, continue using the written documentation throughout this portal.

---

## Recommended Workflow

We recommend the following learning path.

1. Read the **Getting Started** guide.
2. Configure **Authentication**.
3. Complete the **Quick Start** guide.
4. Explore the **OpenAPI Explorer**.
5. Review the relevant API Reference module.
6. Read the Concepts documentation.
7. Consult the Reference section during development.

---

## Best Practices

When exploring the API:

- Start with the Overview pages.
- Understand authentication before testing endpoints.
- Review request schemas before sending requests.
- Validate required fields.
- Handle error responses appropriately.
- Refer to related endpoints for complete workflows.

---

## Related Documentation

Continue your developer journey with:

- [Getting Started](getting-started.md)
- [Authentication](authentication.md)
- [Quick Start](quickstart.md)
- [Employees API](api-reference/employees/overview.md)
- [Reference Documentation](reference/glossary.md)

---

!!! tip "Developer Tip"

    The API Explorer is generated automatically from the OpenAPI specification.

    Whenever the specification changes, regenerate the API Explorer to keep the interactive documentation synchronized.

---

!!! note "Portfolio Project"

    This API Explorer is generated using **Redocly** from the bundled OpenAPI 3.1 specification. It demonstrates an OpenAPI-first documentation workflow commonly used in enterprise software development.

---

!!! success "Next Step"

    After exploring the interactive API documentation, continue with the detailed API Reference pages to understand each endpoint, business rules, request validation, and integration best practices.