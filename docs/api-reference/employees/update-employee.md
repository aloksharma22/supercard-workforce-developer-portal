---
title: Update Employee
description: Update an existing employee in the Supercard Workforce platform.
---

# Update Employee

Updates an existing employee record.

This endpoint allows authorized users to modify employee information such as contact details, designation, department assignment, reporting manager, employment status, salary, and address.

Only the fields included in the request are updated. Fields omitted from the request remain unchanged.

---

## Endpoint

```http
PUT /employees/{employeeId}
```

---

## Authentication

```http
Authorization: Bearer YOUR_ACCESS_TOKEN
```

---

## Path Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| employeeId | integer | Yes | Unique identifier of the employee |

---

## Request Headers

| Header | Required | Description |
|---------|----------|-------------|
| Authorization | Yes | OAuth 2.0 Bearer Access Token |
| Content-Type | Yes | `application/json` |

---

# Request Body

All fields are optional.

| Field | Type | Description |
|---------|------|-------------|
| firstName | string | Employee first name |
| lastName | string | Employee last name |
| email | string | Official email address |
| phone | string | Contact number |
| designation | string | Employee designation |
| departmentId | integer | Department identifier |
| managerId | integer | Reporting manager |
| employmentType | string | Employment type |
| salary | number | Monthly salary |
| status | string | Employee status |
| address | object | Employee address |

---

# Example Request

```http
PUT /employees/101
```

```json
{
  "designation": "Senior Software Engineer",
  "departmentId": 10,
  "salary": 90000,
  "status": "Active",
  "phone": "+91-9876543210"
}
```

---

# cURL

```bash
curl --request PUT \
  --url https://api.supercard.com/v1/employees/101 \
  --header "Authorization: Bearer YOUR_ACCESS_TOKEN" \
  --header "Content-Type: application/json" \
  --data '{
    "designation":"Senior Software Engineer",
    "salary":90000,
    "status":"Active"
}'
```

---

# JavaScript

```javascript
const response = await fetch(
  "https://api.supercard.com/v1/employees/101",
  {
    method: "PUT",
    headers: {
      Authorization: "Bearer YOUR_ACCESS_TOKEN",
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      designation: "Senior Software Engineer",
      salary: 90000,
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

response = requests.put(
    "https://api.supercard.com/v1/employees/101",
    headers={
        "Authorization":"Bearer YOUR_ACCESS_TOKEN",
        "Content-Type":"application/json"
    },
    json={
        "designation":"Senior Software Engineer",
        "salary":90000,
        "status":"Active"
    }
)

print(response.json())
```

---

# Node.js

```javascript
import axios from "axios";

const response = await axios.put(
  "https://api.supercard.com/v1/employees/101",
  {
    designation: "Senior Software Engineer",
    salary: 90000,
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
200 OK
```

```json
{
  "success": true,
  "message": "Employee updated successfully.",
  "data": {
    "employeeId": 101,
    "designation": "Senior Software Engineer",
    "salary": 90000,
    "status": "Active"
  },
  "metadata": {
    "requestId": "REQ-20260730-EF13579",
    "timestamp": "2026-07-30T11:05:12Z"
  }
}
```

---

# Error Responses

| Status Code | Description |
|-------------|-------------|
| 400 | Invalid request |
| 401 | Authentication failed |
| 403 | Permission denied |
| 404 | Employee not found |
| 409 | Resource conflict |
| 422 | Validation failed |
| 429 | Rate limit exceeded |
| 500 | Internal server error |
| 503 | Service unavailable |

---

# Partial Updates

Only the fields supplied in the request are updated.

For example, sending

```json
{
  "salary": 90000
}
```

updates only the employee's salary. All other fields remain unchanged.

---

# Best Practices

- Update only the fields that require changes.
- Validate email addresses before updating.
- Ensure the referenced department exists.
- Handle `404 Not Found` responses gracefully.
- Audit important employee changes within your application.
- Always use HTTPS.

---

# Related Endpoints

| Endpoint | Description |
|----------|-------------|
| GET `/employees` | List employees |
| GET `/employees/{employeeId}` | Retrieve employee |
| POST `/employees` | Create employee |
| DELETE `/employees/{employeeId}` | Delete employee |

---

## Next Step

Continue to **Delete Employee** to learn how to permanently remove an employee record from the Supercard Workforce platform.