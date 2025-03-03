import { useIconParser, useTailwindClasses } from '@hooks';

import { useBlockProps } from '@wordpress/block-editor';

export default function Save( { attributes } ) {
	const { icon } = attributes;
	const printedIcon = useIconParser( icon );

	// Generate Tailwind classes.
	const { iconPaddingClasses, iconSizeClasses } = useTailwindClasses(
		attributes,
		{
			includeSize: true,
		}
	);

	// Early return if there is no valid icon.
	if ( ! icon || ! printedIcon ) {
		return null;
	}

	// Apply block props and render the icon.
	const blockProps = useBlockProps.save( {
		className: `${ iconPaddingClasses } w-fit`,
	} );

	return (
		<div { ...blockProps }>
			<div className={ `icon-container ${ iconSizeClasses }` }>
				{ printedIcon }
			</div>
		</div>
	);
}
