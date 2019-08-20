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
const { Icon, ColorPicker, TextControl, SelectControl, ToggleControl, ServerSideRender, PanelBody, PanelRow } = wp.components;

const customEvent = new Event( 'gutenbergSlick' );

class SPTestimonialsSlider extends Component {

    constructor() {

        super( ...arguments );

		// Create toggles for each attribute; we create them here rather than
		// passing `this.createToggleAttribute( 'showarrows' )` directly to
		// `onChange` to avoid re-renders.
		this.toggleShowArrows = this.createToggleAttribute( 'showarrows' );
        this.toggleShowDots = this.createToggleAttribute( 'showdots' );
        this.toggleAdaptiveHeight = this.createToggleAttribute( 'adaptiveheight' );
        // this.updateBGColor = this.updateSetting('bgcolor');
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

    // Tooltip - Slider - Show Arrows
    getShowArrowsHelp( checked ) {
        return checked ? __( 'Showing the arrows on the Slider.' ) : __( 'Toggle to show the arrows on both sides of the Slider.' );
    }

    // Tooltip - Slider - Show Dots
    getShowDotsHelp( checked ) {
        return checked ? __( 'Showing the dot indicators below the Slider.' ) : __( 'Toggle to show the dot indicators below the Slider.' );
    }

    // Tooltip - Slider - Adaptive Height
    getAdaptiveHeightHelp( checked ) {
        return checked ? __( 'The slider will dynamically adjust height based on each slide\'s height.' ) : __( 'Toggle to dynamically adjust slider height based on each slide\'s height.' );
    }

    render() {

        const attributes = this.props.attributes;
        const setAttributes = this.props.setAttributes;

        document.dispatchEvent( customEvent )

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
                        title={ __( 'Slider Settings' ) }
                        initialOpen={ false }>
                        <PanelRow>
                            <ToggleControl
                            label={ __( 'Show Arrows' ) }
                            checked={ !! attributes.showarrows }
                            onChange={ this.toggleShowArrows }
                            help={ this.getShowArrowsHelp }
                            />
                        </PanelRow>
                        <PanelRow>
                            <ToggleControl
                            label={ __( 'Show Dots' ) }
                            checked={ !! attributes.showdots }
                            onChange={ this.toggleShowDots }
                            help={ this.getShowDotsHelp }
                            />
                        </PanelRow>
                        <PanelRow>
                            <ToggleControl
                            label={ __( 'Adaptive Height' ) }
                            checked={ !! attributes.adaptiveheight }
                            onChange={ this.toggleAdaptiveHeight }
                            help={ this.getAdaptiveHeightHelp }
                            />
                        </PanelRow>
                    </PanelBody>
                    <PanelBody
                        title={ __( 'Colors' ) }
                        initialOpen={ false }>
                        <PanelColorSettings
                        title={ __('Background Color') }
                        initialOpen={ false }
                        colorSettings={[{
                            value: attributes.bgcolor,
                            onChange: updateBGColor,
                            label: __('Slider Background Color')
                        }]}
                        />
                        <PanelColorSettings
                        title={ __('Text Colors') }
                        initialOpen={ false }
                        colorSettings={[
                            {
                            value: attributes.testimonialtextcolor,
                            onChange: updateTestimonialTextColor,
                            label: __('Testimonial Text Color'),
                            },
                            {
                            value: attributes.authornamecolor,
                            onChange: updateAuthorNameColor,
                            label: __('Author Name Color'),
                            },
                            {
                            value: attributes.authortitlecolor,
                            onChange: updateAuthorTitleColor,
                            label: __('Author Title Color'),
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
