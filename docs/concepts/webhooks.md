# Webhooks

Webhooks enable applications to receive real-time notifications when specific events occur.

Instead of repeatedly polling the API to check for changes, a webhook allows the API to automatically send an HTTP request to a client-defined endpoint whenever an event is triggered.

Although the current version of the Supercard Workforce Management API does **not** provide webhook support, understanding webhook concepts is important for designing scalable, event-driven integrations.

---

# Why Webhooks?

Without webhooks, applications often poll the API at regular intervals.

Example:

```text
Every 30 seconds:

GET /employees
GET /attendance
GET /leave-requests
```

Polling has several disadvantages:

- Unnecessary API requests
- Increased network traffic
- Higher server load
- Delayed updates
- Increased rate-limit usage

Webhooks eliminate these problems by notifying applications only when relevant events occur.

---

# Polling vs Webhooks

| Polling | Webhooks |
|----------|----------|
| Client requests updates repeatedly | Server sends updates automatically |
| Increased API traffic | Reduced API traffic |
| Delayed event detection | Near real-time notifications |
| Higher infrastructure cost | More efficient resource usage |
| Consumes rate limits | Minimal API requests |

---

# How Webhooks Work

A typical webhook workflow consists of four steps.

1. The client registers a webhook endpoint.
2. An event occurs within the platform.
3. The API sends an HTTP POST request to the registered endpoint.
4. The client processes the event.

Example workflow:

```text
Employee Created
        │
        ▼
Supercard Workforce API
        │
        ▼
HTTP POST
        │
        ▼
https://example.com/webhooks
        │
        ▼
Client Processes Event
```

---

# Example Webhook Event

A webhook payload is typically sent as JSON.

```json
{
  "event": "employee.created",
  "timestamp": "2026-07-30T10:15:30Z",
  "data": {
    "employeeId": 101,
    "firstName": "John",
    "lastName": "Doe"
  }
}
```

---

# Common Webhook Events

Future versions of the API may provide events such as:

| Event | Description |
|---------|-------------|
| employee.created | New employee added |
| employee.updated | Employee information updated |
| employee.deleted | Employee removed |
| attendance.clocked-in | Employee clocked in |
| attendance.clocked-out | Employee clocked out |
| leave.approved | Leave request approved |
| leave.rejected | Leave request rejected |
| payroll.generated | Payroll processing completed |

---

# Webhook Delivery

When a webhook is triggered:

1. The API sends an HTTP POST request.
2. The client returns an HTTP 2xx response.
3. The delivery is considered successful.

If the client returns a non-success status code, the API may retry delivery depending on the implementation.

---

# Security Best Practices

Webhook endpoints should be secured.

Recommended practices include:

- Use HTTPS.
- Validate webhook signatures.
- Verify request authenticity.
- Ignore duplicate events.
- Respond quickly.
- Process events asynchronously.
- Log delivery failures.

---

# Handling Duplicate Events

Webhook deliveries are often designed to be **at least once** rather than **exactly once**.

Applications should therefore:

- Treat events as idempotent.
- Ignore duplicate event identifiers.
- Process the same event safely if delivered more than once.

---

# Best Practices

When designing webhook consumers:

- Respond with HTTP 200 as quickly as possible.
- Perform long-running work asynchronously.
- Store event identifiers.
- Validate every payload.
- Implement retry handling.
- Monitor failed deliveries.
- Log webhook activity.

---

# Common Mistakes

Avoid the following:

❌ Trusting every incoming request.

❌ Processing events synchronously.

❌ Ignoring duplicate deliveries.

❌ Returning slow responses.

❌ Not validating webhook signatures.

---

# Frequently Asked Questions

### Why use webhooks instead of polling?

Webhooks reduce unnecessary API requests and provide near real-time updates.

---

### Do webhooks replace REST APIs?

No.

REST APIs remain the primary mechanism for requesting and modifying resources.

Webhooks notify applications that something has changed.

---

### Are webhooks guaranteed to be delivered exactly once?

Not necessarily.

Applications should be designed to safely process duplicate deliveries.

---

### Does the current API support webhooks?

No.

Webhook support is not included in the current version of this portfolio project.

This page explains the concept and illustrates how webhook functionality could be incorporated into a future release.

---

# Related Concepts

Continue learning:

- [Authentication](../authentication.md)
- [Idempotency](idempotency.md)
- [Error Handling](error-handling.md)
- [Rate Limiting](rate-limiting.md)

---

!!! tip "Developer Tip"

    Design webhook consumers to be idempotent. Processing the same event more than once should not create duplicate records or inconsistent application state.

---

!!! warning "Security"

    Never trust incoming webhook requests by default. Always validate the request source, verify signatures when available, and use HTTPS for all webhook endpoints.

---

!!! note "Portfolio Project"

    The current version of the Supercard Workforce Management API does not implement webhook functionality. This page demonstrates enterprise documentation practices by explaining webhook concepts and illustrating how event-driven integrations could be supported in future versions.