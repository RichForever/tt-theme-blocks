import { useModalState } from '@hooks';

import { useState } from '@wordpress/element';

/**
 * Manages state for the icon picker block.
 * This hook manages the state for the icon picker block (e.g., selected icon, modal state).
 * @return {Object} - An object containing `selectedIcon`, `setSelectedIcon`, `isModalOpen`, `openModal`, and `closeModal`.
 */
export const useIconPickerState = () => {
	const [ selectedIcon, setSelectedIcon ] = useState( '' );
	const { isModalOpen, openModal, closeModal } = useModalState();

	return {
		selectedIcon,
		setSelectedIcon,
		isModalOpen,
		openModal,
		closeModal,
	};
};
