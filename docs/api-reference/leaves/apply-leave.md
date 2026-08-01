---
title: Apply for Leave
description: Submit a new leave request for an employee.
---

# Apply for Leave

Creates a new leave request for an employee.

This endpoint allows employees to apply for leave by specifying the leave type, leave period, and reason. After submission, the request enters the approval workflow where authorized managers or HR personnel can approve or reject it.

---

## Endpoint

```http
POST /leaves
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
| leaveType | string | Yes | Type of leave |
| startDate | date | Yes | Leave start date |
| endDate | date | Yes | Leave end date |
| reason | string | Yes | Reason for the leave request |
| emergencyContact | string | No | Emergency contact number |
| attachmentUrl | string | No | Supporting document URL (medical certificate, etc.) |

---

# Example Request

```http
POST /leaves
```

```json
{
  "employeeId": 101,
  "leaveType": "Annual Leave",
  "startDate": "2026-08-10",
  "endDate": "2026-08-12",
  "reason": "Family vacation",
  "emergencyContact": "+91-9876543210"
}
```

---

# cURL

```bash
curl --request POST \
  --url https://api.supercard.com/v1/leaves \
  --header "Authorization: Bearer YOUR_ACCESS_TOKEN" \
  --header "Content-Type: application/json" \
  --data '{
    "employeeId":101,
    "leaveType":"Annual Leave",
    "startDate":"2026-08-10",
    "endDate":"2026-08-12",
    "reason":"Family vacation",
    "emergencyContact":"+91-9876543210"
}'
```

---

# JavaScript

```javascript
const response = await fetch(
  "https://api.supercard.com/v1/leaves",
  {
    method: "POST",
    headers: {
      Authorization: "Bearer YOUR_ACCESS_TOKEN",
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      employeeId: 101,
      leaveType: "Annual Leave",
      startDate: "2026-08-10",
      endDate: "2026-08-12",
      reason: "Family vacation",
      emergencyContact: "+91-9876543210"
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
    "https://api.supercard.com/v1/leaves",
    headers={
        "Authorization": "Bearer YOUR_ACCESS_TOKEN",
        "Content-Type": "application/json"
    },
    json={
        "employeeId": 101,
        "leaveType": "Annual Leave",
        "startDate": "2026-08-10",
        "endDate": "2026-08-12",
        "reason": "Family vacation",
        "emergencyContact": "+91-9876543210"
    }
)

print(response.json())
```

---

# Node.js

```javascript
import axios from "axios";

const response = await axios.post(
  "https://api.supercard.com/v1/leaves",
  {
    employeeId: 101,
    leaveType: "Annual Leave",
    startDate: "2026-08-10",
    endDate: "2026-08-12",
    reason: "Family vacation",
    emergencyContact: "+91-9876543210"
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
  "message": "Leave request submitted successfully.",
  "data": {
    "leaveId": 5001,
    "employeeId": 101,
    "leaveType": "Annual Leave",
    "startDate": "2026-08-10",
    "endDate": "2026-08-12",
    "numberOfDays": 3,
    "status": "Pending"
  },
  "metadata": {
    "requestId": "REQ-20260730-LV23456",
    "timestamp": "2026-07-30T11:20:15Z"
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
| 404 | Employee not found |
| 409 | Overlapping leave request exists |
| 422 | Validation failed |
| 429 | Too many requests |
| 500 | Internal server error |
| 503 | Service unavailable |

---

# Validation Rules

- Employee must exist.
- Start date must be before or equal to the end date.
- Leave dates cannot overlap with an existing approved or pending leave.
- Employee must have sufficient leave balance when applicable.
- Leave type must be one of the supported values.
- Required fields cannot be empty.

---

# Best Practices

- Check leave balance before submitting a request.
- Submit leave requests as early as possible.
- Include a clear reason for the leave.
- Attach supporting documents when required (for example, medical leave).
- Review organizational leave policies before applying.
- Always use HTTPS.

---

# Related Endpoints

| Endpoint | Description |
|----------|-------------|
| GET `/leaves` | List leave requests |
| GET `/leaves/{leaveId}` | Retrieve leave request |
| POST `/leaves/{leaveId}/approve` | Approve leave |
| POST `/leaves/{leaveId}/reject` | Reject leave |
| POST `/leaves/{leaveId}/cancel` | Cancel leave |
| GET `/leaves/balance` | Retrieve leave balance |

---

## Next Step

Continue to **Retrieve Leave Request** to learn how to view the complete details and current status of a specific leave request.