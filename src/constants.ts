export const statusesMap = ["Launched", "Pending", "Partial", "Paid", "Complete", "Cancelled"];

export const ethHttpServer = process.env.ETH_HTTP_SERVER || "http://localhost:8547";
export const port = process.env.PORT || 3005;
export const privKey =
  process.env.ETH_PRIVATE_KEY ||
  "486a0621e595dd7fcbe5608cbbeec8f5a8b5cabe7637f11eccfc7acd408c3a0e"; // ganaches priv key
