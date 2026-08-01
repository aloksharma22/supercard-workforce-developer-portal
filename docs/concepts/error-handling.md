# Error Handling

Error handling is the practice of designing applications to detect, interpret, and respond appropriately to API failures.

A well-designed application should expect failures and recover gracefully whenever possible.

Rather than assuming every request succeeds, developers should anticipate network interruptions, authentication failures, validation errors, rate limits, and temporary service outages.

---

# Why Error Handling Matters

API requests can fail for many reasons.

Examples include:

- Invalid request data
- Authentication failures
- Permission issues
- Network interruptions
- Rate limiting
- Temporary service outages
- Unexpected server errors

Applications that handle these situations correctly provide a more reliable and user-friendly experience.

---

# Types of Errors

API failures generally fall into two categories.

## Client Errors (4xx)

Client errors indicate that the request cannot be processed because of an issue with the request itself.

Examples include:

- Missing required fields
- Invalid JSON
- Invalid authentication
- Insufficient permissions
- Resource not found

These errors require corrective action before retrying.

---

## Server Errors (5xx)

Server errors indicate that the request reached the API successfully, but the server was unable to complete it.

Examples include:

- Internal server errors
- Temporary service outages
- Infrastructure failures

These errors are often temporary and may succeed when retried.

---

# Common HTTP Status Codes

| Status Code | Category | Recommended Action |
|--------------|----------|--------------------|
| 200 OK | Success | Continue processing. |
| 201 Created | Success | Resource created successfully. |
| 204 No Content | Success | Operation completed successfully. |
| 400 Bad Request | Client Error | Correct the request before retrying. |
| 401 Unauthorized | Authentication Error | Obtain a new access token. |
| 403 Forbidden | Authorization Error | Verify user permissions. |
| 404 Not Found | Resource Error | Confirm the requested resource exists. |
| 409 Conflict | Business Rule | Resolve the conflict before retrying. |
| 422 Unprocessable Entity | Validation Error | Correct invalid field values. |
| 429 Too Many Requests | Rate Limit | Retry after the specified delay. |
| 500 Internal Server Error | Server Error | Retry later. |
| 503 Service Unavailable | Service Error | Retry using exponential backoff. |

---

# Error Handling Workflow

```text
Send API Request
        │
        ▼
Receive Response
        │
        ▼
Is Status Code 2xx?
        │
   ┌────┴────┐
   │         │
 Yes         No
   │         │
   ▼         ▼
Continue   Identify Error
             │
             ▼
   Is it Recoverable?
         │
    ┌────┴────┐
    │         │
   Yes        No
    │         │
    ▼         ▼
Retry      Log Error
Safely     Notify User
```

---

# Recoverable Errors

These errors are typically temporary.

Examples:

- HTTP 429 Too Many Requests
- HTTP 500 Internal Server Error
- HTTP 503 Service Unavailable
- Network timeout
- Temporary connectivity issues

Recommended approach:

- Retry the request.
- Use exponential backoff.
- Respect the `Retry-After` header.
- Limit the number of retry attempts.

---

# Non-Recoverable Errors

These errors usually require corrective action before another request is made.

Examples:

- HTTP 400 Bad Request
- HTTP 401 Unauthorized
- HTTP 403 Forbidden
- HTTP 404 Not Found
- HTTP 422 Unprocessable Entity

Recommended approach:

- Correct the request.
- Obtain a new access token if required.
- Validate input data.
- Retry only after resolving the issue.

---

# Logging Best Practices

Applications should log sufficient information to diagnose issues.

Recommended fields include:

- Request ID
- Endpoint
- HTTP method
- Status code
- Response time
- Error code
- Timestamp

Avoid logging:

- Access tokens
- Passwords
- Personally Identifiable Information (PII)
- Client secrets

---

# Retry Strategy

Not every error should be retried.

| Status Code | Retry? | Recommendation |
|--------------|:------:|----------------|
| 400 | ❌ | Correct the request. |
| 401 | ❌ | Authenticate again. |
| 403 | ❌ | Verify permissions. |
| 404 | ❌ | Verify the resource. |
| 409 | ❌ | Resolve the business conflict. |
| 422 | ❌ | Correct validation errors. |
| 429 | ✅ | Retry after the specified delay. |
| 500 | ✅ | Retry using exponential backoff. |
| 503 | ✅ | Retry after a short delay. |

---

# Exponential Backoff

When retrying transient failures, increase the wait time after each unsuccessful attempt.

Example:

| Attempt | Wait Time |
|----------|-----------|
| 1 | 1 second |
| 2 | 2 seconds |
| 3 | 4 seconds |
| 4 | 8 seconds |
| 5 | 16 seconds |

Adding a small amount of random delay (known as **jitter**) helps prevent many clients from retrying at the same time.

---

# Best Practices

To build resilient integrations:

- Validate input before sending requests.
- Handle every documented status code.
- Retry only transient failures.
- Log request identifiers.
- Display meaningful messages to users.
- Respect API rate limits.
- Implement request timeouts.
- Test failure scenarios during development.

---

# Common Mistakes

Avoid these common implementation issues:

❌ Retrying every failed request.

❌ Ignoring HTTP status codes.

❌ Displaying raw server errors to users.

❌ Logging sensitive credentials.

❌ Assuming network requests never fail.

---

# Frequently Asked Questions

### Should every error be retried?

No.

Only retry temporary or recoverable failures such as **429**, **500**, and **503**.

---

### Why shouldn't I retry a 400 Bad Request?

Because the request itself is invalid. Repeating the same request will produce the same error until the request is corrected.

---

### What information should I log?

Log request IDs, endpoints, timestamps, status codes, and response times.

Avoid logging confidential information such as access tokens or passwords.

---

### Should users see raw API error messages?

No.

Applications should present user-friendly messages while recording detailed technical information in logs.

---

# Related Documentation

Continue learning:

- [Error Handling Guide](../errors.md)
- [Rate Limiting](rate-limiting.md)
- [Authentication](../authentication.md)
- [API Reference](../api-reference/employees/overview.md)

---

!!! tip "Developer Tip"

    Treat API failures as an expected part of distributed systems. Designing your application to recover gracefully from temporary failures results in a more reliable user experience.

---

!!! warning "Retry Carefully"

    Excessive retries can increase server load and worsen outages. Implement retry limits, exponential backoff, and random jitter to ensure responsible API consumption.

---

!!! note "Portfolio Project"

    The guidance in this document reflects common enterprise practices for building resilient API integrations. Specific retry policies, timeout values, and logging requirements should be adapted to your organization's operational standards.