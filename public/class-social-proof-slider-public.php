<?php

/**
 * The public-facing functionality of the plugin.
 *
 * @link       https://thebrandiD.com
 * @since      2.0.0
 *
 * @package    Social_Proof_Slider
 * @subpackage Social_Proof_Slider/public
 */

/**
 * The public-facing functionality of the plugin.
 *
 * Defines the plugin name, version, and hooks for how to
 * enqueue the admin-specific stylesheet and JavaScript.
 *
 * @package    Social_Proof_Slider
 * @subpackage Social_Proof_Slider/public
 * @author     brandiD <tech@thebrandid.com>
 */
class Social_Proof_Slider_Public {

	/**
	 * The ID of this plugin.
	 *
	 * @since    2.0.0
	 * @access   private
	 * @var      string    $plugin_name    The ID of this plugin.
	 */
	private $plugin_name;

	/**
	 * The version of this plugin.
	 *
	 * @since    2.0.0
	 * @access   private
	 * @var      string    $version    The current version of this plugin.
	 */
	private $version;

	/**
	 * Initialize the class and set its properties.
	 *
	 * @since    2.0.0
	 * @param      string    $plugin_name       The name of the plugin.
	 * @param      string    $version    The version of this plugin.
	 */
	public function __construct( $plugin_name, $version ) {

		$this->plugin_name = $plugin_name;
		$this->version = $version;

	}

	/**
	 * Register the stylesheets for the public-facing side of the site.
	 *
	 * @since    2.0.0
	 */
	public function enqueue_styles() {

		wp_enqueue_style( 'slick-css', '//cdn.jsdelivr.net/gh/kenwheeler/slick@1.8.1/slick/slick.css', array(), '1.8.1', 'all' );
		wp_enqueue_style( $this->plugin_name, plugin_dir_url( __FILE__ ) . 'css/social-proof-slider-public.css', array(), $this->version, 'all' );
		// wp_enqueue_style( 'slick-css', plugin_dir_url( __FILE__ ) . 'css/slick.css', array(), '1.6.0', 'all' );

		$fontawesome = 'fontawesome';
		$font_awesome = 'font-awesome';
		if ( wp_script_is( $font_awesome, 'enqueued' ) || wp_script_is( $fontawesome, 'enqueued' ) ) {
			return;
		} else {
			wp_enqueue_style( 'font-awesome', '//maxcdn.bootstrapcdn.com/font-awesome/4.6.1/css/font-awesome.min.css', array(), 1.0 );
		}

	}

	/**
	 * Register the JavaScript for the public-facing side of the site.
	 *
	 * @since    2.0.0
	 */
	public function enqueue_scripts() {

		wp_enqueue_script( 'slick-js', '//cdn.jsdelivr.net/gh/kenwheeler/slick@1.8.1/slick/slick.min.js', array( 'jquery' ), '1.8.1', false );

	}

