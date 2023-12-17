import { createContext } from "react";

export const i18n = {
  he: {
    hello: "שלום",
  }
};

export default createContext(id => i18n.en[id]);