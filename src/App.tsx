import { useState } from "react";
import Hero from "./components/Hero/Hero";
import TripForm from "./components/TripForm/TripForm";
import type { CreateTrip } from "./types/trip";
function App() {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const handleCreateTrip = (trip: CreateTrip) => {
    console.log(trip);
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
        <TripForm
          onCancel={() => setIsFormOpen(false)}
          onSubmit={handleCreateTrip}
        />
      )}
    </>
  );
}

export default App;
