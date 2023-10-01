"use client";

import * as React from "react";
import {
  QueryClientProvider as BaseProvider,
  QueryClient,
} from "@tanstack/react-query";
import { type ThemeProviderProps } from "next-themes/dist/types";

export function QueryClientProvider({ children, ...rest }: ThemeProviderProps) {
  return (
    <BaseProvider client={new QueryClient()} {...rest}>
      {children}
    </BaseProvider>
  );
}
