// eslint-disable-next-line @wordpress/no-unsafe-wp-apis
import {
	BlockSettingsControlContext,
	generateTailwindPaddingClasses,
} from '@utils';
import classNames from 'classnames';

import PaddingControl from '@controls/PaddingControl';
import { InspectorControls, useBlockProps } from '@wordpress/block-editor';

/**
 * Add custom inspector controls to the core/column block
 */

export const addCoreColumnCustomInspectorControls = ( BlockEdit ) => {
	return ( props ) => {
		// Early return
		if ( props.name !== 'core/column' ) {
			return <BlockEdit { ...props } />;
		}

		const { attributes, setAttributes } = props;
		const { customPadding } = attributes;

		const paddingClasses = generateTailwindPaddingClasses( customPadding );

		const blockProps = useBlockProps( {
			className: classNames( paddingClasses ),
		} );

		return (
			<>
				<div { ...blockProps }>
					<BlockEdit { ...props } />
				</div>
				<InspectorControls>
					<BlockSettingsControlContext.Provider
						value={ setAttributes }
					>
						<PaddingControl
							attribute={ customPadding }
							attributeName={ 'customPadding' }
						/>
					</BlockSettingsControlContext.Provider>
				</InspectorControls>
			</>
		);
	};
};
