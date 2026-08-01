---
title: Reports API
description: Generate and export workforce reports, including attendance, payroll, and department analytics.
---

# Reports API

The **Reports API** provides RESTful endpoints for generating operational and analytical reports within the Supercard Workforce platform.

It enables organizations to generate attendance reports, payroll reports, department reports, and export workforce data in multiple formats for business analysis, auditing, compliance, and executive decision-making.

The Reports API integrates with Employees, Departments, Attendance, Leave Management, and Payroll modules to provide comprehensive workforce insights.

---

# Overview

Reports consolidate workforce data into structured summaries that support operational monitoring, financial analysis, compliance reporting, and strategic planning.

Reports may include information such as:

- Attendance statistics
- Payroll summaries
- Department performance
- Employee distribution
- Leave utilization
- Workforce analytics
- Organizational metrics

All Reports endpoints require OAuth 2.0 Bearer Authentication.

---

# Base URL

```text
https://api.supercard.com/v1
```

---

# Resource

```text
Report
```

Example resource

```json
{
  "reportId": 9001,
  "reportName": "Attendance Report - July 2026",
  "reportType": "Attendance",
  "generatedAt": "2026-07-30T18:50:15Z",
  "generatedBy": "HR Administrator",
  "format": "PDF",
  "status": "Completed"
}
```

---

# Available Endpoints

| Method | Endpoint | Description |
|---------|----------|-------------|
| GET | `/reports/attendance` | Generate attendance report |
| GET | `/reports/payroll` | Generate payroll report |
| GET | `/reports/departments` | Generate department report |
| GET | `/reports/export` | Export generated reports |

---

# Authentication

Every request requires a Bearer Access Token.

```http
Authorization: Bearer YOUR_ACCESS_TOKEN
```

Example

```bash
curl https://api.supercard.com/v1/reports/attendance \
  -H "Authorization: Bearer YOUR_ACCESS_TOKEN"
```

---

# Reporting Workflow

```text
Select Report Type
        │
        ▼
Apply Filters
        │
        ▼
Generate Report
        │
        ▼
Review Results
        │
        ▼
Export Report
```

---

# Supported Report Types

The Reports API supports:

- Attendance Reports
- Payroll Reports
- Department Reports
- Workforce Analytics
- Operational Reports
- Management Reports

---

# Supported Export Formats

Reports can be exported in:

- PDF
- Excel
- CSV
- JSON

---

# Common Response Codes

| Status | Meaning |
|---------|---------|
| 200 | Request successful |
| 400 | Invalid request |
| 401 | Authentication required |
| 403 | Permission denied |
| 404 | Report not found |
| 422 | Validation failed |
| 429 | Too many requests |
| 500 | Internal server error |
| 503 | Service unavailable |

---

# Related Resources

Reports integrate with:

- Employees
- Departments
- Attendance
- Leave Management
- Payroll

---

# Best Practices

- Generate reports using appropriate date ranges.
- Apply filters to reduce report size.
- Export reports in the format best suited for the intended audience.
- Protect sensitive workforce and payroll information.
- Archive important reports for auditing and compliance.
- Always use HTTPS.
- Respect API rate limits.

---

# Next Steps

Continue exploring the Reports API.

- **Attendance Report**
- **Payroll Report**
- **Department Report**
- **Export Report**

Each endpoint includes request examples, response examples, SDK samples, and error handling guidance.