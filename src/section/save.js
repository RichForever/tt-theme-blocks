import classnames from 'classnames';
import {
	generateTailwindClasses,
	generateTailwindPaddingClasses,
} from '@utils';

import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';

export default function Save( { attributes } ) {
	const {
		customBlockId,
		customHtmlTag,
		customLayout,
		customBackground,
		customPadding,
		customSpacing,
		customCss,
	} = attributes;

	// Generate Tailwind classes.
	const paddingClasses = generateTailwindPaddingClasses( customPadding );

	const verticalSpacingClasses = generateTailwindClasses(
		'space-y',
		customSpacing.vertical
	);
	const horizontalSpacingClasses = generateTailwindClasses(
		'space-x',
		customSpacing.horizontal
	);

	const containerClasses = classnames(
		'container',
		'mx-auto',
		verticalSpacingClasses,
		horizontalSpacingClasses
	);

	const Tag = customHtmlTag;

	const blockPropsClasses = classnames( paddingClasses );

	const blockPropsStyles = {
		background: customBackground,
	};

	// Set up block props
	const blockProps = useBlockProps.save( {
		className: blockPropsClasses,
		style: blockPropsStyles,
		id: customBlockId,
	} );

	// Replace block id token and "minify" css
	const processedCustomCss =
		customCss
			?.replace( /\[block\]/g, `#${ customBlockId }` )
			.replace( /\s+/g, '' ) || '';

	return (
		<>
			{ processedCustomCss && <style>{ processedCustomCss }</style> }
			<Tag { ...blockProps }>
				{ customLayout === 'boxed' ? (
					<div className={ containerClasses }>
						<InnerBlocks.Content />
					</div>
				) : (
					<InnerBlocks.Content />
				) }
			</Tag>
		</>
	);
}
