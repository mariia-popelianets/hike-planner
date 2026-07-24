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
    date: "",
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
      <div className={css.field}>
        <label htmlFor="trip-date" className={css.label}>
          Date
        </label>
        <input
          className={css.input}
          id="trip-date"
          name="date"
          type="date"
          placeholder="Trip date"
          value={formData.date}
          onChange={handleChange}
          required
        />
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
