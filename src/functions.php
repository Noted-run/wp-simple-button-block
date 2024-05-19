<?php
/*
Plugin Name: My First Block
*/

defined('ABSPATH') || exit;

function my_first_block_enqueue()
{
    //ブロック用のスクリプトを wp_register_script で登録
    wp_register_script(
        //スクリプトを識別するためのハンドル名
        'my-first-block-script',
        //スクリプトの URL
        plugins_url('block.js', __FILE__),
        //依存するスクリプト
        array('wp-blocks', 'wp-element')
    );

    //ブロックタイプの登録
    register_block_type(
        //namespace を含むブロックタイプの名前
        'my-blocks/my-first-block',
        array(
            //ブロックのスクリプト block.js をエディタ用スクリプトとして関連付け
            //上記 wp_enqueue_script で登録したハンドル名 my-first-block-script を指定
            'editor_script' => 'my-first-block-script',
        )
    );
}
add_action('init', 'my_first_block_enqueue');
