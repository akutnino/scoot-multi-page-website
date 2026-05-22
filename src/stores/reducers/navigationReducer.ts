import type { NavigationReducerActionType } from '../../_types/stores/actions/navigation-types.ts';
import type { NavigationInitialStateType } from '../../_types/stores/reducers/navigation-types.ts';
import { navigationTypes } from '../_constants/navigationTypes.ts';

const NAVIGATION_INITIAL_STATE: NavigationInitialStateType = {
	dialogRef: null,
	isIconToggled: false,
};

function navigationReducer(
	currentState = NAVIGATION_INITIAL_STATE,
	action: NavigationReducerActionType
): NavigationInitialStateType {
	switch (action.type) {
		case navigationTypes.NAVIGATION_DIALOG_TOGGLE: {
			return {
				...currentState,
				isIconToggled: currentState.isIconToggled!,
			};
		}

		case navigationTypes.NAVIGATION_ADD_REF: {
			return {
				...currentState,
				dialogRef: action.payload,
			};
		}

		default: {
			return currentState;
		}
	}
}

export { navigationReducer, NAVIGATION_INITIAL_STATE };
