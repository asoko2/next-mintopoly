// "use server"
import { Card } from "@/utils/types/card";
import { getActiveRound, getInvestmentList } from "./game-api";
import {
  getPlayerInvestmentList,
  getTally,
  purchaseInvestment,
} from "./player-api";
import { Investment } from "@/utils/types/investments";

export async function startMinting({
  token,
  account,
}: {
  token: FormDataEntryValue | null;
  account: FormDataEntryValue | null;
}) {
  const round = await getActiveRound(token!.toString());

  if (round.details !== null) {
    const investments = await getInvestmentList(token!.toString());

    //sort insvestments array of object, by object investmentID
    investments.sort((a: Investment, b: Investment) =>
      a.investmentID > b.investmentID ? 1 : -1
    );

    const playerInvestments = await getPlayerInvestmentList(
      token!.toString(),
      account!.toString()
    );

    const tally = await getTally(token!.toString(), account!.toString());

    //get the last key of playerInvestments
    const lastKey = parseInt(Object.keys(playerInvestments).pop()!);

    const lastInvestment = investments[lastKey];

    const result = {
      message: "success",
      data: {
        round: round,
        playerInvestments: playerInvestments,
        lastInvestment: lastInvestment,
        tally: tally,
      },
    };

    return result;

    //get last investment price by multiplying last investment initialPrice with last investment coefficient as much as last investment owned
    // const lastInvestmentPrice =
    //   lastInvestment.initialPrice *
    //   lastInvestment.coefficient ** playerInvestments[lastKey];

    // if (tally.lastTally.cash >= lastInvestmentPrice) {
    //   const purchaseResponse = await purchaseInvestment(
    //     token!.toString(),
    //     account!.toString(),
    //     lastKey,
    //     1
    //   );

    //   return purchaseResponse;
    // }
  } else {
    console.log("No active round");
  }
}
