import { InspectorControls } from '@wordpress/block-editor';
import {
	Card,
	CardBody,
	TabPanel,
} from '@wordpress/components';
import "./layout.css"
const layout = ({ general, style, advanced }) => {
	return (
		<InspectorControls>
			<TabPanel
				className="customBlockControls__tabs"
				onSelect={() => {}}
				tabs={[
					{
						name: 'general',
						title: 'General',
						component: general,
					},
					{
						name: 'style',
						title: 'Style',
						component: style
					},
					{
						name: 'advanced',
						title: 'Advanced',
						component: advanced
					},
				]}
			>
				{(tab) => (
					<Card isRounded={false} variant="secondary">
						<CardBody>
							{tab.component}
						</CardBody>
					</Card>
				)}
			</TabPanel>
		</InspectorControls>
	)
}

export default layout;
