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

		$requestor = 'block';

		/* Declare defaults
		-------------------------------------------- */
		$defaults['blockalign'] = 'center';
		$defaults['sortpostsby'] = 'DESC';
		$defaults['filterposts'] = false;
		$defaults['filtershowhide'] = 'show';
		$defaults['filterby'] = 'postid';
		$defaults['postidorcatslug'] = '';
		$defaults['showfeaturedimages'] = false;
		$defaults['showimageborder'] = false;
		// $defaults['imageborderradius'] = 25;
		$defaults['showquotemarks'] = false;
		$defaults['autoplay'] = true;
		$defaults['displaytime'] = 3;
		$defaults['animationstyle'] = 'fade';
		$defaults['showarrows'] = false;
		$defaults['arrowstyle'] = 'angle';
		$defaults['showdots'] = false;
		$defaults['adaptiveheight'] = false;
		$defaults['ids'] = '';
		$defaults['exclude'] = '';
		$defaults['category'] = '';

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

		/* Get Block Settings
		-------------------------------------------- */
		$block_textalign = $atts['textalign'];
		if ( empty( $block_textalign ) ) {
			$block_textalign = $defaults['blockalign'];
		}

		/* Get Post Settings
		-------------------------------------------- */
		$posts_sortby = $atts['sortpostsby'];
		if ( empty( $posts_sortby ) ) {
			$posts_sortby = $defaults['sortpostsby'];
		}

		$posts_filterposts = $atts['filterposts'];
		if ( empty( $posts_filterposts ) ) {
			$posts_filterposts = $defaults['filterposts'];
		}

		$posts_filtershowhide = $atts['filtershowhide'];
		if ( empty( $posts_filtershowhide ) ) {
			$posts_filtershowhide = $defaults['filtershowhide'];
		}

		$posts_filterby = $atts['filterby'];
		if ( empty( $posts_filterby ) ) {
			$posts_filterby = $defaults['filterby'];
		}

		$posts_postids = $atts['postids'];
		if ( empty( $posts_postids ) ) {
			$posts_postids = $defaults['postids'];
		}

		$posts_catslug = $atts['catslug'];
		if ( empty( $posts_catslug ) ) {
			$posts_catslug = $defaults['catslug'];
		}

		$posts_showfeaturedimages = $atts['showfeaturedimages'];
		if ( $posts_showfeaturedimages === "true" ) {
			$posts_showfeaturedimages = 1;
		}
		if ( empty( $posts_showfeaturedimages ) ) {
			$posts_showfeaturedimages = $defaults['showfeaturedimages'];
		}

		$posts_showimageborder = $atts['showimageborder'];
		if ( empty( $posts_showimageborder ) ) {
			$posts_showimageborder = $defaults['showimageborder'];
		}

		$posts_imageborderradius = $atts['imageborderradius'];
		if ( empty( $posts_imageborderradius ) ) {
			$posts_imageborderradius = 0;
		}

		$posts_showquotes = $atts['showquotemarks'];
		if ( empty( $posts_showquotes ) ) {
			$posts_showquotes = $defaults['showquotemarks'];
		}
		/*
		Show Featured Image Border > Featured Image Border Size - Range: 0-50 - default: 5
		*/

		/* Get Slider Settings
		-------------------------------------------- */
		$slider_autoplay = $atts['autoplay'];
		if ( empty( $slider_autoplay ) ) {
			$slider_autoplay = $defaults['autoplay'];
		}

		$slider_displaytime = $atts['displaytime'];
		if ( empty( $slider_displaytime ) ) {
			$slider_displaytime = $defaults['displaytime'];
		}

		$slider_animationstyle = $atts['animationstyle'];
		if ( empty( $slider_animationstyle ) ) {
			$slider_animationstyle = $defaults['animationstyle'];
		}

		$slider_showarrows = $atts['showarrows'];
		if ( empty( $slider_showarrows ) ) {
			$slider_showarrows = $defaults['showarrows'];
		}

		$slider_arrowstyle = $atts['arrowstyle'];
		if ( empty( $slider_arrowstyle ) ) {
			$slider_arrowstyle = $defaults['arrowstyle'];
		}

		$slider_showdots = $atts['showdots'];
		if ( empty( $slider_showdots ) ) {
			$slider_showdots = $defaults['showdots'];
		}

		$slider_adaptiveheight = $atts['adaptiveheight'];
		if ( empty( $slider_adaptiveheight ) ) {
			$slider_adaptiveheight = $defaults['adaptiveheight'];
		}

		$slider_verticalalign = $atts['verticalalign'];
		if ( empty( $slider_verticalalign ) ) {
			$slider_verticalalign = $defaults['verticalalign'];
		}

		/* Get Margin & Padding Settings
		-------------------------------------------- */
		$paddingunit = $atts['paddingunit'];
		$paddingsync = $atts['paddingsync'];
		$contentPaddingStr = '';
		if ( $paddingsync === "true" || $paddingsync === "1" ) {
			$contentPaddingStr = 'padding: ' . $atts['padding'] . $paddingunit . ';';
		} else {
			$contentPaddingStr = 'padding-top: ' . $atts['paddingtop'] . $paddingunit . '; ';
			$contentPaddingStr .= 'padding-right: ' . $atts['paddingright'] . $paddingunit . '; ';
			$contentPaddingStr .= 'padding-bottom: ' . $atts['paddingbottom'] . $paddingunit . '; ';
			$contentPaddingStr .= 'padding-left: ' . $atts['paddingleft'] . $paddingunit . ';';
		}
		/*
		Featured Image Border Padding - Range: 0-50 | Default: 4px
		Featured Image Margin Bottom - Range: 0-100 | Default: 20px
		Testimonial Text Container Margin Bottom - Range: 0-100 | Default: 30px
		Quote Text Margin Bottom - Range: 0-100 | Default: 30px
		Dots Margin Top - Range: 0-100 | Default: 10px
		*/

		/* Get Color Settings
		-------------------------------------------- */
		$style_bgcolor = $atts['bgcolor'];
		$style_testimonialcolor = $atts['testimonialtextcolor'];
		$style_authornamecolor = $atts['authornamecolor'];
		$style_authortitlecolor = $atts['authortitlecolor'];
		/*
		Image Border Color - Color Picker | Default: #000000
		Arrows Color - Color Picker | Default: #000000
		Arrows Hover Color - Color Picker | Default: #666666
		Dots Color - Color Picker | Default: #000000
		Dots Hover Color - Color Picker | Default: #666666
		*/

		$shared = new Social_Proof_Slider_Shared( $this->plugin_name, $this->version );

		// Get Shortcode Settings
		$sc_settings = $shared->get_shortcode_settings();

		// Get Attributes inside the manually-entered Shortcode
		$sc_atts = shortcode_atts( $defaults, $atts, 'social-proof-slider' );

		// Determine ORDERBY and ORDER args
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

		$posts_filter_ids = '';
		$posts_filter_taxslug = '';
		$posts_filter_hide = '';

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

		$showImageBorder = $posts_showimageborder;
		$imageBorderColor = $sc_settings['imageBorderColor'];
		$imageBorderThickness = $sc_settings['imageBorderThickness'];
		$imageBorderPadding = $sc_settings['imageBorderPadding'];

		// $smartQuotes = $sc_settings['surroundWithQuotes'];

		// $doPaddingOverride = $sc_settings['doPaddingOverride'];
		// $contentPaddingTop = $sc_settings['contentPaddingTop'];
		// $contentPaddingBottom = $sc_settings['contentPaddingBottom'];
		// $featImgMarginTop = $sc_settings['featImgMarginTop'];
		// $featImgMarginBottom = $sc_settings['featImgMarginBottom'];
		// $textPaddingTop = $sc_settings['textPaddingTop'];
		// $textPaddingBottom = $sc_settings['textPaddingBottom'];
		// $quoteMarginBottom = $sc_settings['quoteMarginBottom'];
		// $dotsMarginTop = $sc_settings['dotsMarginTop'];

		// $contentPaddingStr = 'padding: 50px;'; // default
		$imgMarginStr = ''; // default
		$textPaddingStr = ''; // default
		$quoteMarginStr = ''; // default
		$dotsMarginStr = ''; // default

		// if ( $doPaddingOverride == 'true' ) {
		// 	$contentPaddingStr = "padding-top: ".$contentPaddingTop."; padding-bottom: ".$contentPaddingBottom.";";
		// 	$imgMarginStr = "margin-top:".$featImgMarginTop."; margin-bottom:".$featImgMarginBottom.";";
		// 	$textPaddingStr = "padding-top: ".$textPaddingTop."; padding-bottom: ".$textPaddingBottom.";";
		// 	$quoteMarginStr = "margin-bottom: ".$quoteMarginBottom.";";
		// 	$dotsMarginStr = "margin-top: ".$dotsMarginTop.";";
		// }

		// $alignStr = '';	// default
		// if ( $sc_settings['doAutoHeight'] != 'true' ) {
		// 	$alignStr = ' valign-' . $sc_settings['verticalalign'];
		// }

		// Create 'items' object with all testimonials
		$items = '';
		$items = $shared->get_testimonials( $queryargs, 'shortcode', $posts_filter_hide, $posts_filter_ids, $posts_showfeaturedimages, $posts_showquotes, $posts_filter_taxslug, $requestor );

		// Generate Unique ID for this block
		$uniqueID = uniqid('spslider_block_');

		// Build data attr string for Slick settings
		$slickData = "'{";

		// Autoplay
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

		// Animation Style
		if ( $slider_animationstyle === "fade" ) {
			$slickData .= '"fade":true';
		} else {
			$slickData .= '"fade":false';
		}

		$slickData .= ",";

		// Show Arrows
		if ( $slider_showarrows === "true" || $slider_showarrows === "1" ) {
			$slickData .= '"arrows":true';
		} else {
			$slickData .= '"arrows":false';
		}

		$slickData .= ",";

		// Arrows Style
		$slickData .= '"prevArrow":"#'.$uniqueID.'-arrow-left",';
		$slickData .= '"nextArrow":"#'.$uniqueID.'-arrow-right"';

		$slickData .= ",";

		// Show Dots
		if ( $slider_showdots === "true" || $slider_showdots === "1" ) {
			$slickData .= '"dots":true';
		} else {
			$slickData .= '"dots":false';
		}

		$slickData .= ",";

		// Adaptive Height
		if ( $slider_adaptiveheight === "true" || $slider_adaptiveheight === "1" ) {
			$slickData .= '"adaptiveHeight":true';
		} else {
			$slickData .= '"adaptiveHeight":false';
		}

		$slickData .= "}'";

		$textAlignStr = "align_" . $block_textalign;

		$alignStr = "valign-".$atts['verticalalign'];

		echo '<!-- // ********** SOCIAL PROOF SLIDER ********** // -->';
		echo '<section id="' . $uniqueID . '" class="block wp-block-socialproofslider ' . $sc_settings['animationStyle'] . ' paddingoverride-'.$sc_settings['doPaddingOverride'].' ">';
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

		//* Output styles
		$uniqueID = '#' . $uniqueID;
		echo '<style>'."\n";

		if ( ! $slider_arrowcolor ) {
			echo $uniqueID . ' button.slick-arrow { color: #000 !important; }'."\n";
			echo $uniqueID . ' button.slick-arrow:hover { opacity: 0.5; }'."\n";
		}

		echo $uniqueID . ' .social-proof-slider-wrap { background-color:' . $style_bgcolor . '; '.$contentPaddingStr.' }'."\n";

		echo $uniqueID . ' .social-proof-slider-wrap .testimonial-item.featured-image .testimonial-author-img { '.$imgMarginStr.' }'."\n";

		if ( empty( $posts_imageborderradius ) || ( $posts_imageborderradius === 0 ) || ( $posts_imageborderradius === false ) ) {
			echo $uniqueID . ' .social-proof-slider-wrap .testimonial-item.featured-image .testimonial-author-img img{ border-radius: 0; }'."\n";
		} else {
			echo $uniqueID . ' .social-proof-slider-wrap .testimonial-item.featured-image .testimonial-author-img img{ border-radius: ' . $posts_imageborderradius . '%; }'."\n";
		}

		if ( $showImageBorder === "true" || $showImageBorder === "1" ) {
			echo $uniqueID . ' .social-proof-slider-wrap .testimonial-item.featured-image .testimonial-author-img img { border: ' . $imageBorderThickness . ' solid ' . $imageBorderColor . ' !important; padding: ' . $imageBorderPadding . ' }'."\n";
		}

		echo $uniqueID . ' .social-proof-slider-wrap .testimonial-item .testimonial-text{ '.$textPaddingStr.' }'."\n";
		echo $uniqueID . ' .social-proof-slider-wrap .testimonial-item .testimonial-text .quote { '.$quoteMarginStr.' }'."\n";

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

			// Colors
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
