---
title: List Employees
description: Retrieve a paginated list of employees.
---

# List Employees

Returns a paginated collection of employees.

This endpoint supports searching, filtering, sorting, and pagination, making it ideal for employee directories, HR dashboards, reporting tools, and administrative applications.

---

## Endpoint

```http
GET /employees
```

---

## Authentication

```http
Authorization: Bearer YOUR_ACCESS_TOKEN
```

---

## Query Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| page | integer | No | Page number |
| limit | integer | No | Number of records per page |
| search | string | No | Search by employee name, email, or employee code |
| department | string | No | Filter by department |
| status | string | No | Filter by employee status |
| sort | string | No | Sort field |
| order | string | No | Sort order (`asc` or `desc`) |

---

# Example Request

```http
GET /employees?page=1&limit=10&status=Active
```

---

## cURL

```bash
curl --request GET \
  --url "https://api.supercard.com/v1/employees?page=1&limit=10&status=Active" \
  --header "Authorization: Bearer YOUR_ACCESS_TOKEN"
```

---

## JavaScript

```javascript
const response = await fetch(
  "https://api.supercard.com/v1/employees?page=1&limit=10&status=Active",
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
    "https://api.supercard.com/v1/employees",
    params={
        "page": 1,
        "limit": 10,
        "status": "Active"
    },
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
    "https://api.supercard.com/v1/employees",
    {
        params: {
            page: 1,
            limit: 10,
            status: "Active"
        },
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
  "message": "Employees retrieved successfully.",
  "data": [
    {
      "employeeId": 101,
      "employeeCode": "EMP-1001",
      "firstName": "John",
      "lastName": "Doe",
      "designation": "Software Engineer",
      "departmentName": "Engineering",
      "status": "Active"
    }
  ],
  "pagination": {
    "page": 1,
    "limit": 10,
    "totalRecords": 125,
    "totalPages": 13,
    "hasNextPage": true,
    "hasPreviousPage": false
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
| 400 | Invalid request |
| 401 | Authentication failed |
| 403 | Access denied |
| 429 | Rate limit exceeded |
| 500 | Internal server error |
| 503 | Service unavailable |

---

# Best Practices

- Always paginate collection requests.
- Filter results whenever possible to reduce payload size.
- Sort large datasets for consistent ordering.
- Cache employee lists when appropriate.
- Avoid requesting unnecessary records.

---

# Related Endpoints

| Endpoint | Description |
|----------|-------------|
| GET `/employees/{employeeId}` | Retrieve employee details |
| POST `/employees` | Create employee |
| PUT `/employees/{employeeId}` | Update employee |
| DELETE `/employees/{employeeId}` | Delete employee |

---

## Next Step

Continue to **Retrieve Employee** to learn how to fetch detailed information for a single employee.