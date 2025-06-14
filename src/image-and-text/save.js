import classnames from 'classnames';
import {
	generateTailwindClasses,
	generateTailwindPaddingClasses,
} from '@utils';

import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';

export default function Save( { attributes } ) {
	const {
		customBlockId,
		customImage,
		customHtmlTag,
		customContentBackground,
		customBackground,
		customFlex,
		customContentPadding,
		customPadding,
		customContentSpacing,
		customCss,
	} = attributes;

	// Generate Tailwind classes.
	const paddingClasses = generateTailwindPaddingClasses( customPadding );
	const contentPaddingClasses =
		generateTailwindPaddingClasses( customContentPadding );

	const verticalContentSpacingClasses = generateTailwindClasses(
		'space-y',
		customContentSpacing.vertical
	);
	const horizontalContentSpacingClasses = generateTailwindClasses(
		'space-x',
		customContentSpacing.horizontal
	);

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

	const contentContainerClasses = classnames(
		'basis-full',
		contentPaddingClasses,
		verticalContentSpacingClasses,
		horizontalContentSpacingClasses
	);

	const Tag = customHtmlTag;

	const blockPropsClasses = classnames( paddingClasses );

	const blockPropsStyles = {
		background: customBackground,
	};

	const contentStyles = {
		background: customContentBackground,
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
					<div className="basis-full">
						<img
							src={ customImage.url }
							alt={ customImage.alt || customImage.title }
						/>
					</div>
					<div
						className={ contentContainerClasses }
						style={ contentStyles }
					>
						<InnerBlocks.Content />
					</div>
				</div>
			</Tag>
		</>
	);
}
