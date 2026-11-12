import React from "react";
import { useNavigate } from "react-router-dom";
import { FiArrowUpRight } from "react-icons/fi";
import "./Card.css";

function Card({ title, iconSrc, theme, type, countLabel, subtitle, isFeatured = false }) {
  const navigate = useNavigate();

  const handleClick = () => {
    const slug = (type || title).trim().toLowerCase();
    navigate(`/products/${encodeURIComponent(slug)}`);
  };

  return (
    <button
      type="button"
      className={`cira-cat-card theme-${theme} ${isFeatured ? "cira-cat-card--featured" : ""}`}
      onClick={handleClick}
    >
      <div className="cira-cat-card__media">
        <img src={iconSrc} alt={title} className="cira-cat-card__photo" loading="lazy" />
        <span className="cira-cat-card__count">{countLabel}</span>
      </div>

      <div className="cira-cat-card__content">
        <div className="cira-cat-card__body">
          {isFeatured && (
            <span className="cira-cat-card__eyebrow">Turnkey Industrial Automation</span>
          )}
          <h3 className="cira-cat-card__title">{title}</h3>
          <p className="cira-cat-card__sub">{subtitle}</p>
        </div>

        <div className="cira-cat-card__foot">
          <span>{isFeatured ? "Explore PLC & DCS Systems" : "Explore Range"}</span>
          <FiArrowUpRight className="cira-cat-card__arrow" aria-hidden="true" />
        </div>
      </div>
    </button>
  );
}

export default Card;
