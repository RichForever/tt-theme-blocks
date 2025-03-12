// eslint-disable-next-line import/no-extraneous-dependencies
import styled from '@emotion/styled';
import { __, sprintf } from '@wordpress/i18n';
import { InspectorControls, PanelColorSettings } from '@wordpress/block-editor';
import { BREAKPOINTS, SPACING_OPTIONS } from '@config/constants';
import {
	SelectControl,
	__experimentalText as Text,
	__experimentalToolsPanel as ToolsPanel,
	__experimentalToolsPanelItem as ToolsPanelItem,
} from '@wordpress/components';

const StylesControls = ( { attributes, setAttributes } ) => {
	const { sectionPadding, sectionSpacing, sectionBackground } = attributes;

	const handleResetPadding = () => {
		setAttributes( {
			sectionPadding: {
				xs: '-',
				sm: '-',
				md: '-',
				lg: '-',
				xl: '-',
				'2xl': '-',
			},
		} );
	};

	const handleResetSpacing = () => {
		setAttributes( {
			sectionSpacing: {
				xs: '-',
				sm: '-',
				md: '-',
				lg: '-',
				xl: '-',
				'2xl': '-',
			},
		} );
	};

	const ControlWrapper = styled.div`
		grid-column: span 2;
	`;

	return (
		<InspectorControls group="styles">
			<PanelColorSettings
				// @ts-ignore
				__experimentalIsRenderedInSidebar
				title={ __( 'Background', 'tt-theme-blocks' ) }
				colorSettings={ [
					{
						value: sectionBackground,
						onChange: ( color ) =>
							setAttributes( { sectionBackground: color } ),
						label: __( 'Background', 'tt-theme-blocks' ),
					},
				] }
			/>
			<ToolsPanel
				label={ __( 'Padding', 'tt-theme-blocks' ) }
				resetAll={ handleResetPadding }
			>
				<ControlWrapper>
					<Text variant="muted">
						{ __(
							'Adjust the vertical padding for different breakpoints. This allows you to control the spacing around the section on various screen sizes.',
							'tt-theme-blocks'
						) }
					</Text>
				</ControlWrapper>
				{ BREAKPOINTS.map(
					( { key, label, attribute, description: help } ) => (
						<ToolsPanelItem
							key={ key }
							label={ label }
							hasValue={ () => !! sectionPadding }
							onDeselect={ () =>
								setAttributes( {
									sectionPadding: {
										...( sectionPadding || {} ),
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
									( sectionPadding &&
										sectionPadding[ attribute ] ) ||
									''
								}
								options={ SPACING_OPTIONS }
								__nextHasNoMarginBottom
								onChange={ ( newValue ) =>
									setAttributes( {
										sectionPadding: {
											...( sectionPadding || {} ),
											[ attribute ]: String( newValue ),
										},
									} )
								}
							/>
						</ToolsPanelItem>
					)
				) }
			</ToolsPanel>
			<ToolsPanel
				label={ __( 'Spacing', 'tt-theme-blocks' ) }
				resetAll={ handleResetSpacing }
			>
				<ControlWrapper>
					<Text variant="muted">
						{ __(
							'Adjust the vertical padding for different breakpoints. This allows you to control the spacing around the section on various screen sizes.',
							'tt-theme-blocks'
						) }
					</Text>
				</ControlWrapper>
				{ BREAKPOINTS.map(
					( { key, label, attribute, description: help } ) => (
						<ToolsPanelItem
							key={ key }
							label={ label }
							hasValue={ () => !! sectionSpacing }
							onDeselect={ () =>
								setAttributes( {
									sectionSpacing: {
										...( sectionSpacing || {} ),
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
									( sectionSpacing &&
										sectionSpacing[ attribute ] ) ||
									''
								}
								options={ SPACING_OPTIONS }
								__nextHasNoMarginBottom
								onChange={ ( newValue ) =>
									setAttributes( {
										sectionSpacing: {
											...( sectionSpacing || {} ),
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
