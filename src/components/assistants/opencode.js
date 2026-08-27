const BASE_URL = "/opencode";

let sessionId = null;

async function ensureSession() {
  if (sessionId) return sessionId;
  const res = await fetch(`${BASE_URL}/session`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({}),
  });
  const data = await res.json();
  sessionId = data.id;
  if (!sessionId) throw new Error("Failed to create session");
  return sessionId;
}

async function chat(message) {
  const id = await ensureSession();
  const res = await fetch(`${BASE_URL}/session/${id}/message`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      parts: [{ type: "text", text: message }],
    }),
  });
  const data = await res.json();
  const textParts = data?.parts
    ?.filter((p) => p.type === "text")
    .map((p) => p.text) ?? [];
  return textParts.length ? textParts.join("\n") : JSON.stringify(data);
}

export default chat;
