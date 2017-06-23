// @flow
export type EntryType = {
  actualAge: number,
  heartAge: number,
  bmi: number,
  bodyFat: number,
  heartRate: number,
  bpHigh: number,
  bpLow: number
};

export type UserType = {
  name: string,
  entries: Array<EntryType>,
  change: EntryType,
  overallScore: number
};

export type RecommendedStatsType = {
  bmi: Array<number>,
  bodyFat: Array<number>,
  bpHigh: number,
  bpLow: number,
  heartRate: Array<number>
};