	/**
	 * Processes shortcode 'social-proof-slider'
	 *
	 * @param   array	$atts		The attributes from the shortcode
	 *
	 * @uses	get_option
	 * @uses	get_layout
	 *
	 * @return	mixed	$output		Output of the buffer
	 */
	public function spslider_shortcode( $atts = array() ) {

		ob_start();

		// Declare defaults
		$defaults['ids'] = '';
		$defaults['exclude'] = '';
		$defaults['category'] = '';

		$shared = new Social_Proof_Slider_Shared( $this->plugin_name, $this->version );

		// Get Shortcode Settings
		$sc_settings = $shared->get_shortcode_settings();

		// Get Attributes inside the manually-entered Shortcode
		$sc_atts = shortcode_atts( $defaults, $atts, 'social-proof-slider' );

		// Determine ORDERBY and ORDER args
		$sortbysetting = $sc_settings['sortby'];
		if ( $sortbysetting == "RAND" ) {
			$queryargs = array(
				'orderby' => 'rand',
			);
		} else {
			$queryargs = array(
				'order' => $sc_settings['sortby'],
				'orderby' => 'ID',
			);
		}

		$taxSlug = "";
		// Use category, if present
		if ( !empty( $sc_atts['category'] ) ) {
			$taxSlug = $sc_atts['category'];
		}

		$postLimiter = "";
		$limiterIDs = "";
		// Use Exclude/Include and IDs attributes, if present
		if ( !empty( $sc_atts['ids'] ) ) {

			$limiterIDs = $sc_atts['ids'];

			if ( !empty( $sc_atts['exclude'] ) ) {
				// EXCLUDING
				$postLimiter = $sc_atts['exclude'];
			} else {
				// INCLUDING
				$postLimiter = "";
			}

		}

		$showFeaturedImages = $sc_settings['showFeaturedImages'];

		$showImageBorder = $sc_settings['showImageBorder'];
		$imageBorderColor = $sc_settings['imageBorderColor'];
		$imageBorderThickness = $sc_settings['imageBorderThickness'];
		$imageBorderPadding = $sc_settings['imageBorderPadding'];

		$smartQuotes = $sc_settings['surroundWithQuotes'];

		$doPaddingOverride = $sc_settings['doPaddingOverride'];
		$contentPaddingTop = $sc_settings['contentPaddingTop'];
		$contentPaddingBottom = $sc_settings['contentPaddingBottom'];
		$featImgMarginTop = $sc_settings['featImgMarginTop'];
		$featImgMarginBottom = $sc_settings['featImgMarginBottom'];
		$textPaddingTop = $sc_settings['textPaddingTop'];
		$textPaddingBottom = $sc_settings['textPaddingBottom'];
		$quoteMarginBottom = $sc_settings['quoteMarginBottom'];
		$dotsMarginTop = $sc_settings['dotsMarginTop'];

		$contentPaddingStr = ''; // default
		$imgMarginStr = ''; // default
		$textPaddingStr = ''; // default
		$quoteMarginStr = ''; // default
		$dotsMarginStr = ''; // default

		if ( $doPaddingOverride == 'true' ) {
			$contentPaddingStr = "padding-top: ".$contentPaddingTop."; padding-bottom: ".$contentPaddingBottom.";";
			$imgMarginStr = "margin-top:".$featImgMarginTop."; margin-bottom:".$featImgMarginBottom.";";
			$textPaddingStr = "padding-top: ".$textPaddingTop."; padding-bottom: ".$textPaddingBottom.";";
			$quoteMarginStr = "margin-bottom: ".$quoteMarginBottom.";";
			$dotsMarginStr = "margin-top: ".$dotsMarginTop.";";
		}

		$alignStr = '';	// default
		if ( $sc_settings['doAutoHeight'] != 'true' ) {
			$alignStr = ' valign-' . $sc_settings['verticalalign'];
		}

		$items = '';
		$items = $shared->get_testimonials( $queryargs, 'shortcode', $postLimiter, $limiterIDs, $showFeaturedImages, $smartQuotes, $taxSlug );

		echo '<!-- // ********** SOCIAL PROOF SLIDER ********** // -->';
		echo '<section id="_socialproofslider-shortcode" class="widget widget__socialproofslider ' . $sc_settings['animationStyle'] . ' paddingoverride-'.$sc_settings['doPaddingOverride'].' ">';
		echo '<div class="widget-wrap">';
		echo '<div class="social-proof-slider-wrap ' . $sc_settings['textalign'] . $alignStr . '">';

		echo $items;

		echo '</div><!-- // .social-proof-slider-wrap // -->';

		//* Output styles
		echo '<style>'."\n";
		echo '#_socialproofslider-shortcode .social-proof-slider-wrap{ background-color:' . $sc_settings['bgcolor'] . '; '.$contentPaddingStr.' }'."\n";
		echo '#_socialproofslider-shortcode .social-proof-slider-wrap .testimonial-item.featured-image .testimonial-author-img { '.$imgMarginStr.' }'."\n";
		if ( $sc_settings['imageBorderRadius'] === 0 ){
			echo '#_socialproofslider-shortcode .social-proof-slider-wrap .testimonial-item.featured-image .testimonial-author-img img{ border-radius: 0; }'."\n";
		} else {
			echo '#_socialproofslider-shortcode .social-proof-slider-wrap .testimonial-item.featured-image .testimonial-author-img img{ border-radius:' . $sc_settings['imageBorderRadius'] . '; }'."\n";
		}

		if ( $showImageBorder == '1' ) {

			echo '#_socialproofslider-shortcode .social-proof-slider-wrap .testimonial-item.featured-image .testimonial-author-img img { border: ' . $imageBorderThickness . ' solid ' . $imageBorderColor . ' !important; padding: ' . $imageBorderPadding . ' }'."\n";

		}

		echo '#_socialproofslider-shortcode .social-proof-slider-wrap .testimonial-item .testimonial-text{ color:' . $sc_settings['textColor'] . '; '.$textPaddingStr.' }'."\n";
		echo '#_socialproofslider-shortcode .social-proof-slider-wrap .testimonial-item .testimonial-text .quote { '.$quoteMarginStr.' }'."\n";
		echo '#_socialproofslider-shortcode .social-proof-slider-wrap .slick-arrow span { color:' . $sc_settings['arrowColor'] . '; }'."\n";
		echo '#_socialproofslider-shortcode .social-proof-slider-wrap .slick-arrow:hover span{ color:' . $sc_settings['arrowHoverColor'] . '; }'."\n";
		echo '#_socialproofslider-shortcode .social-proof-slider-wrap ul.slick-dots{ '.$dotsMarginStr.' }'."\n";
		echo '#_socialproofslider-shortcode .social-proof-slider-wrap ul.slick-dots li button::before, #_socialproofslider-shortcode .slick-dots li.slick-active button:before { color:' . $sc_settings['dotsColor'] . ' }'."\n";
		echo '</style>'."\n";

		//* CUSTOM JS
		$prev_button = '';
		$next_button = '';
		$thisWidgetJS = '<script type="text/javascript">';
		$thisWidgetJS .= 'jQuery(document).ready(function($) {'."\n";
		$thisWidgetJS .= '	$("#_socialproofslider-shortcode .social-proof-slider-wrap").not(".slick-initialized").slick({'."\n";
		$thisWidgetJS .= '		autoplay: ' . $sc_settings['doAutoPlay'] . ','."\n";
		if ( $sc_settings['doAutoPlay'] == 'true' ) {
			$thisWidgetJS .= '		autoplaySpeed: ' . $sc_settings['autoplaySpeed'] . ','."\n";
		}
		$thisWidgetJS .= '		adaptiveHeight: '. $sc_settings['doAutoHeight'] . ','."\n";
		$thisWidgetJS .= '		fade: ' . $sc_settings['doFade'] . ','."\n";
		$thisWidgetJS .= '		arrows: ' . $sc_settings['showArrows'] . ','."\n";
		if ( $sc_settings['showArrows'] == 'true' ) {

			$prev_button = '<button type="button" class="slick-prev"><span class="fa ' . $sc_settings['arrowLeft'] . '"></span></button>';
			$next_button = '<button type="button" class="slick-next"><span class="fa ' . $sc_settings['arrowRight'] . '"></span></button>';

			$thisWidgetJS .= '		prevArrow: \'' . $prev_button . '\','."\n";
			$thisWidgetJS .= '		nextArrow: \'' . $next_button . '\','."\n";
		}
		$thisWidgetJS .= '		dots: ' . $sc_settings['showDots'] . ','."\n";
		$thisWidgetJS .= '		infinite: true,'."\n";
		// $thisWidgetJS .= '		adaptiveHeight: true'."\n";
		$thisWidgetJS .= '	});'."\n";
		$thisWidgetJS .= 'console.log("I\'m loaded!");'."\n";
		$thisWidgetJS .= '});'."\n";
		$thisWidgetJS .= '</script>'."\n";
		echo  $thisWidgetJS;

		echo '</div><!-- // .widget-wrap // -->';
		echo '</section>';
		echo '<!-- // ********** // END SOCIAL PROOF SLIDER // ********** // -->';

		$output = ob_get_contents();

		ob_end_clean();

		return $output;

	} // spslider_shortcode()

