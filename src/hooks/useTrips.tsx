import { useState, useEffect } from "react";
import type { Trip, CreateTrip } from "../types/trip";
import { loadTrips, saveTrips } from "../services/tripStorage";

export const useTrips = () => {
  const [trips, setTrips] = useState<Trip[]>(() => loadTrips());

  useEffect(() => {
    saveTrips(trips);
  }, [trips]);

  const createTrip = (formData: CreateTrip) => {
    const newTrip: Trip = {
      ...formData,
      id: crypto.randomUUID() as string,
      createdAt: new Date().toISOString(),
    };

    setTrips((prev) => [newTrip, ...prev]);
  };

  const deleteTrip = (id: string) => {
    setTrips((prev) => prev.filter((trip) => trip.id !== id));
  };

  return {
    trips,
    createTrip,
    deleteTrip,
  };
};
