import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import QuoteList from "../../../components/Organisms/QuoteList";
import type { Quote } from "../../../models";
import type { QuoteCardProps } from "../../../components/Molecules/QuoteCard";
import type { LoadErrorMessageProps } from "../../../components/Molecules/LoadErrorMessage";

jest.mock("../../../components/Molecules/EmptyMessage", () => () => (
  <div data-testid="empty-message">No quotes</div>
));
jest.mock(
  "../../../components/Molecules/LoadErrorMessage",
  () => (props: LoadErrorMessageProps) =>
    <div data-testid="error-message">{props.message}</div>
);
jest.mock(
  "../../../components/Molecules/QuoteCard",
  () => (props: QuoteCardProps) =>
    (
      <div
        data-testid="quote-card"
        onClick={() => props.onDelete(props.quote.id)}
      >
        {props.quote.author}: {props.quote.quote}
      </div>
    )
);
jest.mock("../../../components/Atoms/Spinner", () => () => (
  <div data-testid="spinner">Loading...</div>
));

const mockQuotes: Quote[] = [
  { id: "1", author: "Author 1", quote: "Quote 1" },
  { id: "2", author: "Author 2", quote: "Quote 2" },
];

describe("QuoteList", () => {
  test("renders spinner when loading", () => {
    render(
      <QuoteList
        isLoading={true}
        quotes={[]}
        loadError={null}
        onDeleteQueue={jest.fn()}
      />
    );
    expect(screen.getByTestId("spinner")).toBeInTheDocument();
  });

  test("renders error message when loadError is present", () => {
    render(
      <QuoteList
        isLoading={false}
        quotes={[]}
        loadError="Something went wrong"
        onDeleteQueue={jest.fn()}
      />
    );
    expect(screen.getByTestId("error-message")).toHaveTextContent(
      "Something went wrong"
    );
  });

  test("renders empty message when quotes is empty", () => {
    render(
      <QuoteList
        isLoading={false}
        quotes={[]}
        loadError={null}
        onDeleteQueue={jest.fn()}
      />
    );
    expect(screen.getByTestId("empty-message")).toBeInTheDocument();
  });

  test("renders quote cards when quotes are present", () => {
    render(
      <QuoteList
        isLoading={false}
        quotes={mockQuotes}
        loadError={null}
        onDeleteQueue={jest.fn()}
      />
    );
    const cards = screen.getAllByTestId("quote-card");
    expect(cards).toHaveLength(2);
    expect(cards[0]).toHaveTextContent("Author 1: Quote 1");
    expect(cards[1]).toHaveTextContent("Author 2: Quote 2");
  });

  test("calls onDeleteQueue when a quote card is clicked", () => {
    const onDeleteQueue = jest.fn();
    render(
      <QuoteList
        isLoading={false}
        quotes={mockQuotes}
        loadError={null}
        onDeleteQueue={onDeleteQueue}
      />
    );
    const cards = screen.getAllByTestId("quote-card");
    fireEvent.click(cards[0]);
    expect(onDeleteQueue).toHaveBeenCalledWith("1");
  });
});
