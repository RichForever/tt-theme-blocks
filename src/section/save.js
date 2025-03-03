import { useTailwindClasses } from '@hooks';

import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';

export default function Save( { attributes } ) {
	const { htmlElementType, layoutType } = attributes;

	// Generate Tailwind classes.
	const { paddingClasses } = useTailwindClasses( attributes, {
		paddingPrefix: 'py',
	} );

	// Set up block props
	const blockProps = useBlockProps.save( {
		className: paddingClasses,
	} );

	const Tag = htmlElementType;

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