	/**
	 * Processes shortcode 'spslider-manual'
	 *
	 * @return	mixed	$output		Output of the buffer
	 */
	public function spslider_manual_shortcode( $atts = array(), $content = null ) {

		ob_start();

		$shared = new Social_Proof_Slider_Shared( $this->plugin_name, $this->version );

		// Get Shortcode Settings
		$sc_settings = $shared->get_shortcode_settings();

		$showImageBorder = $sc_settings['showImageBorder'];
		$imageBorderColor = $sc_settings['imageBorderColor'];
		$imageBorderThickness = $sc_settings['imageBorderThickness'];
		$imageBorderPadding = $sc_settings['imageBorderPadding'];

		$smartQuotes = $sc_settings['surroundWithQuotes'];

		$doPaddingOverride = $sc_settings['doPaddingOverride'];
		$contentPaddingTop = $sc_settings['contentPaddingTop'];
		$contentPaddingBottom = $sc_settings['contentPaddingBottom'];
		$featImgMarginTop = $sc_settings['featImgMarginTop'];
		$featImgMarginBottom = $sc_settings['featImgMarginBottom'];
		$textPaddingTop = $sc_settings['textPaddingTop'];
		$textPaddingBottom = $sc_settings['textPaddingBottom'];
		$quoteMarginBottom = $sc_settings['quoteMarginBottom'];
		$dotsMarginTop = $sc_settings['dotsMarginTop'];

		$contentPaddingStr = ''; // default
		$imgMarginStr = ''; // default
		$textPaddingStr = ''; // default
		$quoteMarginStr = ''; // default
		$dotsMarginStr = ''; // default

		if ( $doPaddingOverride == 'true' ) {
			$contentPaddingStr = "padding-top: ".$contentPaddingTop."; padding-bottom: ".$contentPaddingBottom.";";
			$imgMarginStr = "margin-top:".$featImgMarginTop."; margin-bottom:".$featImgMarginBottom.";";
			$textPaddingStr = "padding-top: ".$textPaddingTop."; padding-bottom: ".$textPaddingBottom.";";
			$quoteMarginStr = "margin-bottom: ".$quoteMarginBottom.";";
			$dotsMarginStr = "margin-top: ".$dotsMarginTop.";";
		}

		$alignStr = '';	// default
		if ( $sc_settings['doAutoHeight'] != 'true' ) {
			$alignStr = ' valign-' . $sc_settings['verticalalign'];
		}

		echo '<!-- // ********** SOCIAL PROOF SLIDER ********** // -->';
		echo '<section id="_socialproofslider-shortcode" class="widget widget__socialproofslider ' . $sc_settings['animationStyle'] . ' paddingoverride-'.$sc_settings['doPaddingOverride'].' ">';
		echo '<div class="widget-wrap">';
		echo '<div class="social-proof-slider-wrap ' . $sc_settings['textalign'] . $alignStr . '">';

		// Get sub-items inside this shortcode's content
		$content = do_shortcode($content);
		echo $content;

		echo '</div><!-- // .social-proof-slider-wrap // -->';

		//* Output styles
		echo '<style>'."\n";
		echo '#_socialproofslider-shortcode .social-proof-slider-wrap{ background-color:' . $sc_settings['bgcolor'] . '; '.$contentPaddingStr.' }'."\n";
		echo '#_socialproofslider-shortcode .social-proof-slider-wrap .testimonial-item.featured-image .testimonial-author-img { '.$imgMarginStr.' }'."\n";
		if ( $sc_settings['imageBorderRadius'] === 0 ){
			echo '#_socialproofslider-shortcode .social-proof-slider-wrap .testimonial-item.featured-image .testimonial-author-img img{ border-radius: 0; }'."\n";
		} else {
			echo '#_socialproofslider-shortcode .social-proof-slider-wrap .testimonial-item.featured-image .testimonial-author-img img{ border-radius:' . $sc_settings['imageBorderRadius'] . '; }'."\n";
		}

		if ( $showImageBorder == '1' ) {

			echo '#_socialproofslider-shortcode .social-proof-slider-wrap .testimonial-item.featured-image .testimonial-author-img img { border: ' . $imageBorderThickness . ' solid ' . $imageBorderColor . ' !important; padding: ' . $imageBorderPadding . ' }'."\n";

		}

		echo '#_socialproofslider-shortcode .social-proof-slider-wrap .testimonial-item .testimonial-text{ color:' . $sc_settings['textColor'] . '; '.$textPaddingStr.' }'."\n";
		echo '#_socialproofslider-shortcode .social-proof-slider-wrap .testimonial-item .testimonial-text .quote { '.$quoteMarginStr.' }'."\n";
		echo '#_socialproofslider-shortcode .social-proof-slider-wrap .slick-arrow span { color:' . $sc_settings['arrowColor'] . '; }'."\n";
		echo '#_socialproofslider-shortcode .social-proof-slider-wrap .slick-arrow:hover span{ color:' . $sc_settings['arrowHoverColor'] . '; }'."\n";
		echo '#_socialproofslider-shortcode .social-proof-slider-wrap ul.slick-dots{ '.$dotsMarginStr.' }'."\n";
		echo '#_socialproofslider-shortcode .social-proof-slider-wrap ul.slick-dots li button::before, #_socialproofslider-shortcode .slick-dots li.slick-active button:before { color:' . $sc_settings['dotsColor'] . ' }'."\n";
		echo '</style>'."\n";

		//* CUSTOM JS
		$prev_button = '';
		$next_button = '';
		$thisWidgetJS = '<script type="text/javascript">';
		$thisWidgetJS .= 'jQuery(document).ready(function($) {'."\n";
		$thisWidgetJS .= '	$("#_socialproofslider-shortcode .social-proof-slider-wrap").not(".slick-initialized").slick({'."\n";
		$thisWidgetJS .= '		autoplay: ' . $sc_settings['doAutoPlay'] . ','."\n";
		if ( $sc_settings['doAutoPlay'] == 'true' ) {
			$thisWidgetJS .= '		autoplaySpeed: ' . $sc_settings['autoplaySpeed'] . ','."\n";
		}
		$thisWidgetJS .= '		adaptiveHeight: '. $sc_settings['doAutoHeight'] . ','."\n";
		$thisWidgetJS .= '		fade: ' . $sc_settings['doFade'] . ','."\n";
		$thisWidgetJS .= '		arrows: ' . $sc_settings['showArrows'] . ','."\n";
		if ( $sc_settings['showArrows'] == 'true' ) {

			$prev_button = '<button type="button" class="slick-prev"><span class="fa ' . $sc_settings['arrowLeft'] . '"></span></button>';
			$next_button = '<button type="button" class="slick-next"><span class="fa ' . $sc_settings['arrowRight'] . '"></span></button>';

			$thisWidgetJS .= '		prevArrow: \'' . $prev_button . '\','."\n";
			$thisWidgetJS .= '		nextArrow: \'' . $next_button . '\','."\n";
		}
		$thisWidgetJS .= '		dots: ' . $sc_settings['showDots'] . ','."\n";
		$thisWidgetJS .= '		infinite: true,'."\n";
		// $thisWidgetJS .= '		adaptiveHeight: true'."\n";
		$thisWidgetJS .= '	});'."\n";
		$thisWidgetJS .= '});'."\n";
		$thisWidgetJS .= '</script>'."\n";
		echo  $thisWidgetJS;

		echo '</div><!-- // .widget-wrap // -->';
		echo '</section>';
		echo '<!-- // ********** // END SOCIAL PROOF SLIDER // ********** // -->';

		$output = ob_get_contents();

		ob_end_clean();

		return $output;

	} // spslider_manual_shortcode()

