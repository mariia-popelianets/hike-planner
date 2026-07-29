import type { Trip } from "../../types/trip";
import styles from "./TripCard.module.css";

interface TripCardProps {
  trip: Trip;
  onDelete: (id: string) => void;
}

export default function TripCard({ trip, onDelete }: TripCardProps) {
  const formatDates = (start: string, finish: string) => {
    if (!start) return "";

    const format = (d: string) => d.split("-").reverse().join(".");

    const startDateFormatted = format(start);
    const finishDateFormatted = finish ? format(finish) : startDateFormatted;

    if (!finish || startDateFormatted === finishDateFormatted) {
      return startDateFormatted;
    }

    return `${startDateFormatted} – ${finishDateFormatted}`;
  };

  return (
    <li className={styles.card}>
      <button
        className={styles.deleteBtn}
        onClick={() => onDelete(trip.id)}
        aria-label="Delete"
      >
        ✕
      </button>

      <div className={styles.header}>
        <h5 className={styles.title}>{trip.title}</h5>
        <span className={`${styles.badge} ${styles[trip.difficulty]}`}>
          {trip.difficulty}
        </span>
      </div>

      <div className={styles.meta}>
        <span className={styles.location}>📍 {trip.location}</span>
        <span className={styles.date}>
          📅 {formatDates(trip.startDate, trip.finishDate)}
        </span>
      </div>

      {trip.description && (
        <p className={styles.description}>{trip.description}</p>
      )}
    </li>
  );
}
