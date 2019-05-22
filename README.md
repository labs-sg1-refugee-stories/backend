# Refugee Stories - Backend

This is a backend for the "Refugee Stories" Project Team

## Technical Design Document

[Technical Design Document](https://docs.google.com/document/d/1AZU1sWxj3n63dbdo91oi3M3fNJRERgi_ZXTMFo9l7DU/edit?usp=sharing)

# API Documentation

#### Backend Deployment: https://refugee-stories-api.herokuapp.com/ <br>

#### Register Route

| Method | Endpoint    | Access Control | Description        |
| ------ | ----------- | -------------- | ------------------ |
| POST   | `/register` | none           | Creates a new user |

#### Login Route

| Method | Endpoint  | Access Control | Description                                                       |
| ------ | --------- | -------------- | ----------------------------------------------------------------- |
| POST   | `/login`  | admin          | Use the credentials sent inside the body to authenticate the user |
| GET    | `/logout` | admin          |                                                                   |

#### Users Route

| Method | Endpoint | Access Control | Description             |
| ------ | -------- | -------------- | ----------------------- |
| GET    | `/users` | none           | Returns all users by ID |

#### Stories Route

| Method | Endpoint       | Access Control | Description                           |
| ------ | -------------- | -------------- | ------------------------------------- |
| GET    | `/stories`     | anyone         | Returns all stories approved by admin |
| GET    | `/stories/:id` | anyone         | Returns all stories by ID             |
| PUT    | `/stories/:id` | none           | Modify an existing story              |
| DELETE | `/stories/:id` | none           | Delete an existing story              |

#### Submit A Story Route

| Method | Endpoint                    | Access Control | Description                                                        |
| ------ | --------------------------- | -------------- | ------------------------------------------------------------------ |
| POST   | `/admin/stories`            | anyone         | Create and submit a story in a que for approval/rejection by admin |
| GET    | `/admin/stories`            | admin          | Show all the submitted stories on the API                          |
| DELETE | `admin/stories/reject/:id`  | admin          | Deletes an already approved story from admin's page                |
| POST   | `admin/stories/approve/:id` | admin          | Returns all stories approved by admin to all stories page          |

## Data Model

#### STORIES

---

```
{
  id: UUID
  title: STRING
  name: STRING
  storytext: TEXT
  country: STRING
}
```

Example:

```
{
"id": 2,
"title": "A Home with a View",
"name": "Zeinah",
"storytext": "My children were born in the city and my whole family lived there, but we had to flee to Turkey during one of the outbreaks of fighting,” said Farah. “If we hadn’t left when we did we would have been killed along with so many other people. We left Syria at the right time.",
"country": "Syria"
}
```

#### ADMIN

---

```
{
  id: UUID
  username: STRING
  password: STRING
}
```

Example:

```
{
	"username": "dummy",
	"password": "dummy"
}
```

## Actions

`add()` -> Creates a new admin and returns that admin.

`find()` -> Returns all stories

`findById(id)` -> Returns a single story by ID

`postPendingStory(post)` --> Creates a new story and returns that story.

`getPendingStories()` -> Returns all the pending stories

`rejectStory()` -> Deletes the story from admin route, if admin rejects it
