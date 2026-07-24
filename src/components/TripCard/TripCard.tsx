import type { Trip } from "../../types/trip";
import styles from "./TripCard.module.css";
interface TripCardProps {
  trip: Trip;
}
export default function TripCard({ trip }: TripCardProps) {
  return (
    <li className={styles.card}>
      <h5 className={styles.cardTitle}>{trip.title} </h5>
      <span className={styles.date}>{trip.date}</span>
      <p className={styles.location}>📍{trip.location}</p>
      <p className={styles.description}>{trip.description}</p>
      <span className={styles.badge}>{trip.difficulty}</span>
    </li>
  );
}
