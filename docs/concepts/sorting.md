# Sorting

Sorting allows you to organize API responses in a predictable order based on one or more resource attributes.

Instead of receiving records in the default order, you can specify how results should be arranged—for example, alphabetically by employee name, chronologically by joining date, or numerically by salary.

Sorting improves data presentation, simplifies client-side processing, and helps users quickly locate relevant information.

---

# Why Sorting?

Consider the following scenarios:

- Display employees alphabetically.
- Show the newest employees first.
- View the highest salaries at the top.
- List attendance records by date.
- Display payroll history from the latest payroll cycle.

Without sorting, applications would need to process and reorder data after receiving it, increasing complexity and reducing performance.

---

# How Sorting Works

Sorting is performed using query parameters.

Example:

```http
GET /employees?sort=lastName
```

The response returns employees sorted alphabetically by last name.

---

# Sort Direction

Most endpoints support both ascending and descending order.

| Direction | Description |
|-----------|-------------|
| `asc` | Ascending order (default) |
| `desc` | Descending order |

Example:

```http
GET /employees?sort=lastName&order=asc
```

Descending order:

```http
GET /employees?sort=joiningDate&order=desc
```

---

# Sorting Examples

### Sort Employees by Last Name

```http
GET /employees?sort=lastName
```

---

### Sort by Joining Date (Newest First)

```http
GET /employees?sort=joiningDate&order=desc
```

---

### Sort by Salary

```http
GET /employees?sort=salary&order=desc
```

---

### Sort Attendance by Date

```http
GET /attendance?sort=attendanceDate&order=desc
```

---

### Sort Payroll by Payroll Period

```http
GET /payroll?sort=payPeriod&order=desc
```

---

# Example cURL Request

```bash
curl --request GET \
  --url "https://api.supercard.com/v1/employees?sort=joiningDate&order=desc" \
  --header "Authorization: Bearer ACCESS_TOKEN"
```

---

# Example Response

```json
{
  "success": true,
  "data": [
    {
      "employeeId": 205,
      "firstName": "Jane",
      "lastName": "Smith",
      "joiningDate": "2026-06-15"
    },
    {
      "employeeId": 182,
      "firstName": "John",
      "lastName": "Doe",
      "joiningDate": "2026-05-28"
    }
  ]
}
```

---

# Common Sort Fields

| Field | Description |
|---------|-------------|
| firstName | Employee first name |
| lastName | Employee last name |
| joiningDate | Employee joining date |
| salary | Employee salary |
| department | Department name |
| attendanceDate | Attendance date |
| payPeriod | Payroll period |

> **Note:** Supported sort fields vary by endpoint. Refer to the endpoint documentation for the complete list of supported fields.

---

# Combining Sorting with Filtering

Sorting and filtering are commonly used together.

Example:

```http
GET /employees?department=Engineering&sort=lastName
```

This request returns Engineering employees sorted alphabetically by last name.

---

# Combining Sorting with Pagination

Sorting also works with pagination.

Example:

```http
GET /employees?sort=joiningDate&order=desc&page=2&limit=20
```

This retrieves the second page of employees sorted by joining date in descending order.

---

# Best Practices

Follow these recommendations when using sorting.

- Sort only on supported fields.
- Choose a sort order that matches the user experience.
- Combine sorting with filtering to reduce unnecessary processing.
- Use pagination when sorting large datasets.
- Maintain consistent sorting across related API requests.

---

# Common Mistakes

Avoid the following mistakes:

❌ Sorting by unsupported fields.

❌ Assuming every endpoint supports identical sort options.

❌ Sorting large datasets without pagination.

❌ Relying on the API's default ordering.

---

# Performance Considerations

Sorting large datasets may increase processing time.

For optimal performance:

- Filter data before sorting whenever possible.
- Request only the records you need.
- Combine sorting with pagination.
- Avoid repeatedly requesting the same sorted data if caching is appropriate.

---

# Frequently Asked Questions

### Can I sort by multiple fields?

Some endpoints may support multi-field sorting.

Example:

```http
GET /employees?sort=department,lastName
```

Refer to the endpoint documentation to determine whether multi-field sorting is supported.

---

### What happens if I specify an unsupported field?

The API returns a validation error indicating that the requested sort field is not supported.

---

### Is ascending order the default?

Yes.

If no sort direction is provided, results are typically returned in ascending order unless otherwise documented.

---

# Related Concepts

Continue learning:

- [Pagination](pagination.md)
- [Filtering](filtering.md)
- [Rate Limiting](rate-limiting.md)
- [Versioning](versioning.md)
- [Employees API](../api-reference/employees/list-employee.md)

---

!!! tip "Developer Tip"

    Always specify both the sort field and the sort direction explicitly. This makes your application behavior predictable and avoids relying on default API behavior.

---

!!! warning "Performance"

    Sorting large datasets without pagination can increase response times and resource usage. Combine sorting with pagination for the best performance.

---

!!! note "Portfolio Project"

    The sorting examples shown in this documentation are representative examples designed to demonstrate enterprise REST API documentation practices. Supported sort fields and query parameters may vary between endpoints.