---
title: Delete Employee
description: Permanently delete an employee from the Supercard Workforce platform.
---

# Delete Employee

Deletes an employee record from the Supercard Workforce platform.

This endpoint permanently removes an employee from the system. It should only be used when the employee record is no longer required.

> **Warning**
>
> Deleting an employee is irreversible. In production environments, many organizations prefer **soft deletion** (marking an employee as inactive) instead of permanently deleting the record.

---

## Endpoint

```http
DELETE /employees/{employeeId}
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
| employeeId | integer | Yes | Unique identifier of the employee |

---

## Example Request

```http
DELETE /employees/101
```

---

## cURL

```bash
curl --request DELETE \
  --url https://api.supercard.com/v1/employees/101 \
  --header "Authorization: Bearer YOUR_ACCESS_TOKEN"
```

---

## JavaScript

```javascript
const response = await fetch(
  "https://api.supercard.com/v1/employees/101",
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
    "https://api.supercard.com/v1/employees/101",
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
  "https://api.supercard.com/v1/employees/101",
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
  "message": "Employee deleted successfully.",
  "metadata": {
    "requestId": "REQ-20260730-GH24680",
    "timestamp": "2026-07-30T11:30:00Z"
  }
}
```

---

# Error Responses

| Status Code | Description |
|-------------|-------------|
| 400 | Invalid employee identifier |
| 401 | Authentication failed |
| 403 | Permission denied |
| 404 | Employee not found |
| 409 | Employee cannot be deleted because it is referenced by other resources |
| 429 | Rate limit exceeded |
| 500 | Internal server error |
| 503 | Service unavailable |

---

# Common Use Cases

- Remove test employee records
- Delete duplicate employee entries
- Clean up development or sandbox environments
- Remove records created in error

---

# Before You Delete

Consider the following before deleting an employee:

- Verify the employee identifier.
- Ensure the employee is no longer referenced by payroll records.
- Ensure there are no pending leave requests.
- Verify attendance records have been processed.
- Check whether organizational policy requires deactivation instead of deletion.
- Back up important employee information if required.

---

# Best Practices

- Prefer **soft deletion** for production systems.
- Restrict this endpoint to HR administrators.
- Log every delete operation for audit purposes.
- Display a confirmation dialog before deletion.
- Handle `404 Not Found` and `409 Conflict` responses gracefully.
- Never expose this endpoint to unauthorized users.
- Always use HTTPS.

---

# Security Considerations

Deleting employee records is a high-impact operation.

Applications should:

- Require administrator privileges.
- Record audit logs for every deletion.
- Verify user permissions before sending the request.
- Prevent accidental multiple submissions.
- Consider implementing multi-factor approval for sensitive environments.

---

# Related Endpoints

| Endpoint | Description |
|----------|-------------|
| GET `/employees` | List employees |
| GET `/employees/{employeeId}` | Retrieve employee |
| POST `/employees` | Create employee |
| PUT `/employees/{employeeId}` | Update employee |

---

# See Also

- Departments API
- Attendance API
- Leave Management API
- Payroll API
- Reports API

---

## Next Step

The **Employees API** section is now complete.

Continue with the **Departments API**, beginning with:

**`docs/api-reference/departments/overview.md`**