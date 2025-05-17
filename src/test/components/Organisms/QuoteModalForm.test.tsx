import { render } from "@testing-library/react";
import QuoteModalForm from "../../../components/Organisms/QuoteModalForm";

describe("QuoteModalForm", () => {
  const onCreate = jest.fn();
  const onClose = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("should match snapshot", () => {
    const { container } = render(
      <QuoteModalForm
        visible={true}
        onCreate={onCreate}
        onClose={onClose}
        isCreating={false}
        createError={null}
      />
    );
    expect(container).toMatchSnapshot();
  });

  test("shows alert if createError changes", () => {
    const alertSpy = jest.spyOn(window, "alert").mockImplementation(() => {});
    const { rerender } = render(
      <QuoteModalForm
        visible={true}
        onCreate={onCreate}
        onClose={onClose}
        isCreating={false}
        createError={null}
      />
    );
    rerender(
      <QuoteModalForm
        visible={true}
        onCreate={onCreate}
        onClose={onClose}
        isCreating={false}
        createError="Test error"
      />
    );
    expect(alertSpy).toHaveBeenCalledWith("Test error");
    alertSpy.mockRestore();
  });
});
