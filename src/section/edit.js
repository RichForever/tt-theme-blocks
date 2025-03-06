// eslint-disable-next-line @wordpress/no-unsafe-wp-apis
import { useTailwindClasses } from '@hooks';

import { __ } from '@wordpress/i18n';
import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';

import StylesControls from './controls/StylesControls';
import SettingsControls from './controls/SettingsControls';

import './editor.scss';

export default function Edit( { attributes, setAttributes } ) {
	const { sectionHtmlElement, sectionLayout, sectionBackground } = attributes;

	// Generate Tailwind classes.
	const { paddingClasses } = useTailwindClasses( attributes, {
		paddingPrefix: 'py',
	} );

	const sectionStyles = {
		background: sectionBackground,
	};

	const Tag = sectionHtmlElement;

	// Set up block props.
	const blockProps = useBlockProps( {
		className: paddingClasses,
		style: sectionStyles,
	} );

	const INNER_BLOCKS_SECTION_TEMPLATE = [
		[
			'core/paragraph',
			{
				placeholder: __(
					'Click here and type "/" to add block',
					'tt-theme-blocks'
				),
			},
		],
	];

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
				{ sectionLayout === 'boxed' ? (
					<div className="container mx-auto">
						<div className="border border-red-500 border-dotted">
							<InnerBlocks
								template={ INNER_BLOCKS_SECTION_TEMPLATE }
							/>
						</div>
					</div>
				) : (
					<InnerBlocks template={ INNER_BLOCKS_SECTION_TEMPLATE } />
				) }
			</Tag>
		</>
	);
}
