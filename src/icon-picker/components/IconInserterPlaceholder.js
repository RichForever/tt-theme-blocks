import { __ } from '@wordpress/i18n';
import { Button, Placeholder } from '@wordpress/components';

const IconInserterPlaceholder = ( { onClick } ) => {
	return (
		<Placeholder
			label={ __( 'Custom icon', 'tt-theme-blocks' ) }
			instructions={ __( 'Insert a custom SVG.', 'tt-theme-blocks' ) }
		>
			<div>
				<Button variant="secondary" onClick={ onClick }>
					{ __( 'Insert custom SVG', 'tt-theme-blocks' ) }
				</Button>
			</div>
		</Placeholder>
	);
};

export default IconInserterPlaceholder;
