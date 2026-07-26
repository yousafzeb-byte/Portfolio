---
title: "Building a Production-Ready FastAPI App"
date: "2026-06-15"
readTime: "8 min read"
excerpt: "A walkthrough of how I structure FastAPI apps with dependency injection, SQLAlchemy models, Alembic migrations, and 40+ automated tests."
tag: "Engineering"
---

## Why FastAPI?

FastAPI has become my go-to for backend services. It's fast, it has automatic OpenAPI docs, and the dependency injection system is genuinely elegant. But most tutorials stop at "here's a hello world" — this post goes further.

## Project Structure

```
app/
├── api/
│   └── v1/
│       ├── routes/
│       └── dependencies.py
├── core/
│   ├── config.py
│   └── security.py
├── db/
│   ├── base.py
│   └── session.py
├── models/
├── schemas/
├── services/
└── main.py
```

Separating concerns this way means each layer has one job.

## Dependency Injection Done Right

FastAPI's `Depends()` system is powerful. I use it for:

- Database sessions (one per request, properly closed)
- Auth (extracting the current user from a JWT)
- Permission checks (role-based access without repeating logic)

```python
async def get_current_user(
    token: str = Depends(oauth2_scheme),
    db: AsyncSession = Depends(get_db),
) -> User:
    ...
```

## Database Layer: SQLAlchemy + Alembic

I use SQLAlchemy with async sessions for non-blocking DB access and Alembic for migrations. The key discipline: **never run raw SQL in routes** — always go through the service layer.

## Testing Strategy

40+ tests across three layers:

1. **Unit tests** — pure functions, no I/O
2. **Service tests** — in-memory SQLite, real logic
3. **Integration tests** — full HTTP via `TestClient`, real DB

This pyramid gives me confidence without making tests slow.

## Lessons Learned

- Start with `async` from day one — retrofitting is painful
- Pydantic schemas are your contract between layers, treat them seriously
- Alembic autogenerate is great but always review the generated migration
- Write tests for the unhappy path first — that's where bugs live
