// eslint-disable-next-line @wordpress/no-unsafe-wp-apis
import {
	generateTailwindClasses,
	generateTailwindPaddingClasses,
	generateUniqueId,
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
		customImage,
		customHtmlTag,
		customContentBackground,
		customBackground,
		customFlex,
		customContentPadding,
		customPadding,
		customContentSpacing,
		customCss,
	} = attributes;

	// Generate Tailwind classes.
	const paddingClasses = generateTailwindPaddingClasses( customPadding );
	const contentPaddingClasses =
		generateTailwindPaddingClasses( customContentPadding );

	const verticalContentSpacingClasses = generateTailwindClasses(
		'space-y',
		customContentSpacing.vertical
	);
	const horizontalContentSpacingClasses = generateTailwindClasses(
		'space-x',
		customContentSpacing.horizontal
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
		flexGapClasses
	);

	const contentContainerClasses = classnames(
		'basis-full',
		contentPaddingClasses,
		verticalContentSpacingClasses,
		horizontalContentSpacingClasses
	);

	const Tag = customHtmlTag;

	const blockPropsClasses = classnames( paddingClasses );

	const blockPropsStyles = {
		background: customBackground,
	};

	const contentStyles = {
		background: customContentBackground,
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
				<div className={ containerClasses }>
					<div className="basis-full">
						<img
							src={ customImage.url }
							alt={ customImage.alt || customImage.title }
						/>
					</div>
					<div
						className={ contentContainerClasses }
						style={ contentStyles }
					>
						<InnerBlocks
							template={ INNER_BLOCKS_SECTION_TEMPLATE }
						/>
					</div>
				</div>
			</Tag>
		</>
	);
}
