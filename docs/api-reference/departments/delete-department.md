---
title: Delete Department
description: Permanently delete a department from the Supercard Workforce platform.
---

# Delete Department

Deletes an existing department from the Supercard Workforce platform.

This endpoint permanently removes a department from the organization. It should only be used when the department is no longer required.

> **Warning**
>
> Deleting a department is irreversible. Before deleting a department, ensure that all employees have been reassigned and no business processes depend on the department.
>
> In production environments, many organizations prefer **soft deletion** by marking the department as inactive instead of permanently removing it.

---

## Endpoint

```http
DELETE /departments/{departmentId}
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

# Example Request

```http
DELETE /departments/10
```

---

## cURL

```bash
curl --request DELETE \
  --url https://api.supercard.com/v1/departments/10 \
  --header "Authorization: Bearer YOUR_ACCESS_TOKEN"
```

---

## JavaScript

```javascript
const response = await fetch(
  "https://api.supercard.com/v1/departments/10",
  {
    method: "DELETE",
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

response = requests.delete(
    "https://api.supercard.com/v1/departments/10",
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

const response = await axios.delete(
  "https://api.supercard.com/v1/departments/10",
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
  "message": "Department deleted successfully.",
  "metadata": {
    "requestId": "REQ-20260730-DP98765",
    "timestamp": "2026-07-30T11:45:30Z"
  }
}
```

---

# Error Responses

| Status Code | Description |
|-------------|-------------|
| 400 | Invalid department identifier |
| 401 | Authentication failed |
| 403 | Permission denied |
| 404 | Department not found |
| 409 | Department cannot be deleted because employees or other resources are associated with it |
| 429 | Rate limit exceeded |
| 500 | Internal server error |
| 503 | Service unavailable |

---

# Common Use Cases

- Remove test departments
- Delete duplicate departments
- Clean up development or sandbox environments
- Remove obsolete organizational units after restructuring

---

# Before You Delete

Verify the following before deleting a department:

- All employees have been reassigned.
- No active payroll records reference the department.
- No pending leave approvals are assigned to department managers.
- Attendance and reporting data have been archived if required.
- Organizational policies allow permanent deletion.
- A backup exists if the information may be needed later.

---

# Best Practices

- Prefer **soft deletion** for production environments.
- Restrict this endpoint to authorized HR administrators.
- Record all deletion events in an audit log.
- Require user confirmation before deleting a department.
- Handle `404 Not Found` and `409 Conflict` responses appropriately.
- Never expose delete operations to unauthorized users.
- Always use HTTPS.

---

# Security Considerations

Deleting a department may affect multiple business processes.

Applications should:

- Verify administrator permissions.
- Log every deletion request.
- Prevent accidental duplicate submissions.
- Consider requiring multi-step approval for production environments.
- Ensure related employees are reassigned before deletion.

---

# Related Endpoints

| Endpoint | Description |
|----------|-------------|
| GET `/departments` | List departments |
| GET `/departments/{departmentId}` | Retrieve department |
| POST `/departments` | Create department |
| PUT `/departments/{departmentId}` | Update department |

---

# See Also

- Employees API
- Attendance API
- Leave Management API
- Payroll API
- Reports API

---

## Next Step

The **Departments API** section is now complete.

Continue with the **Attendance API**, beginning with:

**`docs/api-reference/attendance/overview.md`**