<?php
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

// Get attributes with defaults.
$padding = $attributes['padding'] ?? BLOCK_DEFAULTS['SECTION']['padding'];
$layoutType = $attributes['layoutType'] ?? BLOCK_DEFAULTS['SECTION']['layoutType'];
$htmlElementType = $attributes['htmlElementType'] ?? BLOCK_DEFAULTS['SECTION']['htmlElementType'];

// Generate classes from attributes.
$padding_classes = implode(' ', array_filter(array_map(function ($breakpoint, $value) {
	if ($value === '-') return '';
	// For xs breakpoint, don't add prefix
	return $breakpoint === 'xs' ? "py-{$value}" : "{$breakpoint}:py-{$value}";
}, array_keys($padding), $padding)));

$block_wrapper_attributes = get_block_wrapper_attributes([
	'class' => $padding_classes
]);
?>

<<?php echo $htmlElementType; ?> <?php echo $block_wrapper_attributes; ?>>
	<?php if ($layoutType === 'boxed'): ?>
		<div class="container mx-auto">
	<?php endif; ?>
	
	<?php echo $inner_blocks_html; ?>
	
	<?php if ($layoutType === 'boxed'): ?>
		</div>
	<?php endif; ?>
</<?php echo $htmlElementType; ?>>
