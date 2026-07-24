import css from "./Hero.module.css";
import bgImage from "../../assets/hero-img-1.jpg";
export interface HeroProps {
  title: string;
  subtitle: string;
  buttonText: string;
  onClick: () => void;
}

export default function Hero({
  title,
  buttonText,
  subtitle,
  onClick,
}: HeroProps) {
  return (
    <section
      className={css.image}
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.15), rgba(0, 0, 0, 0.35)), url(${bgImage})`,
      }}
    >
      <h1 className={css.title}>{title}</h1>

      <p className={css.subtitle}>{subtitle}</p>
      <button className={css.button} type="button" onClick={onClick}>
        {buttonText}
      </button>
    </section>
  );
}
