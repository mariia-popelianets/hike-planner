import { useState, useEffect } from "react";
import type { Trip } from "../types/trip";
import { mockData } from "../utils/mockData";

const STORAGE_KEY = "trips";

export const useTrips = () => {
  const [trips, setTrips] = useState<Trip[]>(() => {
    const savedTrips = localStorage.getItem(STORAGE_KEY);
    if (savedTrips) {
      try {
        return JSON.parse(savedTrips);
      } catch (error) {
        console.error("Помилка зчитування з localStorage:", error);
        return mockData;
      }
    }
    return mockData;
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(trips));
  }, [trips]);

  const addTrip = (newTrip: Trip) => {
    setTrips((prev) => [...prev, newTrip]);
  };

  const deleteTrip = (id: string) => {
    setTrips((prevTrips) => prevTrips.filter((trip) => trip.id !== id));
  };

  return {
    trips,
    addTrip,
    deleteTrip,
  };
};
