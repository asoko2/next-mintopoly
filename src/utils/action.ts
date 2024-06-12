"use server";

export async function getActiveRound({
  account,
  token,
}: {
  account: FormDataEntryValue | null;
  token: FormDataEntryValue | null;
}) {
  const response = await fetch(`${process.env.API_URL}/game/round/active`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Cookie: `auth=${token};`,
    },
  });
  return await response.json();
}
