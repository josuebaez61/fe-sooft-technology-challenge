import type { PropsWithChildren } from "react";
import "./Card.scss";
import classNames from "classnames";

interface CardProps extends PropsWithChildren {
  className?: string;
}

function Card({ children, className }: CardProps) {
  return (
    <div className={classNames("card border border-golden p-5", className)}>
      {children}
    </div>
  );
}

Card.Body = function ({ children }: PropsWithChildren) {
  return <div className="card-body text-golden">{children}</div>;
};

export default Card;
