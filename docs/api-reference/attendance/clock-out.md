---
title: Clock Out Employee
description: Record the end of an employee's workday.
---

# Clock Out Employee

Records an employee's clock-out time and completes the attendance record for the workday.

When an employee clocks out, the system automatically calculates total working hours, break duration, overtime hours, and updates the attendance status.

This endpoint is typically used by attendance systems, biometric devices, mobile applications, employee self-service portals, and workforce management solutions.

---

## Endpoint

```http
PUT /attendance/{attendanceId}/clock-out
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

## Request Headers

| Header | Required | Description |
|---------|----------|-------------|
| Authorization | Yes | OAuth 2.0 Bearer Access Token |
| Content-Type | Yes | `application/json` |

---

# Request Body

| Field | Type | Required | Description |
|---------|------|----------|-------------|
| clockOut | datetime | Yes | Clock-out timestamp (UTC) |
| breakDuration | integer | No | Break duration in minutes |
| overtimeHours | number | No | Overtime hours worked |
| remarks | string | No | Additional comments |

---

# Example Request

```http
PUT /attendance/1001/clock-out
```

```json
{
  "clockOut": "2026-07-30T18:15:00Z",
  "breakDuration": 45,
  "overtimeHours": 0.5,
  "remarks": "Completed scheduled work."
}
```

---

# cURL

```bash
curl --request PUT \
  --url https://api.supercard.com/v1/attendance/1001/clock-out \
  --header "Authorization: Bearer YOUR_ACCESS_TOKEN" \
  --header "Content-Type: application/json" \
  --data '{
    "clockOut":"2026-07-30T18:15:00Z",
    "breakDuration":45,
    "overtimeHours":0.5,
    "remarks":"Completed scheduled work."
}'
```

---

# JavaScript

```javascript
const response = await fetch(
  "https://api.supercard.com/v1/attendance/1001/clock-out",
  {
    method: "PUT",
    headers: {
      Authorization: "Bearer YOUR_ACCESS_TOKEN",
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      clockOut: "2026-07-30T18:15:00Z",
      breakDuration: 45,
      overtimeHours: 0.5,
      remarks: "Completed scheduled work."
    })
  }
);

const data = await response.json();
```

---

# Python

```python
import requests

response = requests.put(
    "https://api.supercard.com/v1/attendance/1001/clock-out",
    headers={
        "Authorization": "Bearer YOUR_ACCESS_TOKEN",
        "Content-Type": "application/json"
    },
    json={
        "clockOut": "2026-07-30T18:15:00Z",
        "breakDuration": 45,
        "overtimeHours": 0.5,
        "remarks": "Completed scheduled work."
    }
)

print(response.json())
```

---

# Node.js

```javascript
import axios from "axios";

const response = await axios.put(
  "https://api.supercard.com/v1/attendance/1001/clock-out",
  {
    clockOut: "2026-07-30T18:15:00Z",
    breakDuration: 45,
    overtimeHours: 0.5,
    remarks: "Completed scheduled work."
  },
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
  "message": "Clock-out recorded successfully.",
  "data": {
    "attendanceId": 1001,
    "employeeId": 101,
    "clockIn": "2026-07-30T09:00:00Z",
    "clockOut": "2026-07-30T18:15:00Z",
    "workingHours": 8.5,
    "breakDuration": 45,
    "overtimeHours": 0.5,
    "status": "Present"
  },
  "metadata": {
    "requestId": "REQ-20260730-AT34567",
    "timestamp": "2026-07-30T18:15:02Z"
  }
}
```

---

# Error Responses

| Status Code | Description |
|-------------|-------------|
| 400 | Invalid request payload |
| 401 | Authentication failed |
| 403 | Permission denied |
| 404 | Attendance record not found |
| 409 | Employee has already clocked out |
| 422 | Validation failed |
| 429 | Too many requests |
| 500 | Internal server error |
| 503 | Service unavailable |

---

# Validation Rules

- Attendance record must exist.
- Employee must have an active clock-in.
- Clock-out time must be later than clock-in time.
- Break duration cannot be negative.
- Overtime hours cannot be negative.
- Required fields cannot be empty.

---

# Best Practices

- Record clock-out immediately after the employee finishes work.
- Use UTC timestamps for consistency.
- Prevent duplicate clock-out requests.
- Validate the attendance record before sending the request.
- Handle `409 Conflict` responses appropriately.
- Always use HTTPS.

---

# Related Endpoints

| Endpoint | Description |
|----------|-------------|
| POST `/attendance/clock-in` | Record employee clock-in |
| GET `/attendance/{attendanceId}` | Retrieve attendance record |
| GET `/attendance` | List attendance records |
| GET `/attendance/summary` | Attendance summary |

---

## Next Step

Continue to **Retrieve Attendance Record** to learn how to fetch detailed attendance information for a specific workday.