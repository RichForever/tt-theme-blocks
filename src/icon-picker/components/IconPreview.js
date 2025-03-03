import { __ } from '@wordpress/i18n';
import { Card, CardBody, Icon } from '@wordpress/components';
/**
 * Displays a preview of the icon.
 *
 * @param {Object} props      - The component props.
 * @param {Object} props.icon - The parsed SVG icon to display.
 * @return {JSX.Element} The icon preview component.
 */
const IconPreview = ( { icon } ) => {
	return (
		<Card variant="grid" isRounded={ false } isBorderless>
			<CardBody
				size="large"
				style={ { display: 'flex', justifyContent: 'center' } }
			>
				{ icon ? (
					<Icon icon={ icon } size={ 64 } />
				) : (
					__( 'No icon provided', 'tt-theme-blocks' )
				) }
			</CardBody>
		</Card>
	);
};

export default IconPreview;
