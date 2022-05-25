import { applySpec, pathOr, prop } from "ramda";

export default (error: any) => ({
  error: {
    message: pathOr(prop("message", error), ["response", "data"])(error),
  },
});
