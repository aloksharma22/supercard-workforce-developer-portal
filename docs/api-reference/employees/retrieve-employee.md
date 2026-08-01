---
title: Retrieve Employee
description: Retrieve detailed information for a specific employee.
---

# Retrieve Employee

Retrieves complete information about a single employee using the employee's unique identifier.

This endpoint is commonly used by HR applications, employee self-service portals, payroll systems, reporting dashboards, and administrative tools.

---

## Endpoint

```http
GET /employees/{employeeId}
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
| employeeId | integer | Yes | Unique identifier of the employee |

---

# Example Request

```http
GET /employees/101
```

---

## cURL

```bash
curl --request GET \
  --url https://api.supercard.com/v1/employees/101 \
  --header "Authorization: Bearer YOUR_ACCESS_TOKEN"
```

---

## JavaScript

```javascript
const response = await fetch(
  "https://api.supercard.com/v1/employees/101",
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
    "https://api.supercard.com/v1/employees/101",
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
    "https://api.supercard.com/v1/employees/101",
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
  "message": "Employee retrieved successfully.",
  "data": {
    "employeeId": 101,
    "employeeCode": "EMP-1001",
    "firstName": "John",
    "lastName": "Doe",
    "fullName": "John Doe",
    "email": "john.doe@supercard.com",
    "phone": "+91-9876543210",
    "dateOfBirth": "1998-06-15",
    "gender": "Male",
    "designation": "Software Engineer",
    "departmentId": 10,
    "departmentName": "Engineering",
    "managerId": 2,
    "employmentType": "Full-Time",
    "joiningDate": "2026-07-30",
    "status": "Active",
    "salary": 75000,
    "address": {
      "line1": "101 Business Park",
      "line2": "Tower B",
      "city": "Vadodara",
      "state": "Gujarat",
      "postalCode": "390010",
      "country": "India"
    },
    "createdAt": "2026-07-30T10:15:30Z",
    "updatedAt": "2026-07-30T10:15:30Z"
  },
  "metadata": {
    "requestId": "REQ-20260730-AB12345",
    "timestamp": "2026-07-30T10:15:30Z"
  }
}
```

---

# Error Responses

| Status Code | Description |
|-------------|-------------|
| 400 | Invalid employee identifier |
| 401 | Authentication failed |
| 403 | Access denied |
| 404 | Employee not found |
| 429 | Rate limit exceeded |
| 500 | Internal server error |
| 503 | Service unavailable |

---

# Common Use Cases

- Display an employee profile
- View employment information
- Retrieve payroll details
- Display employee information in an HR dashboard
- Validate employee existence before updating a record
- Fetch employee details for reporting and analytics

---

# Best Practices

- Validate the employee identifier before making the request.
- Handle `404 Not Found` responses gracefully.
- Cache frequently accessed employee records when appropriate.
- Protect sensitive employee information.
- Always use HTTPS when accessing the API.

---

# Related Endpoints

| Endpoint | Description |
|----------|-------------|
| GET `/employees` | List employees |
| POST `/employees` | Create employee |
| PUT `/employees/{employeeId}` | Update employee |
| DELETE `/employees/{employeeId}` | Delete employee |

---

## Next Step

Continue to **Create Employee** to learn how to add a new employee to the Supercard Workforce platform.