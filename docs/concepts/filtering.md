# Filtering

Filtering allows you to retrieve only the resources that match specific criteria.

Instead of returning every available record, you can narrow the results using query parameters such as department, employment status, designation, joining date, or location.

Filtering improves performance, reduces network traffic, and helps applications retrieve only the information they need.

---

# Why Filtering?

Consider an organization with:

- 50,000 employees
- 1,200 departments
- Millions of attendance records

Returning every record would be inefficient.

Filtering enables your application to retrieve only the relevant subset of data.

Examples include:

- Employees in Engineering
- Active employees
- Employees hired after a specific date
- Attendance records for a given month
- Payroll records for a particular pay period

---

# How Filtering Works

Filtering is performed using query parameters.

Example:

```http
GET /employees?department=Engineering
```

The API returns only employees belonging to the Engineering department.

---

# Multiple Filters

You can combine multiple filters within a single request.

Example:

```http
GET /employees?department=Engineering&status=Active
```

The response contains only active employees in the Engineering department.

---

# Filtering Examples

### Filter by Department

```http
GET /employees?department=Engineering
```

---

### Filter by Employment Status

```http
GET /employees?status=Active
```

---

### Filter by Location

```http
GET /employees?location=Mumbai
```

---

### Filter by Joining Date

```http
GET /employees?joinedAfter=2026-01-01
```

---

### Combine Multiple Filters

```http
GET /employees?department=Engineering&status=Active&location=Mumbai
```

---

# Example cURL Request

```bash
curl --request GET \
  --url "https://api.supercard.com/v1/employees?department=Engineering&status=Active" \
  --header "Authorization: Bearer ACCESS_TOKEN"
```

---

# Example Response

```json
{
  "success": true,
  "data": [
    {
      "employeeId": 101,
      "firstName": "John",
      "lastName": "Doe",
      "department": "Engineering",
      "status": "Active"
    }
  ]
}
```

---

# Common Filter Parameters

| Parameter | Description |
|------------|-------------|
| department | Filter by department name |
| status | Filter by employee status |
| location | Filter by office location |
| designation | Filter by job title |
| joinedAfter | Employees joining after a date |
| joinedBefore | Employees joining before a date |

---

# Combining Filtering with Pagination

Filtering works seamlessly with pagination.

Example:

```http
GET /employees?department=Engineering&page=1&limit=20
```

---

# Combining Filtering with Sorting

Filtering can also be combined with sorting.

Example:

```http
GET /employees?department=Engineering&sort=lastName
```

---

# Best Practices

- Apply filters before pagination whenever possible.
- Use only supported query parameters.
- Keep filter values case-consistent.
- Combine filtering with pagination for large datasets.
- Review endpoint documentation for supported filters.

---

# Common Mistakes

Avoid these common mistakes:

❌ Using unsupported filter parameters.

❌ Misspelling parameter names.

❌ Assuming every endpoint supports the same filters.

❌ Ignoring case sensitivity where applicable.

---

# Frequently Asked Questions

### Can I combine multiple filters?

Yes.

Most endpoints support multiple query parameters.

---

### Are filters case-sensitive?

This depends on the endpoint implementation.

Refer to the endpoint documentation for details.

---

### Can filtering improve performance?

Yes.

Returning fewer records reduces bandwidth usage and improves response times.

---

# Related Concepts

Continue learning:

- [Pagination](pagination.md)
- [Sorting](sorting.md)
- [Rate Limiting](rate-limiting.md)
- [Employees API](../api-reference/employees/list-employee.md)

---

!!! tip "Developer Tip"

    Filter data as early as possible in your request. Smaller result sets improve application performance and reduce unnecessary processing.

---

!!! warning "Validation"

    Use only documented query parameters. Unsupported filters may result in validation errors or be ignored by the API.

---

!!! note "Portfolio Project"

    The filtering examples shown in this documentation are representative examples designed to demonstrate enterprise REST API documentation practices.