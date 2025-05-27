// eslint-disable-next-line import/no-extraneous-dependencies
import { __ } from '@wordpress/i18n';
import { useContext } from '@wordpress/element';
import BlockSettingsControlContext from '@utils/context';
import {
	Panel,
	PanelBody,
	PanelRow,
	TabPanel,
	__experimentalText as Text,
} from '@wordpress/components';

import SpacingControlVerticalFragment from './SpacingControlVerticalFragment';
import SpacingControlHorizontalFragment from './SpacingControlHorizontalFragment';

const SpacingControl = ( {
	parentAttribute,
	horizontalAttributeName,
	verticalAttributeName,
} ) => {
	const setAttributes = useContext( BlockSettingsControlContext );

	const TABS = [
		{
			name: 'vertical',
			component: (
				<SpacingControlVerticalFragment
					setAttributes={ setAttributes }
					parentAttribute={ parentAttribute }
					attributeName={ verticalAttributeName }
				/>
			),
		},
		{
			name: 'horizontal',
			component: (
				<SpacingControlHorizontalFragment
					setAttributes={ setAttributes }
					parentAttribute={ parentAttribute }
					attributeName={ horizontalAttributeName }
				/>
			),
		},
	];

	const tabs = TABS.map( ( tab ) => ( {
		name: `${ tab.name }`,
		title: tab.name.charAt( 0 ).toUpperCase() + tab.name.slice( 1 ),
		className: 'tab',
		component: tab.component,
	} ) );

	return (
		<Panel>
			<PanelBody
				title={ __( 'Spacing Nested', 'tt-theme-blocks' ) }
				initialOpen={ false }
			>
				<PanelRow>
					<Text variant="muted">
						{ __(
							'Configure the flexbox layout settings for different screen sizes. Set the direction and gap between elements to create responsive layouts.',
							'tt-theme-blocks'
						) }
					</Text>
				</PanelRow>
				<TabPanel tabs={ tabs }>{ ( tab ) => tab.component }</TabPanel>
			</PanelBody>
		</Panel>
	);
};

export default SpacingControl;
