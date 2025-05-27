// eslint-disable-next-line import/no-extraneous-dependencies
import { __ } from '@wordpress/i18n';
import { useContext } from '@wordpress/element';
import BlockSettingsControlContext from '@utils/context';
import { PanelColorSettings } from '@wordpress/block-editor';
import {
	Panel,
	PanelBody,
	PanelRow,
	__experimentalText as Text,
} from '@wordpress/components';

const BackgroundControl = ( { attribute, attributeName } ) => {
	const setAttributes = useContext( BlockSettingsControlContext );

	const handleOnChangeColor = ( val ) => {
		setAttributes( {
			[ attributeName ]: val,
		} );
	};

	return (
		<Panel>
			<PanelBody
				title={ __( 'Background', 'tt-theme-blocks' ) }
				initialOpen={ false }
			>
				<PanelRow>
					<Text variant="muted">
						{ __(
							"Customize the background color of your block to create visual separation between content areas or to match your site's color scheme.",
							'tt-theme-blocks'
						) }
					</Text>
				</PanelRow>
				<PanelRow>
					<div className="w-full">
						<PanelColorSettings
							// @ts-ignore
							className="!p-0 !border-none"
							__experimentalIsRenderedInSidebar
							title={ __( 'Background', 'tt-theme-blocks' ) }
							colorSettings={ [
								{
									value: attribute,
									onChange: ( color ) =>
										handleOnChangeColor( color ),
									label: __(
										'Background',
										'tt-theme-blocks'
									),
								},
							] }
						/>
					</div>
				</PanelRow>
			</PanelBody>
		</Panel>
	);
};

export default BackgroundControl;