	/**
	 * Processes shortcode 'spslider-item'
	 *
	 * @return	mixed	$output		Output of the buffer
	 */
	public function spslider_item_shortcode( $atts = array(), $content = null ) {

		ob_start();

		echo '<div class="testimonial-item">';

		echo $content;

		echo '</div>';

		$output = ob_get_contents();

		ob_end_clean();

		return $output;

	} // spslider_item_shortcode()

	/**
	 * Processes shortcode for Block
	 *
	 * @param   array	$atts		The attributes from the shortcode
	 *
	 * @uses	get_option
	 * @uses	get_layout
	 *
	 * @return	mixed	$output		Output of the buffer
	 */
	public function spslider_block_shortcode( $atts = array() ) {

		ob_start();

		// Declare defaults
		$defaults['showarrows'] = false;
		$defaults['ids'] = '';
		$defaults['exclude'] = '';
		$defaults['category'] = '';

		// Get Slider settings
		$slider_showarrows = $atts['showarrows'];

		// Get Style settings
		$style_bgcolor = $atts['bgcolor'];
		$style_testimonialcolor = $atts['testimonialtextcolor'];
		$style_authornamecolor = $atts['authornamecolor'];
		$style_authortitlecolor = $atts['authortitlecolor'];

		$shared = new Social_Proof_Slider_Shared( $this->plugin_name, $this->version );

		// Get Shortcode Settings
		$sc_settings = $shared->get_shortcode_settings();

		// Get Attributes inside the manually-entered Shortcode
		$sc_atts = shortcode_atts( $defaults, $atts, 'social-proof-slider' );

		// Determine ORDERBY and ORDER args
		$sortbysetting = $sc_settings['sortby'];
		if ( $sortbysetting == "RAND" ) {
			$queryargs = array(
				'orderby' => 'rand',
			);
		} else {
			$queryargs = array(
				'order' => $sc_settings['sortby'],
				'orderby' => 'ID',
			);
		}

		$taxSlug = "";
		// Use category, if present
		if ( !empty( $sc_atts['category'] ) ) {
			$taxSlug = $sc_atts['category'];
		}

		$postLimiter = "";
		$limiterIDs = "";
		// Use Exclude/Include and IDs attributes, if present
		if ( !empty( $sc_atts['ids'] ) ) {

			$limiterIDs = $sc_atts['ids'];

			if ( !empty( $sc_atts['exclude'] ) ) {
				// EXCLUDING
				$postLimiter = $sc_atts['exclude'];
			} else {
				// INCLUDING
				$postLimiter = "";
			}

		}

		$showFeaturedImages = $sc_settings['showFeaturedImages'];

		$showImageBorder = $sc_settings['showImageBorder'];
		$imageBorderColor = $sc_settings['imageBorderColor'];
		$imageBorderThickness = $sc_settings['imageBorderThickness'];
		$imageBorderPadding = $sc_settings['imageBorderPadding'];

		$smartQuotes = $sc_settings['surroundWithQuotes'];

		$doPaddingOverride = $sc_settings['doPaddingOverride'];
		$contentPaddingTop = $sc_settings['contentPaddingTop'];
		$contentPaddingBottom = $sc_settings['contentPaddingBottom'];
		$featImgMarginTop = $sc_settings['featImgMarginTop'];
		$featImgMarginBottom = $sc_settings['featImgMarginBottom'];
		$textPaddingTop = $sc_settings['textPaddingTop'];
		$textPaddingBottom = $sc_settings['textPaddingBottom'];
		$quoteMarginBottom = $sc_settings['quoteMarginBottom'];
		$dotsMarginTop = $sc_settings['dotsMarginTop'];

		$contentPaddingStr = 'padding: 50px;'; // default
		$imgMarginStr = ''; // default
		$textPaddingStr = ''; // default
		$quoteMarginStr = ''; // default
		$dotsMarginStr = ''; // default

		if ( $doPaddingOverride == 'true' ) {
			$contentPaddingStr = "padding-top: ".$contentPaddingTop."; padding-bottom: ".$contentPaddingBottom.";";
			$imgMarginStr = "margin-top:".$featImgMarginTop."; margin-bottom:".$featImgMarginBottom.";";
			$textPaddingStr = "padding-top: ".$textPaddingTop."; padding-bottom: ".$textPaddingBottom.";";
			$quoteMarginStr = "margin-bottom: ".$quoteMarginBottom.";";
			$dotsMarginStr = "margin-top: ".$dotsMarginTop.";";
		}

		$alignStr = '';	// default
		if ( $sc_settings['doAutoHeight'] != 'true' ) {
			$alignStr = ' valign-' . $sc_settings['verticalalign'];
		}

		$items = '';
		$items = $shared->get_testimonials( $queryargs, 'shortcode', $postLimiter, $limiterIDs, $showFeaturedImages, $smartQuotes, $taxSlug );

		$uniqueID = uniqid('spslider_block_');

		$slickData = "'{";

		if ( $slider_showarrows === "true" || $slider_showarrows === "1" ) {
			$slickData .= '"arrows":true';
		} else {
			$slickData .= '"arrows":false';
		}

		$slickData .= "}'";

		echo '<!-- // ********** SOCIAL PROOF SLIDER ********** // -->';
		echo '<section id="' . $uniqueID . '" class="block wp-block-socialproofslider ' . $sc_settings['animationStyle'] . ' paddingoverride-'.$sc_settings['doPaddingOverride'].' ">';

		echo '<div class="widget-wrap">';

		echo '<div class="social-proof-slider-wrap" data-slick='.$slickData.'>';

		echo $items;

		echo '</div><!-- // .social-proof-slider-wrap // -->';

		//* Output styles
		echo '<style>'."\n";

		$uniqueID = '#' . $uniqueID;

		echo $uniqueID . ' .social-proof-slider-wrap button.slick-arrow { width: 30px; padding: 0; position: absolute; top: 50%; margin-top: -20px; z-index: 1; font-size: 32px; line-height: 32px; transition: all .3s ease; }';
		echo $uniqueID . ' .social-proof-slider-wrap button.slick-arrow, ' . $uniqueID . ' .social-proof-slider-wrap button.slick-arrow:hover, ' . $uniqueID . ' .social-proof-slider-wrap button.slick-arrow:focus, ' . $uniqueID . ' .social-proof-slider-wrap button.slick-arrow:active { background: transparent; outline: 0; border: 0; }';
		echo $uniqueID . ' .social-proof-slider-wrap button.slick-prev { left: 10px; }';
		echo $uniqueID . ' .social-proof-slider-wrap button.slick-next { right: 10px; }';

		echo $uniqueID . ' .social-proof-slider-wrap{ background-color:' . $style_bgcolor . '; '.$contentPaddingStr.' }'."\n";

		echo $uniqueID . ' .social-proof-slider-wrap .testimonial-item.featured-image .testimonial-author-img { '.$imgMarginStr.' }'."\n";

		if ( $sc_settings['imageBorderRadius'] === 0 ){
			echo $uniqueID . ' .social-proof-slider-wrap .testimonial-item.featured-image .testimonial-author-img img{ border-radius: 0; }'."\n";
		} else {
			echo $uniqueID . ' .social-proof-slider-wrap .testimonial-item.featured-image .testimonial-author-img img{ border-radius:' . $sc_settings['imageBorderRadius'] . '; }'."\n";
		}

		if ( $showImageBorder == '1' ) {
			echo $uniqueID . ' .social-proof-slider-wrap .testimonial-item.featured-image .testimonial-author-img img { border: ' . $imageBorderThickness . ' solid ' . $imageBorderColor . ' !important; padding: ' . $imageBorderPadding . ' }'."\n";
		}

		echo $uniqueID . ' .social-proof-slider-wrap .testimonial-item .testimonial-text{ '.$textPaddingStr.' }'."\n";
		echo $uniqueID . ' .social-proof-slider-wrap .testimonial-item .testimonial-text .quote { '.$quoteMarginStr.' }'."\n";
		if ( ! empty( $atts['textalign'] ) ) {
			echo $uniqueID . ' .social-proof-slider-wrap .testimonial-item .testimonial-text * { text-align:' . $atts['textalign'] . '; }'."\n";
		}
		if ( ! empty( $style_testimonialcolor ) ) {
			echo $uniqueID . ' .social-proof-slider-wrap .testimonial-item .testimonial-text .quote p { color:' . $style_testimonialcolor . '; }'."\n";
		}
		if ( ! empty( $style_authornamecolor ) ) {
			echo $uniqueID . ' .social-proof-slider-wrap .testimonial-item .testimonial-text .author > .author-name { color:' . $style_authornamecolor . '; }'."\n";
		}
		if ( ! empty( $style_authortitlecolor ) ) {
			echo $uniqueID . ' .social-proof-slider-wrap .testimonial-item .testimonial-text .author > .author-title { color:' . $style_authortitlecolor . '; }'."\n";
		}
		echo $uniqueID . ' .social-proof-slider-wrap .slick-arrow span { color:' . $sc_settings['arrowColor'] . '; }'."\n";
		echo $uniqueID . ' .social-proof-slider-wrap .slick-arrow:hover span{ color:' . $sc_settings['arrowHoverColor'] . '; }'."\n";
		echo $uniqueID . ' .social-proof-slider-wrap ul.slick-dots{ '.$dotsMarginStr.' }'."\n";
		echo $uniqueID . ' .social-proof-slider-wrap ul.slick-dots li button::before, #_socialproofslider-shortcode .slick-dots li.slick-active button:before { color:' . $sc_settings['dotsColor'] . ' }'."\n";
		echo '</style>'."\n";

		echo '</div><!-- // .widget-wrap // -->';
		echo '</section>';
		echo '<!-- // ********** // END SOCIAL PROOF SLIDER // ********** // -->';

		$output = ob_get_contents();

		ob_end_clean();

		return $output;

	} // spslider_block_shortcode()

