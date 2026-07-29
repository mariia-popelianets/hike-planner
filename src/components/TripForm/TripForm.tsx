import type { CreateTrip } from "../../types/trip";
import type { ChangeEvent, FormEvent } from "react";
import { useState } from "react";
import css from "./TripForm.module.css";
interface TripFormProps {
  submitButtonText?: string;
  onSubmit: (trip: CreateTrip) => void;
  onCancel: () => void;
}

export default function TripForm({
  submitButtonText = "Create",
  onSubmit,
  onCancel,
}: TripFormProps) {
  const [formData, setFormData] = useState<CreateTrip>({
    title: "",
    startDate: "",
    endDate: "",
    location: "",
    description: "",
    difficulty: "easy",
  });
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit(formData);
  };
  const handleChange = (
    event: ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  return (
    <form onSubmit={handleSubmit} className={css.form}>
      <h2 className={css.title}>Create new adventure</h2>
      <div className={css.field}>
        <label htmlFor="trip-title" className={css.label}>
          Title
        </label>
        <input
          className={css.input}
          id="trip-title"
          name="title"
          placeholder="Trip title"
          maxLength={30}
          value={formData.title}
          onChange={handleChange}
          required
        />
      </div>
      <div className={css.dateGroup}>
        <div className={css.dateField}>
          <label htmlFor="trip-start-date" className={css.subLabel}>
            Start Date
          </label>
          <input
            className={css.input}
            id="trip-start-date"
            name="startDate"
            type="date"
            value={formData.startDate}
            onChange={handleChange}
            required
          />
        </div>

        <div className={css.dateField}>
          <label htmlFor="trip-end-date" className={css.subLabel}>
            End Date
          </label>
          <input
            className={css.input}
            id="trip-end-date"
            name="endDate"
            type="date"
            value={formData.endDate}
            onChange={handleChange}
            min={formData.startDate}
            required
          />
        </div>
      </div>
      <div className={css.field}>
        <label htmlFor="trip-location" className={css.label}>
          Location
        </label>
        <input
          className={css.input}
          id="trip-location"
          name="location"
          placeholder="Trip location"
          value={formData.location}
          onChange={handleChange}
          required
        />
      </div>
      <div className={css.field}>
        <label htmlFor="trip-description" className={css.label}>
          Description
        </label>
        <textarea
          className={css.textarea}
          id="trip-description"
          name="description"
          placeholder="Trip description"
          value={formData.description}
          onChange={handleChange}
        />
      </div>
      <div className={css.field}>
        <label htmlFor="trip-difficulty" className={css.label}>
          Difficulty
        </label>
        <select
          className={css.select}
          id="trip-difficulty"
          name="difficulty"
          value={formData.difficulty}
          onChange={handleChange}
        >
          <option value="easy">Easy</option>
          <option value="medium">Medium</option>
          <option value="hard">Hard</option>
        </select>
      </div>
      <div className={css.actions}>
        <button type="submit" className={css.submitBtn}>
          {submitButtonText}
        </button>
        <button type="button" onClick={onCancel} className={css.cancelBtn}>
          Cancel
        </button>
      </div>
    </form>
  );
}
