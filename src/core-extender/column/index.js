/**
 * Entry point for the column block extension
 */

import { addFilter } from '@wordpress/hooks';
import { coreColumnCustomAttrbiutes } from './attributes';
import { addCoreColumnCustomInspectorControls } from './controls';
import { addCoreColumnCustomClasses } from './save';

const addCoreColumnCustomAttributes = ( settings, name ) => {
	if ( name !== 'core/column' ) {
		return settings;
	}

	settings.attributes = {
		...settings.attributes,
		...coreColumnCustomAttrbiutes,
	};

	return settings;
};

addFilter(
	'blocks.registerBlockType',
	'tt-theme-blocks/add-core-column-custom-attributes',
	addCoreColumnCustomAttributes
);

addFilter(
	'editor.BlockEdit',
	'tt-theme-blocks/add-core-column-custom-inspector-controls',
	addCoreColumnCustomInspectorControls
);

addFilter(
	'blocks.getSaveContent.extraProps',
	'tt-theme-blocks/add-core-column-custom-classes',
	addCoreColumnCustomClasses
);
