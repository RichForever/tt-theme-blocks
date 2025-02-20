<?php
/**
 * Render the inner blocks and apply responsive padding classes based on block attributes.
 */

// Ensure inner blocks exist and render them safely.
$inner_blocks_html = '';
if (!empty($block->inner_blocks)) {
	foreach ($block->inner_blocks as $inner_block) {
		$inner_blocks_html .= $inner_block->render();
	}
}

// Ensure `blockVerticalPadding` object exists in attributes.
$blockVerticalPadding = $attributes['blockVerticalPadding'] ?? [];
$layoutType = $attributes['layoutType'] ?? true;

// Define breakpoints and corresponding attributes inside `blockVerticalPadding`.
$breakpoints = [
	'xs'  => 'paddingXs',
	'sm'  => 'paddingSm',
	'md'  => 'paddingMd',
	'lg'  => 'paddingLg',
	'xl'  => 'paddingXl',
	'2xl' => 'padding2xl'
];

// Generate padding classes dynamically, handling missing values.
$padding_classes = [];
foreach ($breakpoints as $prefix => $attribute) {
	if (!empty($blockVerticalPadding[$attribute])) {
		$value = $blockVerticalPadding[$attribute]; // Ensure integer
		$class = esc_attr($prefix ? "{$prefix}:py-{$value}" : "py-{$value}");
		$padding_classes[] = $class;
	}
}

// Convert classes array to string.
$padding_classes = implode(' ', $padding_classes);
?>

<!-- Render the section with dynamic padding classes and inner blocks content -->
<section <?php echo get_block_wrapper_attributes([
	'class' => $padding_classes
]); ?>>
	<?php echo $layoutType === 'boxed' ? '<div class="container mx-auto">' : ''; ?>
	<?php echo $inner_blocks_html; ?>
	<?php echo $layoutType === 'boxed' ? '</div>' : ''; ?>
</section>
