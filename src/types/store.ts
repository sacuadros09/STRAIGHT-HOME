import { User } from "firebase/auth";

export type Observer = { render: () => void } & HTMLElement;

export enum Screens {
  LANDING = "LANDING",
  LOGIN = "LOGIN",
  SIGNUP = "SIGNUP",
  DASHBOARD = "DASHBOARD",
  PROFILE = "PROFILE"

}

export type AppState = {
  screen: Screens;
};

export enum UserActions {
  "ADD" = "ADD",
  "GET" = "GET"
}

export enum NavigationActions {
  "NAVIGATE" = "NAVIGATE",
}

export interface AddRegisterAction {
  action: UserActions.ADD,
  payload: User
}

export interface GetLoginAction {
  action: UserActions.GET,
  payload: User[]
}



export interface NavigateAction {
  action: NavigationActions.NAVIGATE;
  payload: Screens;
}

export type Actions = NavigateAction|AddRegisterAction|GetLoginAction

