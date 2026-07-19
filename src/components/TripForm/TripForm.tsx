import type { CreateTrip } from "../../types/trip";
import type { FormEvent } from "react";
import { useState } from "react";
interface TripFormProps {
  submitButtonText?: string;
  onSubmit: (trip: CreateTrip) => void;
  onCancel: () => void;
}

export default function TripForm({
  submitButtonText = "Create adventure",
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
  return (
    <form onSubmit={handleSubmit}>
      <input
        name="title"
        placeholder="Trip title"
        maxLength={30}
        value={formData.title ?? ""}
        onChange={(event) =>
          setFormData({ ...formData, title: event.target.value })
        }
        required
      />
      <input
        name="date"
        type="date"
        placeholder="Trip date"
        value={formData.date ?? ""}
        onChange={(event) =>
          setFormData({ ...formData, date: event.target.value })
        }
        required
      />
      <input
        name="location"
        placeholder="Trip location"
        value={formData.location ?? ""}
        onChange={(event) =>
          setFormData({ ...formData, location: event.target.value })
        }
        required
      />
      <input
        name="description"
        placeholder="Trip description"
        value={formData.description ?? ""}
        onChange={(event) =>
          setFormData({ ...formData, description: event.target.value })
        }
      />
      <select
        name="difficulty"
        value={formData.difficulty ?? "easy"}
        onChange={(event) =>
          setFormData({
            ...formData,
            difficulty: event.target.value as CreateTrip["difficulty"],
          })
        }
      >
        <option value="easy">Easy</option>
        <option value="medium">Medium</option>
        <option value="hard">Hard</option>
      </select>
      <button type="submit">{submitButtonText}</button>
      <button type="button" onClick={onCancel}>
        Cancel
      </button>
    </form>
  );
}
