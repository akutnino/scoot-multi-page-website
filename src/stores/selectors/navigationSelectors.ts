import type { NavigationInitialStateType } from '../../_types/stores/reducers/navigation-types.ts';
import type { AppState } from '../../_types/stores/types.ts';

const selectNavigation = (store: AppState): NavigationInitialStateType =>
	store.navigation;

export { selectNavigation };
