import type { navigationTypes } from '../../../stores/_constants/navigationTypes.ts';

export type NavigationDialogToggleActionType = {
	type: typeof navigationTypes.NAVIGATION_DIALOG_TOGGLE;
};

export type NavigationReducerActionType = NavigationDialogToggleActionType;
