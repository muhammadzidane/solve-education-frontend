"use client";

import React from "react";

import { SessionProvider } from "next-auth/react";

import { ChildrenProps } from "@/types";

const NextAuthProvider: React.FC<ChildrenProps> = ({ children }) => (
  <SessionProvider>{children}</SessionProvider>
);

export default NextAuthProvider;
