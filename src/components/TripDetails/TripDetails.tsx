import type { Trip } from "../../types/trip";
import { formatDateRange } from "../../utils/formatDate";
import styles from "./TripDetails.module.css";
interface TripDetailsProps {
  trip: Trip;
}
export default function TripDetails({ trip }: TripDetailsProps) {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h3 className={styles.title}>{trip.title}</h3>
        <span className={`${styles.badge} ${styles[trip.difficulty]}`}>
          {trip.difficulty}
        </span>

        <span className={styles.statusBadge}>{trip.status}</span>
      </div>

      <div className={styles.meta}>
        <span className={styles.location}>📍 {trip.location}</span>
        <span className={styles.date}>
          📅 {formatDateRange(trip.startDate, trip.endDate)}
        </span>
      </div>

      {trip.description && (
        <div className={styles.descriptionSection}>
          <h4>Description</h4>
          <p className={styles.description}>{trip.description}</p>
        </div>
      )}
    </div>
  );
}
