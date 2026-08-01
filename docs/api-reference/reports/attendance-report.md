---
title: Attendance Report
description: Generate a detailed attendance report for employees, departments, or the entire organization.
---

# Attendance Report

Generates a comprehensive attendance report for a specified reporting period.

This endpoint provides detailed attendance analytics, including employee attendance records, working hours, overtime, absences, late arrivals, and attendance percentages. It is commonly used by HR administrators, managers, payroll teams, auditors, and reporting applications.

Reports can be generated for the entire organization or filtered by department and reporting period.

---

## Endpoint

```http
GET /reports/attendance
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
| startDate | date | Yes | Report start date |
| endDate | date | Yes | Report end date |
| department | string | No | Department name or identifier |
| employeeId | integer | No | Filter by employee |
| format | string | No | Export format (`PDF`, `Excel`, `CSV`, or `JSON`) |

---

# Example Request

```http
GET /reports/attendance?startDate=2026-07-01&endDate=2026-07-31&department=Engineering&format=PDF
```

---

## cURL

```bash
curl --request GET \
  --url "https://api.supercard.com/v1/reports/attendance?startDate=2026-07-01&endDate=2026-07-31&department=Engineering&format=PDF" \
  --header "Authorization: Bearer YOUR_ACCESS_TOKEN"
```

---

## JavaScript

```javascript
const response = await fetch(
  "https://api.supercard.com/v1/reports/attendance?startDate=2026-07-01&endDate=2026-07-31&department=Engineering&format=PDF",
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
    "https://api.supercard.com/v1/reports/attendance",
    params={
        "startDate": "2026-07-01",
        "endDate": "2026-07-31",
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
    "https://api.supercard.com/v1/reports/attendance",
    {
        params: {
            startDate: "2026-07-01",
            endDate: "2026-07-31",
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
  "message": "Attendance report generated successfully.",
  "data": {
    "reportId": 9001,
    "reportName": "Attendance Report - July 2026",
    "reportType": "Attendance",
    "department": "Engineering",
    "reportPeriod": {
      "startDate": "2026-07-01",
      "endDate": "2026-07-31"
    },
    "format": "PDF",
    "generatedAt": "2026-07-30T18:50:15Z",
    "generatedBy": "HR Administrator",
    "downloadUrl": "https://api.supercard.com/v1/reports/9001/download",
    "expiresAt": "2026-07-31T18:50:15Z"
  },
  "metadata": {
    "requestId": "REQ-20260730-RP12345",
    "timestamp": "2026-07-30T18:50:15Z"
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
| PDF | Printable report |
| Excel | Spreadsheet for analysis |
| CSV | Data exchange format |
| JSON | Structured API response |

---

# Common Use Cases

- Monthly attendance reporting
- Payroll verification
- Workforce analytics
- Employee attendance audits
- Department attendance reviews
- Executive workforce dashboards

---

# Best Practices

- Generate reports after attendance records have been finalized.
- Use department or employee filters to reduce report size.
- Download reports before the expiration time.
- Protect report download URLs.
- Archive important reports for compliance purposes.
- Always use HTTPS.

---

# Related Endpoints

| Endpoint | Description |
|----------|-------------|
| GET `/reports/payroll` | Generate payroll report |
| GET `/reports/departments` | Generate department report |
| GET `/reports/export` | Export reports |

---

## Next Step

Continue to **Payroll Report** to learn how to generate payroll reports for employees, departments, or the entire organization.