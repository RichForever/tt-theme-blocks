import { useSelect } from '@wordpress/data';
export const useSvgUploadAllowed = () => {
	const { allowedMimeTypes } = useSelect( ( select ) => {
		const { getSettings } = select( 'core/block-editor' );

		return {
			allowedMimeTypes: getSettings().allowedMimeTypes,
			mediaUpload: getSettings().mediaUpload,
		};
	}, [] );

	const isSVGUploadAllowed = allowedMimeTypes
		? Object.values( allowedMimeTypes ).includes( 'image/svg+xml' )
		: false;

	return isSVGUploadAllowed;
};
