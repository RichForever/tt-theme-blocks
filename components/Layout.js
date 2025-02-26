import { InspectorControls } from '@wordpress/block-editor';
import { cloneElement } from '@wordpress/element';
import {
	Card,
	CardBody,
	Panel,
	PanelBody,
	PanelRow,
} from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { DEFAULT_PANELS } from '../config/panels';
import './Layout.scss';

const iconStyles = {
	marginRight: '8px',
	display: 'inline-flex',
	alignItems: 'center',
	verticalAlign: 'middle',
};

const Layout = ( { panels = {} } ) => {
	// Convert panels object to array and filter out undefined components
	const activePanels = Object.entries( panels )
		.map( ( [ name, component ] ) => {
			const panelConfig = DEFAULT_PANELS[ name ];
			if ( ! panelConfig ) {
				return null;
			}

			return {
				name,
				title: (
					<>
						<span style={ iconStyles }>
							{ cloneElement( panelConfig.icon, {
								style: {
									width: '20px',
									height: '20px',
								},
							} ) }
						</span>
						<span>{ panelConfig.title }</span>
					</>
				),
				component: component || panelConfig.defaultContent,
			};
		} )
		.filter( Boolean );

	if ( activePanels.length === 0 ) {
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
				{ activePanels.map( ( panel ) => (
					<PanelBody
						key={ panel.name }
						title={ panel.title }
						initialOpen={ false }
						className="customBlockControls__panelBody"
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
