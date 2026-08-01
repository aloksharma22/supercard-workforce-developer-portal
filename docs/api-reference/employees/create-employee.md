---
title: Create Employee
description: Create a new employee in the Supercard Workforce platform.
---

# Create Employee

Creates a new employee record within the Supercard Workforce platform.

This endpoint is typically used by HR administrators, recruitment systems, onboarding applications, and ERP integrations to register new employees.

Once the request is processed successfully, the employee becomes immediately available throughout the platform.

---

## Endpoint

```http
POST /employees
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
| employeeCode | string | Yes | Unique employee code |
| firstName | string | Yes | Employee's first name |
| lastName | string | Yes | Employee's last name |
| email | string | Yes | Official email address |
| phone | string | No | Contact number |
| dateOfBirth | date | No | Date of birth |
| gender | string | No | Employee gender |
| designation | string | Yes | Job title |
| departmentId | integer | Yes | Department identifier |
| managerId | integer | No | Reporting manager |
| employmentType | string | Yes | Full-Time, Part-Time, Contract, or Intern |
| joiningDate | date | Yes | Employee joining date |
| salary | number | No | Monthly salary |
| address | object | No | Employee address |

---

# Example Request

```http
POST /employees
```

```json
{
  "employeeCode": "EMP-1001",
  "firstName": "John",
  "lastName": "Doe",
  "email": "john.doe@supercard.com",
  "phone": "+91-9876543210",
  "dateOfBirth": "1998-06-15",
  "gender": "Male",
  "designation": "Software Engineer",
  "departmentId": 10,
  "managerId": 2,
  "employmentType": "Full-Time",
  "joiningDate": "2026-07-30",
  "salary": 75000,
  "address": {
    "line1": "101 Business Park",
    "line2": "Tower B",
    "city": "Vadodara",
    "state": "Gujarat",
    "postalCode": "390010",
    "country": "India"
  }
}
```

---

# cURL

```bash
curl --request POST \
  --url https://api.supercard.com/v1/employees \
  --header "Authorization: Bearer YOUR_ACCESS_TOKEN" \
  --header "Content-Type: application/json" \
  --data '{
    "employeeCode":"EMP-1001",
    "firstName":"John",
    "lastName":"Doe",
    "email":"john.doe@supercard.com",
    "designation":"Software Engineer",
    "departmentId":10,
    "employmentType":"Full-Time",
    "joiningDate":"2026-07-30"
}'
```

---

# JavaScript

```javascript
const response = await fetch(
  "https://api.supercard.com/v1/employees",
  {
    method: "POST",
    headers: {
      Authorization: "Bearer YOUR_ACCESS_TOKEN",
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      employeeCode: "EMP-1001",
      firstName: "John",
      lastName: "Doe",
      email: "john.doe@supercard.com",
      designation: "Software Engineer",
      departmentId: 10,
      employmentType: "Full-Time",
      joiningDate: "2026-07-30"
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
    "https://api.supercard.com/v1/employees",
    headers={
        "Authorization": "Bearer YOUR_ACCESS_TOKEN",
        "Content-Type": "application/json"
    },
    json={
        "employeeCode": "EMP-1001",
        "firstName": "John",
        "lastName": "Doe",
        "email": "john.doe@supercard.com",
        "designation": "Software Engineer",
        "departmentId": 10,
        "employmentType": "Full-Time",
        "joiningDate": "2026-07-30"
    }
)

print(response.json())
```

---

# Node.js

```javascript
import axios from "axios";

const response = await axios.post(
  "https://api.supercard.com/v1/employees",
  {
    employeeCode: "EMP-1001",
    firstName: "John",
    lastName: "Doe",
    email: "john.doe@supercard.com",
    designation: "Software Engineer",
    departmentId: 10,
    employmentType: "Full-Time",
    joiningDate: "2026-07-30"
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
  "message": "Employee created successfully.",
  "data": {
    "employeeId": 103,
    "employeeCode": "EMP-1003",
    "firstName": "Alex",
    "lastName": "Johnson",
    "email": "alex.johnson@supercard.com",
    "designation": "HR Executive",
    "departmentId": 20,
    "status": "Active"
  },
  "metadata": {
    "requestId": "REQ-20260730-CD67890",
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
| 409 | Employee already exists |
| 422 | Validation failed |
| 429 | Too many requests |
| 500 | Internal server error |
| 503 | Service unavailable |

---

# Validation Rules

- Employee code must be unique.
- Email address must be unique.
- Department must already exist.
- Joining date cannot be in the distant past or invalid.
- Employment type must be one of the supported values.
- Required fields cannot be empty.

---

# Best Practices

- Validate user input before sending the request.
- Use unique employee codes for every employee.
- Store the returned `employeeId` for future operations.
- Handle validation and conflict errors appropriately.
- Use HTTPS for all API requests.

---

# Related Endpoints

| Endpoint | Description |
|----------|-------------|
| GET `/employees` | List employees |
| GET `/employees/{employeeId}` | Retrieve employee |
| PUT `/employees/{employeeId}` | Update employee |
| DELETE `/employees/{employeeId}` | Delete employee |

---

## Next Step

Continue to **Update Employee** to learn how to modify an existing employee record.