/**
 * Entry point for the group block extension
 */

import { addFilter } from '@wordpress/hooks';
import { coreGroupCustomAttrbiutes } from './attributes';
import { addCoreGroupCustomInspectorControls } from './controls';
import { addCoreGroupCustomClasses } from './save';

const addCoreGroupCustomAttributes = ( settings, name ) => {
	if ( name !== 'core/group' ) {
		return settings;
	}

	settings.attributes = {
		...settings.attributes,
		...coreGroupCustomAttrbiutes,
	};

	return settings;
};

addFilter(
	'blocks.registerBlockType',
	'tt-theme-blocks/add-core-group-custom-attributes',
	addCoreGroupCustomAttributes
);

addFilter(
	'editor.BlockEdit',
	'tt-theme-blocks/add-core-group-custom-inspector-controls',
	addCoreGroupCustomInspectorControls
);

addFilter(
	'blocks.getSaveContent.extraProps',
	'tt-theme-blocks/add-core-group-custom-classes',
	addCoreGroupCustomClasses
);
