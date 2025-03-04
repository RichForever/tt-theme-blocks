import { __ } from '@wordpress/i18n';
import { Button, Placeholder } from '@wordpress/components';

const SectionPlaceholder = ( { onClick } ) => {
	return (
		<Placeholder
			label={ __( 'Section', 'tt-theme-blocks' ) }
			instructions={ __(
				'Choose an block from the library.',
				'tt-theme-blocks'
			) }
		>
			<div>
				<Button variant="secondary" onClick={ onClick }>
					{ __( 'Insert block', 'tt-theme-blocks' ) }
				</Button>
			</div>
		</Placeholder>
	);
};

export default SectionPlaceholder;
