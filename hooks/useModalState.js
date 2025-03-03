import { useState } from '@wordpress/element';

/**
 * Manages modal state (open/close).
 * This hook manages the state for modals (e.g., open/close).
 * @param {boolean} initialState - The initial state of the modal (default: false).
 * @return {Object} - An object containing `isModalOpen`, `openModal`, and `closeModal`.
 */
export const useModalState = ( initialState = false ) => {
	const [ isModalOpen, setIsModalOpen ] = useState( initialState );

	const openModal = () => setIsModalOpen( true );
	const closeModal = () => setIsModalOpen( false );

	return { isModalOpen, openModal, closeModal };
};
