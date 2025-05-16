/* eslint-disable @typescript-eslint/no-explicit-any */
import type { PropsWithChildren, ReactNode } from "react";
import "./Card.scss";
import classNames from "classnames";

interface CardProps extends PropsWithChildren {
  className?: string;
}

function Card({ children, className }: CardProps) {
  // Separa Header, Body y Footer de los children
  const header: ReactNode[] = [];
  const body: ReactNode[] = [];
  const footer: ReactNode[] = [];
  const others: ReactNode[] = [];

  // Normaliza children a array y clasifica
  (Array.isArray(children) ? children : [children]).forEach((child) => {
    if (
      child &&
      typeof child === "object" &&
      "type" in child &&
      (child.type as any).displayName === "CardHeader"
    ) {
      header.push(child);
    } else if (
      child &&
      typeof child === "object" &&
      "type" in child &&
      (child.type as any).displayName === "CardBody"
    ) {
      body.push(child);
    } else if (
      child &&
      typeof child === "object" &&
      "type" in child &&
      (child.type as any).displayName === "CardFooter"
    ) {
      footer.push(child);
    } else {
      others.push(child);
    }
  });

  return (
    <div
      className={classNames(
        "card border border-golden p-5 flex flex-col",
        className
      )}
    >
      {header.length > 0 && header}
      {body}
      {others}
      {footer.length > 0 && footer}
    </div>
  );
}

const CardHeader = function ({ children }: PropsWithChildren) {
  return <div className="card-header mb-4 relative">{children}</div>;
};
CardHeader.displayName = "CardHeader";

const CardBody = function ({ children }: PropsWithChildren) {
  return <div className="card-body text-golden">{children}</div>;
};
CardBody.displayName = "CardBody";

const CardFooter = function ({ children }: PropsWithChildren) {
  return <div className="card-footer mt-4">{children}</div>;
};
CardFooter.displayName = "CardFooter";

Card.Header = CardHeader;
Card.Body = CardBody;
Card.Footer = CardFooter;

export default Card;
