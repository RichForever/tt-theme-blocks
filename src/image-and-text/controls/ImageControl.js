// eslint-disable-next-line import/no-extraneous-dependencies
import { __ } from '@wordpress/i18n';
import { BlockSettingsControlContext } from '@utils';
import { useContext, useState } from '@wordpress/element';
import { MediaUpload, MediaUploadCheck } from '@wordpress/block-editor';
import {
	Button,
	Panel,
	PanelBody,
	PanelRow,
	__experimentalText as Text,
	__experimentalVStack as VStack,
} from '@wordpress/components';

const ImageControl = ( { attribute, attributeName } ) => {
	const setAttributes = useContext( BlockSettingsControlContext );

	const [ mediaFile, setMediaFile ] = useState( attribute );

	const handleOnSelect = ( media ) => {
		setMediaFile( media );
		setAttributes( {
			[ attributeName ]: media,
		} );
	};

	const handleReset = () => {
		setAttributes( {
			[ attributeName ]: {},
		} );
		setMediaFile( {} );
	};

	return (
		<Panel>
			<PanelBody
				title={ __( 'Image', 'tt-theme-blocks' ) }
				initialOpen={ false }
			>
				<PanelRow>
					<Text variant="muted">
						{ __(
							'Choose the right image for your section to enhance visual appeal and convey meaning effectively. Images can significantly impact the overall user experience and accessibility of your content.',
							'tt-theme-blocks'
						) }
					</Text>
				</PanelRow>
				<PanelRow>
					<VStack>
						<img
							src={ mediaFile.url }
							alt={ mediaFile.alt || mediaFile.title }
						/>
						<MediaUploadCheck>
							<MediaUpload
								onSelect={ ( media ) =>
									handleOnSelect( media )
								}
								value={ mediaFile.id }
								render={ ( { open } ) => (
									<Button variant="primary" onClick={ open }>
										{ __(
											'Open Media Library',
											'tt-theme-blocks'
										) }
									</Button>
								) }
							/>
						</MediaUploadCheck>
					</VStack>
				</PanelRow>
				<PanelRow>
					<Button
						isDestructive
						variant="link"
						onClick={ handleReset }
					>
						{ __( 'Reset', 'tt-theme-blocks' ) }
					</Button>
				</PanelRow>
			</PanelBody>
		</Panel>
	);
};

export default ImageControl;
