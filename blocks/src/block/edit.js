/**
 * WordPress dependencies
 */

// Import registerBlockType() from block building libary
const { registerBlockType } = wp.blocks;

// React.createElement
const { Component, createElement } = wp.element;

// Import __ from i18n internationalization library
const { __ } = wp.i18n;

// Import controls from block building library
const { AlignmentToolbar, BlockControls, InspectorControls, PanelColorSettings } = wp.editor;

// Import components
const {
    Icon,
    ColorPicker,
    TextControl,
    SelectControl,
    ToggleControl,
    ServerSideRender,
    PanelBody,
    PanelRow,
    RadioControl,
    RangeControl
    } = wp.components;

/**
 * Internal dependencies.
 */
import Margin from './margin';
import Padding from './padding';

const customEvent = new Event( 'gutenbergSlick' );

class SPTestimonialsSlider extends Component {

    constructor() {

        super( ...arguments );

		// Create toggles for each attribute; we create them here rather than
		// passing `this.createToggleAttribute( 'showarrows' )` directly to
		// `onChange` to avoid re-renders.
        this.toggleShowFeaturedImages = this.createToggleAttribute( 'showfeaturedimages' );

        this.toggleAutoplay = this.createToggleAttribute( 'autoplay' );
		this.toggleShowArrows = this.createToggleAttribute( 'showarrows' );
        this.toggleShowDots = this.createToggleAttribute( 'showdots' );
        this.toggleAdaptiveHeight = this.createToggleAttribute( 'adaptiveheight' );

        this.togglePaddingSync = this.createToggleAttribute( 'paddingsync' );
	}

    createToggleAttribute( propName ) {
		return () => {
			const value = this.props.attributes[ propName ];
			const { setAttributes } = this.props;

			setAttributes( { [ propName ]: ! value } );
            document.dispatchEvent( customEvent );
		};
	}

    /* TOOLTIPS
    --------------------------------------------------------------------- */

    // Tooltip - Slider - Autoplay
    getAutoplayHelp( checked ) {
        return checked ? __( 'Autplay is enabled.', 'socialproofslider' ) : __( 'Toggle to advance the slides automatically.', 'socialproofslider' );
    }

    // Tooltip - Slider - Show Arrows
    getShowArrowsHelp( checked ) {
        return checked ? __( 'Showing the arrows on the Slider.', 'socialproofslider' ) : __( 'Toggle to show the arrows on both sides of the Slider.', 'socialproofslider' );
    }

    // Tooltip - Slider - Show Dots
    getShowDotsHelp( checked ) {
        return checked ? __( 'Showing the dot indicators below the Slider.', 'socialproofslider' ) : __( 'Toggle to show the dot indicators below the Slider.', 'socialproofslider' );
    }

    // Tooltip - Slider - Adaptive Height
    getAdaptiveHeightHelp( checked ) {
        return checked ? __( 'The slider will dynamically adjust height based on each slide\'s height.', 'socialproofslider' ) : __( 'Toggle to dynamically adjust slider height based on each slide\'s height.', 'socialproofslider' );
    }

    // Tooltip - Slider - Adaptive Height
    getShowFeaturedImagesHelp( checked ) {
        return checked ? __( 'Showing the Featured Images.', 'socialproofslider' ) : __( 'Toggle to show the Featured Image for each testimonial.', 'socialproofslider' );
    }

