import { useCallback } from '@wordpress/element';
import { __ } from '@wordpress/i18n';
import { dispatch } from '@wordpress/data';

/**
 * Custom hook to display snackbar messages for SVG upload errors.
 *
 * @return {Function} Function to display a message.
 */
export const useDisplayMessage = () => {
	const displayMessage = useCallback( ( messageType ) => {
		const messages = {
			fileTypeUploadError: __(
				'An error occurred while uploading. The file does not appear to be an SVG.',
				'tt-theme-blocks'
			),
			fileTypeSelectError: __(
				'An error occurred while inserting the icon. The media selected is not an SVG.',
				'tt-theme-blocks'
			),
			fileTypeError: __(
				'An error occurred while inserting the icon. Check that the file is a valid SVG.',
				'tt-theme-blocks'
			),
		};

		dispatch( 'core/notices' ).createNotice(
			'snackbar-notice',
			messages[ messageType ] || messages.fileTypeError,
			{ type: 'snackbar', isDismissible: true }
		);
	}, [] );

	return displayMessage;
};
