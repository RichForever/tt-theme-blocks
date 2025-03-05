// eslint-disable-next-line @wordpress/no-unsafe-wp-apis
import { useTailwindClasses } from '@hooks';
import {
	useIconParser,
	useIconPickerState,
	useSvgUploadAllowed,
} from './hooks';

// eslint-disable-next-line import/no-extraneous-dependencies
import classnames from 'classnames';
import { __ } from '@wordpress/i18n';
import { ToolbarButton } from '@wordpress/components';
import { BlockControls, useBlockProps } from '@wordpress/block-editor';

import StylesControls from './controls/StylesControls';
import IconInserterModal from './components/IconInserterModal';

import IconInserterPlaceholder from './components/IconInserterPlaceholder';
import IconBlockControlsDropdown from './components/IconBlockControlsDropdown';

import './editor.scss';

export default function Edit( { attributes, setAttributes } ) {
	const { icon: iconFromAttributes, iconOverriddeFill } = attributes;

	// Use the icon picker state hook.
	const {
		selectedIcon,
		setSelectedIcon,
		isModalOpen,
		openModal,
		closeModal,
	} = useIconPickerState();

	// Parse the icon and ensure it's valid.
	const printedIcon = useIconParser( iconFromAttributes ) || '';

	// Generate Tailwind classes.
	const { iconPaddingClasses, iconSizeClasses } = useTailwindClasses(
		attributes,
		{
			includeSize: true,
		}
	);

	const iconContainerClasses = classnames(
		'icon-container',
		iconSizeClasses,
		{
			'*:fill-current': iconOverriddeFill,
		}
	);

	const blockPropsClasses = classnames( iconPaddingClasses, {
		'w-fit': iconFromAttributes,
	} );

	// Set up block props.
	const blockProps = useBlockProps( {
		className: blockPropsClasses,
	} );

	// Determine the toolbar button label.
	const replaceText = iconFromAttributes
		? __( 'Replace', 'tt-theme-blocks' )
		: __( 'Add icon', 'tt-theme-blocks' );

	const isSVGUploadAllowed = useSvgUploadAllowed();
	// Render the icon or placeholder.
	const iconMarkup = (
		<>
			{ ! iconFromAttributes ? (
				<IconInserterPlaceholder
					openModal={ openModal }
					attributes={ attributes }
					setAttributes={ setAttributes }
					isSVGUploadAllowed={ isSVGUploadAllowed }
				/>
			) : (
				<div className={ iconContainerClasses }>{ printedIcon }</div>
			) }
		</>
	);

	return (
		<>
			<BlockControls group="other">
				{ isSVGUploadAllowed ? (
					<IconBlockControlsDropdown
						attributes={ attributes }
						setAttributes={ setAttributes }
						iconFromAttributes={ iconFromAttributes }
						openModal={ openModal }
						isSVGUploadAllowed={ isSVGUploadAllowed }
					/>
				) : (
					<ToolbarButton onClick={ openModal }>
						{ replaceText }
					</ToolbarButton>
				) }
			</BlockControls>
			<StylesControls
				attributes={ attributes }
				setAttributes={ setAttributes }
			/>
			<div { ...blockProps }>{ iconMarkup }</div>
			<IconInserterModal
				isModalOpen={ isModalOpen }
				onRequestClose={ closeModal }
				selectedIcon={ selectedIcon }
				setSelectedIcon={ setSelectedIcon }
				onSave={ ( icon ) => setAttributes( { icon } ) }
				onReset={ () => setAttributes( { icon: '' } ) }
				iconFromAttributes={ iconFromAttributes }
			/>
		</>
	);
}
