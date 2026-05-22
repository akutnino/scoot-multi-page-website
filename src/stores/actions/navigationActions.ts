import type { RefObject } from 'react';
import { navigationTypes } from '../_constants/navigationTypes.ts';
import type {
	NavigationAddRefActionType,
	NavigationDialogToggleActionType,
} from '../../_types/stores/actions/navigation-types.ts';

export function navigationToggleDialog(): NavigationDialogToggleActionType {
	return { type: navigationTypes.NAVIGATION_DIALOG_TOGGLE };
}

export function navigationAddRef(
	dialogRef: RefObject<HTMLDialogElement | null>
): NavigationAddRefActionType {
	return {
		type: navigationTypes.NAVIGATION_ADD_REF,
		payload: dialogRef,
	};
}
