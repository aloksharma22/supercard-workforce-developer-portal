---
title: Salary Summary
description: Retrieve summarized salary and payroll statistics for employees or departments.
---

# Salary Summary

Retrieves summarized payroll and salary statistics for a specified payroll period.

This endpoint provides high-level payroll metrics that help HR teams, finance departments, payroll administrators, and executives analyze salary expenses, payroll distribution, deductions, and payment status.

The summary can be generated for the entire organization or filtered by department and payroll period.

---

## Endpoint

```http
GET /payroll/salary-summary
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
| payrollPeriod | string | Yes | Payroll period (`YYYY-MM`) |
| department | string | No | Department name or identifier |

---

# Example Request

```http
GET /payroll/salary-summary?payrollPeriod=2026-07&department=Engineering
```

---

## cURL

```bash
curl --request GET \
  --url "https://api.supercard.com/v1/payroll/salary-summary?payrollPeriod=2026-07&department=Engineering" \
  --header "Authorization: Bearer YOUR_ACCESS_TOKEN"
```

---

## JavaScript

```javascript
const response = await fetch(
  "https://api.supercard.com/v1/payroll/salary-summary?payrollPeriod=2026-07&department=Engineering",
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
    "https://api.supercard.com/v1/payroll/salary-summary",
    params={
        "payrollPeriod": "2026-07",
        "department": "Engineering"
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
    "https://api.supercard.com/v1/payroll/salary-summary",
    {
        params: {
            payrollPeriod: "2026-07",
            department: "Engineering"
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
  "message": "Salary summary retrieved successfully.",
  "data": {
    "payrollPeriod": "2026-07",
    "department": "Engineering",
    "totalEmployees": 42,
    "totalGrossSalary": 3150000,
    "totalDeductions": 357000,
    "totalNetSalary": 2793000,
    "averageGrossSalary": 75000,
    "averageNetSalary": 66500,
    "paidEmployees": 42,
    "pendingPayments": 0,
    "paymentStatus": "Completed"
  },
  "metadata": {
    "requestId": "REQ-20260730-PR45678",
    "timestamp": "2026-07-30T12:30:00Z"
  }
}
```

---

# Response Fields

| Field | Description |
|---------|-------------|
| payrollPeriod | Payroll period included in the summary |
| department | Department included in the report (if specified) |
| totalEmployees | Total employees processed |
| totalGrossSalary | Sum of gross salaries |
| totalDeductions | Total payroll deductions |
| totalNetSalary | Total net salaries paid |
| averageGrossSalary | Average gross salary |
| averageNetSalary | Average net salary |
| paidEmployees | Number of employees whose salaries have been paid |
| pendingPayments | Number of pending salary payments |
| paymentStatus | Overall payroll processing status |

---

# Error Responses

| Status Code | Description |
|-------------|-------------|
| 400 | Invalid request parameters |
| 401 | Authentication failed |
| 403 | Access denied |
| 429 | Rate limit exceeded |
| 500 | Internal server error |
| 503 | Service unavailable |

---

# Common Use Cases

- Monthly payroll summaries
- Department-wise salary analysis
- Executive payroll dashboards
- Finance reconciliation
- Payroll auditing
- Workforce cost analysis

---

# Best Practices

- Generate salary summaries after payroll processing is complete.
- Filter by department for targeted financial analysis.
- Protect salary information from unauthorized access.
- Verify payroll calculations before financial reporting.
- Cache summary data when appropriate.
- Always use HTTPS.

---

# Related Endpoints

| Endpoint | Description |
|----------|-------------|
| GET `/payroll` | List payroll records |
| GET `/payroll/history` | Retrieve payroll history |
| GET `/payroll/{payrollId}/payslip` | Download payslip |
| GET `/reports/payroll` | Generate payroll report |

---

## Next Step

The **Payroll API** section is now complete.

Continue with the **Reports API**, beginning with:

**`docs/api-reference/reports/overview.md`**