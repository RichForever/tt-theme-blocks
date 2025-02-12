<?php
/**
 * Render the inner blocks and apply responsive padding classes based on block attributes.
 *
 * @see https://github.com/WordPress/gutenberg/blob/trunk/docs/reference-guides/block-api/block-metadata.md#render
 */

// Render all inner blocks and concatenate their HTML output.
$inner_blocks_html = '';
foreach ($block->inner_blocks as $inner_block) {
	$inner_blocks_html .= $inner_block->render();
}

// Define breakpoints with corresponding attribute keys from block attributes.
$breakpoints = [
	''    => 'paddingDefault', // Default padding
	'sm'  => 'paddingSm',      // Small breakpoint padding
	'md'  => 'paddingMd',      // Medium breakpoint padding
	'lg'  => 'paddingLg',      // Large breakpoint padding
	'xl'  => 'paddingXl',      // Extra-large breakpoint padding
	'2xl' => 'padding2xl'      // 2X large breakpoint padding
];

/**
 * Generate padding classes dynamically based on provided attributes.
 * Handles responsive prefixes (e.g., 'sm:', 'md:') and sanitizes output.
 */
$padding_classes = [];

foreach ($breakpoints as $prefix => $attribute) {
	if (isset($attributes[$attribute]) && $attributes[$attribute] !== '') {
		$value = intval($attributes[$attribute]); // Ensure the value is sanitized as an integer
		$class = $prefix ? "{$prefix}:py-{$value}" : "py-{$value}";
		$padding_classes[] = esc_attr($class); // Escape the class name for safe output
	}
}

// Join all padding classes into a single string.
$padding_classes = implode(' ', $padding_classes);
?>

<!-- Render the section with dynamic padding classes and inner blocks content -->
<section <?php echo get_block_wrapper_attributes([
	'class' => $padding_classes
]); ?>>
	<?php echo $padding_classes; ?>
	<?php echo $inner_blocks_html; ?>
</section>
