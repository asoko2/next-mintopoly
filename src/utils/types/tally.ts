import { Card } from "./card";
import { PlayerInvestment } from "./player-investment";

export type Tally = {
  activeCards: {
    [key: string]: Card;
  };
  autoStake: boolean;
  cardSet: boolean;
  cash: number;
  contributions: any;
  currentBlock: number;
  earningsPerBlock: number;
  forks: any;
  investmentsOwned: PlayerInvestment;
  investmentsUnlocked: {
    0: boolean;
    1: boolean;
    2: boolean;
    3: boolean;
    4: boolean;
    5: boolean;
    6: boolean;
    7: boolean;
    8: boolean;
  };
  ip: string;
  lastTally: {
    block: number;
    cash: number;
    earningsPerBlock: number;
    netWorth: number;
    stakedValue: number;
  };
  netWorth: number;
  purchases: {
    blockPurchased: number;
    investmentID: number;
    newsfeedId: string;
    quantity: number;
  }[];
  stakedValue: number;
  staking: [];
  unlimitedStaking: number;
};
