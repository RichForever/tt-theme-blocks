// eslint-disable-next-line @wordpress/no-unsafe-wp-apis
import classNames from 'classnames';
import { generateTailwindPaddingClasses } from '@utils';

export const addCoreColumnCustomClasses = ( props, blockType, attributes ) => {
	const { name } = blockType;

	// Early return
	if ( name !== 'core/column' ) {
		return props;
	}

	const { customPadding } = attributes;

	const paddingClasses = generateTailwindPaddingClasses( customPadding );

	return {
		...props,
		className: classNames( props.className, paddingClasses ),
	};
};
