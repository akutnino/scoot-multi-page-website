import type { Dispatch, Reducer, Store } from 'redux';
import type { NavigationReducerActionType } from './actions/navigation-types.ts';
import type { preLoadedState, rootReducer } from '../../stores/store.ts';

export type AppActions = NavigationReducerActionType;

export type RootReducerType = Reducer<typeof preLoadedState, AppActions>;

export type StoreType = Store<typeof preLoadedState, AppActions>;

export type AppState = ReturnType<typeof rootReducer>;

type DispatchType = Dispatch<AppActions>;

export type AppDispatch = DispatchType;