	/**
	 * Registers all shortcodes at once
	 *
	 * @return [type] [description]
	 */
	public function register_shortcodes() {

		add_shortcode( 'social-proof-slider', array( $this, 'spslider_shortcode' ) );
		add_shortcode( 'spslider-item', array( $this, 'spslider_item_shortcode' ) );
		add_shortcode( 'spslider-manual', array( $this, 'spslider_manual_shortcode' ) );
		add_shortcode( 'spslider-block', array( $this, 'spslider_block_shortcode' ) );

	} // register_shortcodes()

	/**
	 * Registers Gutenberg Block
	 *
	 * @since 	2.1.2
	 * @access 	public
	 */
	public function spslider_register_gutenberg_block() {

		// Register block script
		wp_register_script(
			'spslider-block',
			plugins_url('../blocks/dist/blocks.build.js', __FILE__),
			array('wp-blocks', 'wp-element', 'wp-editor')
		);

		// Register block's base CSS
		wp_register_style(
			'spslider-block-style',
			plugins_url( '../blocks/dist/blocks.style.build.css', __FILE__ ),
			array( 'wp-blocks' )
		);

		// Register block's editor CSS
		wp_register_style(
			'spslider-block-edit-style',
			plugins_url('../blocks/dist/blocks.editor.build.css', __FILE__),
			array( 'wp-edit-blocks' )
		);

		// Render callback
		function spslider_render_gutenberg_block($atts) {

			$settings = '';

			$settings .= 'showarrows="' . $atts['showarrows'] . '" ';

			if ( $atts['textalign'] ) {
				$settings .= 'textalign="' . $atts['textalign'] . '" ';
			}

			if ( $atts['bgcolor'] ) {
				$settings .= 'bgcolor="' . $atts['bgcolor'] . '" ';
			}

			if ( $atts['testimonialtextcolor'] ) {
				$settings .= 'testimonialtextcolor="' . $atts['testimonialtextcolor'] . '" ';
			}

			if ( $atts['authornamecolor'] ) {
				$settings .= 'authornamecolor="' . $atts['authornamecolor'] . '" ';
			}

			if ( $atts['authortitlecolor'] ) {
				$settings .= 'authortitlecolor="' . $atts['authortitlecolor'] . '" ';
			}

			return '' . do_shortcode('[spslider-block ' . $settings . ']');

	 	}

		// Enqueue the Editor script
		register_block_type('social-proof-slider/main', array(
			'editor_script' => 'spslider-block',
			'editor_style' => 'spslider-block-edit-style',
			'style' => 'spslider-block-edit-style',
			'render_callback' => 'spslider_render_gutenberg_block',
			'attributes' => [
				'showarrows' => [
					'default' => false
				],
				'textalign' => [
					'default' => ''
				],
				'bgcolor' => [
					'default' => ''
				],
				'testimonialtextcolor' => [
					'default' => ''
				],
				'authornamecolor' => [
					'default' => ''
				],
				'authortitlecolor' => [
					'default' => ''
				],
			]
		));

	}

}
