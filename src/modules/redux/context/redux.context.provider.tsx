import React, { PropsWithChildren } from "react";
import { Provider as ReduxProvider } from "react-redux";

import { store } from "../store";

export function ReduxContextProvider(props: PropsWithChildren) {
  const { children } = props;

  return (
    <ReduxProvider store={store}>
      {children}
    </ReduxProvider>
  );
}
