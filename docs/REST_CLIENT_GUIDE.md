# Testing the API with VS Code REST Client

The repository includes a `generate.http` file containing ready-to-use requests for the Writing Assistant API.

You can execute these requests directly inside Visual Studio Code without opening a separate API testing application.

## 1. Install the REST Client extension

1. Open Visual Studio Code.
2. Open the Extensions panel.
3. Search for **REST Client**.
4. Install the extension published by Huachao Mao.

Extension: https://marketplace.visualstudio.com/items?itemName=humao.rest-client

## 2. Open the HTTP file

Open:

`api-tests/generate.http`

You'll find multiple requests separated by `###` markers.

Each section represents an independent HTTP request.

## 3. Start your Next.js application

Run your application locally:

```bash
npm run dev
```

By default, the development server runs at:

`http://localhost:3000`

Make sure your API endpoint is implemented before executing the requests.

## 4. Execute a request

Look for the **Send Request** link displayed above a request.

Click it to execute the request.

REST Client will open a response panel showing:

- HTTP status code.
- Response headers.
- Response body.
- Request execution details.

## 5. Understanding the request

For example:

```http
POST {{baseUrl}}/api/generate
Content-Type: application/json

{
  "operation": "improve",
  "input": "This is an example.",
  "tone": "professional",
  "length": "medium",
  "outputFormat": "paragraphs"
}
```

The `POST` method tells the server that we're sending data.

`{{baseUrl}}` is a variable defined near the beginning of the file.

`Content-Type: application/json` tells the server that the request body contains JSON.

The JSON body contains the data required by our API.

## 6. Change the API URL

At the beginning of the file, you'll find:

```http
@baseUrl = http://localhost:3000
```

Change this value if your application runs on another local port or a different server.

## 7. Testing errors

The file also includes requests with invalid input.

For example, an invalid operation should return HTTP 400.

These requests help us verify that backend validation works as expected.

## Troubleshooting

- **Connection refused:** Make sure the Next.js development server is running.
- **404 Not Found:** Check the API route and request URL.
- **400 Bad Request:** Inspect the request body and validation response.
- **429 Too Many Requests:** You've exceeded the configured rate limit. Wait before trying again.

REST Client is particularly convenient during development because you can keep your API requests alongside your source code.