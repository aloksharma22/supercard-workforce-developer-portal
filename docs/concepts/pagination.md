# Pagination

Pagination is a technique used to divide large collections of resources into smaller, manageable sets called **pages**.

Instead of returning thousands of records in a single response, the Supercard Workforce Management API returns only a subset of records for each request. This improves performance, reduces bandwidth consumption, and provides a better developer experience.

---

# Why Pagination?

Imagine an organization with:

- 50,000 employees
- 500 departments
- Millions of attendance records

Returning all records in a single API response would:

- Increase response time
- Consume excessive network bandwidth
- Increase memory usage
- Slow down client applications
- Impact server performance

Pagination solves these problems by returning results in smaller batches.

---

# How Pagination Works

The Supercard Workforce API supports pagination using query parameters.

Typical parameters include:

| Parameter | Description | Default |
|------------|-------------|----------|
| `page` | Page number to retrieve | `1` |
| `limit` | Number of records per page | `25` |

Example:

```http
GET /employees?page=2&limit=25
```

This request retrieves:

- Page **2**
- 25 employee records

---

# Example Request

```bash
curl --request GET \
  --url "https://api.supercard.com/v1/employees?page=2&limit=25" \
  --header "Authorization: Bearer ACCESS_TOKEN"
```

---

# Example Response

```json
{
  "success": true,
  "data": [
    {
      "employeeId": 126,
      "firstName": "John",
      "lastName": "Doe"
    }
  ],
  "pagination": {
    "page": 2,
    "limit": 25,
    "totalRecords": 512,
    "totalPages": 21,
    "hasNextPage": true,
    "hasPreviousPage": true
  }
}
```

---

# Pagination Fields

| Field | Description |
|---------|-------------|
| page | Current page number |
| limit | Number of records returned |
| totalRecords | Total number of available records |
| totalPages | Total number of available pages |
| hasNextPage | Indicates whether another page exists |
| hasPreviousPage | Indicates whether a previous page exists |

---

# Pagination Workflow

```text
Request Page 1
        │
        ▼
Receive 25 Records
        │
        ▼
Need More Results?
        │
      Yes
        │
        ▼
Request Page 2
        │
        ▼
Receive Next 25 Records
        │
        ▼
Continue Until hasNextPage = false
```

---

# Best Practices

Follow these recommendations when working with paginated endpoints.

- Use the default page size unless a larger page is required.
- Request only the data your application needs.
- Check the `hasNextPage` field before requesting another page.
- Avoid requesting extremely large page sizes.
- Cache responses where appropriate.
- Combine pagination with filtering and sorting for better performance.

---

# Common Mistakes

Avoid the following mistakes:

❌ Requesting every page simultaneously.

❌ Ignoring pagination metadata.

❌ Using excessively large page sizes.

❌ Assuming the total number of pages never changes.

---

# Combining Pagination with Filtering

Pagination works seamlessly with filtering.

Example:

```http
GET /employees?department=Engineering&page=1&limit=20
```

---

# Combining Pagination with Sorting

Pagination can also be combined with sorting.

Example:

```http
GET /employees?sort=lastName&page=3&limit=20
```

---

# Performance Considerations

For optimal performance:

- Keep page sizes reasonable.
- Retrieve only required fields where supported.
- Cache frequently requested pages.
- Avoid unnecessary repeated requests.
- Respect API rate limits.

---

# Frequently Asked Questions

### Can I request all records at once?

No.

Large datasets should always be retrieved using pagination.

---

### Can pagination metadata change?

Yes.

If resources are created or deleted while paging through results, values such as `totalPages` and `totalRecords` may change.

---

### What happens if I request a page that doesn't exist?

The API returns an appropriate HTTP error response indicating that the requested page is outside the available range.

---

# Related Concepts

Continue learning:

- [Filtering](filtering.md)
- [Sorting](sorting.md)
- [Rate Limiting](rate-limiting.md)
- [Versioning](versioning.md)
- [Employees API](../api-reference/employees/list-employee.md)

---

!!! tip "Developer Tip"

    Use pagination metadata such as `hasNextPage` rather than calculating page counts manually. This makes client applications more resilient to changes in the underlying data.

---

!!! warning "Performance"

    Avoid requesting unnecessarily large page sizes. Smaller, predictable responses improve performance for both clients and servers.

---

!!! note "Portfolio Project"

    The pagination examples shown in this documentation are representative of common REST API design patterns and are provided to demonstrate enterprise API documentation practices.