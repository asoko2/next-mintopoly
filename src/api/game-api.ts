"use server";

import { Investment } from "@/utils/types/investments";
import { Round } from "@/utils/types/round";

export async function getActiveRound(token: string): Promise<Round> {
  const response = await fetch(`${process.env.API_URL}/game/round/active`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Cookie: `auth=${token};`,
    },
  });
  const responseJson = await response.json();
  return responseJson as Round;
}

export async function getInvestmentList(token: string): Promise<Investment[]> {
  const response = await fetch(`${process.env.API_URL}/game/investments`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Cookie: `auth=${token};`,
    },
  });
  const responseJson = await response.json();
  return responseJson;
}