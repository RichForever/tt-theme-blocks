import { __ } from '@wordpress/i18n';
import {
	Dropdown,
	ToolbarButton,
	NavigableMenu,
	MenuGroup,
	MenuItem,
} from '@wordpress/components';
import { useIconUpload } from '../hooks';
import { MediaUpload, MediaUploadCheck } from '@wordpress/block-editor';

const IconBlockControlsDropdown = ( {
	iconFromAttributes,
	attributes,
	setAttributes,
	openModal,
	isSVGUploadAllowed,
} ) => {
	const replaceText = iconFromAttributes
		? __( 'Replace', 'tt-theme-blocks' )
		: __( 'Add icon', 'tt-theme-blocks' );

	const customIconText = iconFromAttributes
		? __( 'Add/edit custom icon', 'tt-theme-blocks' )
		: __( 'Add custom icon', 'tt-theme-blocks' );

	const handleDropdownMediaSelect = useIconUpload(
		attributes,
		setAttributes
	);

	return (
		<Dropdown
			renderToggle={ ( { isOpen, onToggle } ) => (
				<ToolbarButton
					aria-expanded={ isOpen }
					aria-haspopup="true"
					onClick={ onToggle }
				>
					{ replaceText }
				</ToolbarButton>
			) }
			renderContent={ ( { onClose } ) => (
				<NavigableMenu>
					<MenuGroup>
						{ isSVGUploadAllowed && (
							<MediaUploadCheck>
								<MediaUpload
									onSelect={ handleDropdownMediaSelect }
									allowedTypes={ [ 'image/svg+xml' ] }
									render={ ( { open } ) => (
										<MenuItem
											onClick={ () => {
												open();
											} }
										>
											{ __(
												'Open Media Library',
												'tt-theme-blocks'
											) }
										</MenuItem>
									) }
								/>
							</MediaUploadCheck>
						) }
						<MenuItem
							onClick={ () => {
								openModal();
								onClose();
							} }
						>
							{ customIconText }
						</MenuItem>
					</MenuGroup>
					{ iconFromAttributes && (
						<MenuGroup>
							<MenuItem
								onClick={ () => {
									setAttributes( {
										icon: undefined,
									} );
									onClose();
								} }
							>
								{ __( 'Reset', 'tt-theme-blocks' ) }
							</MenuItem>
						</MenuGroup>
					) }
				</NavigableMenu>
			) }
		/>
	);
};

export default IconBlockControlsDropdown;
