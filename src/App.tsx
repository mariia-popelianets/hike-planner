import "./App.module.css";
import { useState } from "react";
import Hero from "./components/Hero/Hero";
import TripForm from "./components/TripForm/TripForm";
import type { CreateTrip, Trip } from "./types/trip";
import Modal from "./components/Modal/Modal";
import TripList from "./components/TripList/TripList";
function App() {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [trips, setTrips] = useState<Trip[]>([]);
  const handleAddTrip = (newTrip: Trip) => {
    setTrips((prev) => [...prev, newTrip]);
  };
  const handleCreateTrip = (trip: CreateTrip) => {
    const newTrip: Trip = {
      ...trip,
      id: crypto.randomUUID() as string,
      gearItems: [],
      status: "planned",
    };
    handleAddTrip(newTrip);
    setIsFormOpen(false);
  };

  return (
    <>
      <Hero
        title="Plan your next mountain adventure"
        subtitle="Organize your hikes, track your routes and create unforgettable memories."
        buttonText="New Adventure"
        onClick={() => setIsFormOpen(true)}
      />
      {isFormOpen && (
        <Modal onClose={() => setIsFormOpen(false)}>
          <TripForm
            onCancel={() => setIsFormOpen(false)}
            onSubmit={handleCreateTrip}
          />
        </Modal>
      )}
      <TripList
        title="My trips"
        subtitle="You've got this! New peaks are waiting 🏔️"
        trips={trips}
      />
    </>
  );
}

export default App;
