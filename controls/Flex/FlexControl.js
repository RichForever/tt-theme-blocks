// eslint-disable-next-line import/no-extraneous-dependencies
import { __ } from '@wordpress/i18n';
import { useContext } from '@wordpress/element';
import { BlockSettingsControlContext } from '@utils';
import {
	Panel,
	PanelBody,
	PanelRow,
	TabPanel,
	__experimentalText as Text,
} from '@wordpress/components';

import FlexControlGapFragment from './FlexControlGapFragment';
import FlexControlDirectionFragment from './FlexControlDirectionFragment';

const FlexControl = ( {
	parentAttribute,
	directionAttributeName,
	gapAttributeName,
	panelTitle = 'Flexbox',
} ) => {
	const setAttributes = useContext( BlockSettingsControlContext );

	const TABS = [
		{
			name: 'direction',
			component: (
				<FlexControlDirectionFragment
					setAttributes={ setAttributes }
					parentAttribute={ parentAttribute }
					attributeName={ directionAttributeName }
				/>
			),
		},
		{
			name: 'gap',
			component: (
				<FlexControlGapFragment
					setAttributes={ setAttributes }
					parentAttribute={ parentAttribute }
					attributeName={ gapAttributeName }
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

export default FlexControl;
