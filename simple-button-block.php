<?php

/**
 * Plugin Name:       simple-button-block
 * Description:       Often when external links are listed, there is no OG image to link to; Simple Button Block provides a simple button block where you simply enter an image, title, and link.
 * Requires at least: 6.1
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            The WordPress Contributors
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       simple-button-block
 *
 * @package CreateBlock
 */

if (!defined('ABSPATH')) {
	exit; // Exit if accessed directly.
}

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */
function create_block_simple_button_block_block_init()
{
	register_block_type(__DIR__ . '/build');
}
add_action('init', 'create_block_simple_button_block_block_init');
