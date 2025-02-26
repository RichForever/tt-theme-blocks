// eslint-disable-next-line @wordpress/no-unsafe-wp-apis
import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';
import Layout from '../../components/Layout';
import './editor.scss';
import { BREAKPOINTS } from '../../config/constants';
import { PADDING_CLASSES } from '../../utils/cls';
import { LayoutPanel, StylePanel } from './panels';

export default function Edit( { attributes, setAttributes } ) {
	const { htmlElementType, layoutType, padding } = attributes;

	// Get complete Tailwind classes based on padding values
	const paddingClasses = BREAKPOINTS.reduce( ( classes, { key } ) => {
		const value = padding[ key ];
		if ( value && PADDING_CLASSES[ value ] ) {
			classes.push( PADDING_CLASSES[ value ][ key ] );
		}
		return classes;
	}, [] ).join( ' ' );

	const Tag = htmlElementType;

	const blockProps = useBlockProps( {
		className: paddingClasses,
	} );

	return (
		<>
			<Layout
				panels={ {
					layout: (
						<LayoutPanel
							attributes={ attributes }
							setAttributes={ setAttributes }
						/>
					),
					style: (
						<StylePanel
							attributes={ attributes }
							setAttributes={ setAttributes }
						/>
					),
				} }
			/>

			<Tag { ...blockProps }>
				{ layoutType === 'boxed' ? (
					<div className="container mx-auto">
						<InnerBlocks />
					</div>
				) : (
					<InnerBlocks />
				) }
			</Tag>
		</>
	);
}
