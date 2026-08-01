---
title: Reject Leave Request
description: Reject a pending employee leave request.
---

# Reject Leave Request

Rejects a pending leave request submitted by an employee.

This endpoint allows authorized managers and HR administrators to reject leave requests that do not meet organizational policies or business requirements.

Once rejected, the leave request status changes to **Rejected** and the employee's leave balance remains unchanged.

Only leave requests with a **Pending** status can be rejected.

---

## Endpoint

```http
POST /leaves/{leaveId}/reject
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
| leaveId | integer | Yes | Unique identifier of the leave request |

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
| rejectedBy | integer | Yes | Employee ID of the approving manager or HR administrator |
| reason | string | Yes | Reason for rejection |
| remarks | string | No | Additional comments |

---

# Example Request

```http
POST /leaves/5001/reject
```

```json
{
  "rejectedBy": 2,
  "reason": "Insufficient staffing during the requested period.",
  "remarks": "Please choose another date."
}
```

---

# cURL

```bash
curl --request POST \
  --url https://api.supercard.com/v1/leaves/5001/reject \
  --header "Authorization: Bearer YOUR_ACCESS_TOKEN" \
  --header "Content-Type: application/json" \
  --data '{
    "rejectedBy":2,
    "reason":"Insufficient staffing during the requested period.",
    "remarks":"Please choose another date."
}'
```

---

# JavaScript

```javascript
const response = await fetch(
  "https://api.supercard.com/v1/leaves/5001/reject",
  {
    method: "POST",
    headers: {
      Authorization: "Bearer YOUR_ACCESS_TOKEN",
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      rejectedBy: 2,
      reason: "Insufficient staffing during the requested period.",
      remarks: "Please choose another date."
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
    "https://api.supercard.com/v1/leaves/5001/reject",
    headers={
        "Authorization": "Bearer YOUR_ACCESS_TOKEN",
        "Content-Type": "application/json"
    },
    json={
        "rejectedBy": 2,
        "reason": "Insufficient staffing during the requested period.",
        "remarks": "Please choose another date."
    }
)

print(response.json())
```

---

# Node.js

```javascript
import axios from "axios";

const response = await axios.post(
  "https://api.supercard.com/v1/leaves/5001/reject",
  {
    rejectedBy: 2,
    reason: "Insufficient staffing during the requested period.",
    remarks: "Please choose another date."
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
  "message": "Leave request rejected successfully.",
  "data": {
    "leaveId": 5001,
    "status": "Rejected",
    "rejectedBy": 2,
    "rejectedAt": "2026-08-01T10:45:00Z",
    "reason": "Insufficient staffing during the requested period."
  },
  "metadata": {
    "requestId": "REQ-20260801-LV56789",
    "timestamp": "2026-08-01T10:45:01Z"
  }
}
```

---

# Error Responses

| Status Code | Description |
|-------------|-------------|
| 400 | Invalid request payload |
| 401 | Authentication failed |
| 403 | Insufficient permissions |
| 404 | Leave request not found |
| 409 | Leave request has already been processed |
| 422 | Validation failed |
| 429 | Too many requests |
| 500 | Internal server error |
| 503 | Service unavailable |

---

# Validation Rules

- Leave request must exist.
- Leave request must be in **Pending** status.
- Rejection reason is required.
- Rejecting user must have approval permissions.
- Required fields cannot be empty.

---

# Best Practices

- Provide a clear rejection reason.
- Include remarks to help the employee understand the decision.
- Follow organizational leave approval policies.
- Notify the employee after rejection.
- Handle `409 Conflict` responses appropriately.
- Always use HTTPS.

---

# Related Endpoints

| Endpoint | Description |
|----------|-------------|
| POST `/leaves/{leaveId}/approve` | Approve leave request |
| POST `/leaves/{leaveId}/cancel` | Cancel leave request |
| GET `/leaves/{leaveId}` | Retrieve leave request |
| GET `/leaves/balance` | Retrieve leave balance |

---

## Next Step

Continue to **Cancel Leave Request** to learn how employees or administrators can cancel an existing leave request.