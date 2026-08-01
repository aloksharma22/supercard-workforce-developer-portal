# Date and Time Formats

!!! success "Reference Guide"
    The Supercard Workforce API uses standardized date and time formats based on the ISO 8601 international standard. Using a consistent format ensures interoperability between clients, servers, and third-party integrations.

Unless otherwise specified, all timestamps are represented in **UTC (Coordinated Universal Time)**.

---

# Why Standardized Date Formats?

Different regions represent dates differently.

For example:

| Format | Interpretation |
|---------|----------------|
| 01/02/2025 | January 2 or February 1? |
| 02-01-2025 | Ambiguous |
| 2025-02-01 | Unambiguous (ISO 8601) |

To eliminate ambiguity, the Supercard Workforce API always uses ISO 8601 formats.

---

# Date Format

Dates without a time component use:

```text
YYYY-MM-DD
```

Example:

```text
2025-02-06
```

Used for:

- Joining dates
- Leave dates
- Payroll periods
- Attendance dates
- Birth dates

---

# Date-Time Format

Date and time values use:

```text
YYYY-MM-DDTHH:mm:ssZ
```

Example:

```text
2025-02-06T15:30:45Z
```

Meaning:

| Component | Value |
|-----------|-------|
| Date | 2025-02-06 |
| Time | 15:30:45 |
| Time Zone | UTC (`Z`) |

---

# UTC Time

The API stores and returns timestamps in UTC.

Example:

```text
2025-02-06T15:30:45Z
```

The suffix:

```text
Z
```

indicates **Zulu Time (UTC)**.

Clients may convert UTC timestamps to local time zones for display.

---

# Examples

## Employee Joining Date

```json
{
  "joiningDate": "2025-02-01"
}
```

---

## Attendance Timestamp

```json
{
  "clockInTime": "2025-02-06T09:02:14Z",
  "clockOutTime": "2025-02-06T18:01:53Z"
}
```

---

## Report Generation Time

```json
{
  "generatedAt": "2025-02-06T16:10:00Z"
}
```

---

## API Response Metadata

```json
{
  "meta": {
    "timestamp": "2025-02-06T16:15:00Z"
  }
}
```

---

# Payroll Period

Payroll periods use the following format:

```text
YYYY-MM
```

Example:

```text
2025-02
```

Represents:

**February 2025**

---

# Query Parameter Examples

Retrieve attendance records.

```http
GET /v1/attendance?fromDate=2025-02-01&toDate=2025-02-28
```

Generate payroll.

```http
GET /v1/payroll/history?payrollPeriod=2025-02
```

---

# Date Validation

Examples of valid dates:

```text
2025-01-31
2025-12-25
2026-03-01
```

Invalid examples:

```text
31/01/2025
01-31-2025
2025/01/31
January 31, 2025
```

---

# Leap Years

The API follows the Gregorian calendar.

Valid:

```text
2024-02-29
```

Invalid:

```text
2025-02-29
```

---

# Time Zone Conversion

Although responses are returned in UTC, clients may display them in local time.

Example:

UTC:

```text
2025-02-06T12:00:00Z
```

India Standard Time (UTC+05:30):

```text
2025-02-06T17:30:00+05:30
```

The API itself always stores and returns UTC values.

---

# Milliseconds

Most responses omit milliseconds.

Standard format:

```text
2025-02-06T15:30:45Z
```

Some future endpoints may include fractional seconds when higher precision is required.

Example:

```text
2025-02-06T15:30:45.123Z
```

Applications should be prepared to accept both formats.

---

# Date and Time Workflow

```mermaid
flowchart LR

A[Client Sends Date]

A --> B[API Validates Format]

B --> C[Convert to UTC]

C --> D[Store Data]

D --> E[Return ISO 8601 Response]
```

---

# Best Practices

- Always use ISO 8601 formats.
- Send dates in UTC whenever possible.
- Convert timestamps to local time only for display.
- Validate date formats before sending requests.
- Use four-digit years.

---

# Common Mistakes

❌ Using locale-specific formats such as `31/01/2025`.

❌ Omitting the time zone from timestamps.

❌ Assuming timestamps are returned in the client's local time.

❌ Using text-based month names.

---

# Security Considerations

Consistent date handling helps:

- Improve audit accuracy.
- Simplify distributed system logging.
- Prevent time zone inconsistencies.
- Support compliance reporting.

---

!!! tip "Store UTC"

    Store timestamps in UTC and convert them to the user's local time only when displaying information.

---

!!! note "ISO 8601 Standard"

    Every date and timestamp returned by the Supercard Workforce API follows the ISO 8601 international standard unless explicitly documented otherwise.

---

!!! warning "Time Zone Awareness"

    Do not assume timestamps are returned in your local time zone. All API timestamps are expressed in UTC.

---

# Supported Formats Summary

| Purpose | Format | Example |
|---------|--------|---------|
| Date | `YYYY-MM-DD` | `2025-02-06` |
| Date-Time | `YYYY-MM-DDTHH:mm:ssZ` | `2025-02-06T15:30:45Z` |
| Payroll Period | `YYYY-MM` | `2025-02` |
| UTC Indicator | `Z` | `2025-02-06T15:30:45Z` |
| High Precision Time | `YYYY-MM-DDTHH:mm:ss.SSSZ` | `2025-02-06T15:30:45.123Z` |

---

# Related References

- [Response Format](response-format.md)
- [Headers](headers.md)
- [HTTP Status Codes](status-codes.md)

---

# Related Concepts

- [Pagination](../concepts/pagination.md)
- [Filtering](../concepts/filtering.md)

---

# Next Steps

Learn the terminology used throughout the Supercard Workforce API.

➡ **Next:** [Glossary](glossary.md)