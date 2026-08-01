---
title: Retrieve Department
description: Retrieve detailed information for a specific department.
---

# Retrieve Department

Retrieves complete information about a specific department using its unique identifier.

This endpoint returns comprehensive department information including the department code, manager details, employee count, operational status, budget allocation, location, and audit information.

It is commonly used by HR applications, workforce management systems, administrative dashboards, reporting platforms, and ERP integrations.

---

## Endpoint

```http
GET /departments/{departmentId}
```

---

## Authentication

```http
Authorization: Bearer YOUR_ACCESS_TOKEN
```

---

# Path Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| departmentId | integer | Yes | Unique identifier of the department |

---

# Example Request

```http
GET /departments/10
```

---

## cURL

```bash
curl --request GET \
  --url https://api.supercard.com/v1/departments/10 \
  --header "Authorization: Bearer YOUR_ACCESS_TOKEN"
```

---

## JavaScript

```javascript
const response = await fetch(
  "https://api.supercard.com/v1/departments/10",
  {
    headers: {
      Authorization: "Bearer YOUR_ACCESS_TOKEN"
    }
  }
);

const data = await response.json();
```

---

## Python

```python
import requests

response = requests.get(
    "https://api.supercard.com/v1/departments/10",
    headers={
        "Authorization": "Bearer YOUR_ACCESS_TOKEN"
    }
)

print(response.json())
```

---

## Node.js

```javascript
import axios from "axios";

const response = await axios.get(
    "https://api.supercard.com/v1/departments/10",
    {
        headers: {
            Authorization: "Bearer YOUR_ACCESS_TOKEN"
        }
    }
);

console.log(response.data);
```

---

# Successful Response

**Status Code**

```http
200 OK
```

```json
{
  "success": true,
  "message": "Department retrieved successfully.",
  "data": {
    "departmentId": 10,
    "departmentCode": "DEPT-ENG",
    "departmentName": "Engineering",
    "description": "Responsible for software design, development, and maintenance.",
    "managerId": 2,
    "managerName": "Jane Smith",
    "employeeCount": 42,
    "location": "Vadodara",
    "budget": 2500000,
    "status": "Active",
    "createdAt": "2026-07-30T10:15:30Z",
    "updatedAt": "2026-07-30T10:15:30Z"
  },
  "metadata": {
    "requestId": "REQ-20260730-DP12345",
    "timestamp": "2026-07-30T10:15:30Z"
  }
}
```

---

# Error Responses

| Status Code | Description |
|-------------|-------------|
| 400 | Invalid department identifier |
| 401 | Authentication failed |
| 403 | Access denied |
| 404 | Department not found |
| 429 | Rate limit exceeded |
| 500 | Internal server error |
| 503 | Service unavailable |

---

# Common Use Cases

- View department information
- Display organizational structure
- Retrieve department manager details
- Display employee count by department
- Generate management reports
- Verify department existence before assigning employees

---

# Best Practices

- Validate the department identifier before making the request.
- Handle `404 Not Found` responses gracefully.
- Cache department information when appropriate.
- Refresh department data periodically to ensure accuracy.
- Protect sensitive organizational information.
- Always use HTTPS when accessing the API.

---

# Related Endpoints

| Endpoint | Description |
|----------|-------------|
| GET `/departments` | List departments |
| POST `/departments` | Create department |
| PUT `/departments/{departmentId}` | Update department |
| DELETE `/departments/{departmentId}` | Delete department |

---

## Next Step

Continue to **Create Department** to learn how to create a new department within the Supercard Workforce platform.