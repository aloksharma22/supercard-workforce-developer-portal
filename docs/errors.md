# Error Handling

The Supercard Workforce Management API uses standard HTTP status codes together with structured JSON error responses to help developers quickly identify, diagnose, and resolve issues.

This guide explains how errors are returned, how to interpret them, and recommended troubleshooting practices.

---

## Error Response Structure

Whenever a request cannot be processed successfully, the API returns a JSON error response.

Example:

```json
{
  "success": false,
  "error": {
    "code": "EMPLOYEE_NOT_FOUND",
    "message": "Employee with ID 101 was not found.",
    "requestId": "REQ-20260730-AB12345",
    "timestamp": "2026-07-30T08:45:18Z"
  }
}
```

---

## Error Response Fields

| Field | Description |
|---------|-------------|
| success | Indicates whether the request completed successfully. |
| error.code | Machine-readable application error code. |
| error.message | Human-readable error description. |
| error.requestId | Unique request identifier for troubleshooting. |
| error.timestamp | Time when the error occurred (UTC). |

---

## HTTP Status Codes

The API follows standard HTTP status code conventions.

| Status | Meaning | Description |
|----------|---------|-------------|
| **200 OK** | Success | Request completed successfully. |
| **201 Created** | Resource Created | A new resource was created successfully. |
| **204 No Content** | Success | Request succeeded with no response body. |
| **400 Bad Request** | Client Error | Request validation failed. |
| **401 Unauthorized** | Authentication Error | Missing or invalid access token. |
| **403 Forbidden** | Authorization Error | Insufficient permissions. |
| **404 Not Found** | Resource Error | Requested resource does not exist. |
| **409 Conflict** | Business Rule Error | Resource already exists or violates business rules. |
| **422 Unprocessable Entity** | Validation Error | Request syntax is valid but business validation failed. |
| **429 Too Many Requests** | Rate Limit | Too many requests were received. |
| **500 Internal Server Error** | Server Error | Unexpected server-side error. |
| **503 Service Unavailable** | Service Error | API is temporarily unavailable. |

---

## Common Application Error Codes

| Error Code | Description | Recommended Action |
|------------|-------------|--------------------|
| INVALID_TOKEN | Access token is invalid. | Generate a new access token. |
| TOKEN_EXPIRED | Access token has expired. | Refresh or request a new token. |
| EMPLOYEE_NOT_FOUND | Employee record does not exist. | Verify the employee identifier. |
| DEPARTMENT_NOT_FOUND | Department could not be found. | Confirm the department ID. |
| DUPLICATE_RESOURCE | Resource already exists. | Ensure the resource is unique. |
| VALIDATION_ERROR | Request validation failed. | Review the request payload. |
| RATE_LIMIT_EXCEEDED | Too many requests. | Retry after the specified interval. |
| INTERNAL_SERVER_ERROR | Unexpected server error. | Retry later or contact support. |

---

# Troubleshooting

## 400 Bad Request

### Possible Causes

- Missing required fields
- Invalid JSON syntax
- Incorrect data types
- Unsupported field values

### Resolution

- Validate the request body.
- Ensure all required fields are present.
- Verify JSON syntax.
- Review endpoint documentation.

---

## 401 Unauthorized

### Possible Causes

- Missing Authorization header
- Invalid Bearer token
- Expired access token

### Resolution

- Generate a new access token.
- Include the Authorization header.
- Verify the Bearer token format.

---

## 403 Forbidden

### Possible Causes

- User lacks required permissions
- Resource access restricted

### Resolution

- Verify assigned roles.
- Contact your system administrator.

---

## 404 Not Found

### Possible Causes

- Incorrect endpoint URL
- Invalid resource identifier
- Resource deleted

### Resolution

- Verify the endpoint URL.
- Confirm the resource exists.

---

## 409 Conflict

### Possible Causes

- Duplicate resource
- Business rule violation

### Resolution

- Review existing resources.
- Resolve the conflict before retrying.

---

## 422 Unprocessable Entity

### Possible Causes

- Business validation failed
- Invalid field values

### Resolution

- Review validation rules.
- Correct the request data.
- Retry the request.

---

## 429 Too Many Requests

### Possible Causes

- API rate limit exceeded

### Resolution

- Wait for the Retry-After period.
- Implement exponential backoff.
- Reduce request frequency.

---

## 500 Internal Server Error

### Possible Causes

- Unexpected server-side failure

### Resolution

- Retry the request.
- Record the request ID.
- Contact support if the issue continues.

---

## Error Handling Best Practices

To build reliable integrations:

- Validate requests before sending them.
- Handle every HTTP status code explicitly.
- Never ignore error responses.
- Log the `requestId` for support investigations.
- Respect API rate limits.
- Retry only transient failures.
- Avoid exposing sensitive error information to end users.

---

## Retry Strategy

| Status Code | Retry? | Recommendation |
|--------------|:------:|----------------|
| 400 | ❌ | Fix the request before retrying. |
| 401 | ❌ | Generate a new access token. |
| 403 | ❌ | Verify permissions. |
| 404 | ❌ | Verify the requested resource. |
| 409 | ❌ | Resolve the business conflict. |
| 422 | ❌ | Correct validation errors. |
| 429 | ✅ | Retry after the specified interval. |
| 500 | ✅ | Retry after a short delay. |
| 503 | ✅ | Retry using exponential backoff. |

---

## Best Practices Checklist

Before contacting support, verify that:

- OAuth 2.0 access token is valid.
- Authorization header is present.
- Request body follows the API schema.
- Endpoint URL is correct.
- Resource identifiers are valid.
- API rate limits have not been exceeded.

---

## Related Documentation

Continue exploring:

- [Authentication](authentication.md)
- [Quick Start](quickstart.md)
- [Reference - Error Codes](reference/error-codes.md)
- [Reference - HTTP Status Codes](reference/status-codes.md)
- [API Explorer](open-api-explorer.md)

---

!!! tip "Developer Tip"

    Always log the `requestId` returned in API responses. This identifier helps correlate client-side failures with server-side logs during troubleshooting.

---

!!! warning "Retry Strategy"

    Do not automatically retry every failed request.

    Retry only transient errors such as **429 Too Many Requests** and **503 Service Unavailable**. Client-side errors such as **400 Bad Request** or **401 Unauthorized** require corrective action before retrying.

---

!!! note "Portfolio Project"

    The status codes, error responses, and troubleshooting guidance presented in this documentation are representative examples designed to demonstrate enterprise API documentation best practices using OpenAPI 3.1 and RESTful APIs.