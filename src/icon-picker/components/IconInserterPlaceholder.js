import { __ } from '@wordpress/i18n';
import { Button, Placeholder } from '@wordpress/components';

const IconInserterPlaceholder = ( { onAddIcon } ) => {
	return (
		<Placeholder
			label={ __( 'Custom icon', 'tt-theme-blocks' ) }
			instructions={ __(
				'Choose an icon from the library, pick one from your media library, or insert a custom SVG.',
				'tt-theme-blocks'
			) }
		>
			<div>
				<Button variant="secondary" onClick={ onAddIcon }>
					{ __( 'Insert custom SVG', 'tt-theme-blocks' ) }
				</Button>
			</div>
		</Placeholder>
	);
};

export default IconInserterPlaceholder;
