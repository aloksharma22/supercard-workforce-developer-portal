---
title: List Payroll Records
description: Retrieve a paginated list of employee payroll records.
---

# List Payroll Records

Returns a paginated collection of employee payroll records.

This endpoint supports searching, filtering, sorting, pagination, and payroll period filtering. It is commonly used by HR teams, payroll administrators, finance departments, employee portals, and reporting applications.

---

## Endpoint

```http
GET /payroll
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
| limit | integer | No | Number of payroll records per page |
| search | string | No | Search by employee name or employee code |
| employeeId | integer | No | Filter by employee |
| payrollPeriod | string | No | Payroll period (`YYYY-MM`) |
| paymentStatus | string | No | Payment status |
| sort | string | No | Sort field |
| order | string | No | Sort order (`asc` or `desc`) |

---

# Example Request

```http
GET /payroll?page=1&limit=10&payrollPeriod=2026-07
```

---

## cURL

```bash
curl --request GET \
  --url "https://api.supercard.com/v1/payroll?page=1&limit=10&payrollPeriod=2026-07" \
  --header "Authorization: Bearer YOUR_ACCESS_TOKEN"
```

---

## JavaScript

```javascript
const response = await fetch(
  "https://api.supercard.com/v1/payroll?page=1&limit=10&payrollPeriod=2026-07",
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
    "https://api.supercard.com/v1/payroll",
    params={
        "page": 1,
        "limit": 10,
        "payrollPeriod": "2026-07"
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
    "https://api.supercard.com/v1/payroll",
    {
        params: {
            page: 1,
            limit: 10,
            payrollPeriod: "2026-07"
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
  "message": "Payroll records retrieved successfully.",
  "data": [
    {
      "payrollId": 7001,
      "employeeId": 101,
      "employeeName": "John Doe",
      "payrollPeriod": "2026-07",
      "grossSalary": 75000,
      "totalDeductions": 8500,
      "netSalary": 66500,
      "paymentStatus": "Paid",
      "paymentDate": "2026-07-31"
    }
  ],
  "pagination": {
    "page": 1,
    "limit": 10,
    "totalRecords": 312,
    "totalPages": 32,
    "hasNextPage": true,
    "hasPreviousPage": false
  },
  "metadata": {
    "requestId": "REQ-20260730-PR12345",
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

- Use pagination when retrieving payroll records.
- Filter records by employee or payroll period whenever possible.
- Sort payroll records for consistent reporting.
- Cache historical payroll data when appropriate.
- Protect payroll information from unauthorized access.

---

# Common Use Cases

- Employee payroll portal
- Monthly payroll review
- HR administration
- Finance reconciliation
- Salary audits
- Payroll reporting

---

# Related Endpoints

| Endpoint | Description |
|----------|-------------|
| GET `/payroll/history` | Retrieve payroll history |
| GET `/payroll/{payrollId}/payslip` | Download payslip |
| GET `/payroll/salary-summary` | Retrieve salary summary |

---

## Next Step

Continue to **Payroll History** to learn how to retrieve an employee's historical payroll records.