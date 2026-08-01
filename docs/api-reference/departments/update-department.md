---
title: Update Department
description: Update an existing department within the Supercard Workforce platform.
---

# Update Department

Updates an existing department.

This endpoint allows authorized users to modify department information including the department name, manager, location, budget, operational status, and description.

Only the fields supplied in the request are updated. Fields omitted from the request remain unchanged.

---

## Endpoint

```http
PUT /departments/{departmentId}
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
| departmentId | integer | Yes | Unique identifier of the department |

---

## Request Headers

| Header | Required | Description |
|---------|----------|-------------|
| Authorization | Yes | OAuth 2.0 Bearer Access Token |
| Content-Type | Yes | `application/json` |

---

# Request Body

All fields are optional.

| Field | Type | Description |
|---------|------|-------------|
| departmentName | string | Department name |
| description | string | Department description |
| managerId | integer | Department manager |
| location | string | Department location |
| budget | number | Annual department budget |
| status | string | Department status |

---

# Example Request

```http
PUT /departments/10
```

```json
{
  "departmentName": "Engineering & Technology",
  "managerId": 5,
  "location": "Ahmedabad",
  "budget": 3500000,
  "status": "Active"
}
```

---

# cURL

```bash
curl --request PUT \
  --url https://api.supercard.com/v1/departments/10 \
  --header "Authorization: Bearer YOUR_ACCESS_TOKEN" \
  --header "Content-Type: application/json" \
  --data '{
    "departmentName":"Engineering & Technology",
    "managerId":5,
    "location":"Ahmedabad",
    "budget":3500000,
    "status":"Active"
}'
```

---

# JavaScript

```javascript
const response = await fetch(
  "https://api.supercard.com/v1/departments/10",
  {
    method: "PUT",
    headers: {
      Authorization: "Bearer YOUR_ACCESS_TOKEN",
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      departmentName: "Engineering & Technology",
      managerId: 5,
      location: "Ahmedabad",
      budget: 3500000,
      status: "Active"
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
    "https://api.supercard.com/v1/departments/10",
    headers={
        "Authorization": "Bearer YOUR_ACCESS_TOKEN",
        "Content-Type": "application/json"
    },
    json={
        "departmentName": "Engineering & Technology",
        "managerId": 5,
        "location": "Ahmedabad",
        "budget": 3500000,
        "status": "Active"
    }
)

print(response.json())
```

---

# Node.js

```javascript
import axios from "axios";

const response = await axios.put(
  "https://api.supercard.com/v1/departments/10",
  {
    departmentName: "Engineering & Technology",
    managerId: 5,
    location: "Ahmedabad",
    budget: 3500000,
    status: "Active"
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
  "message": "Department updated successfully.",
  "data": {
    "departmentId": 10,
    "departmentName": "Engineering & Technology",
    "managerId": 5,
    "location": "Ahmedabad",
    "budget": 3500000,
    "status": "Active"
  },
  "metadata": {
    "requestId": "REQ-20260730-DP56789",
    "timestamp": "2026-07-30T11:15:30Z"
  }
}
```

---

# Error Responses

| Status Code | Description |
|-------------|-------------|
| 400 | Invalid request |
| 401 | Authentication failed |
| 403 | Permission denied |
| 404 | Department not found |
| 409 | Department already exists |
| 422 | Validation failed |
| 429 | Too many requests |
| 500 | Internal server error |
| 503 | Service unavailable |

---

# Partial Updates

Only the supplied fields are updated.

For example,

```json
{
  "budget": 4000000
}
```

updates only the department budget while leaving all other department information unchanged.

---

# Best Practices

- Update only the fields that require changes.
- Ensure the department manager exists before assigning them.
- Verify that budget values are valid.
- Handle `404 Not Found` responses gracefully.
- Audit important department changes.
- Always use HTTPS.

---

# Related Endpoints

| Endpoint | Description |
|----------|-------------|
| GET `/departments` | List departments |
| GET `/departments/{departmentId}` | Retrieve department |
| POST `/departments` | Create department |
| DELETE `/departments/{departmentId}` | Delete department |

---

## Next Step

Continue to **Delete Department** to learn how to permanently remove a department from the Supercard Workforce platform.