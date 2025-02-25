// eslint-disable-next-line @wordpress/no-unsafe-wp-apis
import { __, sprintf } from '@wordpress/i18n';

import {
	Button,
	SelectControl,
	__experimentalToggleGroupControl as ToggleGroupControl,
	__experimentalToggleGroupControlOption as ToggleGroupControlOption,
} from '@wordpress/components';
import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';
import Layout from '../../components/Layout';
import './editor.scss';
import { SPACING_OPTIONS } from '../../utils/spacing';
import { BREAKPOINTS } from '../../utils/breakpoints';
import { PADDING_CLASSES } from '../../utils/cls';

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

	const handleResetPadding = () => {
		setAttributes( {
			padding: {
				xs: '-',
				sm: '-',
				md: '-',
				lg: '-',
				xl: '-',
				'2xl': '-',
			},
		} );
	};

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
							<SelectControl
								key={ key }
								label={ sprintf(
									// translators: %s: padding position (e.g., "Top", "Bottom", "Left", "Right")
									__( 'Padding %s', 'tt-theme-blocks' ),
									label
								) }
								value={
									( padding && padding[ attribute ] ) || ''
								}
								options={ SPACING_OPTIONS }
								__nextHasNoMarginBottom
								onChange={ ( newValue ) =>
									setAttributes( {
										padding: {
											...( padding || {} ),
											[ attribute ]: String( newValue ),
										},
									} )
								}
							/>
						) ) }
						<Button isDestructive onClick={ handleResetPadding }>
							{ __( 'Reset to defaults', 'tt-theme-blocks' ) }
						</Button>
					</>
				}
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
