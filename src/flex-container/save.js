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
		customBackground,
		customFlex,
		customPadding,
		customCss,
	} = attributes;

	// Generate Tailwind classes.
	const paddingClasses = generateTailwindPaddingClasses( customPadding );

	const flexDirectionClasses = generateTailwindClasses(
		'flex',
		customFlex.direction
	);

	const flexGapClasses = generateTailwindClasses( 'gap', customFlex.gap );

	const containerClasses = classnames(
		'flex',
		'justify-between',
		flexDirectionClasses,
		flexGapClasses
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
				<div className={ containerClasses }>
					<InnerBlocks.Content />
				</div>
			</Tag>
		</>
	);
}
