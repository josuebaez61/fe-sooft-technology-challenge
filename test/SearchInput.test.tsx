import { render, screen, fireEvent } from "@testing-library/react";
import SearchInput from "../src/components/Molecules/SearchInput";
import "@testing-library/jest-dom";
import type { ClickableTextProps } from "../src/components/Atoms/ClickableText";
import type { InputProps } from "../src/components/Atoms/Input";

jest.mock("../src/components/Atoms/Input", () => (props: InputProps) => (
  <input
    data-testid="search-input"
    value={props.value}
    onChange={props.onChange}
    placeholder={props.placeholder}
    className={props.className}
  />
));

jest.mock(
  "../src/components/Atoms/ClickableText",
  () => (props: ClickableTextProps) =>
    (
      <button
        data-testid="clear-btn"
        onClick={props.onClick}
        className={props.className}
      >
        {props.text}
      </button>
    )
);

describe("SearchInput", () => {
  test("renders input with placeholder", () => {
    render(<SearchInput />);
    expect(screen.getByTestId("search-input")).toBeInTheDocument();
    expect(screen.getByTestId("search-input")).toHaveAttribute(
      "placeholder",
      "Escriba su búsqueda y espere un instante..."
    );
  });

  test("calls onChange when input changes", () => {
    const onChange = jest.fn();
    render(<SearchInput onChange={onChange} />);
    fireEvent.change(screen.getByTestId("search-input"), {
      target: { value: "test" },
    });
    expect(onChange).toHaveBeenCalled();
  });

  test("shows clear button with correct opacity when showClearSearchButton is true", () => {
    render(<SearchInput showClearSearchButton={true} />);
    const clearBtn = screen.getByTestId("clear-btn");
    expect(clearBtn).toBeInTheDocument();
    expect(clearBtn.className).toMatch(/opacity-100/);
  });

  test("hides clear button (opacity-0) when showClearSearchButton is false", () => {
    render(<SearchInput showClearSearchButton={false} />);
    const clearBtn = screen.getByTestId("clear-btn");
    expect(clearBtn).toBeInTheDocument();
    expect(clearBtn.className).toMatch(/opacity-0/);
  });

  test("calls onClear when clear button is clicked", () => {
    const onClear = jest.fn();
    render(<SearchInput showClearSearchButton={true} onClear={onClear} />);
    fireEvent.click(screen.getByTestId("clear-btn"));
    expect(onClear).toHaveBeenCalled();
  });
});
