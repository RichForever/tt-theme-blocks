import { __ } from '@wordpress/i18n';
import { InnerBlocks } from '@wordpress/block-editor';
import {
	SelectControl,
	__experimentalToggleGroupControl as ToggleGroupControl,
	__experimentalToggleGroupControlOption as ToggleGroupControlOption,
} from '@wordpress/components';
import { useBlockProps } from '@wordpress/block-editor';
import Layout, { layout } from '../../modules/layout';
import './editor.css';

// Breakpoints for responsive padding settings
const BREAKPOINTS = [
	{ key: 'xs', label: 'XS', attribute: 'paddingXs' },
	{ key: 'sm', label: 'SM', attribute: 'paddingSm' },
	{ key: 'md', label: 'MD', attribute: 'paddingMd' },
	{ key: 'lg', label: 'LG', attribute: 'paddingLg' },
	{ key: 'xl', label: 'XL', attribute: 'paddingXl' },
	{ key: '2xl', label: '2XL', attribute: 'padding2xl' }
];

// SelectControl component for selecting padding values
function PaddingSelect({ attribute, label, value, setAttributes, attributes }) {
	const blockVerticalPadding = attributes.blockVerticalPadding || {};
	const paddingOptions = [
		{ label: '0', value: '0' },
		{ label: 'px', value: 'px' },
		{ label: '0.5', value: '0.5' },
		{ label: '1', value: '1' },
		{ label: '1.5', value: '1.5' },
		{ label: '2', value: '2' },
		{ label: '2.5', value: '2.5' },
		{ label: '3', value: '3' },
		{ label: '3.5', value: '3.5' },
		{ label: '4', value: '4' },
		{ label: '5', value: '5' },
		{ label: '6', value: '6' },
		{ label: '7', value: '7' },
		{ label: '8', value: '8' },
		{ label: '9', value: '9' },
		{ label: '10', value: '10' },
		{ label: '11', value: '11' },
		{ label: '12', value: '12' },
		{ label: '14', value: '14' },
		{ label: '16', value: '16' },
		{ label: '20', value: '20' },
		{ label: '24', value: '24' },
		{ label: '28', value: '28' },
		{ label: '32', value: '32' },
		{ label: '36', value: '36' },
		{ label: '40', value: '40' },
		{ label: '44', value: '44' },
		{ label: '48', value: '48' },
		{ label: '52', value: '52' },
		{ label: '56', value: '56' },
		{ label: '60', value: '60' },
		{ label: '64', value: '64' },
		{ label: '72', value: '72' },
		{ label: '80', value: '80' },
		{ label: '96', value: '96' },
	];

	return (
		<SelectControl
			label={__(`Padding ${label}`, 'section-block')}
			value={blockVerticalPadding[attribute] || ''}
			options={paddingOptions}
			onChange={(newValue) =>
				setAttributes({
					blockVerticalPadding: {
						...blockVerticalPadding, // Preserve other properties in blockVerticalPadding
						[attribute]: String(newValue) // Update the specific padding property
					}
				})
			}
		/>
	);
}

export default function Edit({ attributes, setAttributes }) {
	// Ensure blockVerticalPadding exists before using it
	const { blockVerticalPadding, layoutType } = attributes;

	// Generate padding classes using static mappings
	const paddingClasses = BREAKPOINTS.map(({ key, attribute }) => {
		const value = blockVerticalPadding[attribute];
		return value ? `py-${value}` : '';
	}).join(' ');

	return (
		<>
			<Layout
				general={
					<ToggleGroupControl
						label="Layout type"
						value={layoutType}
						isBlock
						__nextHasNoMarginBottom
						__next40pxDefaultSize
						onChange={(val) => setAttributes({
							layoutType: val
						})}
					>
						<ToggleGroupControlOption value="fullwidth" label="Full width" />
						<ToggleGroupControlOption value="boxed" label="Boxed" />
					</ToggleGroupControl>
				}
				style={
					<>
						{BREAKPOINTS.map(({ key, label, attribute }) => (
							<PaddingSelect
								key={key}
								label={label}
								attribute={attribute}
								value={blockVerticalPadding[attribute] || ''}
								setAttributes={setAttributes}
								attributes={attributes}
							/>
						))}
					</>
				}
				advanced={<></>}
			/>

			<section {...useBlockProps({ className: paddingClasses })}>
				{layoutType === 'boxed' ? (
					<div className="container mx-auto">
						<InnerBlocks />
					</div>
				) : (
					<InnerBlocks />
				)}
			</section>
		</>
	);
}
