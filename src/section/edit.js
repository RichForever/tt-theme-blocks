// eslint-disable-next-line @wordpress/no-unsafe-wp-apis
import classnames from 'classnames';
import { useTailwindClasses } from '@hooks';

import { __ } from '@wordpress/i18n';
import { useEffect, useRef } from '@wordpress/element';
import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';

import StylesControls from './controls/StylesControls';
import SettingsControls from './controls/SettingsControls';

import './editor.scss';

export default function Edit( { attributes, setAttributes } ) {
	const {
		sectionHtmlElement,
		sectionLayout,
		sectionPadding,
		sectionSpacing,
		sectionBackground,
	} = attributes;

	// Generate Tailwind classes.
	const paddingClasses = useTailwindClasses( 'py', sectionPadding );
	const spacingClasses = useTailwindClasses( 'space-y', sectionSpacing );

	const ref = useRef();

	useEffect( () => {
		// @ts-ignore
		const el = ref.current.querySelector(
			`#${ blockProps.id } .block-editor-block-list__layout`
		);
		const ELEMENT_CLASS = 'block-editor-block-list__layout';
		const elClasses = classnames( ELEMENT_CLASS, spacingClasses );

		el.className = elClasses;
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [ sectionHtmlElement, sectionLayout, sectionSpacing ] );

	const containerClasses = classnames(
		'container',
		'mx-auto',
		'*:border',
		'*:border-red-500',
		'*:border-dotted'
	);

	const Tag = sectionHtmlElement;

	const blockPropsClasses = classnames( paddingClasses );

	const blockPropsStyles = {
		background: sectionBackground,
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
			<SettingsControls
				attributes={ attributes }
				setAttributes={ setAttributes }
			/>
			<StylesControls
				attributes={ attributes }
				setAttributes={ setAttributes }
			/>

			<Tag { ...blockProps } ref={ ref }>
				{ sectionLayout === 'boxed' ? (
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
