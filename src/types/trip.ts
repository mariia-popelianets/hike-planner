import type { GearItem } from "./gear";
export type TripStatus = "planned" | "in_process" | "completed";
export type Difficulty = "easy" | "medium" | "hard";

export interface Trip {
  id: string;
  title: string;
  startDate: string;
  finishDate: string;
  location: string;
  description?: string;
  gearItems: GearItem[];
  difficulty: Difficulty;
  status: TripStatus;
}

export interface CreateTrip {
  title: string;
  startDate: string;
  finishDate: string;
  location: string;
  description?: string;
  difficulty: Difficulty;
}
