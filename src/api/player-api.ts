"use server";

import { PlayerInvestment } from "@/utils/types/player-investment";
import { Tally } from "@/utils/types/tally";

export async function getPlayerInvestmentList(
  token: string,
  account: string
): Promise<any> {
  const response = await fetch(
    `${process.env.API_URL}/player/${account}/investments`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Cookie: `auth=${token};`,
      },
    }
  );
  const responseJson = await response.json();
  return responseJson;
}

export async function getTally(token: string, account: string): Promise<Tally> {
  const response = await fetch(
    `${process.env.API_URL}/player/${account}/tally`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Cookie: `auth=${token};`,
      },
    }
  );
  const responseJson = await response.json();
  return responseJson;
}

export async function purchaseInvestment(
  token: string,
  account: string,
  investmentID: number,
  quantity: number
) {
  const response = await fetch(`${process.env.API_URL}/player/purchase`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Cookie: `auth=${token};`,
    },
    body: JSON.stringify({
      address: account,
      investmentID: investmentID,
      quantity: quantity,
      type: "",
      newsfeedId: "",
    }),
  });
  const responseJson = await response.json();
  return responseJson;
}
