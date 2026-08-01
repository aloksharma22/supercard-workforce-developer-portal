# HTTP Status Codes

The Supercard Workforce Management API uses standard HTTP status codes to indicate the outcome of every API request.

Status codes allow client applications to determine whether a request completed successfully or whether additional action is required.

This reference summarizes the HTTP status codes used throughout the API.

---

# Status Code Categories

HTTP status codes are grouped into five categories.

| Category | Range | Description |
|----------|-------|-------------|
| Informational | 100–199 | Request received and processing continues. |
| Successful | 200–299 | Request completed successfully. |
| Redirection | 300–399 | Additional action is required. Rarely used by the API. |
| Client Error | 400–499 | The request is invalid or cannot be processed. |
| Server Error | 500–599 | The server encountered an unexpected error. |

---

# Successful Responses

## 200 OK

The request completed successfully.

Typical examples:

- Retrieve employees
- Retrieve departments
- List attendance records

Example:

```http
HTTP/1.1 200 OK
```

---

## 201 Created

A new resource was created successfully.

Typical examples:

- Create employee
- Create department
- Submit leave request

Example:

```http
HTTP/1.1 201 Created
```

---

## 204 No Content

The request completed successfully, but no response body is returned.

Typical examples:

- Delete employee
- Delete department

Example:

```http
HTTP/1.1 204 No Content
```

---

# Client Errors

## 400 Bad Request

The request is invalid.

Possible causes:

- Missing required fields
- Invalid JSON
- Invalid parameter values

Recommended action:

- Review the request payload.
- Validate all required fields.

---

## 401 Unauthorized

Authentication failed.

Possible causes:

- Missing access token
- Invalid token
- Expired token

Recommended action:

- Obtain a new OAuth 2.0 access token.
- Retry the request.

---

## 403 Forbidden

The authenticated user does not have permission to perform the requested operation.

Possible causes:

- Insufficient privileges
- Restricted resource

Recommended action:

- Verify user permissions.

---

## 404 Not Found

The requested resource could not be found.

Possible causes:

- Invalid resource identifier
- Incorrect endpoint
- Deleted resource

Recommended action:

- Verify the request URL.
- Confirm the resource exists.

---

## 409 Conflict

The request conflicts with the current state of the resource.

Typical examples:

- Duplicate employee
- Duplicate department
- Business rule violation

Recommended action:

- Resolve the conflict before retrying.

---

## 422 Unprocessable Entity

The request is syntactically correct, but business validation failed.

Possible causes:

- Invalid business rules
- Invalid field values

Recommended action:

- Correct the request data.

---

## 429 Too Many Requests

The API rate limit has been exceeded.

Recommended action:

- Respect the `Retry-After` header.
- Retry after the specified interval.

---

# Server Errors

## 500 Internal Server Error

An unexpected server-side error occurred.

Recommended action:

- Retry the request after a short delay.
- Record the request ID for troubleshooting.

---

## 503 Service Unavailable

The API is temporarily unavailable.

Possible causes:

- Scheduled maintenance
- Temporary infrastructure issues

Recommended action:

- Retry using exponential backoff.

---

# Status Code Summary

| Status | Name | Meaning |
|---------|------|---------|
| 200 | OK | Request completed successfully |
| 201 | Created | Resource created successfully |
| 204 | No Content | Request succeeded without a response body |
| 400 | Bad Request | Invalid request |
| 401 | Unauthorized | Authentication required or failed |
| 403 | Forbidden | Permission denied |
| 404 | Not Found | Requested resource not found |
| 409 | Conflict | Business rule conflict |
| 422 | Unprocessable Entity | Validation failed |
| 429 | Too Many Requests | Rate limit exceeded |
| 500 | Internal Server Error | Unexpected server failure |
| 503 | Service Unavailable | Temporary service outage |

---

# Best Practices

When handling HTTP status codes:

- Check the status code before processing the response body.
- Treat all 2xx responses as successful.
- Handle each 4xx status individually.
- Retry only temporary failures such as **429** and **503**.
- Log the `X-Request-ID` for failed requests.
- Display user-friendly error messages rather than raw API responses.

---

# Frequently Asked Questions

### Which status codes indicate success?

Any status code in the **2xx** range indicates a successful request.

---

### Should every 5xx error be retried?

Not immediately.

Implement exponential backoff and limit the number of retry attempts.

---

### Why is 404 different from 400?

- **400 Bad Request** means the request itself is invalid.
- **404 Not Found** means the request is valid, but the requested resource does not exist.

---

### What does 422 mean?

The request is correctly formatted, but one or more business validation rules failed.

Examples include:

- Invalid salary value
- Unsupported department
- Leave dates outside policy

---

# Related Documentation

Continue exploring:

- [Error Handling](../errors.md)
- [Concepts - Error Handling](../concepts/error-handling.md)
- [Authentication](../authentication.md)
- [Error Codes](error-codes.md)

---

!!! tip "Developer Tip"

    Build your application around HTTP status codes rather than parsing response messages. Status codes provide a stable and standardized way to determine how your application should respond.

---

!!! warning "Retry Policy"

    Do not retry every failed request automatically. Only retry transient failures such as **429 Too Many Requests** or **503 Service Unavailable** after an appropriate delay.

---

!!! note "Portfolio Project"

    The HTTP status codes described in this document follow standard HTTP semantics and represent the behavior of the sample Supercard Workforce Management API used throughout this portfolio.