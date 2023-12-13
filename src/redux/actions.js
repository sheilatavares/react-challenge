import { UPDATE_FIRST_NAME, UPDATE_LAST_NAME } from "./actionTypes";
import elements from "../data/elements.json";

const periodicElements = elements.elements;

export const updateFirstName = (firstName) => {
  function findElement(arr, symbol) {
    const foundElements = [];
    let found = false;

    arr.forEach((letter, index) => {
      if (foundElements.length < 2 && !found) {
        const nextLetter = arr[index + 1];
        if (nextLetter !== undefined) {
          const name = (letter + nextLetter).toLowerCase();

          periodicElements.forEach((element) => {
            if (!found && element[symbol]?.toLowerCase().includes(name)) {
              const foundString = arr.slice(index, index + 2).join("");
              const capitalizedString =
                foundString.charAt(0) + foundString.slice(1);
              foundElements.push(capitalizedString);
              found = true;
            }
          });
        }
      }
    });

    if (foundElements.length === 0) {
      return [arr.join("")];
    } else {
      return [arr.join(""), ...foundElements];
    }
  }

  return (dispatch, getState) => {
    dispatch({
      type: UPDATE_FIRST_NAME,
      payload: firstName,
    });

    const updatedFirstName = getState().names.firstName;

    const foundElement = findElement(updatedFirstName.split(""), "symbol");

    dispatch({
      type: UPDATE_FIRST_NAME,
      payload: foundElement,
    });
  };
};

export const updateLastName = (lastName) => {
  function findElement(arr, symbol) {
    const foundElements = [];
    let found = false;

    arr.forEach((letter, index) => {
      if (foundElements.length < 2 && !found) {
        const nextLetter = arr[index + 1];
        if (nextLetter !== undefined) {
          const name = (letter + nextLetter).toLowerCase();

          periodicElements.forEach((element) => {
            if (!found && element[symbol]?.toLowerCase().includes(name)) {
              const foundString = arr.slice(index, index + 2).join("");
              const capitalizedString =
                foundString.charAt(0) + foundString.slice(1);
              foundElements.push(capitalizedString);
              found = true;
            }
          });
        }
      }
    });

    if (foundElements.length === 0) {
      return [arr.join("")];
    } else {
      return [arr.join(""), ...foundElements];
    }
  }

  return (dispatch, getState) => {
    dispatch({
      type: UPDATE_LAST_NAME,
      payload: lastName,
    });

    const updatedLastName = getState().names.lastName;

    const foundElement = findElement(updatedLastName.split(""), "symbol");

    dispatch({
      type: UPDATE_LAST_NAME,
      payload: foundElement,
    });
  };
};
