---
title: Employees API
description: Manage employees within the Supercard Workforce platform.
---

# Employees API

The **Employees API** provides RESTful endpoints for creating, retrieving, updating, and deleting employee records within the Supercard Workforce platform.

It is designed for Human Resources (HR) applications, Workforce Management Systems, Payroll platforms, ERP integrations, and custom business applications.

---

## Overview

Employee records represent the core entity of the Supercard Workforce API.

Each employee contains information such as:

- Personal information
- Contact details
- Employment details
- Department assignment
- Manager information
- Employment status
- Salary information
- Audit timestamps

All employee operations require OAuth 2.0 Bearer Authentication.

---

## Base URL

```text
https://api.supercard.com/v1
```

---

## Resource

```text
Employee
```

Example resource:

```json
{
  "employeeId": 101,
  "employeeCode": "EMP-1001",
  "firstName": "John",
  "lastName": "Doe",
  "email": "john.doe@supercard.com",
  "designation": "Software Engineer",
  "departmentId": 10,
  "status": "Active"
}
```

---

# Available Endpoints

| Method | Endpoint | Description |
|---------|----------|-------------|
| GET | `/employees` | Retrieve all employees |
| GET | `/employees/{employeeId}` | Retrieve a single employee |
| POST | `/employees` | Create a new employee |
| PUT | `/employees/{employeeId}` | Update an employee |
| DELETE | `/employees/{employeeId}` | Delete an employee |

---

# Authentication

Every Employees endpoint requires a Bearer Access Token.

```http
Authorization: Bearer YOUR_ACCESS_TOKEN
```

Example

```bash
curl https://api.supercard.com/v1/employees \
  -H "Authorization: Bearer YOUR_ACCESS_TOKEN"
```

---

# Employee Lifecycle

A typical employee lifecycle consists of the following steps.

```text
Create Employee
       │
       ▼
Retrieve Employee
       │
       ▼
Update Employee
       │
       ▼
Delete Employee (optional)
```

---

# Filtering

Employee collections support filtering using query parameters.

Example

```http
GET /employees?status=Active
```

```http
GET /employees?department=Engineering
```

```http
GET /employees?search=john
```

Multiple filters may be combined.

```http
GET /employees?status=Active&department=Engineering
```

---

# Pagination

Collection endpoints return paginated responses.

Example

```http
GET /employees?page=1&limit=25
```

Typical response

```json
{
  "page": 1,
  "limit": 25,
  "totalRecords": 523,
  "totalPages": 21,
  "hasNextPage": true,
  "hasPreviousPage": false
}
```

---

# Sorting

Sorting is supported using the following parameters.

```http
GET /employees?sort=firstName
```

Descending order

```http
GET /employees?sort=joiningDate&order=desc
```

---

# Common Response Codes

| Status | Meaning |
|---------|---------|
| 200 | Request successful |
| 201 | Employee created |
| 400 | Invalid request |
| 401 | Authentication required |
| 403 | Permission denied |
| 404 | Employee not found |
| 409 | Resource conflict |
| 422 | Validation failed |
| 429 | Too many requests |
| 500 | Internal server error |
| 503 | Service unavailable |

---

# Related Resources

Employees are linked to several other resources within the API.

- Departments
- Attendance
- Leave Management
- Payroll
- Reports

---

# Best Practices

- Use pagination for collection endpoints.
- Store employee identifiers instead of employee names.
- Never expose access tokens in client-side code.
- Validate request payloads before submission.
- Handle error responses gracefully.
- Use HTTPS for all requests.
- Respect API rate limits.
- Keep employee information synchronized with your HR system.

---

# Next Steps

Continue exploring the Employees API.

- **List Employees**
- **Retrieve Employee**
- **Create Employee**
- **Update Employee**
- **Delete Employee**

Each endpoint includes complete request examples, response examples, error handling guidance, and SDK samples.