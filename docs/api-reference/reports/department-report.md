---
title: Department Report
description: Generate a detailed report containing department-level workforce and operational statistics.
---

# Department Report

Generates a comprehensive report containing department-level workforce information and organizational metrics.

This endpoint provides insights into department performance, employee distribution, attendance, leave utilization, payroll expenses, and other operational statistics. It is commonly used by HR administrators, department managers, executives, auditors, and business intelligence applications.

Reports can be generated for a single department or for all departments within the organization.

---

## Endpoint

```http
GET /reports/departments
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
| department | string | No | Department name or identifier |
| startDate | date | No | Report start date |
| endDate | date | No | Report end date |
| format | string | No | Export format (`PDF`, `Excel`, `CSV`, or `JSON`) |

---

# Example Request

```http
GET /reports/departments?department=Engineering&startDate=2026-07-01&endDate=2026-07-31&format=PDF
```

---

## cURL

```bash
curl --request GET \
  --url "https://api.supercard.com/v1/reports/departments?department=Engineering&startDate=2026-07-01&endDate=2026-07-31&format=PDF" \
  --header "Authorization: Bearer YOUR_ACCESS_TOKEN"
```

---

## JavaScript

```javascript
const response = await fetch(
  "https://api.supercard.com/v1/reports/departments?department=Engineering&startDate=2026-07-01&endDate=2026-07-31&format=PDF",
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
    "https://api.supercard.com/v1/reports/departments",
    params={
        "department": "Engineering",
        "startDate": "2026-07-01",
        "endDate": "2026-07-31",
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
    "https://api.supercard.com/v1/reports/departments",
    {
        params: {
            department: "Engineering",
            startDate: "2026-07-01",
            endDate: "2026-07-31",
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
  "message": "Department report generated successfully.",
  "data": {
    "reportId": 9201,
    "reportName": "Department Report - Engineering",
    "reportType": "Department",
    "department": "Engineering",
    "reportPeriod": {
      "startDate": "2026-07-01",
      "endDate": "2026-07-31"
    },
    "totalEmployees": 42,
    "averageAttendance": 96.7,
    "approvedLeaves": 18,
    "totalPayroll": 3150000,
    "format": "PDF",
    "generatedAt": "2026-07-31T11:15:00Z",
    "generatedBy": "HR Administrator",
    "downloadUrl": "https://api.supercard.com/v1/reports/9201/download",
    "expiresAt": "2026-08-01T11:15:00Z"
  },
  "metadata": {
    "requestId": "REQ-20260731-RP34567",
    "timestamp": "2026-07-31T11:15:00Z"
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
| reportPeriod | Reporting period |
| totalEmployees | Number of employees in the department |
| averageAttendance | Average attendance percentage |
| approvedLeaves | Number of approved leave requests |
| totalPayroll | Total payroll expense for the department |
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
| 404 | Department not found |
| 429 | Rate limit exceeded |
| 500 | Internal server error |
| 503 | Service unavailable |

---

# Supported Export Formats

| Format | Description |
|---------|-------------|
| PDF | Printable department report |
| Excel | Spreadsheet for analysis |
| CSV | Data exchange format |
| JSON | Structured API response |

---

# Common Use Cases

- Department performance analysis
- Workforce planning
- Management reporting
- HR analytics
- Budget and payroll review
- Executive dashboards

---

# Best Practices

- Generate reports using appropriate reporting periods.
- Filter by department for focused analysis.
- Download reports before the temporary link expires.
- Protect sensitive workforce and payroll information.
- Archive important reports for compliance and auditing.
- Always use HTTPS.

---

# Related Endpoints

| Endpoint | Description |
|----------|-------------|
| GET `/reports/attendance` | Generate attendance report |
| GET `/reports/payroll` | Generate payroll report |
| GET `/reports/export` | Export reports |

---

## Next Step

Continue to **Export Report** to learn how to export generated reports in various formats for sharing, analysis, and archival.