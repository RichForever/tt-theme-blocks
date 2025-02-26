<?php
include dirname(__FILE__) . '/spacing.php';
/**
 * Render the section block with responsive padding classes
 */

// Get inner blocks content
$inner_blocks_html = '';
if (!empty($block->inner_blocks)) {
	foreach ($block->inner_blocks as $inner_block) {
		$inner_blocks_html .= $inner_block->render();
	}
}

// Get attributes with defaults
$padding = $attributes['padding'] ?? [
	'xs' => '-',
	'sm' => '-',
	'md' => '-',
	'lg' => '-',
	'xl' => '-',
	'2xl' => '-'
];
$layoutType = $attributes['layoutType'] ?? 'fullwidth';
$htmlElementType = $attributes['htmlElementType'] ?? 'section';

// Get complete Tailwind classes based on padding values
$padding_classes = [];
foreach ($BREAKPOINTS as $breakpoint) {
	$value = $padding[$breakpoint] ?? '-';
	if ($value !== '-' && isset($PADDING_CLASSES[$value][$breakpoint])) {
		$padding_classes[] = $PADDING_CLASSES[$value][$breakpoint];
	}
}

// Convert classes array to string.
$padding_classes = implode(' ', array_filter($padding_classes));
?>

<<?php echo $htmlElementType; ?> <?php echo get_block_wrapper_attributes(['class' => $padding_classes]); ?>>
	<?php if ($layoutType === 'boxed'): ?>
		<div class="container mx-auto">
	<?php endif; ?>
	
	<?php echo $inner_blocks_html; ?>
	
	<?php if ($layoutType === 'boxed'): ?>
		</div>
	<?php endif; ?>
</<?php echo $htmlElementType; ?>>
