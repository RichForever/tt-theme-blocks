import { registerBlockType } from '@wordpress/blocks';

import Edit from './edit';
import Save from './save';
import metadata from './block.json';
import { Shapes } from '@icons';

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
} );
