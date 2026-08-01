---
title: List Departments
description: Retrieve a paginated list of departments.
---

# List Departments

Returns a paginated collection of departments within the organization.

This endpoint supports pagination, searching, filtering, and sorting, making it suitable for HR portals, workforce management systems, administrative dashboards, and reporting applications.

---

## Endpoint

```http
GET /departments
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
| page | integer | No | Page number to retrieve |
| limit | integer | No | Number of departments per page |
| search | string | No | Search by department name or department code |
| status | string | No | Filter by department status |
| sort | string | No | Field used for sorting |
| order | string | No | Sort order (`asc` or `desc`) |

---

# Example Request

```http
GET /departments?page=1&limit=10&status=Active
```

---

## cURL

```bash
curl --request GET \
  --url "https://api.supercard.com/v1/departments?page=1&limit=10&status=Active" \
  --header "Authorization: Bearer YOUR_ACCESS_TOKEN"
```

---

## JavaScript

```javascript
const response = await fetch(
  "https://api.supercard.com/v1/departments?page=1&limit=10&status=Active",
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
    "https://api.supercard.com/v1/departments",
    params={
        "page": 1,
        "limit": 10,
        "status": "Active"
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
    "https://api.supercard.com/v1/departments",
    {
        params: {
            page: 1,
            limit: 10,
            status: "Active"
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
  "message": "Departments retrieved successfully.",
  "data": [
    {
      "departmentId": 10,
      "departmentCode": "DEPT-ENG",
      "departmentName": "Engineering",
      "managerName": "Jane Smith",
      "employeeCount": 42,
      "location": "Vadodara",
      "status": "Active"
    },
    {
      "departmentId": 20,
      "departmentCode": "DEPT-HR",
      "departmentName": "Human Resources",
      "managerName": "Robert Wilson",
      "employeeCount": 18,
      "location": "Mumbai",
      "status": "Active"
    }
  ],
  "pagination": {
    "page": 1,
    "limit": 10,
    "totalRecords": 12,
    "totalPages": 2,
    "hasNextPage": true,
    "hasPreviousPage": false
  },
  "metadata": {
    "requestId": "REQ-20260730-DP12345",
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

- Use pagination when retrieving department collections.
- Filter results whenever possible to reduce response size.
- Sort department lists for consistent user experiences.
- Cache department data if it changes infrequently.
- Avoid repeatedly requesting the same dataset.

---

# Common Use Cases

- Display department directories
- Populate department dropdowns
- Build HR dashboards
- Generate organizational reports
- Search departments by name or code

---

# Related Endpoints

| Endpoint | Description |
|----------|-------------|
| GET `/departments/{departmentId}` | Retrieve department |
| POST `/departments` | Create department |
| PUT `/departments/{departmentId}` | Update department |
| DELETE `/departments/{departmentId}` | Delete department |

---

## Next Step

Continue to **Retrieve Department** to learn how to fetch detailed information about a specific department.