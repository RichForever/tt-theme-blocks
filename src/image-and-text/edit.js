// eslint-disable-next-line @wordpress/no-unsafe-wp-apis
import classnames from 'classnames';
import { generateTailwindClasses } from '@utils';

import { __ } from '@wordpress/i18n';
import { useEffect, useRef } from '@wordpress/element';
import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';

import BlockSettingsControls from './controls/BlockSettingsControls';

import './editor.scss';

export default function Edit( { attributes, setAttributes } ) {
	const {
		customImage,
		customHtmlTag,
		customBackground,
		customFlex,
		customPadding,
		customSpacing,
	} = attributes;

	// Generate Tailwind classes.
	const verticalPaddingClasses = generateTailwindClasses(
		'py',
		customPadding.vertical
	);
	const horizontalPaddingClasses = generateTailwindClasses(
		'px',
		customPadding.horizontal
	);

	const verticalSpacingClasses = generateTailwindClasses(
		'space-y',
		customSpacing.vertical
	);
	const horizontalSpacingClasses = generateTailwindClasses(
		'space-x',
		customSpacing.horizontal
	);

	const flexDirectionClasses = generateTailwindClasses(
		'flex',
		customFlex.direction
	);

	const flexGapClasses = generateTailwindClasses( 'gap', customFlex.gap );

	const ref = useRef();

	useEffect( () => {
		const ELEMENT_CSS_CLASS = 'block-editor-block-list__layout';
		// @ts-ignore
		const el = ref.current.querySelector(
			`#${ blockProps.id } .${ ELEMENT_CSS_CLASS }`
		);
		const elClasses = classnames( ELEMENT_CSS_CLASS );

		el.className = elClasses;
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [ customHtmlTag ] );

	const containerClasses = classnames(
		'flex',
		'justify-between',
		'*:border',
		'*:border-red-500',
		'*:border-dotted',
		flexDirectionClasses,
		flexGapClasses,
		verticalSpacingClasses,
		horizontalSpacingClasses
	);

	const Tag = customHtmlTag;

	const blockPropsClasses = classnames(
		verticalPaddingClasses,
		horizontalPaddingClasses
	);

	const blockPropsStyles = {
		background: customBackground,
	};

	// Set up block props.
	const blockProps = useBlockProps( {
		className: blockPropsClasses,
		style: blockPropsStyles,
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
			<BlockSettingsControls
				attributes={ attributes }
				setAttributes={ setAttributes }
			/>

			<Tag { ...blockProps } ref={ ref }>
				<div className={ containerClasses }>
					<div className="basis-full">
						<img
							src={ customImage.url }
							alt={ customImage.alt || customImage.title }
						/>
					</div>
					<div className="basis-full">
						<InnerBlocks
							template={ INNER_BLOCKS_SECTION_TEMPLATE }
						/>
					</div>
				</div>
			</Tag>
		</>
	);
}
