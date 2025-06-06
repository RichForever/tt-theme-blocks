// eslint-disable-next-line import/no-extraneous-dependencies
import { __ } from '@wordpress/i18n';
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
	panelTitle = 'Spacing',
} ) => {
	const TABS = [
		{
			name: 'vertical',
			component: (
				<SpacingControlVerticalFragment
					parentAttribute={ parentAttribute }
					attributeName={ verticalAttributeName }
				/>
			),
		},
		{
			name: 'horizontal',
			component: (
				<SpacingControlHorizontalFragment
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
			<PanelBody title={ panelTitle } initialOpen={ false }>
				<PanelRow>
					<Text variant="muted">
						{ __(
							'Adjust the spacing settings for different screen sizes to create responsive layouts.',
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
