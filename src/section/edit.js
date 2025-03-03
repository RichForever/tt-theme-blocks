// eslint-disable-next-line @wordpress/no-unsafe-wp-apis
import { useTailwindClasses } from '@hooks';

import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';

import StylesControls from './controls/StylesControls';
import SettingsControls from './controls/SettingsControls';

import './editor.scss';

export default function Edit( { attributes, setAttributes } ) {
	const { htmlElementType, layoutType } = attributes;

	// Generate Tailwind classes.
	const { paddingClasses } = useTailwindClasses( attributes, {
		paddingPrefix: 'py',
	} );

	const Tag = htmlElementType;

	// Set up block props.
	const blockProps = useBlockProps( {
		className: paddingClasses,
	} );

	return (
		<>
			<SettingsControls
				attributes={ attributes }
				setAttributes={ setAttributes }
			/>
			<StylesControls
				attributes={ attributes }
				setAttributes={ setAttributes }
			/>

			<Tag { ...blockProps }>
				{ layoutType === 'boxed' ? (
					<div className="container mx-auto">
						<InnerBlocks />
					</div>
				) : (
					<InnerBlocks />
				) }
			</Tag>
		</>
	);
}
