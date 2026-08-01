# Webhooks

# Webhooks

## Overview

The Supercard Workforce API currently does **not** support webhooks.

Webhook support is planned for a future release to enable real-time event notifications without requiring clients to continuously poll the API.

---

## Planned Webhook Events

Future versions of the API may support events such as:

| Event | Description |
|--------|-------------|
| `employee.created` | Triggered when a new employee is created. |
| `employee.updated` | Triggered when an employee profile is updated. |
| `employee.deleted` | Triggered when an employee is removed. |
| `attendance.clocked_in` | Triggered when an employee clocks in. |
| `attendance.clocked_out` | Triggered when an employee clocks out. |
| `leave.applied` | Triggered when a leave request is submitted. |
| `leave.approved` | Triggered when a leave request is approved. |
| `leave.rejected` | Triggered when a leave request is rejected. |
| `payroll.generated` | Triggered when payroll is generated. |

---

## Planned Features

Webhook functionality is expected to include:

- Secure HTTPS event delivery
- HMAC signature verification
- Automatic retry mechanism
- Event timestamps
- Unique event identifiers
- Delivery logs
- Test webhook endpoints
- Configurable webhook subscriptions

---

## Example Webhook Payload

```json
{
  "event": "employee.created",
  "timestamp": "2026-07-30T10:30:00Z",
  "data": {
    "employeeId": 101,
    "employeeCode": "EMP-1001",
    "firstName": "John",
    "lastName": "Doe"
  }
}
```

---

## Webhook Security

Future webhook deliveries are expected to support:

- HTTPS endpoints only
- HMAC SHA-256 request signatures
- Timestamp validation
- Replay attack protection

---

## Availability

Webhook support is **not available** in the current version of the Supercard Workforce API.

This page will be updated when webhook functionality is introduced in a future release.