// eslint-disable-next-line @wordpress/no-unsafe-wp-apis
import { generateTailwindClasses } from '@utils';
import classNames from 'classnames';

import PaddingControl from '@controls/Padding/PaddingControl';
import { InspectorControls, useBlockProps } from '@wordpress/block-editor';

/**
 * Add custom inspector controls to the core/group block
 */

export const addCoreGroupCustomInspectorControls = ( BlockEdit ) => {
	return ( props ) => {
		// Early return
		if ( props.name !== 'core/group' ) {
			return <BlockEdit { ...props } />;
		}

		const { attributes, setAttributes } = props;
		const { customPadding } = attributes;

		const customVerticalPaddingClasses = generateTailwindClasses(
			'py',
			customPadding.vertical
		);
		const customHorizontalPaddingClasses = generateTailwindClasses(
			'px',
			customPadding.horizontal
		);

		const blockProps = useBlockProps( {
			className: classNames(
				customVerticalPaddingClasses,
				customHorizontalPaddingClasses
			),
		} );

		return (
			<>
				<div { ...blockProps }>
					<BlockEdit { ...props } />
				</div>
				<InspectorControls>
					<PaddingControl
						setAttributes={ setAttributes }
						parentAttribute={ customPadding || {} }
						horizontalAttributeName="customPadding.horizontal"
						verticalAttributeName="customPadding.vertical"
					/>
				</InspectorControls>
			</>
		);
	};
};
