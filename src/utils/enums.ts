export const FetchStatus = {
  IDLE: "idle",
  LOADING: "loading",
  FAILED: "failed",
  SUCCEEDED: "succeeded",
} as const;

export type FetchStatus = (typeof FetchStatus)[keyof typeof FetchStatus];
