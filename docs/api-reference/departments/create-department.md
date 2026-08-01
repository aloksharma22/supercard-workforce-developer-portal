---
title: Create Department
description: Create a new department within the Supercard Workforce platform.
---

# Create Department

Creates a new department within the Supercard Workforce platform.

Departments are organizational units that group employees, reporting structures, payroll operations, attendance tracking, and business functions.

This endpoint is typically used by HR administrators, system administrators, and enterprise resource planning (ERP) systems during organizational setup or restructuring.

---

## Endpoint

```http
POST /departments
```

---

## Authentication

```http
Authorization: Bearer YOUR_ACCESS_TOKEN
```

---

## Request Headers

| Header | Required | Description |
|----------|----------|-------------|
| Authorization | Yes | OAuth 2.0 Bearer Access Token |
| Content-Type | Yes | `application/json` |

---

# Request Body

| Field | Type | Required | Description |
|---------|------|----------|-------------|
| departmentCode | string | Yes | Unique department code |
| departmentName | string | Yes | Department name |
| description | string | No | Brief description of the department |
| managerId | integer | Yes | Department manager identifier |
| location | string | No | Primary office location |
| budget | number | No | Annual department budget |
| status | string | No | Department status |

---

# Example Request

```http
POST /departments
```

```json
{
  "departmentCode": "DEPT-ENG",
  "departmentName": "Engineering",
  "description": "Responsible for software design and development.",
  "managerId": 2,
  "location": "Vadodara",
  "budget": 2500000,
  "status": "Active"
}
```

---

# cURL

```bash
curl --request POST \
  --url https://api.supercard.com/v1/departments \
  --header "Authorization: Bearer YOUR_ACCESS_TOKEN" \
  --header "Content-Type: application/json" \
  --data '{
    "departmentCode":"DEPT-ENG",
    "departmentName":"Engineering",
    "description":"Responsible for software design and development.",
    "managerId":2,
    "location":"Vadodara",
    "budget":2500000,
    "status":"Active"
}'
```

---

# JavaScript

```javascript
const response = await fetch(
  "https://api.supercard.com/v1/departments",
  {
    method: "POST",
    headers: {
      Authorization: "Bearer YOUR_ACCESS_TOKEN",
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      departmentCode: "DEPT-ENG",
      departmentName: "Engineering",
      description: "Responsible for software design and development.",
      managerId: 2,
      location: "Vadodara",
      budget: 2500000,
      status: "Active"
    })
  }
);

const data = await response.json();
```

---

# Python

```python
import requests

response = requests.post(
    "https://api.supercard.com/v1/departments",
    headers={
        "Authorization": "Bearer YOUR_ACCESS_TOKEN",
        "Content-Type": "application/json"
    },
    json={
        "departmentCode": "DEPT-ENG",
        "departmentName": "Engineering",
        "description": "Responsible for software design and development.",
        "managerId": 2,
        "location": "Vadodara",
        "budget": 2500000,
        "status": "Active"
    }
)

print(response.json())
```

---

# Node.js

```javascript
import axios from "axios";

const response = await axios.post(
  "https://api.supercard.com/v1/departments",
  {
    departmentCode: "DEPT-ENG",
    departmentName: "Engineering",
    description: "Responsible for software design and development.",
    managerId: 2,
    location: "Vadodara",
    budget: 2500000,
    status: "Active"
  },
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
201 Created
```

```json
{
  "success": true,
  "message": "Department created successfully.",
  "data": {
    "departmentId": 30,
    "departmentCode": "DEPT-FIN",
    "departmentName": "Finance",
    "managerId": 5,
    "managerName": "Emily Johnson",
    "location": "Bengaluru",
    "status": "Active"
  },
  "metadata": {
    "requestId": "REQ-20260730-DP23456",
    "timestamp": "2026-07-30T10:20:45Z"
  }
}
```

---

# Error Responses

| Status Code | Description |
|-------------|-------------|
| 400 | Invalid request payload |
| 401 | Authentication failed |
| 403 | Access denied |
| 409 | Department already exists |
| 422 | Validation failed |
| 429 | Too many requests |
| 500 | Internal server error |
| 503 | Service unavailable |

---

# Validation Rules

- Department code must be unique.
- Department name must be unique within the organization.
- The specified manager must exist.
- Budget cannot be negative.
- Status must be one of the supported values.
- Required fields cannot be empty.

---

# Best Practices

- Use meaningful department names.
- Adopt a consistent department code format (for example, `DEPT-HR` or `DEPT-ENG`).
- Assign an active employee as the department manager.
- Keep budget values up to date.
- Validate request data before sending it.
- Handle validation and conflict errors appropriately.
- Always use HTTPS.

---

# Related Endpoints

| Endpoint | Description |
|----------|-------------|
| GET `/departments` | List departments |
| GET `/departments/{departmentId}` | Retrieve department |
| PUT `/departments/{departmentId}` | Update department |
| DELETE `/departments/{departmentId}` | Delete department |

---

## Next Step

Continue to **Update Department** to learn how to modify department information after it has been created.