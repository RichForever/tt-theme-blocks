// eslint-disable-next-line @wordpress/no-unsafe-wp-apis
import {
	generateUniqueId,
	generateTailwindClasses,
	generateTailwindPaddingClasses,
} from '@utils';
import classnames from 'classnames';

import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';
import { useEffect, useRef } from '@wordpress/element';
import { __ } from '@wordpress/i18n';

import BlockSettingsControls from './controls/BlockSettingsControls';

import './editor.scss';

export default function Edit( { attributes, setAttributes, clientId } ) {
	const {
		customBlockId,
		customHtmlTag,
		customLayout,
		customVerticalSpacing,
		customHorizontalSpacing,
		customBackground,
		customSpacing,
		customPadding,
		customCss,
	} = attributes;

	const ref = useRef();

	// Generate Tailwind classes.
	const paddingClasses = generateTailwindPaddingClasses( customPadding );

	const verticalSpacingClasses = generateTailwindClasses(
		'space-y',
		customSpacing.vertical
	);
	const horizontalSpacingClasses = generateTailwindClasses(
		'space-x',
		customSpacing.horizontal
	);

	useEffect( () => {
		const ELEMENT_CSS_CLASS = 'block-editor-block-list__layout';
		// @ts-ignore
		const el = ref.current.querySelector(
			`#${ blockProps.id } .${ ELEMENT_CSS_CLASS }`
		);
		const elClasses = classnames(
			ELEMENT_CSS_CLASS,
			verticalSpacingClasses,
			horizontalSpacingClasses
		);

		el.className = elClasses;
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [
		customHtmlTag,
		customLayout,
		customHorizontalSpacing,
		customVerticalSpacing,
	] );

	const containerClasses = classnames(
		'container',
		'mx-auto',
		'*:border',
		'*:border-red-500',
		'*:border-dotted',
		verticalSpacingClasses,
		horizontalSpacingClasses
	);

	const Tag = customHtmlTag;

	const blockPropsClasses = classnames( paddingClasses );

	const blockPropsStyles = {
		background: customBackground,
	};

	// Set up block props.
	const blockProps = useBlockProps( {
		className: blockPropsClasses,
		style: blockPropsStyles,
	} );

	// Set the customBlockId once when the block is created
	useEffect( () => {
		if ( ! customBlockId ) {
			setAttributes( { customBlockId: generateUniqueId() } );
		}
	} );

	// Replace block id token and "minify" css
	const processedCustomCss =
		customCss
			?.replace( /\[block\]/g, `#block-${ clientId }` )
			.replace( /\s+/g, '' ) || '';

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

			{ processedCustomCss && <style>{ processedCustomCss }</style> }
			<Tag { ...blockProps } ref={ ref }>
				{ customLayout === 'boxed' ? (
					<div className={ containerClasses }>
						<InnerBlocks
							template={ INNER_BLOCKS_SECTION_TEMPLATE }
						/>
					</div>
				) : (
					<InnerBlocks template={ INNER_BLOCKS_SECTION_TEMPLATE } />
				) }
			</Tag>
		</>
	);
}
