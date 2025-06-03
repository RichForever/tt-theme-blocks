// eslint-disable-next-line import/no-extraneous-dependencies
import { __, sprintf } from '@wordpress/i18n';
import { useContext } from '@wordpress/element';
import { BlockSettingsControlContext } from '@utils';
import { BREAKPOINTS, SPACING_OPTIONS } from '@config/constants';
import {
	Button,
	Panel,
	PanelBody,
	PanelRow,
	SelectControl,
	__experimentalText as Text,
} from '@wordpress/components';

const DEFAULT_ATTRIBUTE = {
	xs: '-',
	sm: '-',
	md: '-',
	lg: '-',
	xl: '-',
	'2xl': '-',
};

const SizeControl = ( { attribute, attributeName } ) => {
	const setAttributes = useContext( BlockSettingsControlContext );

	const handleReset = () => {
		setAttributes( {
			[ attributeName ]: DEFAULT_ATTRIBUTE,
		} );
	};

	const handleOnChange = ( val, viewport ) => {
		setAttributes( {
			[ attributeName ]: {
				...( attribute || {} ),
				[ viewport ]: String( val ),
			},
		} );
	};

	return (
		<Panel>
			<PanelBody
				title={ __( 'Size', 'tt-theme-blocks' ) }
				initialOpen={ false }
			>
				<PanelRow>
					<Text variant="muted">
						{ __(
							'Control the dimensions of your icon across different devices. Responsive sizing ensures your icon remains proportional and visually appropriate at all screen sizes.',
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
								attribute: viewport,
								description: help,
							} ) => (
								<SelectControl
									key={ key }
									label={ sprintf(
										// translators: %s: padding position (e.g., "Top", "Bottom", "Left", "Right")
										__( 'Size %s', 'tt-theme-blocks' ),
										label
									) }
									help={ help }
									value={
										( attribute &&
											attribute[ viewport ] ) ||
										'-'
									}
									options={ SPACING_OPTIONS }
									__nextHasNoMarginBottom
									onChange={ ( newValue ) =>
										handleOnChange( newValue, viewport )
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
						onClick={ handleReset }
					>
						{ __( 'Reset', 'tt-theme-blocks' ) }
					</Button>
				</PanelRow>
			</PanelBody>
		</Panel>
	);
};

export default SizeControl;
