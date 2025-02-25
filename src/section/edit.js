// eslint-disable-next-line @wordpress/no-unsafe-wp-apis
import { __, sprintf } from '@wordpress/i18n';

import {
	InnerBlocks,
	SelectControl,
	__experimentalToggleGroupControl as ToggleGroupControl,
	__experimentalToggleGroupControlOption as ToggleGroupControlOption,
} from '@wordpress/components';
import { useBlockProps } from '@wordpress/block-editor';
import Layout from '../modules/layout';
import './editor.scss';
import { SPACING_OPTIONS, BREAKPOINTS, PADDING_CLASSES } from './spacing';

// SelectControl component for selecting size values
function PaddingSelect( { attribute, label, setAttributes, attributes } ) {
	const padding = attributes.padding || {};

	return (
		<SelectControl
			// translators: %s: padding position (e.g., "Top", "Bottom", "Left", "Right")
			label={ sprintf( __( 'Padding %s', 'tt-theme-blocks' ), label ) }
			value={ padding[ attribute ] || '' }
			options={ SPACING_OPTIONS }
			onChange={ ( newValue ) =>
				setAttributes( {
					padding: {
						...padding,
						[ attribute ]: String( newValue ),
					},
				} )
			}
		/>
	);
}

export default function Edit( { attributes, setAttributes } ) {
	const { padding, layoutType } = attributes;

	// Get complete Tailwind classes based on padding values
	const paddingClasses = BREAKPOINTS.reduce( ( classes, { key } ) => {
		const value = padding[ key ];
		if ( value && PADDING_CLASSES[ value ] ) {
			classes.push( PADDING_CLASSES[ value ][ key ] );
		}
		return classes;
	}, [] ).join( ' ' );

	return (
		<>
			<Layout
				general={
					<ToggleGroupControl
						label="Layout type"
						value={ layoutType }
						isBlock
						__nextHasNoMarginBottom
						__next40pxDefaultSize
						onChange={ ( val ) =>
							setAttributes( {
								layoutType: val,
							} )
						}
					>
						<ToggleGroupControlOption
							value="fullwidth"
							label="Full width"
						/>
						<ToggleGroupControlOption value="boxed" label="Boxed" />
					</ToggleGroupControl>
				}
				style={
					<>
						{ BREAKPOINTS.map( ( { key, label, attribute } ) => (
							<PaddingSelect
								key={ key }
								label={ label }
								attribute={ attribute }
								setAttributes={ setAttributes }
								attributes={ attributes }
							/>
						) ) }
					</>
				}
				advanced={ <></> }
			/>

			<section { ...useBlockProps( { className: paddingClasses } ) }>
				{ layoutType === 'boxed' ? (
					<div className="container mx-auto">
						<InnerBlocks />
					</div>
				) : (
					<InnerBlocks />
				) }
			</section>
		</>
	);
}
