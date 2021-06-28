import React from "react";
import { render, screen } from "@testing-library/react";

import ClassFeelings from "./ClassFeelings";

test("renders content", () => {
  const votesData = {
    totalVotes: 22,
    like: 90,
    dislike: 10,
  };

  const componentVotes = render(<ClassFeelings classVotes={votesData} />);

  expect(componentVotes).toBeTruthy();
});
