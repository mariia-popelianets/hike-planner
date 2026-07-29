import type { Trip } from "../types/trip";

const STORAGE_KEY = "my_trips";

export const loadTrips = (): Trip[] => {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved) : [];
  } catch (error) {
    console.error("Failed to load trips from LocalStorage:", error);
    return [];
  }
};

export const saveTrips = (trips: Trip[]): void => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(trips));
  } catch (error) {
    console.error("Failed to save trips to LocalStorage:", error);
  }
};
