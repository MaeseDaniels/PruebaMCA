import { render, screen } from "@testing-library/react";

import {
  formatTableDate,
  millisToMInSecFormat,
  twoDigit,
} from "./utils/functions";

test("renders learn react link", () => {
  render(
    <header className="header">
      <h1>Podcaster</h1>
    </header>
  );
  const linkElement = screen.getByText(/Podcaster/i);
  expect(linkElement).toBeInTheDocument();
});

test("Two digit Format", () => {
  expect(twoDigit(1)).toBe("01");
  expect(twoDigit(10)).toBe("10");
});

test("millisToMInSecFormat", () => {
  expect(millisToMInSecFormat(12312312)).toBe("03:25:12");
  expect(millisToMInSecFormat(123123123)).toBe("34:12:03");
});

test("formaTableDate", () => {
  expect(formatTableDate(1711451396835)).toBe("26/03/2024");
});
