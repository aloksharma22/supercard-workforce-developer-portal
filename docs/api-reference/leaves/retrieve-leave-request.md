---
title: Retrieve Leave Request
description: Retrieve detailed information for a specific leave request.
---

# Retrieve Leave Request

Retrieves complete information for a specific leave request using its unique identifier.

This endpoint returns detailed information about a leave request, including employee details, leave type, leave duration, approval status, approver information, leave reason, supporting documents, and audit timestamps.

It is commonly used by HR applications, employee self-service portals, workforce management systems, manager dashboards, and reporting tools.

---

## Endpoint

```http
GET /leaves/{leaveId}
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

# Example Request

```http
GET /leaves/5001
```

---

## cURL

```bash
curl --request GET \
  --url https://api.supercard.com/v1/leaves/5001 \
  --header "Authorization: Bearer YOUR_ACCESS_TOKEN"
```

---

## JavaScript

```javascript
const response = await fetch(
  "https://api.supercard.com/v1/leaves/5001",
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
    "https://api.supercard.com/v1/leaves/5001",
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
    "https://api.supercard.com/v1/leaves/5001",
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
  "message": "Leave request retrieved successfully.",
  "data": {
    "leaveId": 5001,
    "employeeId": 101,
    "employeeName": "John Doe",
    "leaveType": "Annual Leave",
    "startDate": "2026-08-10",
    "endDate": "2026-08-12",
    "numberOfDays": 3,
    "reason": "Family vacation",
    "status": "Approved",
    "approvedBy": "Jane Smith",
    "approvedAt": "2026-08-01T10:30:00Z",
    "remarks": "Approved as requested.",
    "attachmentUrl": "https://example.com/documents/medical-certificate.pdf",
    "createdAt": "2026-07-30T11:20:15Z",
    "updatedAt": "2026-08-01T10:30:00Z"
  },
  "metadata": {
    "requestId": "REQ-20260730-LV34567",
    "timestamp": "2026-08-01T10:30:01Z"
  }
}
```

---

# Error Responses

| Status Code | Description |
|-------------|-------------|
| 400 | Invalid leave request identifier |
| 401 | Authentication failed |
| 403 | Access denied |
| 404 | Leave request not found |
| 429 | Rate limit exceeded |
| 500 | Internal server error |
| 503 | Service unavailable |

---

# Common Use Cases

- View leave request details
- Check approval status
- Review leave history
- Display leave information in employee portals
- Verify leave information before approval or cancellation
- Support HR reporting and audits

---

# Best Practices

- Validate the leave identifier before making the request.
- Handle `404 Not Found` responses appropriately.
- Protect confidential employee information.
- Refresh leave details before taking approval actions.
- Use HTTPS for all API communication.

---

# Related Endpoints

| Endpoint | Description |
|----------|-------------|
| GET `/leaves` | List leave requests |
| POST `/leaves` | Apply for leave |
| POST `/leaves/{leaveId}/approve` | Approve leave |
| POST `/leaves/{leaveId}/reject` | Reject leave |
| POST `/leaves/{leaveId}/cancel` | Cancel leave |
| GET `/leaves/balance` | Retrieve leave balance |

---

## Next Step

Continue to **Approve Leave Request** to learn how managers and HR administrators can approve employee leave requests.