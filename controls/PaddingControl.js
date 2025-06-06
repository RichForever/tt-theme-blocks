// eslint-disable-next-line import/no-extraneous-dependencies
import { __ } from '@wordpress/i18n';
import { useContext } from '@wordpress/element';
import { BlockSettingsControlContext } from '@utils';
import { BREAKPOINTS, SPACING_OPTIONS } from '@config/constants';
import {
	__experimentalDivider as Divider,
	Panel,
	PanelBody,
	PanelRow,
	__experimentalText as Text,
	__experimentalBoxControl as BoxControl,
} from '@wordpress/components';

const DEFAULT_ATTRIBUTE = {
	top: '-',
	right: '-',
	bottom: '-',
	left: '-',
};

const PaddingControl = ( {
	attribute,
	attributeName,
	panelTitle = 'Boxed Padding',
} ) => {
	const setAttributes = useContext( BlockSettingsControlContext );

	// Builds updated attribute object with merged values
	const updateCustomBoxedValue = ( prev, viewport, newValues ) => {
		return {
			...prev,
			[ viewport ]: {
				...prev?.[ viewport ],
				...newValues,
			},
		};
	};

	// Handles onChange from each BoxControl for a specific viewport
	const handleOnChange = ( viewport ) => ( newValues ) => {
		const updated = updateCustomBoxedValue(
			attribute,
			viewport,
			newValues
		);
		setAttributes( { [ attributeName ]: updated } );
	};

	// Remove "None" value since BoxControl handle this by adding "None" value by itself
	const PRESETS = SPACING_OPTIONS.filter(
		( option ) => option.value !== '-'
	).map( ( option ) => ( {
		name: option.label,
		slug: option.label, // important fix
		value: option.value,
	} ) );

	return (
		<Panel>
			<PanelBody title={ panelTitle } initialOpen={ false }>
				<PanelRow>
					<Text variant="muted">
						{ __(
							'Adjust the padding settings for different screen sizes to create responsive layouts.',
							'tt-theme-blocks'
						) }
					</Text>
				</PanelRow>
				<PanelRow>
					<div style={ { width: '100%' } }>
						{ BREAKPOINTS.map( ( viewport, idx ) => (
							<>
								<div
									style={ {
										paddingTop: idx === 0 ? '1rem' : '0',
									} }
								>
									<BoxControl
										key={ viewport.key }
										label={ `Padding ${ viewport.label }` }
										values={ attribute?.[ viewport.key ] }
										onChange={ handleOnChange(
											viewport.key
										) }
										presetKey={ `padding-${ viewport.key }` }
										presets={ PRESETS }
										resetValues={ DEFAULT_ATTRIBUTE }
										__next40pxDefaultSize
									/>
									<Text variant="muted">
										{ viewport.description }
									</Text>
								</div>
								{ idx !== BREAKPOINTS.length - 1 && (
									<Divider />
								) }
							</>
						) ) }
					</div>
				</PanelRow>
			</PanelBody>
		</Panel>
	);
};

export default PaddingControl;