    render() {

        const attributes = this.props.attributes;
        const setAttributes = this.props.setAttributes;

        document.dispatchEvent( customEvent )

        // Update DisplayTime attr
        function updateDisplayTime(value) {
            setAttributes({ displaytime: value });
            document.dispatchEvent( customEvent )
        }

        // Update BG Color attr
        function updateBGColor(value) {
            setAttributes({ bgcolor: value });
            document.dispatchEvent( customEvent )
        }

        // Update Testimonials Text Color
        function updateTestimonialTextColor(value) {
            setAttributes({ testimonialtextcolor: value });
            document.dispatchEvent( customEvent )
        }

        // Update Author name Color
        function updateAuthorNameColor(value) {
            setAttributes({ authornamecolor: value });
            document.dispatchEvent( customEvent )
        }

        // Update Author Title Color
        function updateAuthorTitleColor(value) {
            setAttributes({ authortitlecolor: value });
            document.dispatchEvent( customEvent )
        }

        /* CSS Units. */
		const cssUnits = [
			{ value: 'px', label: __( 'Pixel (px)', 'socialproofslider' ) },
			{ value: '%', label: __( 'Percent (%)', 'socialproofslider' ) },
			{ value: 'em', label: __( 'Em (em)', 'socialproofslider' ) }
        ];

        /* ------------------------------------------------------------------ */

        // Display block preview and UI
        return (
            <>
                <ServerSideRender
                    block="social-proof-slider/main"
                    attributes={ attributes }
                />
                <BlockControls>
                    <AlignmentToolbar
                        value={ attributes.textalign }
                        onChange={ ( nextAlign ) => {
                            setAttributes( { textalign: nextAlign } );
                            document.dispatchEvent( customEvent )
                        } }
                    />
                </BlockControls>
                <InspectorControls>
                    <PanelBody
                        title={ __( 'Post Settings', 'socialproofslider' ) }
                        initialOpen={ false }
                        className={ 'spslider-inspector-panel' }>
                        <PanelRow>
                            <ToggleControl
                            label={ __( 'Show Featured Images', 'socialproofslider' ) }
                            checked={ !! attributes.showfeaturedimages }
                            onChange={ this.toggleShowFeaturedImages }
                            help={ this.getShowFeaturedImagesHelp }
                            />
                        </PanelRow>
                    </PanelBody>
                    <PanelBody
                        title={ __( 'Slider Settings', 'socialproofslider' ) }
                        initialOpen={ false }
                        className={ 'spslider-inspector-panel' }>
                        <PanelRow>
                            <ToggleControl
                            label={ __( 'Autoplay', 'socialproofslider' ) }
                            checked={ !! attributes.autoplay }
                            onChange={ this.toggleAutoplay }
                            help={ this.getAutoplayHelp }
                            />
                        </PanelRow>
                        { attributes.autoplay ?
                            <RangeControl
            					label={ __( 'Display Time (seconds)', 'socialproofslider' ) }
                                beforeIcon={ 'clock' }
            					value={ attributes.displaytime }
            					min={ 1 }
            					max={ 10 }
                                initialPosition={ 3 }
            					onChange={ ( value ) => this.props.setAttributes({ displaytime: value }) }
                                allowReset={ true }
                                help={ __( 'How long to display each slide before advancing to the next.', 'socialproofslider' ) }
            				/>
                            :
                            null
                        }
                        <PanelRow>
                            <RadioControl
                                label={ __( 'Animation Style', 'socialproofslider' ) }
                                help={ __( 'Choose how to animate each slide.', 'socialproofslider' ) }
                                options={ [
                                    { label: __( 'Fade', 'socialproofslider' ), value: 'fade' },
                                    { label: __( 'Slide', 'socialproofslider' ), value: 'slide' },
                                ] }
                                onChange={ ( value ) => this.props.setAttributes({ animationstyle: value }) }
                                selected={ attributes.animationstyle }
                            />
                        </PanelRow>
                        <PanelRow>
                            <ToggleControl
                            label={ __( 'Show Arrows', 'socialproofslider' ) }
                            checked={ !! attributes.showarrows }
                            onChange={ this.toggleShowArrows }
                            help={ this.getShowArrowsHelp }
                            />
                        </PanelRow>
                        <PanelRow>
                            <ToggleControl
                            label={ __( 'Show Dots', 'socialproofslider' ) }
                            checked={ !! attributes.showdots }
                            onChange={ this.toggleShowDots }
                            help={ this.getShowDotsHelp }
                            />
                        </PanelRow>
                        <PanelRow>
                            <ToggleControl
                            label={ __( 'Adaptive Height', 'socialproofslider' ) }
                            checked={ !! attributes.adaptiveheight }
                            onChange={ this.toggleAdaptiveHeight }
                            help={ this.getAdaptiveHeightHelp }
                            />
                        </PanelRow>
                    </PanelBody>
                    <PanelBody
    					title={ __( 'Margin and Padding', 'socialproofslider' ) }
    					initialOpen={ false }
                        className={ 'spslider-inspector-panel' }>
                        <SelectControl
                            label={ __( 'Padding Unit', 'socialproofslider' ) }
                            help={ __( 'Choose between pixel, percent, or em units.', 'socialproofslider' ) }
                            options={ cssUnits }
                            value={ attributes.paddingunit }
                            onChange={ ( value ) => this.props.setAttributes({ paddingunit: value }) }
                        />
                        <ToggleControl
                            label={ __( 'Sync Padding', 'socialproofslider' ) }
                            checked={ !! attributes.paddingsync }
                            onChange={ this.togglePaddingSync }
                            help={ __( 'Padding on all sides will have the same value.', 'socialproofslider' ) }
                        />
                        { ! attributes.paddingsync ?
                            <Padding
                                /* Padding top. */
                                paddingEnableTop={ true }
                                paddingTop={ attributes.paddingtop }
                                paddingTopMin="0"
                                paddingTopMax="200"
                                onChangePaddingTop={ paddingtop => setAttributes({ paddingtop }) }

                                /* Padding right. */
                                paddingEnableRight={ true }
                                paddingRight={ attributes.paddingright }
                                paddingRightMin="0"
                                paddingRightMax="200"
                                onChangePaddingRight={ paddingright => setAttributes({ paddingright }) }

                                /* Padding bottom. */
                                paddingEnableBottom={ true }
                                paddingBottom={ attributes.paddingbottom }
                                paddingBottomMin="0"
                                paddingBottomMax="200"
                                onChangePaddingBottom={ paddingbottom => setAttributes({ paddingbottom }) }

                                /* Padding left. */
                                paddingEnableLeft={ true }
                                paddingLeft={ attributes.paddingleft }
                                paddingLeftMin="0"
                                paddingLeftMax="200"
                                onChangePaddingLeft={ paddingleft => setAttributes({ paddingleft }) }
                            />
                            :
                            <Padding
                                /* Padding. */
                                paddingEnable={ true }
                                padding={ attributes.padding }
                                paddingMin="0"
                                paddingMax="200"
                                onChangePadding={ padding => setAttributes({ padding }) }
                            />
                    }
                    </PanelBody>
                    <PanelBody
                        title={ __( 'Colors', 'socialproofslider' ) }
                        initialOpen={ false }
                        className={ 'spslider-inspector-panel' }>
                        <PanelColorSettings
                        title={ __( 'Background Color', 'socialproofslider' ) }
                        initialOpen={ false }
                        colorSettings={[{
                            value: attributes.bgcolor,
                            onChange: updateBGColor,
                            label: __( 'Slider Background Color', 'socialproofslider' )
                        }]}
                        />
                        <PanelColorSettings
                        title={ __('Text Colors') }
                        initialOpen={ false }
                        colorSettings={[
                            {
                            value: attributes.testimonialtextcolor,
                            onChange: updateTestimonialTextColor,
                            label: __( 'Testimonial Text Color', 'socialproofslider' ),
                            },
                            {
                            value: attributes.authornamecolor,
                            onChange: updateAuthorNameColor,
                            label: __( 'Author Name Color', 'socialproofslider' ),
                            },
                            {
                            value: attributes.authortitlecolor,
                            onChange: updateAuthorTitleColor,
                            label: __( 'Author Title Color', 'socialproofslider' ),
                            },
                        ]}
                        />
                    </PanelBody>
                </InspectorControls>
            </>
        );

    }

}


export default SPTestimonialsSlider;
