---
title: Retrieve Leave Balance
description: Retrieve the available leave balance for an employee.
---

# Retrieve Leave Balance

Retrieves the current leave balance for an employee.

This endpoint provides a summary of available, used, pending, and remaining leave days across all supported leave types. It is commonly used by employee self-service portals, HR systems, payroll applications, and workforce management dashboards.

Leave balances are automatically updated whenever leave requests are approved, cancelled, or adjusted according to organizational policies.

---

## Endpoint

```http
GET /leaves/balance
```

---

## Authentication

```http
Authorization: Bearer YOUR_ACCESS_TOKEN
```

---

# Query Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| employeeId | integer | Yes | Unique identifier of the employee |
| leaveType | string | No | Retrieve balance for a specific leave type |

---

# Example Request

```http
GET /leaves/balance?employeeId=101
```

Retrieve the balance for a specific leave type:

```http
GET /leaves/balance?employeeId=101&leaveType=Annual%20Leave
```

---

## cURL

```bash
curl --request GET \
  --url "https://api.supercard.com/v1/leaves/balance?employeeId=101" \
  --header "Authorization: Bearer YOUR_ACCESS_TOKEN"
```

---

## JavaScript

```javascript
const response = await fetch(
  "https://api.supercard.com/v1/leaves/balance?employeeId=101",
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
    "https://api.supercard.com/v1/leaves/balance",
    params={
        "employeeId": 101
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
    "https://api.supercard.com/v1/leaves/balance",
    {
        params: {
            employeeId: 101
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
  "message": "Leave balance retrieved successfully.",
  "data": {
    "employeeId": 101,
    "employeeName": "John Doe",
    "leaveBalances": [
      {
        "leaveType": "Annual Leave",
        "allocated": 20,
        "used": 5,
        "pending": 3,
        "remaining": 12
      },
      {
        "leaveType": "Sick Leave",
        "allocated": 12,
        "used": 2,
        "pending": 0,
        "remaining": 10
      },
      {
        "leaveType": "Casual Leave",
        "allocated": 8,
        "used": 1,
        "pending": 0,
        "remaining": 7
      }
    ],
    "lastUpdated": "2026-08-02T09:30:00Z"
  },
  "metadata": {
    "requestId": "REQ-20260802-LV78901",
    "timestamp": "2026-08-02T09:30:01Z"
  }
}
```

---

# Response Fields

| Field | Description |
|---------|-------------|
| allocated | Total leave days allocated |
| used | Leave days already consumed |
| pending | Leave days requested but awaiting approval |
| remaining | Leave days currently available |
| lastUpdated | Timestamp of the latest balance calculation |

---

# Error Responses

| Status Code | Description |
|-------------|-------------|
| 400 | Invalid request parameters |
| 401 | Authentication failed |
| 403 | Access denied |
| 404 | Employee not found |
| 429 | Rate limit exceeded |
| 500 | Internal server error |
| 503 | Service unavailable |

---

# Common Use Cases

- Display leave balance in employee self-service portals
- Validate available leave before submitting a leave request
- HR leave management
- Payroll verification
- Workforce planning
- Management reporting

---

# Best Practices

- Check leave balances before submitting a leave request.
- Refresh leave balances after approval or cancellation of leave requests.
- Display pending leave separately from approved leave.
- Synchronize leave balances with HR and payroll systems.
- Protect employee leave information from unauthorized access.
- Always use HTTPS.

---

# Related Endpoints

| Endpoint | Description |
|----------|-------------|
| GET `/leaves` | List leave requests |
| POST `/leaves` | Apply for leave |
| GET `/leaves/{leaveId}` | Retrieve leave request |
| POST `/leaves/{leaveId}/approve` | Approve leave request |
| POST `/leaves/{leaveId}/reject` | Reject leave request |
| POST `/leaves/{leaveId}/cancel` | Cancel leave request |

---

## Next Step

The **Leaves API** section is now complete.

Continue with the **Payroll API**, beginning with:

**`docs/api-reference/payroll/overview.md`**