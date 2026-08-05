import type { Trip } from "../types/trip";
import type { GearItem } from "../types/gear";

export const listGear: GearItem[] = [
  {
    gear: "Trekking sticks",
    quantity: 1,
    priority: "required",
    isPacked: true,
  },
  {
    gear: "Backpack",
    quantity: 1,
    priority: "required",
    isPacked: true,
  },
];

export const mockData: Trip[] = [
  {
    id: "vvv",
    title: "Hoverla",
    startDate: "",
    endDate: "",
    location: "Vorohta",
    description: "It is the most beautiful mountain in Ukraine",
    difficulty: "hard",
    status: "planned",
    createdAt: "2026-08-01T10:00:00.000Z",
    gearItems: listGear,
  },
];
