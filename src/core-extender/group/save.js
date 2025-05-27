// eslint-disable-next-line @wordpress/no-unsafe-wp-apis
import classNames from 'classnames';
import { generateTailwindClasses } from '@utils';

export const addCoreGroupCustomClasses = ( props, blockType, attributes ) => {
	const { name } = blockType;

	// Early return
	if ( name !== 'core/group' ) {
		return props;
	}

	const { customPadding } = attributes;

	const customVerticalPaddingClasses = generateTailwindClasses(
		'py',
		customPadding.vertical
	);
	const customHorizontalPaddingClasses = generateTailwindClasses(
		'px',
		customPadding.horizontal
	);

	return {
		...props,
		className: classNames(
			props.className,
			customVerticalPaddingClasses,
			customHorizontalPaddingClasses
		),
	};
};
