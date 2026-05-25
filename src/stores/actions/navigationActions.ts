import { navigationTypes } from '../_constants/navigationTypes.ts';
import type { NavigationDialogToggleActionType } from '../../_types/stores/actions/navigation-types.ts';

export function navigationToggleDialog(): NavigationDialogToggleActionType {
	return { type: navigationTypes.NAVIGATION_DIALOG_TOGGLE };
}
