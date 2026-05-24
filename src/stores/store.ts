import {
	applyMiddleware,
	combineReducers,
	legacy_createStore as createStore,
} from 'redux';
import { thunk, type ThunkMiddleware } from 'redux-thunk';
import { composeWithDevTools } from '@redux-devtools/extension';
import type { NavigationInitialStateType } from '../_types/stores/reducers/navigation-types.ts';
import {
	NAVIGATION_INITIAL_STATE,
	navigationReducer,
} from './reducers/navigationReducer.ts';
import type {
	AppActions,
	AppState,
	RootReducerType,
	StoreType,
} from '../_types/stores/types.ts';

const preLoadedState: {
	navigation: NavigationInitialStateType;
} = {
	navigation: NAVIGATION_INITIAL_STATE,
};

const rootReducer: RootReducerType = combineReducers({
	navigation: navigationReducer,
});

const store: StoreType = createStore(
	rootReducer,
	preLoadedState,
	composeWithDevTools(applyMiddleware(thunk as ThunkMiddleware<AppState, AppActions>))
);

export { store as default, rootReducer, preLoadedState };
