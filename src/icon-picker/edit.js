import classnames from 'classnames';
import { generateTailwindClasses } from '@utils';

import { __ } from '@wordpress/i18n';
import { ToolbarButton } from '@wordpress/components';
import { BlockControls, useBlockProps } from '@wordpress/block-editor';

import IconInserterModal from './components/IconInserterModal';
import BlockSettingsControls from './controls/BlockSettingsControl';
import IconInserterPlaceholder from './components/IconInserterPlaceholder';
import IconBlockControlsDropdown from './components/IconBlockControlsDropdown';
import {
	useIconParser,
	useIconPickerState,
	useSvgUploadAllowed,
} from './hooks';

import './editor.scss';

const CSS_CLASS_PREFIX = 'wp-block-tt-theme-blocks-icon-picker';

export default function Edit( { attributes, setAttributes } ) {
	const {
		customIcon: iconFromAttributes,
		customSize,
		customOverrideFill,
		customColor,
		customBackground,
		customPadding,
	} = attributes;

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
	const verticalPaddingClasses = generateTailwindClasses(
		'py',
		customPadding.vertical
	);
	const horizontalPaddingClasses = generateTailwindClasses(
		'px',
		customPadding.horizontal
	);

	const customSizeClasses = generateTailwindClasses( 'size', customSize );

	const iconContainerClasses = classnames(
		`${ CSS_CLASS_PREFIX }__container`,
		verticalPaddingClasses,
		horizontalPaddingClasses
	);

	const iconClasses = classnames(
		`${ CSS_CLASS_PREFIX }__icon`,
		customSizeClasses,
		{
			'*:fill-current': customOverrideFill,
		}
	);

	const blockPropsClasses = classnames( {
		'w-fit': iconFromAttributes,
	} );

	const iconStyles = {
		color: customColor,
		background: customBackground,
	};

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
				<div className={ iconContainerClasses } style={ iconStyles }>
					<div className={ iconClasses }>{ printedIcon }</div>
				</div>
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
			<BlockSettingsControls
				attributes={ attributes }
				setAttributes={ setAttributes }
			/>
			<div { ...blockProps }>{ iconMarkup }</div>
			<IconInserterModal
				isModalOpen={ isModalOpen }
				onRequestClose={ closeModal }
				selectedIcon={ selectedIcon }
				setSelectedIcon={ setSelectedIcon }
				onSave={ ( icon ) => setAttributes( { customIcon: icon } ) }
				onReset={ () => setAttributes( { customIcon: '' } ) }
				iconFromAttributes={ iconFromAttributes }
			/>
		</>
	);
}
