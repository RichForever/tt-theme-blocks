import { useIconParser } from '@hooks';

import { __ } from '@wordpress/i18n';
import { useEffect } from '@wordpress/element';
import {
	Button,
	Card,
	CardBody,
	CardFooter,
	__experimentalHStack as HStack,
	Modal,
	Notice,
	TextareaControl,
	__experimentalVStack as VStack,
} from '@wordpress/components';

import IconPreview from './IconPreview';

import './IconInserterModal.scss';

const IconInserterModal = ( {
	isModalOpen,
	onRequestClose,
	selectedIcon,
	setSelectedIcon,
	onSave,
	onReset,
	iconFromAttributes,
} ) => {
	// Parse the custom icon and check if it's valid.
	const parsedIcon = useIconParser( selectedIcon );
	const isSVG = !! parsedIcon;

	// Synchronize selectedIcon with iconFromAttributes
	useEffect( () => {
		setSelectedIcon( iconFromAttributes );
	}, [ iconFromAttributes, setSelectedIcon ] ); // Run this effect when iconFromAttributes changes

	if ( ! isModalOpen ) {
		return null;
	}

	const handleSave = () => {
		onSave( selectedIcon );
		onRequestClose();
	};

	const handleReset = () => {
		onReset();
		setSelectedIcon( '' );
	};

	const modalTitle = ! selectedIcon
		? __( 'Add icon', 'tt-theme-blocks' )
		: __( 'Edit icon', 'tt-theme-blocks' );

	return (
		<Modal
			title={ modalTitle }
			onRequestClose={ onRequestClose }
			size="medium"
			className="IconInserterModal"
		>
			<Card size="extraSmall" isRounded={ false } isBorderless>
				<CardBody>
					<VStack gap={ 16 }>
						<IconPreview icon={ parsedIcon } />
						<TextareaControl
							__nextHasNoMarginBottom
							label={ __( 'Custom SVG code', 'tt-theme-blocks' ) }
							hideLabelFromVision
							value={ selectedIcon }
							onChange={ setSelectedIcon }
							placeholder={ __(
								'Paste SVG code here',
								'tt-theme-blocks'
							) }
							rows={ 8 }
						/>
						{ selectedIcon && ! isSVG && (
							<Notice status="error" isDismissible={ false }>
								{ __(
									'The custom icon does not appear to be in a valid SVG format or contains non-SVG elements.',
									'tt-theme-blocks'
								) }
							</Notice>
						) }
					</VStack>
				</CardBody>
				<CardFooter>
					<HStack>
						<Button
							variant="primary"
							onClick={ handleSave }
							disabled={ selectedIcon !== '' && ! isSVG }
						>
							{ __( 'Save', 'tt-theme-blocks' ) }
						</Button>
						<Button variant="secondary" onClick={ handleReset }>
							{ __( 'Reset', 'tt-theme-blocks' ) }
						</Button>
					</HStack>
				</CardFooter>
			</Card>
		</Modal>
	);
};

export default IconInserterModal;
