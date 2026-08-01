# Quick Start

The Quick Start guide helps you make your **first successful API request** using the Supercard Workforce Management API.

By the end of this guide, you will:

- Understand the minimum requirements for calling the API.
- Authenticate using an OAuth 2.0 Bearer Token.
- Send your first request.
- Interpret the response.
- Know where to go next.

Most developers can complete this guide in **less than 5 minutes**.

---

## Before You Begin

Ensure that you have completed the following prerequisites:

- Read the **Getting Started** guide.
- Obtained a valid OAuth 2.0 Bearer Token.
- Installed an API client such as Postman or have cURL available.
- Have internet access to reach the API endpoint.

---

## Base URL

All API requests begin with the following base URL.

```text
https://api.supercard.com/v1
```

> **Note:** This is a sample endpoint used for demonstration purposes in this portfolio project.

---

## Step 1 — Add Authentication

Include your OAuth 2.0 access token in the `Authorization` header.

```http
Authorization: Bearer ACCESS_TOKEN
```

Example:

```http
GET /employees HTTP/1.1
Host: api.supercard.com
Authorization: Bearer ACCESS_TOKEN
Accept: application/json
```

---

## Step 2 — Make Your First API Request

Retrieve the list of employees.

### cURL

```bash
curl --request GET \
  --url https://api.supercard.com/v1/employees \
  --header "Authorization: Bearer ACCESS_TOKEN" \
  --header "Accept: application/json"
```

---

### JavaScript (Fetch API)

```javascript
fetch("https://api.supercard.com/v1/employees", {
  method: "GET",
  headers: {
    Authorization: "Bearer ACCESS_TOKEN",
    Accept: "application/json"
  }
})
.then(response => response.json())
.then(data => console.log(data));
```

---

### Python

```python
import requests

url = "https://api.supercard.com/v1/employees"

headers = {
    "Authorization": "Bearer ACCESS_TOKEN",
    "Accept": "application/json"
}

response = requests.get(url, headers=headers)

print(response.json())
```

---

## Step 3 — Review the Response

A successful request returns a JSON response similar to the following.

```json
{
  "success": true,
  "data": [
    {
      "employeeId": 101,
      "firstName": "John",
      "lastName": "Doe",
      "department": "Engineering"
    }
  ]
}
```

---

## Understanding the Response

| Field | Description |
|---------|-------------|
| success | Indicates whether the request completed successfully. |
| data | Contains the requested resource. |
| employeeId | Unique employee identifier. |
| firstName | Employee's first name. |
| lastName | Employee's last name. |
| department | Employee's assigned department. |

---

## Common Response Codes

| Status Code | Meaning |
|--------------|---------|
| 200 OK | Request completed successfully. |
| 400 Bad Request | Invalid request. |
| 401 Unauthorized | Invalid or expired access token. |
| 403 Forbidden | Insufficient permissions. |
| 404 Not Found | Resource not found. |
| 429 Too Many Requests | Rate limit exceeded. |
| 500 Internal Server Error | Unexpected server error. |

---

## Try Another Endpoint

Once you've successfully retrieved the employee list, explore additional API modules.

- Employees
- Departments
- Attendance
- Leave Management
- Payroll
- Reports

Each module includes detailed request and response documentation.

---

## Best Practices

For a reliable integration:

- Always use HTTPS.
- Validate request payloads before sending.
- Handle HTTP status codes appropriately.
- Avoid hardcoding access tokens.
- Log request identifiers for troubleshooting.
- Respect API rate limits.
- Use pagination for large datasets.

---

## Troubleshooting

### I receive **401 Unauthorized**

Possible causes:

- Invalid access token
- Missing Authorization header
- Expired token

Solution:

- Generate a new access token.
- Verify the `Authorization` header.
- Retry the request.

---

### I receive **404 Not Found**

Possible causes:

- Incorrect endpoint URL
- Invalid resource identifier

Solution:

- Verify the request URL.
- Confirm the resource exists.

---

### I receive **429 Too Many Requests**

Possible causes:

- Too many requests in a short period.

Solution:

- Wait for the retry interval.
- Implement exponential backoff.

---

## Next Steps

Congratulations! You've made your first API request.

Continue exploring the documentation:

- [API Explorer](open-api-explorer.md)
- [Employees API](api-reference/employees/overview.md)
- [Authentication](authentication.md)
- [Error Handling](errors.md)
- [Pagination](concepts/pagination.md)

---

!!! success "You're Ready"

    You have successfully completed the Quick Start guide.

    You now have everything you need to begin integrating with the Supercard Workforce Management API.

---

!!! tip "Developer Tip"

    Import the included Postman Collection to experiment with every endpoint without manually configuring requests.

---

!!! note "Portfolio Project"

    This guide uses sample URLs, credentials, and responses for demonstration purposes. The API endpoints are representative of a production Workforce Management platform and are intended to showcase API documentation best practices.