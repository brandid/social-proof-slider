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

		// Slick CSS.
		if ( ! wp_script_is( 'slick-css', 'enqueued' ) ) {
			wp_enqueue_style( 'slick-css', plugin_dir_url( __FILE__ ) . '../slick/slick.css', array(), '1.8.1', 'all' );
		}

		// Default SP Slider styles.
		wp_enqueue_style( $this->plugin_name, plugin_dir_url( __FILE__ ) . 'css/social-proof-slider-public.css', array(), $this->version, 'all' );

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

		// Slick JS.
		if ( ! wp_script_is( 'slick-js', 'enqueued' ) ) {
			wp_enqueue_script( 'slick-js', plugin_dir_url( __FILE__ ) . '../slick/slick.min.js', array( 'jquery' ), '1.8.1', false );
		}

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
		// $thisWidgetJS .= 'console.log("I\'m loaded!");'."\n";
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

		$requestor = 'block';

		// Declare defaults.
		$defaults['blockalign']           = 'center';
		$defaults['sortpostsby']          = 'DESC';
		$defaults['filterposts']          = false;
		$defaults['filtershowhide']       = 'show';
		$defaults['filterby']             = 'postid';
		$defaults['postidorcatslug']      = '';
		$defaults['postids']              = '';
		$defaults['catslug']              = '';
		$defaults['showfeaturedimages']   = false;
		$defaults['showimageborder']      = false;
		$defaults['showquotemarks']       = false;
		$defaults['autoplay']             = true;
		$defaults['displaytime']          = 3;
		$defaults['animationstyle']       = 'fade';
		$defaults['showarrows']           = false;
		$defaults['arrowstyle']           = 'angle';
		$defaults['showdots']             = false;
		$defaults['adaptiveheight']       = false;
		$defaults['bgcolor']              = 'transparent';
		$defaults['testimonialtextcolor'] = '';
		$defaults['authornamecolor']      = '';
		$defaults['authortitlecolor']     = '';
		$defaults['arrowscolor']          = '#000000';
		$defaults['arrowshovercolor']     = '';
		$defaults['dotscolor']            = '#000000';
		$defaults['dotshovercolor']       = '';
		$defaults['imagebordercolor']     = '';

		if ( ! function_exists( 'getAttsOrDefault' ) ) {

			/* Function to assign default value if attr is empty
			 *
			 * string	$propName	name of the property to check
			 * return	$returnVal	return value
			 */
			function getAttsOrDefault( $propName, $atts = array(), $defaults = array() ) {

				$returnVal1 = ( array_key_exists($propName, $atts) && !empty( $atts[$propName] ) )
			         ? $atts[$propName]
			         : 'non-existent or empty in "atts"';

				$returnVal2 = ( array_key_exists($propName, $defaults) && !empty( $defaults[$propName] ) )
				     ? $defaults[$propName]
				     : 'non-existent or empty in "defaults"';

				// if ( ! empty( $atts[$propName] ) ) {
				// 	$returnVal = $atts[$propName];
				// }else {
				// 	$returnVal = $defaults[$propName];
				// }

				return " <br> " . $returnVal1 . " <br> " . $returnVal2;
			}

		}

		// Get Block Settings.
		$block_textalign = ! empty( $atts['textalign'] ) ? $atts['textalign'] : $defaults['blockalign'];

		// Get Post Settings.
		$posts_sortby         = ! empty( $atts['sortpostsby'] ) ? $atts['sortpostsby'] : $defaults['sortpostsby'];
		$posts_filterposts    = ! empty( $atts['filterposts'] ) ? $atts['filterposts'] : $defaults['filterposts'];
		$posts_filtershowhide = ! empty( $atts['filtershowhide'] ) ? $atts['filtershowhide'] : $defaults['filtershowhide'];
		$posts_filterby       = ! empty( $atts['filterby'] ) ? $atts['filterby'] : $defaults['filterby'];
		$posts_postids        = ! empty( $atts['postids'] ) ? $atts['postids'] : $defaults['postids'];
		$posts_catslug        = ! empty( $atts['catslug'] ) ? $atts['catslug'] : $defaults['catslug'];

		$posts_showfeaturedimages = $atts['showfeaturedimages'];
		if ( 'true' === $posts_showfeaturedimages ) {
			$posts_showfeaturedimages = 1;
		}
		if ( empty( $posts_showfeaturedimages ) ) {
			$posts_showfeaturedimages = $defaults['showfeaturedimages'];
		}

		$posts_showimageborder   = ! empty( $atts['showimageborder'] ) ? $atts['showimageborder'] : $defaults['showimageborder'];
		$posts_imageborderradius = ! empty( $atts['imageborderradius'] ) ? $atts['imageborderradius'] : 0;
		$posts_imagebordersize   = ! empty( $atts['imagebordersize'] ) ? $atts['imagebordersize'] : 0;
		$posts_showquotes        = ! empty( $atts['showquotemarks'] ) ? $atts['showquotemarks'] : $defaults['showquotemarks'];

		// Get Slider Settings.
		$slider_autoplay       = ! empty( $atts['autoplay'] ) ? $atts['autoplay'] : $defaults['autoplay'];
		$slider_displaytime    = ! empty( $atts['displaytime'] ) ? $atts['displaytime'] : $defaults['displaytime'];
		$slider_animationstyle = ! empty( $atts['animationstyle'] ) ? $atts['animationstyle'] : $defaults['animationstyle'];
		$slider_showarrows     = ! empty( $atts['showarrows'] ) ? $atts['showarrows'] : $defaults['showarrows'];
		$slider_arrowstyle     = ! empty( $atts['arrowstyle'] ) ? $atts['arrowstyle'] : $defaults['arrowstyle'];
		$slider_showdots       = ! empty( $atts['showdots'] ) ? $atts['showdots'] : $defaults['showdots'];
		$slider_adaptiveheight = ! empty( $atts['adaptiveheight'] ) ? $atts['adaptiveheight'] : $defaults['adaptiveheight'];
		$slider_verticalalign  = ! empty( $atts['verticalalign'] ) ? $atts['verticalalign'] : $defaults['verticalalign'];

		// Get Margin & Padding Settings.
		$paddingunit       = $atts['paddingunit'];
		$paddingsync       = $atts['paddingsync'];
		$contentPaddingStr = '';
		if ( $paddingsync === "true" || $paddingsync === "1" ) {
			$contentPaddingStr = 'padding: ' . $atts['padding'] . $paddingunit . ';';
		} else {
			$contentPaddingStr = 'padding-top: ' . $atts['paddingtop'] . $paddingunit . '; ';
			$contentPaddingStr .= 'padding-right: ' . $atts['paddingright'] . $paddingunit . '; ';
			$contentPaddingStr .= 'padding-bottom: ' . $atts['paddingbottom'] . $paddingunit . '; ';
			$contentPaddingStr .= 'padding-left: ' . $atts['paddingleft'] . $paddingunit . ';';
		}

		$padding_imageborderpadding = ! empty( $atts['imageborderpadding'] ) ? $atts['imageborderpadding'] : 0;

		// Get Color Settings.
		$style_bgcolor          = ! empty( $atts['bgcolor'] ) ? $atts['bgcolor'] : $defaults['bgcolor'];
		$style_testimonialcolor = ! empty( $atts['testimonialtextcolor'] ) ? $atts['testimonialtextcolor'] : $defaults['testimonialtextcolor'];
		$style_authornamecolor  = ! empty( $atts['authornamecolor'] ) ? $atts['authornamecolor'] : $defaults['authornamecolor'];
		$style_authortitlecolor = ! empty( $atts['authortitlecolor'] ) ? $atts['authortitlecolor'] : $defaults['authortitlecolor'];
		$style_arrowscolor      = ! empty( $atts['arrowscolor'] ) ? $atts['arrowscolor'] : $defaults['arrowscolor'];
		$style_arrowshovercolor = ! empty( $atts['arrowshovercolor'] ) ? $atts['arrowshovercolor'] : $defaults['arrowshovercolor'];
		$style_dotscolor        = ! empty( $atts['dotscolor'] ) ? $atts['dotscolor'] : $defaults['dotscolor'];
		$style_dotshovercolor   = ! empty( $atts['dotshovercolor'] ) ? $atts['dotshovercolor'] : $defaults['dotshovercolor'];
		$style_imagebordercolor = ! empty( $atts['imagebordercolor'] ) ? $atts['imagebordercolor'] : $defaults['imagebordercolor'];

		$shared = new Social_Proof_Slider_Shared( $this->plugin_name, $this->version );

		// Get Shortcode Settings.
		// $sc_settings = $shared->get_shortcode_settings();

		// Get Attributes inside the manually-entered Shortcode.
		// $sc_atts = shortcode_atts( $defaults, $atts, 'social-proof-slider' );

		// Determine ORDERBY and ORDER args.
		$sortbysetting = $posts_sortby;
		if ( $sortbysetting == "RAND" ) {
			$queryargs = array(
				'orderby' => 'rand',
			);
		} else {
			$queryargs = array(
				'order' => $posts_sortby,
				'orderby' => 'ID',
			);
		}

		$posts_filter_ids     = '';
		$posts_filter_taxslug = '';
		$posts_filter_hide    = '';

		// Filter posts.
		if ( $posts_filterposts === "true" || $posts_filterposts === "1" ) {

			// Determine whether to show or hide.
			$filtershowhidesetting = $posts_filtershowhide;

			// Hide posts.
			if ( 'hide' === $filtershowhidesetting ) {
				$posts_filter_hide = '1';
			}

			// Show posts.
			if ( 'show' === $filtershowhidesetting ) {
				$posts_filter_hide = '';
			}

			// Determine whether to limit by Post ID or by Category Slug.
			$filterbysetting = $posts_filterby;

			// Use Post IDs.
			if ( $filterbysetting == "postid" ) {
				$posts_filter_ids = $posts_postids;
			}

			// Use category.
			if ( $filterbysetting == "cat" ) {
				$posts_filter_taxslug = $posts_catslug;
			}

		}

		$showImageBorder      = $posts_showimageborder;
		$imageBorderColor     = $style_imagebordercolor;
		$imageBorderThickness = $posts_imagebordersize;
		$imageBorderPadding   = $padding_imageborderpadding;

		$imgMarginStr   = '';
		$textPaddingStr = '';
		$quoteMarginStr = '';
		$dotsMarginStr  = '';

		// Create 'items' object with all testimonials.
		$items = '';
		$items = $shared->get_testimonials( $queryargs, 'shortcode', $posts_filter_hide, $posts_filter_ids, $posts_showfeaturedimages, $posts_showquotes, $posts_filter_taxslug, $requestor );

		// Generate a Unique ID for this block.
		$uniqueID = uniqid( 'spslider_block_' );

		// Build the data attr string for Slick settings.
		$slickData = "'{";

		// Define Autoplay setting.
		if ( $slider_autoplay === "true" || $slider_autoplay === "1" ) {
			$slickData .= '"autoplay":true';
			// Autoplay - Display Time
			if ( ! empty( $slider_displaytime ) ) {
				$displayTimeNumber = $slider_displaytime * 1000;
				$slickData .= ',"autoplaySpeed":'.$displayTimeNumber;
			}
		} else {
			$slickData .= '"autoplay":false';
		}

		$slickData .= ",";

		// Define the Animation Style.
		if ( $slider_animationstyle === "fade" ) {
			$slickData .= '"fade":true';
		} else {
			$slickData .= '"fade":false';
		}

		$slickData .= ",";

		// Show the Arrows.
		if ( $slider_showarrows === "true" || $slider_showarrows === "1" ) {
			$slickData .= '"arrows":true';
		} else {
			$slickData .= '"arrows":false';
		}

		$slickData .= ",";

		// Define the Arrows Style.
		$slickData .= '"prevArrow":"#'.$uniqueID.'-arrow-left",';
		$slickData .= '"nextArrow":"#'.$uniqueID.'-arrow-right"';

		$slickData .= ",";

		// Show the Dots.
		if ( $slider_showdots === "true" || $slider_showdots === "1" ) {
			$slickData .= '"dots":true';
		} else {
			$slickData .= '"dots":false';
		}

		$slickData .= ",";

		// Use the Adaptive Height setting.
		if ( $slider_adaptiveheight === "true" || $slider_adaptiveheight === "1" ) {
			$slickData .= '"adaptiveHeight":true';
		} else {
			$slickData .= '"adaptiveHeight":false';
		}

		// End Slick JS settings.
		$slickData .= "}'";

		// Assign text alignment.
		$textAlignStr = "align_" . $block_textalign;

		// Assign vertical alignment.
		$alignStr = "valign-".$atts['verticalalign'];

		// Start output of the Slider.
		echo '<!-- // ********** SOCIAL PROOF SLIDER ********** // -->';
		echo '<section id="' . $uniqueID . '" class="block wp-block-socialproofslider ' . $slider_animationstyle . ' ">';
		echo '<div class="widget-wrap">';
		if ( $slider_showarrows === "true" || $slider_showarrows === "1" ) {
			echo '<button type="button" id="'.$uniqueID.'-arrow-left" class="slick-prev"><span class="fa fa-' . $slider_arrowstyle . '-left"></span></button>';
		}
		echo '<div class="social-proof-slider-wrap ' . $textAlignStr . ' ' . $alignStr . '" data-slick='.$slickData.'>';
		echo $items;
		echo '</div><!-- // .social-proof-slider-wrap // -->';
		if ( $slider_showarrows === "true" || $slider_showarrows === "1" ) {
			echo '<button type="button" id="'.$uniqueID.'-arrow-right" class="slick-next"><span class="fa fa-' . $slider_arrowstyle . '-right"></span></button>';
		}

		// Output CSS styles.
		$uniqueID = '#' . $uniqueID;
		echo '<style>' . "\n";

		// Assign the BG Color and Container padding.
		echo $uniqueID . ' .social-proof-slider-wrap { background-color:' . $style_bgcolor . '; '.$contentPaddingStr.' }'."\n";

		// Assign the Arrows Color.
		echo $uniqueID . '.wp-block-socialproofslider .widget-wrap > button.slick-arrow { color:' . $style_arrowscolor . ' !important; }'."\n";

		// Assign Arrows Hover Color.
		if ( '' === $style_arrowshovercolor ) {
			// Use default = opacity 50%.
			echo $uniqueID . '.wp-block-socialproofslider .widget-wrap > button.slick-arrow:hover span{ opacity: 0.5; }'."\n";
		} else {
			// Use selected color.
			echo $uniqueID . '.wp-block-socialproofslider .widget-wrap > button.slick-arrow:hover span{ color:' . $style_arrowshovercolor . '; }'."\n";
		}

		// Assign the Dots margin.
		echo $uniqueID . ' .social-proof-slider-wrap ul.slick-dots{ '.$dotsMarginStr.' }'."\n";

		// Assign the Dots Color.
		echo $uniqueID . '.wp-block-socialproofslider .social-proof-slider-wrap .slick-dots li button { color:' . $style_dotscolor . ' !important; }'."\n";

		// Assign the Dots Hover Color.
		if ( '' ===  $style_dotshovercolor ) {
			// Use default = opacity 50%.
			echo $uniqueID . '.wp-block-socialproofslider .social-proof-slider-wrap .slick-dots li button:hover { opacity: 0.5 !important; }'."\n";
		} else {
			// Use selected color.
			echo $uniqueID . '.wp-block-socialproofslider .social-proof-slider-wrap .slick-dots li button:hover { color:' . $style_dotshovercolor . ' !important; }'."\n";
		}

		// Assign the Featured Image margin.
		echo $uniqueID . ' .social-proof-slider-wrap .testimonial-item.featured-image .testimonial-author-img { '.$imgMarginStr.' }'."\n";

		// Assign the Featured Image border radius.
		if ( empty( $posts_imageborderradius ) || ( 0 === $posts_imageborderradius ) || ( false === $posts_imageborderradius ) ) {
			echo $uniqueID . ' .social-proof-slider-wrap .testimonial-item.featured-image .testimonial-author-img img{ border-radius: 0; }'."\n";
		} else {
			echo $uniqueID . ' .social-proof-slider-wrap .testimonial-item.featured-image .testimonial-author-img img{ border-radius: ' . $posts_imageborderradius . '%; }'."\n";
		}

		// Show the Featured Image Border.
		if ( 'true' === $showImageBorder || '1' === $showImageBorder ) {
			echo $uniqueID . ' .social-proof-slider-wrap .testimonial-item.featured-image .testimonial-author-img img { border: ' . $imageBorderThickness . 'px solid ' . $imageBorderColor . ' !important; padding: ' . $imageBorderPadding . 'px; }'."\n";
		}

		// Assign the Text padding and margin.
		echo $uniqueID . ' .social-proof-slider-wrap .testimonial-item .testimonial-text{ '.$textPaddingStr.' }'."\n";
		echo $uniqueID . ' .social-proof-slider-wrap .testimonial-item .testimonial-text .quote { '.$quoteMarginStr.' }'."\n";

		// Assign the Text Colors.
		if ( '' === $style_testimonialcolor ) {
			echo $uniqueID . ' .social-proof-slider-wrap .testimonial-item .testimonial-text .quote p { color:' . $style_testimonialcolor . '; }'."\n";
		}
		if ( '' === $style_authornamecolor ) {
			echo $uniqueID . ' .social-proof-slider-wrap .testimonial-item .testimonial-text .author > .author-name { color:' . $style_authornamecolor . '; }'."\n";
		}
		if ( '' === $style_authortitlecolor ) {
			echo $uniqueID . ' .social-proof-slider-wrap .testimonial-item .testimonial-text .author > .author-title { color:' . $style_authortitlecolor . '; }'."\n";
		}

		// End styles.
		echo '</style>' . "\n";

		// End Slides wrapper.
		echo '</div><!-- // .widget-wrap // -->';

		// End Slider.
		echo '</section>';
		echo '<!-- // ********** // END SOCIAL PROOF SLIDER // ********** // -->';

		// Put contents into a var.
		$output = ob_get_contents();

		// Clear the memory.
		ob_end_clean();

		// Output everything.
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

			// Block settings
			if ( $atts['textalign'] ) {
				$settings .= 'textalign="' . $atts['textalign'] . '" ';
			}

			// Post settings
			$settings .= 'sortpostsby="' . $atts['sortpostsby'] . '" ';
			$settings .= 'filterposts="' . $atts['filterposts'] . '" ';
			$settings .= 'filtershowhide="' . $atts['filtershowhide'] . '" ';
			$settings .= 'filterby="' . $atts['filterby'] . '" ';
			$settings .= 'postids="' . $atts['postids'] . '" ';
			$settings .= 'catslug="' . $atts['catslug'] . '" ';
			$settings .= 'showfeaturedimages="' . $atts['showfeaturedimages'] . '" ';
			$settings .= 'showimageborder="' . $atts['showimageborder'] . '" ';
			$settings .= 'imageborderradius="' . $atts['imageborderradius'] . '" ';
			$settings .= 'imagebordersize="' . $atts['imagebordersize'] . '" ';
			$settings .= 'showquotemarks="' . $atts['showquotemarks'] . '" ';

			// Slider settings
			$settings .= 'autoplay="' . $atts['autoplay'] . '" ';
			$settings .= 'displaytime="' . $atts['displaytime'] . '" ';
			$settings .= 'animationstyle="' . $atts['animationstyle'] . '" ';
			$settings .= 'showarrows="' . $atts['showarrows'] . '" ';
			$settings .= 'arrowstyle="' . $atts['arrowstyle'] . '" ';
			$settings .= 'showdots="' . $atts['showdots'] . '" ';
			$settings .= 'adaptiveheight="' . $atts['adaptiveheight'] . '" ';
			$settings .= 'verticalalign="' . $atts['verticalalign'] . '" ';

			// Margin & Padding
			$settings .= 'paddingunit="' . $atts['paddingunit'] . '" ';
			$settings .= 'paddingsync="' . $atts['paddingsync'] . '" ';
			$settings .= 'padding="' . $atts['padding'] . '" ';
			$settings .= 'paddingtop="' . $atts['paddingtop'] . '" ';
			$settings .= 'paddingright="' . $atts['paddingright'] . '" ';
			$settings .= 'paddingbottom="' . $atts['paddingbottom'] . '" ';
			$settings .= 'paddingleft="' . $atts['paddingleft'] . '" ';
			$settings .= 'imageborderpadding="' . $atts['imageborderpadding'] . '" ';

			// Colors
			if ( $atts['bgcolor'] ) {
				$settings .= 'bgcolor="' . $atts['bgcolor'] . '" ';
			}

			if ( $atts['arrowscolor'] ) {
				$settings .= 'arrowscolor="' . $atts['arrowscolor'] . '" ';
			}

			if ( $atts['arrowshovercolor'] ) {
				$settings .= 'arrowshovercolor="' . $atts['arrowshovercolor'] . '" ';
			}

			if ( $atts['dotscolor'] ) {
				$settings .= 'dotscolor="' . $atts['dotscolor'] . '" ';
			}

			if ( $atts['dotshovercolor'] ) {
				$settings .= 'dotshovercolor="' . $atts['dotshovercolor'] . '" ';
			}

			if ( $atts['imagebordercolor'] ) {
				$settings .= 'imagebordercolor="' . $atts['imagebordercolor'] . '" ';
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
				'textalign' => [
					'default' => ''
				],
				'sortpostsby' => [
					'default' => 'DESC'
				],
				'filterposts' => [
					'default' => false
				],
				'filtershowhide' => [
					'default' => 'show'
				],
				'filterby' => [
					'default' => 'postid'
				],
				'postids' => [
					'default' => ''
				],
				'catslug' => [
					'default' => ''
				],
				'showfeaturedimages' => [
					'default' => false
				],
				'showimageborder' => [
					'default' => false
				],
				'imageborderradius' => [
					'default' => 25
				],
				'imagebordersize' => [
					'default' => 5
				],
				'showquotemarks' => [
					'default' => false
				],
				'autoplay' => [
					'default' => true
				],
				'displaytime' => [
					'default' => 3
				],
				'animationstyle' => [
					'default' => 'fade'
				],
				'showarrows' => [
					'default' => false
				],
				'arrowstyle' => [
					'default' => 'angle'
				],
				'showdots' => [
					'default' => false
				],
				'adaptiveheight' => [
					'default' => false
				],
				'verticalalign' => [
					'default' => 'align_middle'
				],
				'paddingsync' => [
					'default' => true
				],
				'paddingunit' => [
					'default' => 'px'
				],
				'padding' => [
					'default' => 50
				],
				'paddingtop' => [
					'default' => 0
				],
				'paddingright' => [
					'default' => 0
				],
				'paddingbottom' => [
					'default' => 0
				],
				'paddingleft' => [
					'default' => 0
				],
				'imageborderpadding' => [
					'default' => 4
				],
				'bgcolor' => [
					'default' => ''
				],
				'arrowscolor' => [
					'default' => ''
				],
				'arrowshovercolor' => [
					'default' => ''
				],
				'dotscolor' => [
					'default' => ''
				],
				'dotshovercolor' => [
					'default' => ''
				],
				'imagebordercolor' => [
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
