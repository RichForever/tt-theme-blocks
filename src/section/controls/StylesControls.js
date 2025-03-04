// eslint-disable-next-line import/no-extraneous-dependencies
import styled from '@emotion/styled';
import { __, sprintf } from '@wordpress/i18n';
import { InspectorControls } from '@wordpress/block-editor';
import { BREAKPOINTS, SPACING_OPTIONS } from '@config/constants';
import {
	SelectControl,
	__experimentalText as Text,
	__experimentalToolsPanel as ToolsPanel,
	__experimentalToolsPanelItem as ToolsPanelItem,
} from '@wordpress/components';

const StylesControls = ( { attributes, setAttributes } ) => {
	const { padding } = attributes;
	const handleResetPadding = () => {
		setAttributes( {
			padding: {
				xs: '-',
				sm: '-',
				md: '-',
				lg: '-',
				xl: '-',
				'2xl': '-',
			},
		} );
	};
	const PanelDescription = styled.div`
		grid-column: span 2;
	`;
	return (
		<InspectorControls group="styles">
			<ToolsPanel
				label={ __( 'Section vertical padding', 'tt-theme-blocks' ) }
				resetAll={ handleResetPadding }
			>
				<PanelDescription>
					<Text variant="muted">
						{ __(
							'Adjust the vertical padding for different breakpoints. This allows you to control the spacing around the section on various screen sizes.',
							'tt-theme-blocks'
						) }
					</Text>
				</PanelDescription>
				{ BREAKPOINTS.map(
					( { key, label, attribute, description: help } ) => (
						<ToolsPanelItem
							key={ key }
							label={ label }
							hasValue={ () => !! padding }
							onDeselect={ () =>
								setAttributes( {
									padding: {
										...( padding || {} ),
										[ attribute ]: '-',
									},
								} )
							}
						>
							<SelectControl
								key={ key }
								label={ sprintf(
									// translators: %s: padding position (e.g., "Top", "Bottom", "Left", "Right")
									__( '%s breakpoint', 'tt-theme-blocks' ),
									label
								) }
								help={ help }
								value={
									( padding && padding[ attribute ] ) || ''
								}
								options={ SPACING_OPTIONS }
								__nextHasNoMarginBottom
								onChange={ ( newValue ) =>
									setAttributes( {
										padding: {
											...( padding || {} ),
											[ attribute ]: String( newValue ),
										},
									} )
								}
							/>
						</ToolsPanelItem>
					)
				) }
			</ToolsPanel>
		</InspectorControls>
	);
};

export default StylesControls;
