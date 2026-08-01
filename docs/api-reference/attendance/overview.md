---
title: Attendance API
description: Manage employee attendance, clock-in, clock-out, and attendance reporting.
---

# Attendance API

The **Attendance API** provides RESTful endpoints for recording, tracking, and reporting employee attendance.

It enables organizations to manage daily attendance records, employee working hours, overtime, attendance summaries, and attendance reports.

The Attendance API integrates with Payroll, Leave Management, and Reporting modules to provide accurate workforce insights.

---

# Overview

An attendance record represents an employee's working activity for a specific day.

Each attendance record contains information such as:

- Employee information
- Clock-in time
- Clock-out time
- Working hours
- Break duration
- Overtime
- Attendance status
- Remarks
- Audit timestamps

All Attendance endpoints require OAuth 2.0 Bearer Authentication.

---

# Base URL

```text
https://api.supercard.com/v1
```

---

# Resource

```text
Attendance
```

Example resource

```json
{
  "attendanceId": 1001,
  "employeeId": 101,
  "employeeName": "John Doe",
  "attendanceDate": "2026-07-30",
  "clockIn": "2026-07-30T09:05:12Z",
  "clockOut": "2026-07-30T18:15:42Z",
  "workingHours": 8.75,
  "overtimeHours": 0.75,
  "status": "Present"
}
```

---

# Available Endpoints

| Method | Endpoint | Description |
|---------|----------|-------------|
| GET | `/attendance` | Retrieve attendance records |
| POST | `/attendance/clock-in` | Record employee clock-in |
| PUT | `/attendance/{attendanceId}/clock-out` | Record employee clock-out |
| GET | `/attendance/{attendanceId}` | Retrieve attendance record |
| GET | `/attendance/summary` | Retrieve attendance summary |
| GET | `/attendance/report` | Generate attendance report |

---

# Authentication

Every request requires a Bearer Access Token.

```http
Authorization: Bearer YOUR_ACCESS_TOKEN
```

Example

```bash
curl https://api.supercard.com/v1/attendance \
  -H "Authorization: Bearer YOUR_ACCESS_TOKEN"
```

---

# Attendance Workflow

```text
Employee Starts Work
          │
          ▼
      Clock In
          │
          ▼
   Work Throughout Day
          │
          ▼
      Clock Out
          │
          ▼
 Attendance Record Updated
          │
          ▼
Summary & Reports Generated
```

---

# Filtering

Attendance records support filtering.

```http
GET /attendance?status=Present
```

```http
GET /attendance?employeeId=101
```

```http
GET /attendance?startDate=2026-07-01&endDate=2026-07-31
```

Multiple filters can be combined.

```http
GET /attendance?employeeId=101&status=Present
```

---

# Pagination

Attendance collections are paginated.

```http
GET /attendance?page=1&limit=25
```

Example response

```json
{
  "page": 1,
  "limit": 25,
  "totalRecords": 842,
  "totalPages": 34,
  "hasNextPage": true,
  "hasPreviousPage": false
}
```

---

# Attendance Status

Supported attendance statuses include:

- Present
- Absent
- Late
- Half-Day
- Leave
- Holiday
- Weekend

---

# Common Response Codes

| Status | Meaning |
|---------|---------|
| 200 | Request successful |
| 201 | Attendance recorded |
| 400 | Invalid request |
| 401 | Authentication required |
| 403 | Permission denied |
| 404 | Attendance record not found |
| 409 | Attendance conflict |
| 422 | Validation failed |
| 429 | Too many requests |
| 500 | Internal server error |
| 503 | Service unavailable |

---

# Related Resources

Attendance integrates with:

- Employees
- Departments
- Leave Management
- Payroll
- Reports

---

# Best Practices

- Record clock-in and clock-out in real time.
- Validate employee identity before recording attendance.
- Use UTC timestamps for API requests.
- Avoid duplicate clock-in or clock-out requests.
- Generate reports using date filters.
- Handle attendance conflicts appropriately.
- Always use HTTPS.
- Respect API rate limits.

---

# Next Steps

Continue exploring the Attendance API.

- **List Attendance Records**
- **Clock In Employee**
- **Clock Out Employee**
- **Retrieve Attendance Record**
- **Attendance Summary**
- **Attendance Report**

Each endpoint includes request examples, response examples, SDK samples, and error handling guidance.