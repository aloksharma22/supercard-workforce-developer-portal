# SDK Guide

The Supercard Workforce Management API is a RESTful API that can be integrated from any programming language capable of making HTTP requests.

Although this portfolio project does not include official SDK packages, the API is designed using consistent REST principles and OpenAPI 3.1, making it straightforward to generate or build SDKs for multiple programming languages.

This guide explains recommended integration approaches, supported technologies, authentication patterns, and best practices.

---

# Supported Languages

The API can be consumed from virtually any modern programming language.

| Language | Status |
|-----------|--------|
| JavaScript / TypeScript | ✅ Supported |
| Python | ✅ Supported |
| Java | ✅ Supported |
| C# (.NET) | ✅ Supported |
| Go | ✅ Supported |
| PHP | ✅ Supported |
| Ruby | ✅ Supported |
| Kotlin | ✅ Supported |
| Swift | ✅ Supported |

---

# Integration Approaches

Choose the integration method that best suits your application.

## Direct REST Integration

Call the REST endpoints directly using your preferred HTTP client.

Recommended for:

- Backend services
- Microservices
- Internal tools
- Server applications

---

## OpenAPI Code Generation

Since the API follows the OpenAPI 3.1 specification, client SDKs can be generated automatically using OpenAPI Generator.

Benefits include:

- Reduced boilerplate code
- Type-safe models
- Consistent request handling
- Faster development

---

## Custom SDK

Organizations can build internal SDKs to standardize API consumption across teams.

A custom SDK typically provides:

- Authentication management
- Error handling
- Automatic retries
- Logging
- Pagination helpers
- Request validation

---

# Authentication

All SDK implementations should authenticate using OAuth 2.0 Bearer Tokens.

Example HTTP header:

```http
Authorization: Bearer ACCESS_TOKEN
```

Store credentials securely and never hardcode tokens within application source code.

---

# JavaScript Example

```javascript
const response = await fetch(
    "https://api.supercard.com/v1/employees",
    {
        headers: {
            Authorization: "Bearer ACCESS_TOKEN",
            Accept: "application/json"
        }
    }
);

const data = await response.json();

console.log(data);
```

---

# Python Example

```python
import requests

headers = {
    "Authorization": "Bearer ACCESS_TOKEN",
    "Accept": "application/json"
}

response = requests.get(
    "https://api.supercard.com/v1/employees",
    headers=headers
)

print(response.json())
```

---

# Java Example

```java
HttpRequest request = HttpRequest.newBuilder()
    .uri(URI.create("https://api.supercard.com/v1/employees"))
    .header("Authorization", "Bearer ACCESS_TOKEN")
    .header("Accept", "application/json")
    .GET()
    .build();
```

---

# Recommended Project Structure

A modular project structure improves maintainability.

```text
src/

├── api/
│     workforceClient.js
│
├── services/
│     employeeService.js
│
├── models/
│
├── config/
│
├── utils/
│
└── app.js
```

---

# SDK Design Principles

A production-ready SDK should provide:

- Authentication abstraction
- Centralized configuration
- Request validation
- Automatic retries
- Pagination helpers
- Logging
- Exception handling
- Strong typing where applicable

---

# Error Handling

Applications should gracefully handle API failures.

Recommended strategy:

- Handle HTTP status codes explicitly.
- Log request identifiers.
- Retry transient failures.
- Surface meaningful error messages.
- Avoid exposing internal server responses to end users.

For detailed guidance, see the **Error Handling** documentation.

---

# Security Best Practices

When building applications:

- Always use HTTPS.
- Store credentials securely.
- Never commit secrets to version control.
- Rotate credentials regularly.
- Validate server certificates.
- Use environment variables for configuration.

---

# Performance Best Practices

To improve application performance:

- Reuse HTTP connections where possible.
- Cache frequently accessed data.
- Use pagination for large datasets.
- Limit unnecessary API calls.
- Respect API rate limits.

---

# Logging

A production application should log:

- Request ID
- Endpoint
- HTTP status code
- Response time
- Error code (if applicable)

Avoid logging:

- Access tokens
- Passwords
- Personally identifiable information (PII)

---

# Versioning

The API uses URI-based versioning.

Example:

```text
https://api.supercard.com/v1
```

Always target a specific API version to ensure compatibility with future releases.

---

# SDK Checklist

Before deploying your integration, verify that:

- Authentication is implemented.
- Error handling is complete.
- Retries are configured.
- Logging is enabled.
- Timeouts are configured.
- Secrets are stored securely.
- Pagination is implemented where required.
- HTTPS is enforced.

---

# Related Documentation

Continue exploring:

- [Authentication](authentication.md)
- [Quick Start](quickstart.md)
- [API Explorer](open-api-explorer.md)
- [Error Handling](errors.md)
- [API Reference](api-reference/employees/overview.md)

---

!!! tip "Developer Tip"

    If your organization supports multiple applications, consider building an internal SDK that wraps the Supercard Workforce API. This provides a consistent interface, centralizes authentication, and simplifies future API upgrades.

---

!!! warning "Security"

    Never embed OAuth tokens, API keys, or client secrets directly in application source code. Use secure secret management solutions or environment variables.

---

!!! note "Portfolio Project"

    This project demonstrates SDK design principles and integration best practices for a REST API documented with OpenAPI 3.1. The code examples are illustrative and intended to showcase enterprise documentation patterns rather than production SDK implementations.