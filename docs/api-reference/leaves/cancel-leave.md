---
title: Cancel Leave Request
description: Cancel an existing employee leave request.
---

# Cancel Leave Request

Cancels an existing leave request.

This endpoint allows employees, managers, or HR administrators to cancel a leave request before or during the approval process, subject to the organization's leave policies.

Depending on company policy, only **Pending** leave requests may be cancelled, while some organizations also allow cancellation of approved leave before the leave start date.

Once cancelled, the leave request status changes to **Cancelled** and any reserved leave balance is restored automatically.

---

## Endpoint

```http
POST /leaves/{leaveId}/cancel
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
| cancelledBy | integer | Yes | Employee ID of the user cancelling the leave |
| reason | string | Yes | Reason for cancellation |
| remarks | string | No | Additional comments |

---

# Example Request

```http
POST /leaves/5001/cancel
```

```json
{
  "cancelledBy": 101,
  "reason": "Travel plans have changed.",
  "remarks": "Leave is no longer required."
}
```

---

# cURL

```bash
curl --request POST \
  --url https://api.supercard.com/v1/leaves/5001/cancel \
  --header "Authorization: Bearer YOUR_ACCESS_TOKEN" \
  --header "Content-Type: application/json" \
  --data '{
    "cancelledBy":101,
    "reason":"Travel plans have changed.",
    "remarks":"Leave is no longer required."
}'
```

---

# JavaScript

```javascript
const response = await fetch(
  "https://api.supercard.com/v1/leaves/5001/cancel",
  {
    method: "POST",
    headers: {
      Authorization: "Bearer YOUR_ACCESS_TOKEN",
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      cancelledBy: 101,
      reason: "Travel plans have changed.",
      remarks: "Leave is no longer required."
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
    "https://api.supercard.com/v1/leaves/5001/cancel",
    headers={
        "Authorization": "Bearer YOUR_ACCESS_TOKEN",
        "Content-Type": "application/json"
    },
    json={
        "cancelledBy": 101,
        "reason": "Travel plans have changed.",
        "remarks": "Leave is no longer required."
    }
)

print(response.json())
```

---

# Node.js

```javascript
import axios from "axios";

const response = await axios.post(
  "https://api.supercard.com/v1/leaves/5001/cancel",
  {
    cancelledBy: 101,
    reason: "Travel plans have changed.",
    remarks: "Leave is no longer required."
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
  "message": "Leave request cancelled successfully.",
  "data": {
    "leaveId": 5001,
    "status": "Cancelled",
    "cancelledBy": 101,
    "cancelledAt": "2026-08-02T09:15:30Z",
    "remainingLeaveBalance": 15
  },
  "metadata": {
    "requestId": "REQ-20260802-LV67890",
    "timestamp": "2026-08-02T09:15:31Z"
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
| 409 | Leave request cannot be cancelled |
| 422 | Validation failed |
| 429 | Too many requests |
| 500 | Internal server error |
| 503 | Service unavailable |

---

# Validation Rules

- Leave request must exist.
- Cancellation reason is required.
- User must have permission to cancel the leave request.
- Approved leave requests may only be cancelled before the leave begins (depending on organization policy).
- Completed or expired leave requests cannot be cancelled.
- Required fields cannot be empty.

---

# Best Practices

- Cancel leave requests as early as possible.
- Provide a meaningful cancellation reason.
- Notify managers after cancellation.
- Review organizational cancellation policies.
- Handle `409 Conflict` responses gracefully.
- Always use HTTPS.

---

# Related Endpoints

| Endpoint | Description |
|----------|-------------|
| POST `/leaves/{leaveId}/approve` | Approve leave request |
| POST `/leaves/{leaveId}/reject` | Reject leave request |
| GET `/leaves/{leaveId}` | Retrieve leave request |
| GET `/leaves/balance` | Retrieve leave balance |

---

## Next Step

Continue to **Retrieve Leave Balance** to learn how employees can check their available leave balances by leave type.
