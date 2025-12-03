export interface SlotGame {
  id: string;
  title: string;
  provider?: string;
  imageUrl: string;
  isHot?: boolean;
}

export interface WinnerNotification {
  name: string;
  amount: string;
  game: string;
}

export interface OracleResponse {
  luckyNumbers: number[];
  prediction: string;
  powerColor: string;
}

export enum ToastPosition {
  TOP_RIGHT = 'top-right',
  BOTTOM_LEFT = 'bottom-left'
}