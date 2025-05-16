import type { PropsWithChildren } from "react";
import "./Card.scss";

function Card({ children }: PropsWithChildren) {
  return <div className="card border border-golden p-5">{children}</div>;
}

Card.Body = function ({ children }: PropsWithChildren) {
  return <div className="card-body text-golden">{children}</div>;
};

export default Card;
