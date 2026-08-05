import type { GearItem } from "./gear";
export type TripStatus = "planned" | "in_process" | "completed";
export type Difficulty = "easy" | "medium" | "hard";

export interface Trip {
  id: string;
  title: string;
  startDate: string;
  endDate: string;
  location: string;
  description?: string;
  gearItems: GearItem[];
  difficulty: Difficulty;
  status: TripStatus;
  createdAt: string;
}

export interface CreateTrip {
  title: string;
  startDate: string;
  endDate: string;
  location: string;
  description?: string;
  difficulty: Difficulty;
}
