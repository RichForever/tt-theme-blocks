import { __ } from '@wordpress/i18n';
import { Button, Placeholder } from '@wordpress/components';
import { MediaUpload, MediaUploadCheck } from '@wordpress/block-editor';
import { useIconUpload } from '../hooks';

const IconInserterPlaceholder = ( {
	openModal,
	attributes,
	setAttributes,
	isSVGUploadAllowed,
} ) => {
	const handleSelectIcon = useIconUpload( attributes, setAttributes );
	return (
		<Placeholder
			label={ __( 'Custom icon', 'tt-theme-blocks' ) }
			instructions={ __(
				'Choose an icon from the library or insert a custom SVG.',
				'tt-theme-blocks'
			) }
		>
			{ isSVGUploadAllowed && (
				<MediaUploadCheck>
					<MediaUpload
						onSelect={ handleSelectIcon }
						allowedTypes={ [ 'image/svg+xml' ] }
						render={ ( { open } ) => (
							<Button variant="primary" onClick={ open }>
								{ __(
									'Open Media Library',
									'tt-theme-blocks'
								) }
							</Button>
						) }
					/>
				</MediaUploadCheck>
			) }
			<Button variant="secondary" onClick={ openModal }>
				{ __( 'Insert custom SVG', 'tt-theme-blocks' ) }
			</Button>
		</Placeholder>
	);
};

export default IconInserterPlaceholder;
