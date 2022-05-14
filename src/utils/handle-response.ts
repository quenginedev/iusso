export const handleResponse: HandleResponse = (  { statusCode = 200, body }) => ({
  statusCode,
  headers: { "Content-Type": "application/json" },
  body: typeof body === "string" ? body : JSON.stringify(body),
});

export default handleResponse;
