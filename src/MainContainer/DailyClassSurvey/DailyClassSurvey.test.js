import React from "react";
import { render, screen } from "@testing-library/react";

import DailyClassSurvey from "./DailyClassSurvey";

test("renders content", () => {
  const survData = {
    day: 1,
    id: 1,
    topic: "Css",
  };

  const componentSurvey = render(
    <DailyClassSurvey dailyScheduleData={survData} />
  );

  expect(componentSurvey).toBeTruthy();
});

// test("renders learn react link", () => {
//   render(<Header />);
//   const myProfile = screen.getByRole("navigation");
//   expect(myProfile).toBeInTheDocument();
// });

// test("renders learn react link", () => {
//   render(<DailyClassSurvey />);
//   const myClassSurvey = screen.
// });
