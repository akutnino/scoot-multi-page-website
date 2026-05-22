import type { RefObject } from 'react';
import type { navigationTypes } from '../../../stores/_constants/navigationTypes.ts';

export type NavigationDialogToggleActionType = {
	type: typeof navigationTypes.NAVIGATION_DIALOG_TOGGLE;
};

export type NavigationAddRefActionType = {
	type: typeof navigationTypes.NAVIGATION_ADD_REF;
	payload: RefObject<HTMLDialogElement | null>;
};

export type NavigationReducerActionType =
	| NavigationDialogToggleActionType
	| NavigationAddRefActionType;
