// Import registerBlockType() from block building libary
const { registerBlockType } = wp.blocks;

// React.createElement
const { createElement } = wp.element;

// Import __ from i18n internationalization library
const { __ } = wp.i18n;

// Import controls from block building library
const { InspectorControls } = wp.editor;

// Import components
const { Icon, TextControl, SelectControl, ServerSideRender } = wp.components;

// Import SCSS files
import './style.scss';
import './editor.scss';

// SVG icon
const iconEl = () => (
    <Icon icon={ <svg><path d="M10 2C4.478 2 0 5.425 0 9.646c0 1.404.503 2.717 1.366 3.846L.032 18 5.6 16.508c1.329.499 2.818.787 4.4.787 5.523 0 10-3.424 10-7.648C20 5.425 15.523 2 10 2zm-3.978 8.51c-.671 0-1.216-.547-1.216-1.223s.545-1.223 1.216-1.223c.673 0 1.217.547 1.217 1.223s-.544 1.223-1.217 1.223zm3.731 0c-.672 0-1.217-.547-1.217-1.223s.545-1.223 1.217-1.223 1.216.547 1.216 1.223-.544 1.223-1.216 1.223zm3.809 0c-.67 0-1.215-.547-1.215-1.223s.545-1.223 1.215-1.223c.674 0 1.217.547 1.217 1.223s-.543 1.223-1.217 1.223z" /></svg> } />
);

// Register new Block
registerBlockType('social-proof-slider/main', {
    title: __( 'SP Testimonials Slider' ),
    description: __( 'Display a Social Proof Testimonials Slider' ),
    icon: iconEl,
    category: 'common',
    attributes: {
		heading: {
			default: 'h2'
		}
	},
    edit(props) {
        const attributes = props.attributes;
		const setAttributes = props.setAttributes;

        const customEvent = new Event( 'gutenbergSlick' );

        //Function to update heading level
		function changeHeading(heading){
			setAttributes({heading});
            console.log('Header Updated!');
		}

        //Display block preview and UI
		return createElement('div', {}, [
            document.dispatchEvent( customEvent ),
			//Preview a block with a PHP render callback
            createElement( ServerSideRender, {
                block: 'social-proof-slider/main',
                attributes: props.attributes
            } ),
			//Block inspector
			createElement( InspectorControls, {},
				[
                    //Select heading level
					createElement(SelectControl, {
						value: attributes.heading,
						label: __( 'Heading' ),
						onChange: changeHeading,
						options: [
							{value: 'h2', label: 'H2'},
							{value: 'h3', label: 'H3'},
							{value: 'h4', label: 'H4'},
						]
					})
				]
			)
		] );

    },
    save({ attributes }) {
        return null;//save has to exist. This all we need
    }

});
