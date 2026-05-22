import type { RefObject } from 'react';

export type NavigationInitialStateType = {
	dialogRef: RefObject<HTMLDialogElement | null> | null;
	isIconToggled: boolean;
};
