# Chat Module

This module provides AI-powered chat functionality using OpenRouter as the AI provider.

## Setup

1. Add the following environment variables to your `.env` file:

```env
# OpenRouter Configuration
OPENROUTER_API_KEY=your_openrouter_api_key
OPENROUTER_BASE_URL=https://openrouter.ai/api/v1
OPENROUTER_DEFAULT_MODEL=openai/gpt-3.5-turbo
OPENROUTER_MAX_TOKENS=4000
OPENROUTER_TEMPERATURE=0.7
```

2. Make sure to run the Prisma migration to create the required database tables.

## API Endpoints

### Create a new conversation

```http
POST /chat/conversations
```

**Request Body:**

```json
{
  "title": "My First Chat",
  "workspaceId": "123e4567-e89b-12d3-a456-426614174000",
  "message": "Hello, how can I help you today?"
}
```

**Response:**

```json
{
  "id": "550e8400-e29b-41d4-a716-446655440000",
  "title": "My First Chat",
  "workspaceId": "123e4567-e89b-12d3-a456-426614174000",
  "createdAt": "2025-05-16T06:30:00.000Z",
  "updatedAt": "2025-05-16T06:30:00.000Z",
  "messages": [
    {
      "id": "660e8400-e29b-41d4-a716-446655440001",
      "role": "user",
      "content": "Hello, how can I help you today?",
      "createdAt": "2025-05-16T06:30:00.000Z"
    },
    {
      "id": "770e8400-e29b-41d4-a716-446655440002",
      "role": "assistant",
      "content": "Hello! I'm here to help. What would you like to know?",
      "model": "openai/gpt-3.5-turbo",
      "promptTokens": 10,
      "completionTokens": 8,
      "totalTokens": 18,
      "createdAt": "2025-05-16T06:30:02.000Z"
    }
  ]
}
```

### Send a message in a conversation

```http
POST /chat/conversations/:id/messages
```

**Request Body:**

```json
{
  "content": "Tell me about AI",
  "model": "openai/gpt-4",
  "temperature": 0.7
}
```

**Response:**

```json
{
  "id": "880e8400-e29b-41d4-a716-446655440003",
  "role": "assistant",
  "content": "Artificial Intelligence (AI) is a branch of computer science...",
  "model": "openai/gpt-4",
  "promptTokens": 15,
  "completionTokens": 120,
  "totalTokens": 135,
  "createdAt": "2025-05-16T06:35:00.000Z"
}
```

### List conversations

```http
GET /chat/conversations
```

**Response:**

```json
[
  {
    "id": "550e8400-e29b-41d4-a716-446655440000",
    "title": "My First Chat",
    "workspaceId": "123e4567-e89b-12d3-a456-426614174000",
    "createdAt": "2025-05-16T06:30:00.000Z",
    "updatedAt": "2025-05-16T06:35:00.000Z",
    "messages": [
      {
        "id": "880e8400-e29b-41d4-a716-446655440003",
        "role": "assistant",
        "content": "Artificial Intelligence (AI) is a branch of computer science...",
        "model": "openai/gpt-4",
        "createdAt": "2025-05-16T06:35:00.000Z"
      }
    ]
  }
]
```

### Get a single conversation

```http
GET /chat/conversations/:id
```

**Response:**

```json
{
  "id": "550e8400-e29b-41d4-a716-446655440000",
  "title": "My First Chat",
  "workspaceId": "123e4567-e89b-12d3-a456-426614174000",
  "createdAt": "2025-05-16T06:30:00.000Z",
  "updatedAt": "2025-05-16T06:35:00.000Z",
  "messages": [
    {
      "id": "660e8400-e29b-41d4-a716-446655440001",
      "role": "user",
      "content": "Hello, how can I help you today?",
      "createdAt": "2025-05-16T06:30:00.000Z"
    },
    {
      "id": "770e8400-e29b-41d4-a716-446655440002",
      "role": "assistant",
      "content": "Hello! I'm here to help. What would you like to know?",
      "model": "openai/gpt-3.5-turbo",
      "createdAt": "2025-05-16T06:30:02.000Z"
    },
    {
      "id": "880e8400-e29b-41d4-a716-446655440003",
      "role": "assistant",
      "content": "Artificial Intelligence (AI) is a branch of computer science...",
      "model": "openai/gpt-4",
      "createdAt": "2025-05-16T06:35:00.000Z"
    }
  ]
}
```

### Delete a conversation

```http
DELETE /chat/conversations/:id
```

**Response:**

```
204 No Content
```

## Error Responses

### 401 Unauthorized

```json
{
  "statusCode": 401,
  "message": "Unauthorized"
}
```

### 404 Not Found

```json
{
  "statusCode": 404,
  "message": "Conversation not found",
  "error": "Not Found"
}
```

### 500 Internal Server Error

```json
{
  "statusCode": 500,
  "message": "Failed to get response from OpenRouter API"
}
```
