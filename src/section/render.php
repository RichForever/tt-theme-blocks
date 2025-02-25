<?php
require_once dirname(__FILE__) . '/spacing.php';

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

// Ensure `padding` object exists in attributes.
$padding = $attributes['padding'] ?? [
	'sm' => '0',
	'md' => '0',
	'lg' => '0',
	'xl' => '0',
	'2xl' => '0'
];
$layoutType = $attributes['layoutType'] ?? true;

// Define breakpoints and corresponding attributes
$breakpoints = [
	'sm'  => 'sm',
	'md'  => 'md',
	'lg'  => 'lg',
	'xl'  => 'xl',
	'2xl' => '2xl'
];

// Get complete Tailwind classes based on padding values
$padding_classes = [];
foreach ($breakpoints as $breakpoint => $key) {
	$value = $padding[$key] ?? '0';
	if (isset($PADDING_CLASSES[$value][$breakpoint])) {
		$padding_classes[] = $PADDING_CLASSES[$value][$breakpoint];
	}
}

// Convert classes array to string.
$padding_classes = implode(' ', array_filter($padding_classes));
?>

<!-- Render the section with dynamic padding classes and inner blocks content -->
<section <?php echo get_block_wrapper_attributes([
	'class' => $padding_classes
]); ?>>
	<?php echo $layoutType === 'boxed' ? '<div class="container mx-auto">' : ''; ?>
	<?php echo $inner_blocks_html; ?>
	<?php echo $padding_classes; ?>
	<?php echo $layoutType === 'boxed' ? '</div>' : ''; ?>
</section>
