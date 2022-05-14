import { curry, test } from "ramda";

export const validateEmail = curry(test(/^(\w)+@+(\w)+\.+(\w{2,10})$/));

export const validatePhoneNumber = curry(
  test(/^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/),
);
