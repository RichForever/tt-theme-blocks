import { useTailwindClasses } from '@hooks';
import { useIconParser } from './hooks/useIconParser';
// eslint-disable-next-line import/no-extraneous-dependencies
import classnames from 'classnames';
import { useBlockProps } from '@wordpress/block-editor';

export default function Save( { attributes } ) {
	const { icon, iconOverriddeFill } = attributes;
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

	const iconContainerClasses = classnames(
		'icon-container',
		iconSizeClasses,
		{
			'*:fill-current': iconOverriddeFill,
		}
	);

	const blockPropsClasses = classnames( iconPaddingClasses, {
		'w-fit': icon,
	} );

	// Apply block props and render the icon.
	const blockProps = useBlockProps.save( {
		className: blockPropsClasses,
	} );

	const iconMarkup = (
		<div className={ iconContainerClasses }>{ printedIcon }</div>
	);

	return <div { ...blockProps }>{ iconMarkup }</div>;
}
