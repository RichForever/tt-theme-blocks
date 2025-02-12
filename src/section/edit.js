/**
 * Retrieves the translation of text.
 */
import { __ } from '@wordpress/i18n';
import { InspectorControls, InnerBlocks } from '@wordpress/block-editor';
import { PanelBody, RangeControl, TabPanel } from '@wordpress/components';
import { useBlockProps } from '@wordpress/block-editor';
import './editor.css';

// Breakpoints for responsive padding settings
const BREAKPOINTS = [
	{ key: 'default', label: 'Default', attribute: 'paddingDefault' },
	{ key: 'sm', label: 'SM', attribute: 'paddingSm' },
	{ key: 'md', label: 'MD', attribute: 'paddingMd' },
	{ key: 'lg', label: 'LG', attribute: 'paddingLg' },
	{ key: 'xl', label: 'XL', attribute: 'paddingXl' },
	{ key: '2xl', label: '2XL', attribute: 'padding2xl' }
];

// Static mapping of padding values to Tailwind classes
const PADDING_CLASSES = {
	default: {
		0: 'py-0', 4: 'py-4', 12: 'py-12', 16: 'py-16', 20: 'py-20', 24: 'py-24'
	},
	sm: {
		0: 'sm:py-0', 4: 'sm:py-4', 12: 'sm:py-12', 16: 'sm:py-16', 20: 'sm:py-20', 24: 'sm:py-24'
	},
	md: {
		0: 'md:py-0', 4: 'md:py-4', 12: 'md:py-12', 16: 'md:py-16', 20: 'md:py-20', 24: 'md:py-24'
	},
	lg: {
		0: 'lg:py-0', 4: 'lg:py-4', 12: 'lg:py-12', 16: 'lg:py-16', 20: 'lg:py-20', 24: 'lg:py-24'
	},
	xl: {
		0: 'xl:py-0', 4: 'xl:py-4', 12: 'xl:py-12', 16: 'xl:py-16', 20: 'xl:py-20', 24: 'xl:py-24'
	},
	'2xl': {
		0: '2xl:py-0', 4: '2xl:py-4', 12: '2xl:py-12', 16: '2xl:py-16', 20: '2xl:py-20', 24: '2xl:py-24'
	}
};

// Range component for controlling padding values
function Range({ attribute, value, setAttributes }) {
	return (
		<RangeControl
			marks={[{ label: '0', value: 0 }, { label: '4', value: 4 }, { label: '12', value: 12 }, { label: '16', value: 16 }, { label: '20', value: 20 }, { label: '24', value: 24 }]}
			max={24}
			min={0}
			// step={1}
			value={value}
			onChange={(newValue) => setAttributes({ [attribute]: newValue })}
			withInputField={false}
		/>
	);
}

export default function Edit({ attributes, setAttributes }) {

	// Generate padding classes using static mappings
	const paddingClasses = BREAKPOINTS.map(({ key, attribute }) => {
		const value = attributes[attribute];
		return value !== undefined ? PADDING_CLASSES[key][value] || '' : '';
	}).join(' ');

	return (
		<>
			<InspectorControls>
				<PanelBody title={__('Settings', 'section-block')}>
					<TabPanel
						tabs={BREAKPOINTS.map(({ key, label, attribute }) => ({
							name: key,
							title: label,
							component: (
								<Range
									attribute={attribute}
									value={attributes[attribute]}
									setAttributes={setAttributes}
								/>
							)
						}))}
					>
						{(tab) => tab.component}
					</TabPanel>
				</PanelBody>
			</InspectorControls>
			<div {...useBlockProps({
				className: paddingClasses
			})}>
				<InnerBlocks />
			</div>
		</>
	);
}
