import classnames from 'classnames';
import { useTailwindClasses } from '@hooks';

import { useBlockProps } from '@wordpress/block-editor';

import { useIconParser } from './hooks/useIconParser';

const CSS_CLASS_PREFIX = 'wp-block-tt-theme-blocks-icon-picker';

export default function Save( { attributes } ) {
	const {
		icon,
		iconPadding,
		iconSize,
		iconOverriddeFill,
		iconColor,
		iconBackground,
	} = attributes;
	const printedIcon = useIconParser( icon );

	// Generate Tailwind classes.
	const iconPaddingClasses = useTailwindClasses( 'p', iconPadding );
	const iconSizeClasses = useTailwindClasses( 'size', iconSize );

	// Early return if there is no valid icon.
	if ( ! icon || ! printedIcon ) {
		return null;
	}

	const iconContainerClasses = classnames(
		`${ CSS_CLASS_PREFIX }__container`,
		iconPaddingClasses
	);

	const iconClasses = classnames(
		`${ CSS_CLASS_PREFIX }__icon`,
		iconSizeClasses,
		{
			'*:fill-current': iconOverriddeFill,
		}
	);

	const blockPropsClasses = classnames( {
		'w-fit': icon,
	} );

	const iconStyles = {
		color: iconColor,
		background: iconBackground,
	};

	// Apply block props and render the icon.
	const blockProps = useBlockProps.save( {
		className: blockPropsClasses,
	} );

	const iconMarkup = (
		<div className={ iconContainerClasses } style={ iconStyles }>
			<div className={ iconClasses }>{ printedIcon }</div>
		</div>
	);

	return <div { ...blockProps }>{ iconMarkup }</div>;
}
