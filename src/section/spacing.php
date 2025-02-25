<?php

$BREAKPOINTS = [
	'sm'  => 'sm',
	'md'  => 'md',
	'lg'  => 'lg',
	'xl'  => 'xl',
	'2xl' => '2xl'
];

// Generate padding classes for all spacing values
$SPACING_VALUES = ['0', 'px', '0.5', '1', '1.5', '2', '2.5', '3', '3.5', '4', '5', '6', '7', '8', '9', '10', '11', '12', '14', '16', '20', '24', '28', '32', '36', '40', '44', '48', '52', '56', '60', '64', '72', '80', '96'];

$PADDING_CLASSES = [];
foreach ($SPACING_VALUES as $value) {
    $PADDING_CLASSES[$value] = [];
    foreach ($BREAKPOINTS as $breakpoint => $key) {
        $PADDING_CLASSES[$value][$breakpoint] = "{$breakpoint}:py-{$value}";
    }
} 