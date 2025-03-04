// eslint-disable-next-line @wordpress/no-unsafe-wp-apis
import { useIconParser, useTailwindClasses } from '@hooks';

import { __ } from '@wordpress/i18n';
import { ToolbarButton } from '@wordpress/components';
import { BlockControls, useBlockProps } from '@wordpress/block-editor';

import StylesControls from './controls/StylesControls';
import IconInserterModal from './components/IconInserterModal';
import { useIconPickerState } from './hooks/useIconPickerState';
import IconInserterPlaceholder from './components/IconInserterPlaceholder';

import './editor.scss';

export default function Edit( { attributes, setAttributes } ) {
	const { icon: iconFromAttributes } = attributes;

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

	// Set up block props.
	const blockProps = useBlockProps( {
		className: `${ iconPaddingClasses } w-fit`,
	} );

	// Determine the toolbar button label.
	const toolbarButtonLabel = ! iconFromAttributes
		? __( 'Add icon', 'tt-theme-blocks' )
		: __( 'Edit icon', 'tt-theme-blocks' );

	// Render the icon or placeholder.
	const iconMarkup = ! iconFromAttributes ? (
		<IconInserterPlaceholder onClick={ openModal } />
	) : (
		<div className={ `icon-container ${ iconSizeClasses }` }>
			{ printedIcon }
		</div>
	);

	return (
		<>
			<BlockControls group="other">
				<ToolbarButton
					text={ toolbarButtonLabel }
					onClick={ openModal }
				/>
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
