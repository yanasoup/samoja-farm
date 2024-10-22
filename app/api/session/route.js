import { v4 as uuidv4 } from "uuid";

export default function handler(req, res) {
  // Generate a unique session ID
  const sessionId = uuidv4();

  // Set the session ID in a cookie
  res.setHeader(
    "Set-Cookie",
    `session_id=${sessionId}; HttpOnly; Path=/; Max-Age=86400`
  );

  // Return the session ID as response
  res.status(200).json({ session_id: sessionId });
}
