import Storage, { PersistanceKeys } from "../utils/storage";
import { Actions, AppState, Observer, Screens } from "../types/store";
import { reducer } from "./reducer";
import { onAuthStateChanged } from "firebase/auth";
import { navigate } from "./action";
import { auth } from "../utils/firebase";

onAuthStateChanged(auth,(user) => {
  if (user) {
     user.email //!== null ? dispatch(setUserCredentials(user.email)) : '';
    dispatch(navigate(Screens.PROFILE));
  } else {
    dispatch(navigate(Screens.SIGNUP))
  }
});

const emptyState: AppState = {
  screen: Screens.LOGIN,
};

export let appState = Storage.get<AppState>({
  key: PersistanceKeys.STORE,
  defaultValue: emptyState,
});

let observers: Observer[] = [];

const persistStore = (state: AppState) =>
  Storage.set({ key: PersistanceKeys.STORE, value: state });

const notifyObservers = () => observers.forEach((o) => o.render());

export const dispatch = (action: Actions) => {
  const clone = JSON.parse(JSON.stringify(appState));
  const newState = reducer(action, clone);
  appState = newState;

  persistStore(newState);
  notifyObservers();
};

export const addObserver = (ref: Observer) => {
  observers = [...observers, ref];
};