import type { Trip } from "../../types/trip";
import styles from "./TripList.module.css";
import TripCard from "../TripCard/TripCard";
interface TripListProps {
  title: string;
  subtitle?: string;
  trips: Trip[];
  message?: string;
}

export default function TripList({
  trips,
  title,
  subtitle,
  message = "You don't have any scheduled hikes yet.",
}: TripListProps) {
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>{title}</h3>
      {subtitle && <h4 className={styles.subtitle}>{subtitle}</h4>}
      {trips.length === 0 ? (
        <p className={styles.empty}>{message}</p>
      ) : (
        <ul className={styles.list}>
          {trips.map((trip) => (
            <TripCard key={trip.id} trip={trip} />
          ))}
        </ul>
      )}
    </div>
  );
}
