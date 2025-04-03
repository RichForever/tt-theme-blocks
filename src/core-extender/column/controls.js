// eslint-disable-next-line @wordpress/no-unsafe-wp-apis
import { generateTailwindClasses } from '@utils';

import { __, sprintf } from '@wordpress/i18n';
import { BREAKPOINTS, SPACING_OPTIONS } from '@config/constants';
import { InspectorControls, useBlockProps } from '@wordpress/block-editor';
import {
	Button,
	PanelBody,
	PanelRow,
	SelectControl,
	__experimentalText as Text,
} from '@wordpress/components';

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
		const { columnPadding } = attributes;

		const columnPaddingClasses = generateTailwindClasses(
			'p',
			attributes.columnPadding
		);

		const blockProps = useBlockProps( {
			className: columnPaddingClasses,
		} );

		const handleResetAttributes = ( atttributeName ) => {
			setAttributes( {
				[ atttributeName ]: {
					xs: '-',
					sm: '-',
					md: '-',
					lg: '-',
					xl: '-',
					'2xl': '-',
				},
			} );
		};

		return (
			<>
				<div { ...blockProps }>
					<BlockEdit { ...props } />
				</div>
				<InspectorControls>
					<PanelBody
						title={ __( 'Padding', 'tt-theme-blocks' ) }
						initialOpen={ true }
					>
						<PanelRow>
							<Text variant="muted">
								{ __(
									'Customize the padding for each breakpoint to ensure optimal spacing around the section across different devices and screen sizes.',
									'tt-theme-blocks'
								) }
							</Text>
						</PanelRow>
						<PanelRow>
							<div>
								{ BREAKPOINTS.map(
									( {
										key,
										label,
										attribute,
										description: help,
									} ) => (
										<SelectControl
											key={ key }
											label={ sprintf(
												// translators: %s: padding position (e.g., "Top", "Bottom", "Left", "Right")
												__(
													'%s breakpoint',
													'tt-theme-blocks'
												),
												label
											) }
											help={ help }
											value={
												( columnPadding &&
													columnPadding[
														attribute
													] ) ||
												''
											}
											options={ SPACING_OPTIONS }
											__nextHasNoMarginBottom
											onChange={ ( newValue ) =>
												setAttributes( {
													columnPadding: {
														...( columnPadding ||
															{} ),
														[ attribute ]:
															String( newValue ),
													},
												} )
											}
										/>
									)
								) }
							</div>
						</PanelRow>
						<PanelRow>
							<Button
								isDestructive
								variant="link"
								onClick={ () =>
									handleResetAttributes( 'columnPadding' )
								}
							>
								{ __( 'Reset', 'tt-theme-blocks' ) }
							</Button>
						</PanelRow>
					</PanelBody>
				</InspectorControls>
			</>
		);
	};
};
