import { InspectorControls } from '@wordpress/block-editor';
import { Card, CardBody, TabPanel } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import './Layout.scss';

const Layout = ( { general, style, advanced } ) => {
	// Filter out undefined tabs
	const tabs = [
		{
			name: 'general',
			title: __( 'General', 'tt-theme-blocks' ),
			component:
				general ||
				__( 'No general settings available', 'tt-theme-blocks' ),
		},
		{
			name: 'style',
			title: __( 'Style', 'tt-theme-blocks' ),
			component:
				style || __( 'No style settings available', 'tt-theme-blocks' ),
		},
		{
			name: 'advanced',
			title: __( 'Advanced', 'tt-theme-blocks' ),
			component:
				advanced ||
				__( 'No advanced settings available', 'tt-theme-blocks' ),
		},
	].filter( ( tab ) => tab.component );

	if ( tabs.length === 0 ) {
		return (
			<InspectorControls>
				<Card isRounded={ false } variant="secondary">
					<CardBody>
						{ __( 'No settings available', 'tt-theme-blocks' ) }
					</CardBody>
				</Card>
			</InspectorControls>
		);
	}

	return (
		<InspectorControls>
			<TabPanel
				className="customBlockControls__tabs"
				onSelect={ () => {} }
				tabs={ tabs }
			>
				{ ( tab ) => (
					<Card isRounded={ false } variant="secondary">
						<CardBody>{ tab.component }</CardBody>
					</Card>
				) }
			</TabPanel>
		</InspectorControls>
	);
};

export default Layout;
