import { Shapes } from '@icons';

import { __ } from '@wordpress/i18n';
import { registerBlockType } from '@wordpress/blocks';
import { Button, __experimentalVStack as VStack } from '@wordpress/components';

import Edit from './edit';
import Save from './save';
import metadata from './block.json';

import './style.scss';

/**
 * Every block starts by registering a new block type definition.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 *
 * Icon library - tabler icons
 *
 * @see https://tabler.io/icons
 */
registerBlockType( metadata.name, {
	edit: Edit,
	save: Save,
	icon: Shapes,
	description: (
		<VStack>
			<>{ metadata.description }</>
			<VStack spacing={ 0 }>
				<Button
					variant="link"
					href="https://v3.tailwindcss.com/docs/responsive-design"
					target="_blank"
					rel="noopener noreferrer"
				>
					{ __( 'Responsive Design Docs', 'tt-theme-blocks' ) }
				</Button>

				<Button
					variant="link"
					href="https://v3.tailwindcss.com/docs/spacing"
					target="_blank"
					rel="noopener noreferrer"
				>
					{ __( 'Padding Docs', 'tt-theme-blocks' ) }
				</Button>

				<Button
					variant="link"
					href="https://v3.tailwindcss.com/docs/size"
					target="_blank"
					rel="noopener noreferrer"
				>
					{ __( 'Size Docs', 'tt-theme-blocks' ) }
				</Button>
			</VStack>
		</VStack>
	),
} );
