# Authentication

The Supercard Workforce Management API uses **OAuth 2.0 Bearer Token Authentication** to secure access to protected resources.

Every request to a protected endpoint must include a valid access token in the `Authorization` header.

Authentication ensures that only authorized users and applications can access workforce data while maintaining security, privacy, and compliance.

---

## Authentication Flow

The authentication process follows the OAuth 2.0 Bearer Token workflow.

1. Register your application.
2. Obtain an OAuth 2.0 access token.
3. Include the access token in every protected API request.
4. Receive the API response.
5. Refresh the token when it expires.

```text
Client Application
        │
        ▼
Request Access Token
        │
        ▼
Authorization Server
        │
        ▼
Access Token
        │
        ▼
Protected API Request
        │
        ▼
Supercard Workforce API
```

---

## Authorization Header

Include the access token in every request.

```http
Authorization: Bearer ACCESS_TOKEN
```

Example

```http
GET /employees HTTP/1.1
Host: api.supercard.com
Authorization: Bearer ACCESS_TOKEN
Accept: application/json
```

---

## Access Token

An access token represents the authenticated identity of an application or user.

Example

```text
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

> **Note**
>
> The example above is for demonstration purposes only.

---

## Token Lifetime

Access tokens are valid for a limited period.

When the token expires, your application must request a new token before accessing protected resources.

Never assume an access token remains valid indefinitely.

---

## Example Request

```bash
curl --request GET \
  --url https://api.supercard.com/v1/employees \
  --header "Authorization: Bearer ACCESS_TOKEN" \
  --header "Accept: application/json"
```

---

## Successful Response

```json
{
  "success": true,
  "data": [
    {
      "employeeId": 101,
      "firstName": "John",
      "lastName": "Doe"
    }
  ]
}
```

---

## Common Authentication Errors

| Status | Error | Cause | Resolution |
|---------|-------|--------|------------|
| 400 | Bad Request | Invalid request | Verify the request format. |
| 401 | Unauthorized | Missing or expired token | Generate a new access token. |
| 403 | Forbidden | Insufficient permissions | Contact your administrator. |
| 429 | Too Many Requests | Rate limit exceeded | Retry after the specified interval. |

---

## Security Best Practices

Follow these recommendations when integrating with the API.

- Always use HTTPS.
- Never expose access tokens in client-side code.
- Store tokens securely.
- Rotate credentials regularly.
- Use the principle of least privilege.
- Avoid logging sensitive authentication information.
- Refresh expired tokens before retrying requests.

---

## Authentication Checklist

Before making your first API request, verify the following.

- OAuth 2.0 access token has been generated.
- Authorization header is included.
- HTTPS is used.
- Content-Type is set correctly.
- Accept header is present.
- Token has not expired.

---

## Troubleshooting

### I receive **401 Unauthorized**

Possible causes:

- Missing Authorization header
- Invalid token
- Expired token
- Incorrect authentication scheme

Recommended actions:

- Generate a new access token.
- Verify the Bearer prefix.
- Confirm the Authorization header is included.
- Retry the request.

---

### I receive **403 Forbidden**

Possible causes:

- User lacks sufficient permissions.
- Resource access is restricted.

Recommended actions:

- Verify assigned roles.
- Contact the system administrator.

---

## Frequently Asked Questions

### Do all endpoints require authentication?

Most endpoints require authentication.

Public endpoints, if available, will explicitly state that authentication is not required.

---

### Can multiple applications share one access token?

No.

Each application should authenticate independently and manage its own credentials securely.

---

### Should access tokens be stored permanently?

No.

Access tokens should be stored securely and refreshed according to your organization's authentication policy.

---

## Related Documentation

Continue your developer journey with the following guides:

- [Getting Started](getting-started.md)
- [Quick Start](quickstart.md)
- [API Explorer](open-api-explorer.md)
- [Error Handling](errors.md)

---

!!! tip "Developer Tip"

    Store access tokens using secure secret management solutions such as Azure Key Vault, AWS Secrets Manager, or HashiCorp Vault. Avoid storing tokens directly in source code or version control.

---

!!! warning "Security Notice"

    Never commit access tokens, API keys, or client secrets to Git repositories. If credentials are exposed, revoke them immediately and generate new credentials.

---

!!! note "Portfolio Project"

    The authentication flow described in this documentation is intended for demonstration purposes. Example tokens, URLs, and credentials are illustrative and do not provide access to a live service.