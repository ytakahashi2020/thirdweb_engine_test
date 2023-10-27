import fetch from "node-fetch";
import https from "https";

// ローカルテスト用のための設定。本番ではセキュリティリスクのため行わない
const agent = new https.Agent({
  rejectUnauthorized: false,
});

async function getWalletBalance() {
  const resp = await fetch(
    "https://localhost:3005/backend-wallet/mumbai/0xa08832afda063bddca5f146ae279545dbd34df14/get-balance",
    {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJFUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiIweEUzQWY0NDZFN0M2RkVFMDk5NjM5NDJCM0M4RTA3NTRFQTM5NDM5OTUiLCJzdWIiOiIweEJjNjI2OTdGMzE4QTdBMTlBNzE2N2I3OGUxZDU3MEZGODA4MjkyNzciLCJhdWQiOiJ0aGlyZHdlYi5jb20iLCJleHAiOjQ4NTE5ODUyMTgsIm5iZiI6MTY5ODM4NTIxOCwiaWF0IjoxNjk4Mzg1MjE4LCJqdGkiOiJlZTgyOTY5Zi04MWRkLTQxYjgtOGZlNi1hNzVjOWZhNzc4OWIiLCJjdHgiOnsicGVybWlzc2lvbnMiOiJBRE1JTiJ9fQ.MHg3NTFkZjE3MWM2NTMzY2FmMWJjODZiYTc2ODZmMDllNjc5N2EzNDY3YzQ3YTA3YTRkNDliNGUwZTVjMGVjZTk3NjJkMjM5MmM2M2FhNzNiNTU2ZTA0MTg1NDZkZGFmNDQxMDA0N2FmZmJkYmY0ZTc3ODQyNmU0YWJmZTUxYWQ1NjFj",
      },
      agent: agent,
    }
  );

  const { result } = await resp.json();
  console.log("Balance:", result.value);
}

getWalletBalance().catch((error) => {
  console.error("An error occurred:", error);
});
