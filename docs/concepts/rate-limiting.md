# Rate Limiting

Rate limiting controls the number of API requests that a client can make within a specified time period.

It protects the API from excessive traffic, ensures fair usage among consumers, and maintains consistent performance for all applications.

If a client exceeds the permitted request limit, the API returns an HTTP **429 Too Many Requests** response.

---

# Why Rate Limiting?

Without rate limiting, a single client could overwhelm the API by sending an excessive number of requests.

Rate limiting helps to:

- Protect server resources
- Maintain API availability
- Prevent abuse and denial-of-service attacks
- Ensure fair access for all API consumers
- Improve overall platform stability

---

# How Rate Limiting Works

Each client is allowed a maximum number of requests during a predefined time window.

Example policy:

| Limit | Time Window |
|--------|-------------|
| 100 requests | 1 minute |

If the limit is exceeded before the time window resets, additional requests are temporarily rejected.

---

# Example Request

```http
GET /employees HTTP/1.1
Authorization: Bearer ACCESS_TOKEN
```

---

# Successful Response

```http
HTTP/1.1 200 OK
```

---

# Rate Limit Exceeded

```http
HTTP/1.1 429 Too Many Requests
```

Example response:

```json
{
  "success": false,
  "error": {
    "code": "RATE_LIMIT_EXCEEDED",
    "message": "Request limit exceeded. Please retry later."
  }
}
```

---

# Rate Limit Headers

Many APIs provide additional response headers to help clients manage request limits.

Example:

```http
X-RateLimit-Limit: 100
X-RateLimit-Remaining: 27
X-RateLimit-Reset: 1722326400
Retry-After: 60
```

| Header | Description |
|----------|-------------|
| X-RateLimit-Limit | Maximum requests allowed during the window |
| X-RateLimit-Remaining | Remaining requests before the limit is reached |
| X-RateLimit-Reset | Time when the limit resets |
| Retry-After | Number of seconds to wait before retrying |

---

# Retry Strategy

When the API returns **429 Too Many Requests**, your application should:

1. Stop sending requests immediately.
2. Read the `Retry-After` header.
3. Wait for the specified duration.
4. Retry the request.

Avoid continuously retrying failed requests, as this can prolong the rate limit.

---

# Exponential Backoff

For temporary failures such as **429** or **503**, implement exponential backoff.

Example retry delays:

| Attempt | Delay |
|----------|------:|
| 1 | 1 second |
| 2 | 2 seconds |
| 3 | 4 seconds |
| 4 | 8 seconds |
| 5 | 16 seconds |

This strategy reduces load on the API while increasing the likelihood of a successful retry.

---

# Best Practices

Follow these recommendations when integrating with rate-limited endpoints.

- Cache responses whenever appropriate.
- Avoid polling the API unnecessarily.
- Batch requests where supported.
- Use pagination instead of requesting large datasets.
- Respect the `Retry-After` header.
- Implement exponential backoff.
- Monitor request usage in production.

---

# Common Mistakes

Avoid these common mistakes:

❌ Ignoring HTTP **429** responses.

❌ Retrying requests immediately.

❌ Sending duplicate requests in parallel.

❌ Polling the API too frequently.

❌ Ignoring response headers.

---

# Monitoring Rate Limits

Applications should monitor:

- Requests per minute
- Remaining request quota
- Retry attempts
- Failed requests
- Average response time

Monitoring these metrics helps identify bottlenecks before they affect users.

---

# Frequently Asked Questions

### Why am I receiving HTTP 429?

Your application has exceeded the permitted request limit for the current time window.

---

### Should I retry immediately?

No.

Wait for the duration specified in the `Retry-After` header before sending another request.

---

### Can rate limits change?

Yes.

Rate limits may vary depending on the API plan, endpoint, or organizational policy.

Always refer to the latest API documentation.

---

### Do all endpoints have the same rate limit?

Not necessarily.

Some endpoints may enforce different limits based on resource usage or business requirements.

---

# Related Concepts

Continue learning:

- [Pagination](pagination.md)
- [Filtering](filtering.md)
- [Sorting](sorting.md)
- [Versioning](versioning.md)
- [Error Handling](error-handling.md)

---

!!! tip "Developer Tip"

    Design your application to gracefully handle HTTP **429 Too Many Requests** responses. A well-implemented retry strategy improves reliability without overwhelming the API.

---

!!! warning "Avoid Retry Storms"

    If many clients retry requests simultaneously after a rate limit is reached, the API may become overloaded. Use exponential backoff and add random jitter to distribute retry attempts over time.

---

!!! note "Portfolio Project"

    The rate limiting values, response headers, and retry examples shown in this documentation are representative examples designed to demonstrate enterprise REST API documentation practices. Actual limits depend on deployment and operational policies.