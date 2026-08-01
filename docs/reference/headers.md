# HTTP Headers

HTTP headers provide additional information about an API request or response.

The Supercard Workforce Management API uses standard HTTP headers for authentication, content negotiation, request tracing, caching, and rate limiting.

This guide describes the headers commonly used when interacting with the API.

---

# Request Headers

Clients send request headers to provide authentication credentials, specify accepted content types, and communicate request metadata.

## Authorization

Authenticates the request using an OAuth 2.0 Bearer Token.

Example:

```http
Authorization: Bearer ACCESS_TOKEN
```

Required for all protected endpoints.

---

## Content-Type

Specifies the format of the request body.

Example:

```http
Content-Type: application/json
```

The API accepts JSON payloads.

---

## Accept

Specifies the response format expected by the client.

Example:

```http
Accept: application/json
```

---

## Idempotency-Key

Uniquely identifies a request so that repeated retries do not create duplicate resources.

Example:

```http
Idempotency-Key: 7e4c6f0b-d2c3-4d91-9f6d-0c4f7d8b2a91
```

Supported only by endpoints that explicitly document idempotency.

---

## User-Agent

Identifies the client application making the request.

Example:

```http
User-Agent: SupercardApp/1.0
```

Providing a meaningful User-Agent assists with diagnostics and operational monitoring.

---

# Response Headers

The API returns response headers containing metadata about the request and response.

---

## Content-Type

Indicates the format of the response body.

Example:

```http
Content-Type: application/json
```

---

## X-Request-ID

Unique identifier assigned to the request.

Example:

```http
X-Request-ID: REQ-20260730-AB12345
```

Include this identifier when reporting issues or troubleshooting API requests.

---

## X-RateLimit-Limit

Maximum number of requests permitted during the current rate limit window.

Example:

```http
X-RateLimit-Limit: 100
```

---

## X-RateLimit-Remaining

Number of requests remaining before the limit is reached.

Example:

```http
X-RateLimit-Remaining: 42
```

---

## X-RateLimit-Reset

Time at which the current rate limit window resets.

Example:

```http
X-RateLimit-Reset: 1722326400
```

---

## Retry-After

Returned when the client exceeds the permitted request rate.

Example:

```http
Retry-After: 60
```

The value represents the number of seconds the client should wait before retrying.

---

# Common Request Example

```http
GET /employees HTTP/1.1
Host: api.supercard.com
Authorization: Bearer ACCESS_TOKEN
Accept: application/json
User-Agent: SupercardApp/1.0
```

---

# Common Response Example

```http
HTTP/1.1 200 OK
Content-Type: application/json
X-Request-ID: REQ-20260730-AB12345
X-RateLimit-Limit: 100
X-RateLimit-Remaining: 99
```

---

# Header Summary

| Header | Direction | Required | Purpose |
|----------|:---------:|:--------:|---------|
| Authorization | Request | Yes* | OAuth 2.0 authentication |
| Content-Type | Request | When sending a body | Indicates request payload format |
| Accept | Request | Recommended | Indicates preferred response format |
| Idempotency-Key | Request | Conditional | Prevents duplicate operations |
| User-Agent | Request | Recommended | Identifies the client application |
| Content-Type | Response | Yes | Indicates response format |
| X-Request-ID | Response | Yes | Unique request identifier |
| X-RateLimit-Limit | Response | Conditional | Maximum requests allowed |
| X-RateLimit-Remaining | Response | Conditional | Remaining requests |
| X-RateLimit-Reset | Response | Conditional | Rate limit reset time |
| Retry-After | Response | Conditional | Delay before retrying |

> **\*** Authentication is required only for protected endpoints.

---

# Best Practices

- Always send the `Authorization` header for protected endpoints.
- Use `application/json` for requests and responses.
- Log the `X-Request-ID` for troubleshooting.
- Respect the `Retry-After` header when present.
- Provide a descriptive `User-Agent` for production applications.

---

# Related Documentation

Continue exploring:

- [Authentication](../authentication.md)
- [Idempotency](../concepts/idempotency.md)
- [Rate Limiting](../concepts/rate-limiting.md)
- [HTTP Status Codes](status-codes.md)

---

!!! tip "Developer Tip"

    Record the `X-Request-ID` for every failed request. It simplifies troubleshooting by allowing support teams to correlate client-side logs with server-side activity.

---

!!! note "Portfolio Project"

    The headers documented on this page represent common enterprise REST API practices. Header names, values, and availability may vary depending on the endpoint and deployment environment.