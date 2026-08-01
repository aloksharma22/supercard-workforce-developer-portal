---
title: Leaves API
description: Manage employee leave requests, approvals, cancellations, and leave balances.
---

# Leaves API

The **Leaves API** provides RESTful endpoints for managing employee leave requests throughout their lifecycle.

It enables employees to apply for leave, managers to approve or reject requests, employees to cancel requests when permitted, and HR teams to monitor leave balances and leave history.

The Leaves API integrates with Attendance, Payroll, Employees, and Reporting modules to ensure accurate workforce management.

---

# Overview

A leave request represents an employee's request for time away from work.

Each leave request contains information such as:

- Employee details
- Leave type
- Start and end dates
- Number of leave days
- Leave reason
- Approval status
- Approver information
- Leave balance
- Audit timestamps

All Leave endpoints require OAuth 2.0 Bearer Authentication.

---

# Base URL

```text
https://api.supercard.com/v1
```

---

# Resource

```text
Leave
```

Example resource

```json
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
```

---

# Available Endpoints

| Method | Endpoint | Description |
|---------|----------|-------------|
| GET | `/leaves` | Retrieve leave requests |
| POST | `/leaves` | Apply for leave |
| GET | `/leaves/{leaveId}` | Retrieve leave request |
| POST | `/leaves/{leaveId}/approve` | Approve leave request |
| POST | `/leaves/{leaveId}/reject` | Reject leave request |
| POST | `/leaves/{leaveId}/cancel` | Cancel leave request |
| GET | `/leaves/balance` | Retrieve leave balance |

---

# Authentication

Every request requires a Bearer Access Token.

```http
Authorization: Bearer YOUR_ACCESS_TOKEN
```

Example

```bash
curl https://api.supercard.com/v1/leaves \
  -H "Authorization: Bearer YOUR_ACCESS_TOKEN"
```

---

# Leave Request Workflow

```text
Employee Applies
        │
        ▼
   Pending Review
        │
   ┌────┴────┐
   ▼         ▼
Approved  Rejected
   │
   ▼
Leave Taken
   │
(Optional)
Cancel Request
```

---

# Leave Types

The API supports multiple leave categories depending on organizational policies.

Typical leave types include:

- Annual Leave
- Sick Leave
- Casual Leave
- Maternity Leave
- Paternity Leave
- Compensatory Leave
- Unpaid Leave

---

# Filtering

Leave requests support filtering.

```http
GET /leaves?status=Pending
```

```http
GET /leaves?employeeId=101
```

```http
GET /leaves?startDate=2026-08-01&endDate=2026-08-31
```

Multiple filters can be combined.

```http
GET /leaves?employeeId=101&status=Approved
```

---

# Pagination

Leave collections are paginated.

```http
GET /leaves?page=1&limit=20
```

Example response

```json
{
  "page": 1,
  "limit": 20,
  "totalRecords": 86,
  "totalPages": 5,
  "hasNextPage": true,
  "hasPreviousPage": false
}
```

---

# Leave Status

Supported leave statuses include:

- Pending
- Approved
- Rejected
- Cancelled

---

# Common Response Codes

| Status | Meaning |
|---------|---------|
| 200 | Request successful |
| 201 | Leave request created |
| 400 | Invalid request |
| 401 | Authentication required |
| 403 | Permission denied |
| 404 | Leave request not found |
| 409 | Resource conflict |
| 422 | Validation failed |
| 429 | Too many requests |
| 500 | Internal server error |
| 503 | Service unavailable |

---

# Related Resources

Leave Management integrates with:

- Employees
- Departments
- Attendance
- Payroll
- Reports

---

# Best Practices

- Submit leave requests well in advance whenever possible.
- Check leave balance before applying.
- Avoid overlapping leave requests.
- Review approval status regularly.
- Use appropriate leave types.
- Respect organizational leave policies.
- Always use HTTPS.
- Respect API rate limits.

---

# Next Steps

Continue exploring the Leaves API.

- **List Leave Requests**
- **Apply for Leave**
- **Retrieve Leave Request**
- **Approve Leave**
- **Reject Leave**
- **Cancel Leave**
- **Retrieve Leave Balance**

Each endpoint includes request examples, response examples, SDK samples, and error handling guidance.