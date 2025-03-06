<?php
/**
 * Plugin Name:       TimberTail Theme Blocks
 * Description:       This plugin provides a collection of custom blocks designed to enhance the content creation experience within the WordPress ecosystem.
 * Version:           1.6.0
 * Requires at least: 6.7
 * Requires PHP:      7.4
 * Author:            The WordPress Contributors
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       tt-theme-blocks
 *
 * @package CreateBlock
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */
function tt_custom_blocks_init() {
	register_block_type( __DIR__ . '/build/section' );
	register_block_type( __DIR__ . '/build/icon-picker' );
}
add_action( 'init', 'tt_custom_blocks_init' );

add_filter( 'should_load_separate_core_block_assets', '__return_true' );
