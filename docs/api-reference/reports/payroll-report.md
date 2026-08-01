---
title: Payroll Report
description: Generate a detailed payroll report for employees, departments, or the entire organization.
---

# Payroll Report

Generates a comprehensive payroll report for a specified payroll period.

This endpoint provides detailed payroll information including employee salaries, earnings, deductions, taxes, statutory contributions, payment status, and net salary. It is commonly used by HR administrators, payroll teams, finance departments, auditors, and executive reporting applications.

Reports can be generated for the entire organization or filtered by department and payroll period.

---

## Endpoint

```http
GET /reports/payroll
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
| payrollPeriod | string | Yes | Payroll period (`YYYY-MM`) |
| department | string | No | Department name or identifier |
| employeeId | integer | No | Filter by employee |
| paymentStatus | string | No | Filter by payment status |
| format | string | No | Export format (`PDF`, `Excel`, `CSV`, or `JSON`) |

---

# Example Request

```http
GET /reports/payroll?payrollPeriod=2026-07&department=Engineering&format=PDF
```

---

## cURL

```bash
curl --request GET \
  --url "https://api.supercard.com/v1/reports/payroll?payrollPeriod=2026-07&department=Engineering&format=PDF" \
  --header "Authorization: Bearer YOUR_ACCESS_TOKEN"
```

---

## JavaScript

```javascript
const response = await fetch(
  "https://api.supercard.com/v1/reports/payroll?payrollPeriod=2026-07&department=Engineering&format=PDF",
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
    "https://api.supercard.com/v1/reports/payroll",
    params={
        "payrollPeriod": "2026-07",
        "department": "Engineering",
        "format": "PDF"
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
    "https://api.supercard.com/v1/reports/payroll",
    {
        params: {
            payrollPeriod: "2026-07",
            department: "Engineering",
            format: "PDF"
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
  "message": "Payroll report generated successfully.",
  "data": {
    "reportId": 9101,
    "reportName": "Payroll Report - July 2026",
    "reportType": "Payroll",
    "department": "Engineering",
    "payrollPeriod": "2026-07",
    "format": "PDF",
    "generatedAt": "2026-07-31T10:30:00Z",
    "generatedBy": "Payroll Administrator",
    "downloadUrl": "https://api.supercard.com/v1/reports/9101/download",
    "expiresAt": "2026-08-01T10:30:00Z"
  },
  "metadata": {
    "requestId": "REQ-20260731-RP23456",
    "timestamp": "2026-07-31T10:30:00Z"
  }
}
```

---

# Response Fields

| Field | Description |
|---------|-------------|
| reportId | Unique report identifier |
| reportName | Generated report name |
| reportType | Type of report |
| department | Department included in the report |
| payrollPeriod | Payroll period covered by the report |
| format | Export format |
| generatedAt | Report generation timestamp |
| generatedBy | User who generated the report |
| downloadUrl | Temporary download URL |
| expiresAt | Download URL expiration time |

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

# Supported Export Formats

| Format | Description |
|---------|-------------|
| PDF | Printable payroll report |
| Excel | Spreadsheet for payroll analysis |
| CSV | Payroll data export |
| JSON | Structured API response |

---

# Common Use Cases

- Monthly payroll reporting
- Salary audits
- Finance reconciliation
- Tax preparation
- Compliance reporting
- Executive payroll dashboards

---

# Best Practices

- Generate reports only after payroll processing has been completed.
- Filter by department or employee when appropriate.
- Download reports before the temporary link expires.
- Protect payroll reports from unauthorized access.
- Archive payroll reports for audit and compliance requirements.
- Always use HTTPS.

---

# Related Endpoints

| Endpoint | Description |
|----------|-------------|
| GET `/reports/attendance` | Generate attendance report |
| GET `/reports/departments` | Generate department report |
| GET `/reports/export` | Export reports |

---

## Next Step

Continue to **Department Report** to learn how to generate department-level workforce analytics and organizational reports.