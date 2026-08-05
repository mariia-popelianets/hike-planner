import "./App.module.css";
import { useState } from "react";
import Hero from "./components/Hero/Hero";
import TripForm from "./components/TripForm/TripForm";
import type { CreateTrip, Trip } from "./types/trip";
import Modal from "./components/Modal/Modal";
import { useTrips } from "./hooks/useTrips";
import TripList from "./components/TripList/TripList";
import TripDetails from "./components/TripDetails/TripDetails";
function App() {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [selectedTrip, setSelectedTrip] = useState<Trip | null>(null);
  const { trips, createTrip, deleteTrip } = useTrips();

  const handleCreateTrip = (formData: CreateTrip) => {
    createTrip(formData);
    setIsFormOpen(false);
  };
  const handleViewDetails = (trip: Trip) => {
    setSelectedTrip(trip);
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
        onDeleteTrip={deleteTrip}
        onViewDetails={handleViewDetails}
      />
      {selectedTrip && (
        <Modal onClose={() => setSelectedTrip(null)}>
          <TripDetails trip={selectedTrip} />
        </Modal>
      )}
    </>
  );
}

export default App;
