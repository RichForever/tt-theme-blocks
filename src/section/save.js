import { useTailwindClasses } from '@hooks';

import classnames from 'classnames';
import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';

export default function Save( { attributes } ) {
	const {
		sectionHtmlElement,
		sectionLayout,
		sectionPadding,
		sectionSpacing,
		sectionBackground,
	} = attributes;

	// Generate Tailwind classes.
	const paddingClasses = useTailwindClasses( 'py', sectionPadding );
	const spacingClasses = useTailwindClasses( 'space-y', sectionSpacing );

	const containerClasses = classnames( 'container', 'mx-auto', {
		[ spacingClasses ]: sectionLayout === 'boxed',
	} );

	const Tag = sectionHtmlElement;

	const blockPropsClasses = classnames( paddingClasses, {
		[ spacingClasses ]: sectionLayout !== 'boxed',
	} );

	const blockPropsStyles = {
		background: sectionBackground,
	};

	// Set up block props
	const blockProps = useBlockProps.save( {
		className: blockPropsClasses,
		style: blockPropsStyles,
	} );

	return (
		<Tag { ...blockProps }>
			{ sectionLayout === 'boxed' ? (
				<div className={ containerClasses }>
					<InnerBlocks.Content />
				</div>
			) : (
				<InnerBlocks.Content />
			) }
		</Tag>
	);
}
