---
title: Clock In Employee
description: Record the start of an employee's workday.
---

# Clock In Employee

Records an employee's clock-in time at the beginning of the workday.

This endpoint creates a new attendance record for the employee and stores the clock-in timestamp. It is typically called by attendance kiosks, biometric devices, mobile applications, employee self-service portals, and workforce management systems.

An employee can have only one active clock-in session at a time.

---

## Endpoint

```http
POST /attendance/clock-in
```

---

## Authentication

```http
Authorization: Bearer YOUR_ACCESS_TOKEN
```

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
| employeeId | integer | Yes | Employee identifier |
| clockIn | datetime | Yes | Clock-in timestamp (UTC) |
| location | string | No | Employee location |
| remarks | string | No | Additional notes |

---

# Example Request

```http
POST /attendance/clock-in
```

```json
{
  "employeeId": 101,
  "clockIn": "2026-07-30T09:00:00Z",
  "location": "Vadodara Office",
  "remarks": "Started regular shift."
}
```

---

# cURL

```bash
curl --request POST \
  --url https://api.supercard.com/v1/attendance/clock-in \
  --header "Authorization: Bearer YOUR_ACCESS_TOKEN" \
  --header "Content-Type: application/json" \
  --data '{
    "employeeId":101,
    "clockIn":"2026-07-30T09:00:00Z",
    "location":"Vadodara Office",
    "remarks":"Started regular shift."
}'
```

---

# JavaScript

```javascript
const response = await fetch(
  "https://api.supercard.com/v1/attendance/clock-in",
  {
    method: "POST",
    headers: {
      Authorization: "Bearer YOUR_ACCESS_TOKEN",
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      employeeId: 101,
      clockIn: "2026-07-30T09:00:00Z",
      location: "Vadodara Office",
      remarks: "Started regular shift."
    })
  }
);

const data = await response.json();
```

---

# Python

```python
import requests

response = requests.post(
    "https://api.supercard.com/v1/attendance/clock-in",
    headers={
        "Authorization": "Bearer YOUR_ACCESS_TOKEN",
        "Content-Type": "application/json"
    },
    json={
        "employeeId": 101,
        "clockIn": "2026-07-30T09:00:00Z",
        "location": "Vadodara Office",
        "remarks": "Started regular shift."
    }
)

print(response.json())
```

---

# Node.js

```javascript
import axios from "axios";

const response = await axios.post(
  "https://api.supercard.com/v1/attendance/clock-in",
  {
    employeeId: 101,
    clockIn: "2026-07-30T09:00:00Z",
    location: "Vadodara Office",
    remarks: "Started regular shift."
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
201 Created
```

```json
{
  "success": true,
  "message": "Clock-in recorded successfully.",
  "data": {
    "attendanceId": 1001,
    "employeeId": 101,
    "clockIn": "2026-07-30T09:00:00Z",
    "status": "Present"
  },
  "metadata": {
    "requestId": "REQ-20260730-AT23456",
    "timestamp": "2026-07-30T09:00:02Z"
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
| 409 | Employee has already clocked in |
| 422 | Validation failed |
| 429 | Too many requests |
| 500 | Internal server error |
| 503 | Service unavailable |

---

# Validation Rules

- Employee must exist.
- Employee cannot have an active clock-in session.
- Clock-in timestamp must be valid.
- Future timestamps are not permitted unless configured.
- Required fields cannot be empty.

---

# Best Practices

- Record clock-in immediately when work begins.
- Use UTC timestamps for consistency.
- Prevent duplicate clock-in requests.
- Validate employee identity before submitting the request.
- Handle `409 Conflict` responses appropriately.
- Always use HTTPS.

---

# Related Endpoints

| Endpoint | Description |
|----------|-------------|
| PUT `/attendance/{attendanceId}/clock-out` | Record clock-out |
| GET `/attendance/{attendanceId}` | Retrieve attendance record |
| GET `/attendance` | List attendance records |

---

## Next Step

Continue to **Clock Out Employee** to learn how to record the end of an employee's workday.