---
title: Payroll API
description: Manage payroll processing, salary history, payslips, and salary summaries.
---

# Payroll API

The **Payroll API** provides RESTful endpoints for managing employee payroll information within the Supercard Workforce platform.

It enables organizations to process employee salaries, retrieve payroll history, download payslips, and generate salary summaries for payroll administration and financial reporting.

The Payroll API integrates with Attendance, Leave Management, Employees, and Reporting modules to ensure accurate salary calculations and statutory compliance.

---

# Overview

A payroll record represents an employee's salary for a specific payroll period.

Each payroll record contains information such as:

- Employee information
- Payroll period
- Gross salary
- Earnings
- Deductions
- Taxes
- Provident Fund contributions
- Net salary
- Payment status
- Payment date
- Audit timestamps

All Payroll endpoints require OAuth 2.0 Bearer Authentication.

---

# Base URL

```text
https://api.supercard.com/v1
```

---

# Resource

```text
Payroll
```

Example resource

```json
{
  "payrollId": 7001,
  "employeeId": 101,
  "employeeName": "John Doe",
  "payrollPeriod": "2026-07",
  "grossSalary": 75000,
  "totalDeductions": 8500,
  "netSalary": 66500,
  "paymentStatus": "Paid",
  "paymentDate": "2026-07-31"
}
```

---

# Available Endpoints

| Method | Endpoint | Description |
|---------|----------|-------------|
| GET | `/payroll` | Retrieve payroll records |
| GET | `/payroll/history` | Retrieve payroll history |
| GET | `/payroll/{payrollId}/payslip` | Download employee payslip |
| GET | `/payroll/salary-summary` | Retrieve salary summary |

---

# Authentication

Every request requires a Bearer Access Token.

```http
Authorization: Bearer YOUR_ACCESS_TOKEN
```

Example

```bash
curl https://api.supercard.com/v1/payroll \
  -H "Authorization: Bearer YOUR_ACCESS_TOKEN"
```

---

# Payroll Workflow

```text
Attendance
      │
      ▼
Leave Processing
      │
      ▼
Payroll Calculation
      │
      ▼
Salary Processing
      │
      ▼
Payslip Generation
      │
      ▼
Salary Payment
```

---

# Payroll Components

A payroll record typically consists of:

### Earnings

- Basic Salary
- House Rent Allowance (HRA)
- Dearness Allowance (DA)
- Travel Allowance
- Bonus
- Incentives
- Overtime

### Deductions

- Income Tax
- Provident Fund (PF)
- Professional Tax
- Employee State Insurance (ESI)
- Loan Recovery
- Other Deductions

---

# Filtering

Payroll records support filtering.

```http
GET /payroll?employeeId=101
```

```http
GET /payroll?payrollPeriod=2026-07
```

```http
GET /payroll?paymentStatus=Paid
```

Multiple filters can be combined.

```http
GET /payroll?employeeId=101&payrollPeriod=2026-07
```

---

# Pagination

Payroll collections are paginated.

```http
GET /payroll?page=1&limit=20
```

Example response

```json
{
  "page": 1,
  "limit": 20,
  "totalRecords": 312,
  "totalPages": 16,
  "hasNextPage": true,
  "hasPreviousPage": false
}
```

---

# Payment Status

Supported payroll statuses include:

- Pending
- Processing
- Paid
- Failed
- Cancelled

---

# Common Response Codes

| Status | Meaning |
|---------|---------|
| 200 | Request successful |
| 400 | Invalid request |
| 401 | Authentication required |
| 403 | Permission denied |
| 404 | Payroll record not found |
| 409 | Resource conflict |
| 422 | Validation failed |
| 429 | Too many requests |
| 500 | Internal server error |
| 503 | Service unavailable |

---

# Related Resources

Payroll integrates with:

- Employees
- Attendance
- Leave Management
- Departments
- Reports

---

# Best Practices

- Process payroll only after attendance and leave records have been finalized.
- Verify salary calculations before payment.
- Protect payroll and salary information using appropriate access controls.
- Download and archive payslips securely.
- Use payroll history for audits and financial reconciliation.
- Always use HTTPS.
- Respect API rate limits.

---

# Next Steps

Continue exploring the Payroll API.

- **List Payroll Records**
- **Payroll History**
- **Download Payslip**
- **Salary Summary**

Each endpoint includes request examples, response examples, SDK samples, and error handling guidance.