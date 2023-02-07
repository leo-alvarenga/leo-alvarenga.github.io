import { lazy } from "react";

export const Tooltip = lazy(() => import("./Tooltip"));
export const Page = lazy(() => import("./Page"));
export const Profile = lazy(() => import("./Profile"));
export const TableOfContents = lazy(() => import("./TableOfContents"));
export const SkillList = lazy(() => import("./SkillList"));
export const ContactList = lazy(() => import("./ContactList"));
export const ProjectList = lazy(() => import("./ProjectList"));

export * from "./TableOfContents";
