# Idempotency

Idempotency is the property of an API operation that ensures making the same request multiple times produces the same result as making it once.

It is commonly used to prevent duplicate resource creation when a client retries a request due to network failures, timeouts, or other transient issues.

The Supercard Workforce Management API supports idempotent operations where appropriate to improve reliability and provide a consistent integration experience.

---

# Why Idempotency?

Network interruptions and timeouts are common in distributed systems.

Consider the following scenario:

1. A client submits a request to create a new employee.
2. The server successfully creates the employee.
3. The response is lost because of a network interruption.
4. The client assumes the request failed and retries it.

Without idempotency, the employee could be created twice.

Idempotency prevents duplicate processing by ensuring repeated requests are recognized and handled safely.

---

# How Idempotency Works

Clients generate a unique **Idempotency Key** for each operation that should only be processed once.

The key is included in the request header.

Example:

```http
Idempotency-Key: 7e4c6f0b-d2c3-4d91-9f6d-0c4f7d8b2a91
```

When the API receives a request:

1. It checks whether the key has been processed before.
2. If the key is new, the request is processed normally.
3. If the same key is received again, the previous result is returned instead of executing the operation a second time.

---

# Example Request

```http
POST /employees HTTP/1.1
Host: api.supercard.com
Authorization: Bearer ACCESS_TOKEN
Idempotency-Key: 7e4c6f0b-d2c3-4d91-9f6d-0c4f7d8b2a91
Content-Type: application/json
```

```json
{
  "firstName": "John",
  "lastName": "Doe",
  "department": "Engineering"
}
```

---

# Example Response

```json
{
  "success": true,
  "data": {
    "employeeId": 101,
    "firstName": "John",
    "lastName": "Doe"
  }
}
```

If the same request is sent again with the **same Idempotency-Key**, the API returns the same response instead of creating another employee.

---

# When to Use Idempotency

Idempotency is recommended for operations that create or modify resources.

Typical examples include:

- Employee creation
- Leave applications
- Payroll generation
- Department creation
- Report generation

---

# HTTP Methods and Idempotency

Not all HTTP methods behave the same way.

| HTTP Method | Naturally Idempotent | Typical Use |
|--------------|:-------------------:|-------------|
| GET | ✅ Yes | Retrieve resources |
| PUT | ✅ Yes | Replace an existing resource |
| DELETE | ✅ Yes | Remove a resource |
| POST | ❌ No | Create a new resource |
| PATCH | ❌ Usually No | Partially update a resource |

Because `POST` requests often create new resources, they benefit the most from idempotency keys.

---

# Idempotency Workflow

```text
Client
   │
   │ POST /employees
   │ Idempotency-Key: abc123
   ▼
API Server
   │
   ├── Key not seen before
   │       │
   │       ▼
   │   Create Employee
   │       │
   │       ▼
   │ Return Success
   │
   └── Same key received again
           │
           ▼
   Return Previous Response
```

---

# Best Practices

Follow these recommendations when implementing idempotent requests.

- Generate a new idempotency key for each new operation.
- Reuse the same key only when retrying the same request.
- Use UUIDs or other globally unique identifiers.
- Store keys securely until the request completes.
- Ensure the request body remains unchanged when retrying.

---

# Common Mistakes

Avoid the following mistakes:

❌ Reusing the same key for different operations.

❌ Changing the request payload while using the same key.

❌ Generating predictable or sequential keys.

❌ Assuming all endpoints support idempotency.

---

# Security Considerations

When using idempotency keys:

- Generate cryptographically strong unique identifiers.
- Do not expose sensitive information within the key.
- Treat idempotency keys as request metadata rather than authentication credentials.
- Continue to use HTTPS for all API requests.

---

# Frequently Asked Questions

### Why isn't POST naturally idempotent?

A POST request typically creates a new resource each time it is processed. Without an idempotency mechanism, retrying the same POST request may create duplicate resources.

---

### Can I reuse an idempotency key?

Only when retrying the exact same request.

A different operation must always use a new key.

---

### Does every endpoint support idempotency?

No.

Refer to the endpoint documentation to determine whether idempotency keys are supported.

---

### How long should an idempotency key remain valid?

The retention period depends on the API implementation. Clients should assume keys are temporary and generate a new key for each new operation.

---

# Related Concepts

Continue learning:

- [Versioning](versioning.md)
- [Rate Limiting](rate-limiting.md)
- [Error Handling](error-handling.md)
- [Authentication](../authentication.md)
- [Create Employee](../api-reference/employees/create-employee.md)

---

!!! tip "Developer Tip"

    Generate a UUID for every idempotent request. Reuse the same UUID only if you need to retry that exact request after a timeout or network failure.

---

!!! warning "Duplicate Operations"

    Changing the request body while reusing the same idempotency key can produce unexpected results or validation errors. Always retry with the identical request payload.

---

!!! note "Portfolio Project"

    The idempotency examples shown in this documentation demonstrate common enterprise REST API design practices. Support for idempotency keys varies between APIs and should be documented for each applicable endpoint.