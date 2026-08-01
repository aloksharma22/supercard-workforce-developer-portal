---
title: List Attendance Records
description: Retrieve a paginated list of employee attendance records.
---

# List Attendance Records

Returns a paginated collection of employee attendance records.

This endpoint supports searching, filtering, sorting, pagination, and date range filtering, making it suitable for HR dashboards, workforce management systems, payroll processing, and attendance reporting.

---

## Endpoint

```http
GET /attendance
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
| search | string | No | Search by employee name or employee code |
| employeeId | integer | No | Filter by employee |
| status | string | No | Attendance status |
| startDate | date | No | Filter from date |
| endDate | date | No | Filter to date |
| sort | string | No | Sort field |
| order | string | No | Sort order (`asc` or `desc`) |

---

# Example Request

```http
GET /attendance?page=1&limit=10&status=Present&startDate=2026-07-01&endDate=2026-07-31
```

---

## cURL

```bash
curl --request GET \
  --url "https://api.supercard.com/v1/attendance?page=1&limit=10&status=Present&startDate=2026-07-01&endDate=2026-07-31" \
  --header "Authorization: Bearer YOUR_ACCESS_TOKEN"
```

---

## JavaScript

```javascript
const response = await fetch(
  "https://api.supercard.com/v1/attendance?page=1&limit=10&status=Present&startDate=2026-07-01&endDate=2026-07-31",
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
    "https://api.supercard.com/v1/attendance",
    params={
        "page": 1,
        "limit": 10,
        "status": "Present",
        "startDate": "2026-07-01",
        "endDate": "2026-07-31"
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
    "https://api.supercard.com/v1/attendance",
    {
        params: {
            page: 1,
            limit: 10,
            status: "Present",
            startDate: "2026-07-01",
            endDate: "2026-07-31"
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
  "message": "Attendance records retrieved successfully.",
  "data": [
    {
      "attendanceId": 1001,
      "employeeId": 101,
      "employeeName": "John Doe",
      "attendanceDate": "2026-07-30",
      "clockIn": "2026-07-30T09:00:00Z",
      "clockOut": "2026-07-30T18:00:00Z",
      "workingHours": 8.5,
      "overtimeHours": 0.5,
      "status": "Present"
    }
  ],
  "pagination": {
    "page": 1,
    "limit": 10,
    "totalRecords": 256,
    "totalPages": 26,
    "hasNextPage": true,
    "hasPreviousPage": false
  },
  "metadata": {
    "requestId": "REQ-20260730-AT12345",
    "timestamp": "2026-07-30T09:30:15Z"
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

- Use pagination when retrieving large attendance datasets.
- Filter records using employee ID, status, and date range whenever possible.
- Sort attendance records for consistent reporting.
- Cache reports when appropriate.
- Use date filters to improve performance.
- Avoid requesting unnecessary historical records.

---

# Common Use Cases

- Daily attendance dashboards
- Monthly attendance reports
- Payroll processing
- Employee attendance history
- Workforce analytics
- HR administration

---

# Related Endpoints

| Endpoint | Description |
|----------|-------------|
| GET `/attendance/{attendanceId}` | Retrieve attendance record |
| POST `/attendance/clock-in` | Record employee clock-in |
| PUT `/attendance/{attendanceId}/clock-out` | Record employee clock-out |
| GET `/attendance/summary` | Attendance summary |
| GET `/attendance/report` | Generate attendance report |

---

## Next Step

Continue to **Clock In Employee** to learn how to record the beginning of an employee's workday.