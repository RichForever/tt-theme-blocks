import classnames from 'classnames';
import { generateTailwindClasses } from '@utils';

import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';

export default function Save( { attributes } ) {
	const {
		customImage,
		customHtmlTag,
		customBackground,
		customFlex,
		customPadding,
		customSpacing,
	} = attributes;

	// Generate Tailwind classes.
	const verticalPaddingClasses = generateTailwindClasses(
		'py',
		customPadding.vertical
	);
	const horizontalPaddingClasses = generateTailwindClasses(
		'px',
		customPadding.horizontal
	);
	const verticalSpacingClasses = generateTailwindClasses(
		'space-y',
		customSpacing.vertical
	);
	const horizontalSpacingClasses = generateTailwindClasses(
		'space-x',
		customSpacing.horizontal
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
		flexGapClasses,
		verticalSpacingClasses,
		horizontalSpacingClasses
	);

	const Tag = customHtmlTag;

	const blockPropsClasses = classnames(
		verticalPaddingClasses,
		horizontalPaddingClasses
	);

	const blockPropsStyles = {
		background: customBackground,
	};

	// Set up block props
	const blockProps = useBlockProps.save( {
		className: blockPropsClasses,
		style: blockPropsStyles,
	} );

	return (
		<Tag { ...blockProps }>
			<div className={ containerClasses }>
				<div className="basis-full">
					<img
						src={ customImage.url }
						alt={ customImage.alt || customImage.title }
					/>
				</div>
				<div className="basis-full">
					<InnerBlocks.Content />
				</div>
			</div>
		</Tag>
	);
}
