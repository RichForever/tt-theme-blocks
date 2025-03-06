import { useTailwindClasses } from '@hooks';

import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';

export default function Save( { attributes } ) {
	const { sectionHtmlElement, sectionLayout, sectionBackground } = attributes;

	// Generate Tailwind classes.
	const { paddingClasses } = useTailwindClasses( attributes, {
		paddingPrefix: 'py',
	} );

	const sectionStyles = {
		background: sectionBackground,
	};

	// Set up block props
	const blockProps = useBlockProps.save( {
		className: paddingClasses,
		style: sectionStyles,
	} );

	const Tag = sectionHtmlElement;

	return (
		<Tag { ...blockProps }>
			{ sectionLayout === 'boxed' ? (
				<div className="container mx-auto">
					<InnerBlocks.Content />
				</div>
			) : (
				<InnerBlocks.Content />
			) }
		</Tag>
	);
}
