<?php
/**
 * Plugin Name:       TimberTail Theme Blocks
 * Description:       This plugin provides a collection of custom blocks designed to enhance the content creation experience within the WordPress ecosystem.
 * Version:           1.9.1
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
	register_block_type( __DIR__ . '/build/image-and-text' );
}
add_action( 'init', 'tt_custom_blocks_init' );

add_filter( 'should_load_separate_core_block_assets', '__return_true' );

add_filter( 'block_categories_all' , function( $categories ) {

    // Adding a new category.
	$categories[] = array(
		'slug'  => 'tt-theme-blocks-category',
		'title' => 'TT Theme Blocks'
	);

	return $categories;
} );


 /**
 * Enqueue Editor scripts.
 */
function tt_custom_core_blocks_extender_enqueue_block_editor_assets() {
	$asset_file = include plugin_dir_path( __FILE__ ) . 'build/core-extender.asset.php';

	wp_enqueue_script(
		'tt-custom-blocks-editor-scripts',
		plugin_dir_url( __FILE__ ) . 'build/core-extender.js',
		$asset_file['dependencies'],
		$asset_file['version']
	);
}
add_action( 'enqueue_block_editor_assets', 'tt_custom_core_blocks_extender_enqueue_block_editor_assets' );