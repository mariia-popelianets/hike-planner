import type { Trip } from "../../types/trip";
import { formatDateRange } from "../../utils/formatDate";
import styles from "./TripCard.module.css";

interface TripCardProps {
  trip: Trip;
  onViewDetails: (trip: Trip) => void;
  onDelete: (id: string) => void;
}

export default function TripCard({
  trip,
  onDelete,
  onViewDetails,
}: TripCardProps) {
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
        <span className={styles.badge}>{trip.status}</span>
      </div>
      <div className={styles.meta}>
        <span className={styles.location}>📍 {trip.location}</span>
        <span className={styles.date}>
          📅 {formatDateRange(trip.startDate, trip.endDate)}
        </span>
      </div>
      {trip.description && (
        <p className={styles.description}>{trip.description}</p>
      )}
      <button
        className={styles.viewBtn}
        type="button"
        onClick={() => onViewDetails(trip)}
      >
        View Details
      </button>
    </li>
  );
}
