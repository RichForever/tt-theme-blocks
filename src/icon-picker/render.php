<?php
// Get attributes with defaults.
$padding = $attributes['iconPadding'] ?? BLOCK_DEFAULTS['ICON_PICKER']['padding'];
$icon = $attributes['icon'] ?? '';
$iconSize = $attributes['iconSize'] ?? BLOCK_DEFAULTS['ICON_PICKER']['size'];

// Generate classes from attributes.
$padding_classes = implode(' ', array_filter(array_map(function ($breakpoint, $value) {
	if ($value === '-') return '';
	// For xs breakpoint, don't add prefix
	return $breakpoint === 'xs' ? "p-{$value}" : "{$breakpoint}:p-{$value}";
}, array_keys($padding), $padding)));

$size_classes = implode(' ', array_filter(array_map(function ($breakpoint, $value) {
	if ($value === '-') return '';
	// For xs breakpoint, don't add prefix
	return $breakpoint === 'xs' ? "size-{$value}" : "{$breakpoint}:size-{$value}";
}, array_keys($iconSize), $iconSize)));

// Get block wrapper attributes.
$block_wrapper_attributes = get_block_wrapper_attributes([
	'class' => $padding_classes . ' flex w-fit',
]);


?>

<?php if (!empty($icon)): ?>
	<div <?php echo $block_wrapper_attributes; ?>>
		<div class="icon-container <?php echo $size_classes; ?> *:w-full *:h-full">
			<?php echo $icon; ?>
		</div>
	</div>
<?php endif; ?>