import { __ } from '@wordpress/i18n';
import { Brush, Settings, Layers, TextSize } from '../components/icons';

// Default panels that can be used across blocks
export const DEFAULT_PANELS = {
	general: {
		name: 'general',
		title: __( 'General', 'tt-theme-blocks' ),
		icon: Settings,
		defaultContent: __(
			'No general settings available',
			'tt-theme-blocks'
		),
	},
	style: {
		name: 'style',
		title: __( 'Style', 'tt-theme-blocks' ),
		icon: Brush,
		defaultContent: __( 'No style settings available', 'tt-theme-blocks' ),
	},
	advanced: {
		name: 'advanced',
		title: __( 'Advanced', 'tt-theme-blocks' ),
		icon: Settings,
		defaultContent: __(
			'No advanced settings available',
			'tt-theme-blocks'
		),
	},
	layout: {
		name: 'layout',
		title: __( 'Layout', 'tt-theme-blocks' ),
		icon: Layers,
		defaultContent: __( 'No layout settings available', 'tt-theme-blocks' ),
	},
	content: {
		name: 'content',
		title: __( 'Content', 'tt-theme-blocks' ),
		icon: TextSize,
		defaultContent: __(
			'No content settings available',
			'tt-theme-blocks'
		),
	},
};
