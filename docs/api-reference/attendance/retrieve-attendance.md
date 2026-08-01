---
title: Retrieve Attendance Record
description: Retrieve detailed information for a specific attendance record.
---

# Retrieve Attendance Record

Retrieves complete information for a specific attendance record using its unique identifier.

This endpoint returns detailed attendance information including clock-in time, clock-out time, working hours, break duration, overtime, attendance status, employee details, and audit timestamps.

It is commonly used by HR applications, payroll systems, employee self-service portals, workforce management systems, and reporting dashboards.

---

## Endpoint

```http
GET /attendance/{attendanceId}
```

---

## Authentication

```http
Authorization: Bearer YOUR_ACCESS_TOKEN
```

---

## Path Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| attendanceId | integer | Yes | Unique identifier of the attendance record |

---

# Example Request

```http
GET /attendance/1001
```

---

## cURL

```bash
curl --request GET \
  --url https://api.supercard.com/v1/attendance/1001 \
  --header "Authorization: Bearer YOUR_ACCESS_TOKEN"
```

---

## JavaScript

```javascript
const response = await fetch(
  "https://api.supercard.com/v1/attendance/1001",
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
    "https://api.supercard.com/v1/attendance/1001",
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
    "https://api.supercard.com/v1/attendance/1001",
    {
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
  "message": "Attendance record retrieved successfully.",
  "data": {
    "attendanceId": 1001,
    "employeeId": 101,
    "employeeName": "John Doe",
    "attendanceDate": "2026-07-30",
    "clockIn": "2026-07-30T09:00:00Z",
    "clockOut": "2026-07-30T18:15:00Z",
    "workingHours": 8.5,
    "breakDuration": 45,
    "overtimeHours": 0.5,
    "status": "Present",
    "remarks": "Completed scheduled work.",
    "createdAt": "2026-07-30T09:00:01Z",
    "updatedAt": "2026-07-30T18:15:02Z"
  },
  "metadata": {
    "requestId": "REQ-20260730-AT45678",
    "timestamp": "2026-07-30T18:15:03Z"
  }
}
```

---

# Error Responses

| Status Code | Description |
|-------------|-------------|
| 400 | Invalid attendance identifier |
| 401 | Authentication failed |
| 403 | Access denied |
| 404 | Attendance record not found |
| 429 | Rate limit exceeded |
| 500 | Internal server error |
| 503 | Service unavailable |

---

# Common Use Cases

- View daily attendance details
- Verify employee working hours
- Review overtime information
- Retrieve attendance history
- Support payroll processing
- Display attendance information in employee portals

---

# Best Practices

- Validate the attendance identifier before making the request.
- Handle `404 Not Found` responses appropriately.
- Use HTTPS for secure communication.
- Cache attendance records only when business requirements permit.
- Protect employee attendance information from unauthorized access.

---

# Related Endpoints

| Endpoint | Description |
|----------|-------------|
| GET `/attendance` | List attendance records |
| POST `/attendance/clock-in` | Record employee clock-in |
| PUT `/attendance/{attendanceId}/clock-out` | Record employee clock-out |
| GET `/attendance/summary` | Retrieve attendance summary |
| GET `/attendance/report` | Generate attendance report |

---

## Next Step

Continue to **Attendance Summary** to learn how to retrieve aggregated attendance statistics for employees, departments, or the entire organization.