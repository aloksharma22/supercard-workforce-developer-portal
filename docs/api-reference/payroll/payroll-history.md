---
title: Payroll History
description: Retrieve an employee's payroll history across multiple payroll periods.
---

# Payroll History

Retrieves the historical payroll records for an employee.

This endpoint provides access to previously processed payroll records, allowing users to review salary payments, deductions, taxes, earnings, and payment history across multiple payroll periods.

It is commonly used by employees, HR administrators, finance teams, auditors, and payroll reporting applications.

---

## Endpoint

```http
GET /payroll/history
```

---

## Authentication

```http
Authorization: Bearer YOUR_ACCESS_TOKEN
```

---

# Query Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| employeeId | integer | Yes | Employee identifier |
| page | integer | No | Page number |
| limit | integer | No | Number of records per page |
| startPeriod | string | No | Starting payroll period (`YYYY-MM`) |
| endPeriod | string | No | Ending payroll period (`YYYY-MM`) |
| paymentStatus | string | No | Filter by payment status |
| sort | string | No | Sort field |
| order | string | No | Sort order (`asc` or `desc`) |

---

# Example Request

```http
GET /payroll/history?employeeId=101&startPeriod=2026-01&endPeriod=2026-07
```

---

## cURL

```bash
curl --request GET \
  --url "https://api.supercard.com/v1/payroll/history?employeeId=101&startPeriod=2026-01&endPeriod=2026-07" \
  --header "Authorization: Bearer YOUR_ACCESS_TOKEN"
```

---

## JavaScript

```javascript
const response = await fetch(
  "https://api.supercard.com/v1/payroll/history?employeeId=101&startPeriod=2026-01&endPeriod=2026-07",
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
    "https://api.supercard.com/v1/payroll/history",
    params={
        "employeeId": 101,
        "startPeriod": "2026-01",
        "endPeriod": "2026-07"
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
    "https://api.supercard.com/v1/payroll/history",
    {
        params: {
            employeeId: 101,
            startPeriod: "2026-01",
            endPeriod: "2026-07"
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
  "message": "Payroll history retrieved successfully.",
  "data": [
    {
      "payrollId": 7001,
      "payrollPeriod": "2026-07",
      "grossSalary": 75000,
      "totalDeductions": 8500,
      "netSalary": 66500,
      "paymentStatus": "Paid",
      "paymentDate": "2026-07-31"
    },
    {
      "payrollId": 6958,
      "payrollPeriod": "2026-06",
      "grossSalary": 75000,
      "totalDeductions": 8400,
      "netSalary": 66600,
      "paymentStatus": "Paid",
      "paymentDate": "2026-06-30"
    }
  ],
  "pagination": {
    "page": 1,
    "limit": 10,
    "totalRecords": 7,
    "totalPages": 1,
    "hasNextPage": false,
    "hasPreviousPage": false
  },
  "metadata": {
    "requestId": "REQ-20260730-PR23456",
    "timestamp": "2026-07-30T11:15:30Z"
  }
}
```

---

# Error Responses

| Status Code | Description |
|-------------|-------------|
| 400 | Invalid request parameters |
| 401 | Authentication failed |
| 403 | Access denied |
| 404 | Employee not found |
| 429 | Rate limit exceeded |
| 500 | Internal server error |
| 503 | Service unavailable |

---

# Common Use Cases

- Review previous salary payments
- Verify historical payroll information
- Perform payroll audits
- Generate financial reports
- Support tax filing and compliance
- Employee self-service payroll history

---

# Best Practices

- Use payroll period filters when retrieving historical data.
- Retrieve only the records required for the reporting period.
- Protect payroll information from unauthorized access.
- Cache historical payroll records when appropriate.
- Handle pagination for employees with long payroll histories.
- Always use HTTPS.

---

# Related Endpoints

| Endpoint | Description |
|----------|-------------|
| GET `/payroll` | List payroll records |
| GET `/payroll/{payrollId}/payslip` | Download payslip |
| GET `/payroll/salary-summary` | Retrieve salary summary |

---

## Next Step

Continue to **Download Payslip** to learn how to retrieve a payslip for a specific payroll record.