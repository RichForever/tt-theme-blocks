// eslint-disable-next-line @wordpress/no-unsafe-wp-apis
import classNames from 'classnames';
import { generateTailwindClasses } from '@utils';

export const addCoreColumnCustomClasses = ( props, blockType, attributes ) => {
	const { name } = blockType;

	// Early return
	if ( name !== 'core/column' ) {
		return props;
	}

	const { columnPadding } = attributes;
	const columnPaddingClasses = generateTailwindClasses( 'p', columnPadding );
	return {
		...props,
		className: classNames( props.className, columnPaddingClasses ),
	};
};
