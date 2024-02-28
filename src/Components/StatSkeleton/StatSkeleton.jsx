import React from "react";
import "./StatSkeleton.css";

const StatSkeleton = () => {
  return (
    <div className="container skeleton">
      {/* Placeholder for image */}
      <div className="container-left">
        <div className="skeleton-image"></div>
        <div className="skeleton-name"></div>
      </div>
      {/* Placeholder for stats */}
      <div className="container-right-skeleton">
        <div className="container-right-top-skeleton">
          <div className="types">
            <div className="skeleton-type"></div>
            <div className="skeleton-type"></div>
          </div>
          <div className="abilities-skeleton">
            <div className="skeleton-ability"></div>
            <div className="skeleton-ability"></div>
          </div>
        </div>
        <div className="stats">
          <ul>
            {/* Placeholder for stats */}
            <li className="skeleton-stat">
              <div className="name-skeleton"></div>
              <div className="name-skeleton"></div>
              <div className="bar-skeleton"></div>
            </li>
            <li className="skeleton-stat">
              <div className="name-skeleton"></div>
              <div className="name-skeleton"></div>
              <div className="bar-skeleton"></div>
            </li>
            <li className="skeleton-stat">
              <div className="name-skeleton"></div>
              <div className="name-skeleton"></div>
              <div className="bar-skeleton"></div>
            </li>
            <li className="skeleton-stat">
              <div className="name-skeleton"></div>
              <div className="name-skeleton"></div>
              <div className="bar-skeleton"></div>
            </li>
            <li className="skeleton-stat">
              <div className="name-skeleton"></div>
              <div className="name-skeleton"></div>
              <div className="bar-skeleton"></div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default StatSkeleton;
