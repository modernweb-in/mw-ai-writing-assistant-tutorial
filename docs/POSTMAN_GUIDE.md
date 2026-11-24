# Testing the API with Postman

Postman is an API development and testing platform that provides a graphical interface for creating, sending, organizing, and inspecting HTTP requests.

The repository includes a Postman collection so you can test the Writing Assistant API without manually creating every request.

## 1. Install Postman

Download Postman:

https://www.postman.com/downloads/

You can use the desktop application or its supported web experience.

## 2. Import the collection

1. Open Postman.
2. Select **Import**.
3. Choose the repository file:

   `api-tests/postman/writing-assistant.postman_collection.json`

4. Complete the import.

The collection will appear in your Postman workspace.

## 3. Configure the base URL

The collection uses a variable named `baseUrl`.

Its default value is:

`http://localhost:3000`

If your Next.js application runs on a different URL or port, update the collection variable.

## 4. Start your application

Run your development server:

```bash
npm run dev
```

Make sure the API endpoint is available before sending requests.

## 5. Send a request

1. Open the imported collection.
2. Select a request, such as **Improve writing**.
3. Review the request method, URL, headers, and body.
4. Click **Send**.

Postman displays the response, HTTP status code, headers, and execution time.

## 6. Explore the test cases

The collection includes examples for:

- All six writing operations.
- Different output formats.
- Custom instructions.
- Invalid operation values.
- Empty input.

Successful generation requests should return HTTP 200.

Invalid request examples should return HTTP 400.

Rate-limit testing can be performed by sending repeated requests until the configured limit is reached.

## 7. Modify requests

You can change the JSON body to experiment with different text, tones, lengths, and output formats.

For example, change the `operation` value from `improve` to `summarize` and adjust the input accordingly.

Postman is useful when you want to inspect requests visually, save test collections, and experiment with APIs without writing terminal commands.