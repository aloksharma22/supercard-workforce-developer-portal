---
title: Download Payslip
description: Download the payslip for a specific payroll record.
---

# Download Payslip

Retrieves the payslip associated with a specific payroll record.

This endpoint generates or retrieves a downloadable payslip containing salary details, earnings, deductions, taxes, statutory contributions, net salary, and payment information for a payroll period.

It is commonly used by employees, HR administrators, payroll teams, finance departments, and employee self-service portals.

---

## Endpoint

```http
GET /payroll/{payrollId}/payslip
```

---

## Authentication

```http
Authorization: Bearer YOUR_ACCESS_TOKEN
```

---

# Path Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| payrollId | integer | Yes | Unique identifier of the payroll record |

---

# Query Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| format | string | No | Download format (`PDF` or `HTML`) |

---

# Example Request

```http
GET /payroll/7001/payslip?format=PDF
```

---

## cURL

```bash
curl --request GET \
  --url "https://api.supercard.com/v1/payroll/7001/payslip?format=PDF" \
  --header "Authorization: Bearer YOUR_ACCESS_TOKEN"
```

---

## JavaScript

```javascript
const response = await fetch(
  "https://api.supercard.com/v1/payroll/7001/payslip?format=PDF",
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
    "https://api.supercard.com/v1/payroll/7001/payslip",
    params={
        "format": "PDF"
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
    "https://api.supercard.com/v1/payroll/7001/payslip",
    {
        params: {
            format: "PDF"
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
  "message": "Payslip generated successfully.",
  "data": {
    "payrollId": 7001,
    "employeeId": 101,
    "employeeName": "John Doe",
    "payrollPeriod": "2026-07",
    "format": "PDF",
    "fileName": "Payslip_July_2026.pdf",
    "downloadUrl": "https://api.supercard.com/v1/payroll/7001/payslip/download",
    "expiresAt": "2026-08-01T23:59:59Z"
  },
  "metadata": {
    "requestId": "REQ-20260730-PR34567",
    "timestamp": "2026-07-30T12:00:00Z"
  }
}
```

---

# Response Fields

| Field | Description |
|---------|-------------|
| payrollId | Payroll record identifier |
| employeeId | Employee identifier |
| employeeName | Employee name |
| payrollPeriod | Payroll period |
| format | Generated file format |
| fileName | Downloadable file name |
| downloadUrl | Temporary download URL |
| expiresAt | Download URL expiration time |

---

# Error Responses

| Status Code | Description |
|-------------|-------------|
| 400 | Invalid payroll identifier or request parameters |
| 401 | Authentication failed |
| 403 | Access denied |
| 404 | Payroll record or payslip not found |
| 429 | Rate limit exceeded |
| 500 | Internal server error |
| 503 | Service unavailable |

---

# Supported Formats

| Format | Description |
|---------|-------------|
| PDF | Printable payslip document |
| HTML | Browser-friendly payslip |

---

# Common Use Cases

- Employee self-service payslip download
- Payroll verification
- Income proof for loans or visas
- Financial record keeping
- HR payroll administration
- Tax documentation

---

# Best Practices

- Download payslips before the temporary download link expires.
- Store downloaded payslips securely.
- Protect payroll documents from unauthorized access.
- Use HTTPS for all download requests.
- Restrict access to authorized employees and administrators.
- Regenerate the payslip if the download URL has expired.

---

# Related Endpoints

| Endpoint | Description |
|----------|-------------|
| GET `/payroll` | List payroll records |
| GET `/payroll/history` | Retrieve payroll history |
| GET `/payroll/salary-summary` | Retrieve salary summary |

---

## Next Step

Continue to **Salary Summary** to learn how to retrieve aggregated salary statistics for employees, departments, or the entire organization.