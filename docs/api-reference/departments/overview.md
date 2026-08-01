---
title: Departments API
description: Manage organizational departments within the Supercard Workforce platform.
---

# Departments API

The **Departments API** provides RESTful endpoints for creating, retrieving, updating, and deleting departments within the Supercard Workforce platform.

Departments help organize employees, reporting structures, payroll processing, attendance management, and organizational reporting.

---

# Overview

A department represents a functional unit within an organization.

Typical examples include:

- Engineering
- Human Resources
- Finance
- Marketing
- Sales
- Operations

Each department contains information such as:

- Department name
- Department code
- Manager
- Location
- Budget
- Employee count
- Operational status

All Department endpoints require OAuth 2.0 Bearer Authentication.

---

# Base URL

```text
https://api.supercard.com/v1
```

---

# Resource

```text
Department
```

Example resource

```json
{
  "departmentId": 10,
  "departmentCode": "DEPT-ENG",
  "departmentName": "Engineering",
  "managerName": "Jane Smith",
  "employeeCount": 42,
  "location": "Vadodara",
  "status": "Active"
}
```

---

# Available Endpoints

| Method | Endpoint | Description |
|---------|----------|-------------|
| GET | `/departments` | Retrieve all departments |
| GET | `/departments/{departmentId}` | Retrieve a department |
| POST | `/departments` | Create a department |
| PUT | `/departments/{departmentId}` | Update a department |
| DELETE | `/departments/{departmentId}` | Delete a department |

---

# Authentication

Every request requires a Bearer Access Token.

```http
Authorization: Bearer YOUR_ACCESS_TOKEN
```

Example

```bash
curl https://api.supercard.com/v1/departments \
  -H "Authorization: Bearer YOUR_ACCESS_TOKEN"
```

---

# Department Lifecycle

```text
Create Department
        │
        ▼
Retrieve Department
        │
        ▼
Update Department
        │
        ▼
Delete Department (optional)
```

---

# Filtering

Department collections support filtering.

```http
GET /departments?status=Active
```

```http
GET /departments?search=Engineering
```

Multiple filters can be combined.

```http
GET /departments?status=Active&search=Engineering
```

---

# Pagination

Department collections are paginated.

Example

```http
GET /departments?page=1&limit=20
```

Typical response

```json
{
  "page": 1,
  "limit": 20,
  "totalRecords": 12,
  "totalPages": 1,
  "hasNextPage": false,
  "hasPreviousPage": false
}
```

---

# Sorting

Departments can be sorted.

```http
GET /departments?sort=departmentName
```

Descending order

```http
GET /departments?sort=createdAt&order=desc
```

---

# Common Response Codes

| Status | Meaning |
|---------|---------|
| 200 | Request successful |
| 201 | Department created |
| 400 | Invalid request |
| 401 | Authentication required |
| 403 | Permission denied |
| 404 | Department not found |
| 409 | Resource conflict |
| 422 | Validation failed |
| 429 | Too many requests |
| 500 | Internal server error |
| 503 | Service unavailable |

---

# Related Resources

Departments are closely related to:

- Employees
- Attendance
- Leave Management
- Payroll
- Reports

---

# Best Practices

- Use unique department codes.
- Assign a department manager whenever possible.
- Avoid deleting departments that still contain employees.
- Keep department budgets up to date.
- Use pagination when retrieving large collections.
- Always access the API over HTTPS.
- Respect API rate limits.

---

# Next Steps

Continue exploring the Departments API.

- **List Departments**
- **Retrieve Department**
- **Create Department**
- **Update Department**
- **Delete Department**

Each endpoint includes complete request examples, response examples, SDK samples, and error handling guidance.