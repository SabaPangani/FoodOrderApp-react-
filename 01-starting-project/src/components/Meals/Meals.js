import React from "react";
import MealsSummary from "./MealsSummary";
import { AvailableMeals } from "./AvailableMeals.js";

export const Meals = () => {
  return (
    <>
      <MealsSummary />
      <AvailableMeals />
    </>
  );
};
