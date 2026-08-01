---
title: List Leave Requests
description: Retrieve a paginated list of employee leave requests.
---

# List Leave Requests

Returns a paginated collection of employee leave requests.

This endpoint supports searching, filtering, sorting, pagination, and date range filtering. It is commonly used by HR teams, managers, employee self-service portals, and reporting applications.

---

## Endpoint

```http
GET /leaves
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
| status | string | No | Leave status |
| leaveType | string | No | Filter by leave type |
| startDate | date | No | Filter from date |
| endDate | date | No | Filter to date |
| sort | string | No | Sort field |
| order | string | No | Sort order (`asc` or `desc`) |

---

# Example Request

```http
GET /leaves?page=1&limit=10&status=Pending
```

---

## cURL

```bash
curl --request GET \
  --url "https://api.supercard.com/v1/leaves?page=1&limit=10&status=Pending" \
  --header "Authorization: Bearer YOUR_ACCESS_TOKEN"
```

---

## JavaScript

```javascript
const response = await fetch(
  "https://api.supercard.com/v1/leaves?page=1&limit=10&status=Pending",
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
    "https://api.supercard.com/v1/leaves",
    params={
        "page": 1,
        "limit": 10,
        "status": "Pending"
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
    "https://api.supercard.com/v1/leaves",
    {
        params: {
            page: 1,
            limit: 10,
            status: "Pending"
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
  "message": "Leave requests retrieved successfully.",
  "data": [
    {
      "leaveId": 5001,
      "employeeId": 101,
      "employeeName": "John Doe",
      "leaveType": "Annual Leave",
      "startDate": "2026-08-10",
      "endDate": "2026-08-12",
      "numberOfDays": 3,
      "status": "Pending"
    }
  ],
  "pagination": {
    "page": 1,
    "limit": 10,
    "totalRecords": 86,
    "totalPages": 9,
    "hasNextPage": true,
    "hasPreviousPage": false
  },
  "metadata": {
    "requestId": "REQ-20260730-LV12345",
    "timestamp": "2026-07-30T10:15:30Z"
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

- Use pagination when retrieving leave requests.
- Filter by employee, status, or date range whenever possible.
- Sort leave records for consistent reporting.
- Cache frequently accessed reports when appropriate.
- Avoid requesting unnecessary historical data.

---

# Common Use Cases

- Employee leave history
- HR leave management
- Pending approval dashboard
- Monthly leave reports
- Workforce planning
- Leave analytics

---

# Related Endpoints

| Endpoint | Description |
|----------|-------------|
| GET `/leaves/{leaveId}` | Retrieve leave request |
| POST `/leaves` | Apply for leave |
| POST `/leaves/{leaveId}/approve` | Approve leave |
| POST `/leaves/{leaveId}/reject` | Reject leave |
| POST `/leaves/{leaveId}/cancel` | Cancel leave |
| GET `/leaves/balance` | Retrieve leave balance |

---

## Next Step

Continue to **Apply for Leave** to learn how employees can submit a new leave request.