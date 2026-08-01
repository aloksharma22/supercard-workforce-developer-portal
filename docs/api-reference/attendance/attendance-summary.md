---
title: Attendance Summary
description: Retrieve summarized attendance statistics for employees and departments.
---

# Attendance Summary

Retrieves summarized attendance statistics for a specified reporting period.

This endpoint provides high-level attendance metrics that can be used for HR dashboards, workforce analytics, payroll processing, and executive reporting.

The summary can be generated for the entire organization or filtered by department and date range.

---

## Endpoint

```http
GET /attendance/summary
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
| startDate | date | Yes | Report start date |
| endDate | date | Yes | Report end date |
| department | string | No | Department name or identifier |

---

# Example Request

```http
GET /attendance/summary?startDate=2026-07-01&endDate=2026-07-31&department=Engineering
```

---

## cURL

```bash
curl --request GET \
  --url "https://api.supercard.com/v1/attendance/summary?startDate=2026-07-01&endDate=2026-07-31&department=Engineering" \
  --header "Authorization: Bearer YOUR_ACCESS_TOKEN"
```

---

## JavaScript

```javascript
const response = await fetch(
  "https://api.supercard.com/v1/attendance/summary?startDate=2026-07-01&endDate=2026-07-31&department=Engineering",
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
    "https://api.supercard.com/v1/attendance/summary",
    params={
        "startDate": "2026-07-01",
        "endDate": "2026-07-31",
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
    "https://api.supercard.com/v1/attendance/summary",
    {
        params: {
            startDate: "2026-07-01",
            endDate: "2026-07-31",
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
  "message": "Attendance summary retrieved successfully.",
  "data": {
    "reportPeriod": {
      "startDate": "2026-07-01",
      "endDate": "2026-07-31"
    },
    "department": "Engineering",
    "totalEmployees": 42,
    "presentDays": 1125,
    "absentDays": 38,
    "lateArrivals": 21,
    "halfDays": 9,
    "leaveDays": 27,
    "holidayDays": 16,
    "overtimeHours": 148.5,
    "averageWorkingHours": 8.42,
    "attendancePercentage": 96.74
  },
  "metadata": {
    "requestId": "REQ-20260730-AT56789",
    "timestamp": "2026-07-30T18:45:12Z"
  }
}
```

---

# Response Fields

| Field | Description |
|---------|-------------|
| totalEmployees | Total employees included in the report |
| presentDays | Total number of present days |
| absentDays | Total number of absent days |
| lateArrivals | Number of late arrivals |
| halfDays | Number of half-day attendances |
| leaveDays | Approved leave days |
| holidayDays | Organization holidays |
| overtimeHours | Total overtime hours |
| averageWorkingHours | Average working hours per employee |
| attendancePercentage | Overall attendance percentage |

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

- HR dashboards
- Monthly attendance analysis
- Workforce productivity monitoring
- Payroll verification
- Executive reporting
- Department performance analysis

---

# Best Practices

- Specify an appropriate date range.
- Filter by department for targeted analysis.
- Avoid requesting unnecessarily large reporting periods.
- Cache summary reports where appropriate.
- Refresh summaries after attendance corrections.
- Always use HTTPS.

---

# Related Endpoints

| Endpoint | Description |
|----------|-------------|
| GET `/attendance` | List attendance records |
| GET `/attendance/{attendanceId}` | Retrieve attendance record |
| GET `/attendance/report` | Generate attendance report |
| POST `/attendance/clock-in` | Record employee clock-in |
| PUT `/attendance/{attendanceId}/clock-out` | Record employee clock-out |

---

## Next Step

Continue to **Attendance Report** to learn how to generate and export detailed attendance reports.