---
title: Attendance Report
description: Generate a detailed attendance report for employees or departments.
---

# Attendance Report

Generates a comprehensive attendance report for a specified reporting period.

This endpoint is commonly used by HR teams, payroll administrators, department managers, auditors, and reporting applications to analyze employee attendance and export attendance data.

Reports can be generated for the entire organization or filtered by department and reporting period.

---

## Endpoint

```http
GET /attendance/report
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
| format | string | No | Export format (`PDF`, `Excel`, `CSV`, `JSON`) |

---

# Example Request

```http
GET /attendance/report?startDate=2026-07-01&endDate=2026-07-31&department=Engineering&format=PDF
```

---

## cURL

```bash
curl --request GET \
  --url "https://api.supercard.com/v1/attendance/report?startDate=2026-07-01&endDate=2026-07-31&department=Engineering&format=PDF" \
  --header "Authorization: Bearer YOUR_ACCESS_TOKEN"
```

---

## JavaScript

```javascript
const response = await fetch(
  "https://api.supercard.com/v1/attendance/report?startDate=2026-07-01&endDate=2026-07-31&department=Engineering&format=PDF",
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
    "https://api.supercard.com/v1/attendance/report",
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
    "https://api.supercard.com/v1/attendance/report",
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
    "department": "Engineering",
    "format": "PDF",
    "generatedAt": "2026-07-30T18:50:15Z",
    "generatedBy": "HR Administrator",
    "downloadUrl": "https://api.supercard.com/v1/reports/9001/download",
    "expiresAt": "2026-07-31T18:50:15Z"
  },
  "metadata": {
    "requestId": "REQ-20260730-AT67890",
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
| department | Department included in the report |
| format | Export format |
| generatedAt | Report generation timestamp |
| generatedBy | User who generated the report |
| downloadUrl | Temporary report download URL |
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
| CSV | Import into external systems |
| JSON | API-friendly structured data |

---

# Common Use Cases

- Monthly HR reports
- Payroll verification
- Employee attendance audits
- Department performance reviews
- Compliance reporting
- Workforce analytics

---

# Best Practices

- Generate reports using appropriate date ranges.
- Export large datasets in Excel or CSV format.
- Download reports before the expiration time.
- Regenerate reports after attendance corrections.
- Protect report download URLs.
- Always use HTTPS.

---

# Related Endpoints

| Endpoint | Description |
|----------|-------------|
| GET `/attendance` | List attendance records |
| GET `/attendance/{attendanceId}` | Retrieve attendance record |
| GET `/attendance/summary` | Retrieve attendance summary |
| GET `/reports/attendance` | Generate organization-wide attendance report |

---

## Next Step

The **Attendance API** section is now complete.

Continue with the **Leaves API**, beginning with:

**`docs/api-reference/leaves/overview.md`**