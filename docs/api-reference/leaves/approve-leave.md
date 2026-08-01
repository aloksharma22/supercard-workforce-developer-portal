---
title: Approve Leave Request
description: Approve a pending employee leave request.
---

# Approve Leave Request

Approves a pending leave request submitted by an employee.

This endpoint is intended for managers, HR administrators, and authorized approvers. Once approved, the leave request status changes to **Approved**, the employee's leave balance is updated (if applicable), and the attendance and payroll modules can process the approved leave.

Only leave requests with a **Pending** status can be approved.

---

## Endpoint

```http
POST /leaves/{leaveId}/approve
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
| approvedBy | integer | Yes | Employee ID of the approving manager or HR administrator |
| remarks | string | No | Approval comments |

---

# Example Request

```http
POST /leaves/5001/approve
```

```json
{
  "approvedBy": 2,
  "remarks": "Approved as requested."
}
```

---

# cURL

```bash
curl --request POST \
  --url https://api.supercard.com/v1/leaves/5001/approve \
  --header "Authorization: Bearer YOUR_ACCESS_TOKEN" \
  --header "Content-Type: application/json" \
  --data '{
    "approvedBy":2,
    "remarks":"Approved as requested."
}'
```

---

# JavaScript

```javascript
const response = await fetch(
  "https://api.supercard.com/v1/leaves/5001/approve",
  {
    method: "POST",
    headers: {
      Authorization: "Bearer YOUR_ACCESS_TOKEN",
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      approvedBy: 2,
      remarks: "Approved as requested."
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
    "https://api.supercard.com/v1/leaves/5001/approve",
    headers={
        "Authorization": "Bearer YOUR_ACCESS_TOKEN",
        "Content-Type": "application/json"
    },
    json={
        "approvedBy": 2,
        "remarks": "Approved as requested."
    }
)

print(response.json())
```

---

# Node.js

```javascript
import axios from "axios";

const response = await axios.post(
  "https://api.supercard.com/v1/leaves/5001/approve",
  {
    approvedBy: 2,
    remarks: "Approved as requested."
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
  "message": "Leave request approved successfully.",
  "data": {
    "leaveId": 5001,
    "status": "Approved",
    "approvedBy": 2,
    "approvedAt": "2026-08-01T10:30:00Z",
    "remainingLeaveBalance": 12
  },
  "metadata": {
    "requestId": "REQ-20260801-LV45678",
    "timestamp": "2026-08-01T10:30:01Z"
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
- Approver must have permission to approve leave requests.
- Leave balance and policy validations must pass.
- Required fields cannot be empty.

---

# Best Practices

- Review the leave request before approving it.
- Include approval remarks when appropriate.
- Ensure organizational leave policies are followed.
- Notify employees after approval.
- Handle `409 Conflict` responses gracefully.
- Always use HTTPS.

---

# Related Endpoints

| Endpoint | Description |
|----------|-------------|
| POST `/leaves/{leaveId}/reject` | Reject leave request |
| POST `/leaves/{leaveId}/cancel` | Cancel leave request |
| GET `/leaves/{leaveId}` | Retrieve leave request |
| GET `/leaves/balance` | Retrieve leave balance |

---

## Next Step

Continue to **Reject Leave Request** to learn how authorized users can reject a pending leave request.