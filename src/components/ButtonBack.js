import React from "react";
import { Link } from "gatsby";

export default function ButtonBack({ to, label }) {
  return (
    <Link className="text-link" to={to || "/"}>
      {label || `Page d'acceuil`}
    </Link>
  );
}
