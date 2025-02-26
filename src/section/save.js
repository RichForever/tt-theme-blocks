/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 *
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';

import { BREAKPOINTS } from '../../config/constants';
import { PADDING_CLASSES } from '../../utils/cls';

// eslint-disable-next-line jsdoc/require-param
/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#save
 *
 * @return {Element} Element to render.
 */
export default function Save( { attributes } ) {
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

	const blockProps = useBlockProps.save( {
		className: paddingClasses,
	} );

	return (
		<Tag { ...blockProps }>
			{ layoutType === 'boxed' ? (
				<div className="container mx-auto">
					<InnerBlocks.Content />
				</div>
			) : (
				<InnerBlocks.Content />
			) }
		</Tag>
	);
}
