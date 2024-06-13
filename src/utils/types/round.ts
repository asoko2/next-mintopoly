export type Round = {
  result: number;
  details: {
    _id: string;
    round: number;
    totalBlocks: number;
    startTime: string;
    rewards: [];
    stakingRate: number;
    startingCash: number;
    blockLength: number;
    totalPlayers: number;
    totalEvents: number;
    contributionGoal: number;
    currentContribution: number;
    eventsScheduled: boolean;
    lastTally: string;
  };
};
