import classnames from 'classnames';
import { generateTailwindClasses } from '@utils';

import { useBlockProps } from '@wordpress/block-editor';

import { useIconParser } from './hooks/useIconParser';

const CSS_CLASS_PREFIX = 'wp-block-tt-theme-blocks-icon-picker';

export default function Save( { attributes } ) {
	const {
		customIcon,
		customSize,
		customOverrideFill,
		customColor,
		customBackground,
		customPadding,
	} = attributes;
	const printedIcon = useIconParser( customIcon );

	// Early return if there is no valid icon.
	if ( ! customIcon || ! printedIcon ) {
		return null;
	}

	// Generate Tailwind classes.
	const verticalPaddingClasses = generateTailwindClasses(
		'py',
		customPadding.vertical
	);
	const horizontalPaddingClasses = generateTailwindClasses(
		'px',
		customPadding.horizontal
	);

	const customSizeClasses = generateTailwindClasses( 'size', customSize );

	const iconContainerClasses = classnames(
		`${ CSS_CLASS_PREFIX }__container`,
		verticalPaddingClasses,
		horizontalPaddingClasses
	);

	const iconClasses = classnames(
		`${ CSS_CLASS_PREFIX }__icon`,
		customSizeClasses,
		{
			'*:fill-current': customOverrideFill,
		}
	);

	const blockPropsClasses = classnames( {
		'w-fit': customIcon,
	} );

	const iconStyles = {
		color: customColor,
		background: customBackground,
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
