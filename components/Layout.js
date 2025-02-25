import { InspectorControls } from '@wordpress/block-editor';
import {
	Card,
	CardBody,
	Panel,
	PanelBody,
	PanelRow,
} from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import './Layout.scss';

const Layout = ( { general, style, advanced } ) => {
	// Filter out undefined tabs
	const panels = [
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
	].filter( ( panel ) => panel.component );

	if ( panels.length === 0 ) {
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
			<Panel className="customBlockControls__panel">
				{ panels.map( ( panel, key ) => (
					<PanelBody
						key={ key }
						title={ panel.title }
						initialOpen={ false }
					>
						<PanelRow className="customBlockControls__panelRow">
							<div>{ panel.component }</div>
						</PanelRow>
					</PanelBody>
				) ) }
			</Panel>
		</InspectorControls>
	);
};

export default Layout;
