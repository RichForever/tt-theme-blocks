// eslint-disable-next-line @wordpress/no-unsafe-wp-apis
import classNames from 'classnames';
import { generateTailwindPaddingClasses } from '@utils';

export const addCoreGroupCustomClasses = ( props, blockType, attributes ) => {
	const { name } = blockType;

	// Early return
	if ( name !== 'core/group' ) {
		return props;
	}

	const { customPadding } = attributes;

	const paddingClasses = generateTailwindPaddingClasses( customPadding );

	return {
		...props,
		className: classNames( props.className, paddingClasses ),
	};
};
