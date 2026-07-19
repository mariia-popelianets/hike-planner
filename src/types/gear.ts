export type Priority = "required" | "optional";

export interface GearItem {
  gear: string;
  quantity: number;
  priority: Priority;
  isPacked: boolean;
}
