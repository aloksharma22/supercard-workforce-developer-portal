# API Versioning

API versioning is the practice of managing changes to an API while maintaining compatibility for existing client applications.

As APIs evolve, new features are added, existing functionality is improved, and occasionally breaking changes become necessary. Versioning enables these changes without disrupting applications that rely on previous API behavior.

The Supercard Workforce Management API uses **URI-based versioning** to provide a stable and predictable integration experience.

---

# Why Versioning?

Applications often integrate with an API for many years.

If breaking changes were introduced without versioning:

- Existing integrations could stop working.
- Client applications would require immediate updates.
- Production systems could experience unexpected failures.
- Developers would lose confidence in API stability.

Versioning allows new functionality to be introduced while preserving backward compatibility for existing consumers.

---

# Versioning Strategy

The Supercard Workforce Management API uses **URI-based versioning**.

Example:

```text
https://api.supercard.com/v1/employees
```

In this example:

- `v1` represents Version 1 of the API.
- Future releases may introduce `v2`, `v3`, and so on.

---

# Why URI Versioning?

URI versioning is:

- Simple to understand
- Easy to document
- Visible in every request
- Supported by all HTTP clients
- Widely adopted across REST APIs

For portfolio purposes, URI versioning clearly communicates the version being used.

---

# Common Versioning Strategies

Several versioning strategies are used across the industry.

| Strategy | Example | Advantages | Considerations |
|----------|---------|------------|----------------|
| URI Versioning | `/v1/employees` | Easy to understand and document | Requires new endpoint paths |
| Header Versioning | `API-Version: 1` | Clean URLs | Less visible and harder to test manually |
| Query Parameter | `?version=1` | Easy to implement | Less common for REST APIs |
| Content Negotiation | `Accept: application/vnd.company.v1+json` | Flexible and standards-based | More complex to configure |

The Supercard Workforce API uses **URI Versioning**.

---

# Example Requests

Version 1

```http
GET https://api.supercard.com/v1/employees
```

Future Version

```http
GET https://api.supercard.com/v2/employees
```

Applications should explicitly target the version they support.

---

# Backward Compatibility

Whenever possible, new functionality should be introduced without breaking existing integrations.

Examples of backward-compatible changes include:

- Adding optional request parameters
- Introducing new response fields
- Adding new endpoints
- Improving documentation

These changes allow existing applications to continue functioning without modification.

---

# Breaking Changes

Breaking changes require a new major API version.

Examples include:

- Removing endpoints
- Renaming request parameters
- Changing response formats
- Modifying authentication requirements
- Changing validation rules
- Altering resource identifiers

Applications using an older version should continue to function until that version reaches end-of-life.

---

# Deprecation Policy

Before removing or replacing an API version:

1. Announce the deprecation.
2. Provide migration guidance.
3. Continue supporting the previous version during the transition period.
4. Publish an end-of-support date.
5. Remove the deprecated version after the announced deadline.

This approach gives developers sufficient time to update their applications.

---

# Migration Best Practices

When upgrading to a newer API version:

- Review the release notes.
- Read the migration guide.
- Test integrations in a non-production environment.
- Validate request and response formats.
- Update automated tests.
- Deploy gradually using a staged rollout.

---

# Best Practices

Follow these recommendations when integrating with versioned APIs.

- Always specify the API version explicitly.
- Avoid relying on undocumented behavior.
- Monitor release notes for upcoming changes.
- Plan for version upgrades during regular maintenance.
- Test integrations before adopting a new version.

---

# Common Mistakes

Avoid the following mistakes:

❌ Omitting the API version.

❌ Assuming future versions are backward compatible.

❌ Upgrading directly in production without testing.

❌ Ignoring deprecation announcements.

❌ Hardcoding undocumented behavior.

---

# Frequently Asked Questions

### Why can't the API change without versioning?

Because existing applications depend on stable behavior. Versioning allows improvements without breaking current integrations.

---

### Will Version 1 always be supported?

Not indefinitely.

Older versions may eventually be deprecated. Deprecation schedules and migration guidance are communicated through release notes and documentation.

---

### Should I always use the latest version?

For new integrations, yes.

Existing applications should upgrade after reviewing the release notes and validating compatibility.

---

### What happens if I call an unsupported version?

The API typically returns an error indicating that the requested version is unavailable or no longer supported.

---

# Related Concepts

Continue learning:

- [Pagination](pagination.md)
- [Filtering](filtering.md)
- [Sorting](sorting.md)
- [Rate Limiting](rate-limiting.md)
- [Error Handling](error-handling.md)

---

!!! tip "Developer Tip"

    Pin your application to a specific API version rather than relying on the latest available version. This ensures predictable behavior and reduces the risk of unexpected breaking changes.

---

!!! warning "Breaking Changes"

    Never upgrade directly to a new major API version in production without validating your application against the updated API. Always test changes in a development or staging environment first.

---

!!! note "Portfolio Project"

    The versioning strategy described in this documentation is intended to demonstrate enterprise REST API design principles. Version numbers, URLs, and migration examples are illustrative and do not represent a live production API.