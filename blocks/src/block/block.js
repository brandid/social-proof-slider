// Import __ from i18n internationalization library
const { __ } = wp.i18n;

// Import controls from block building library
const { RichText, MediaUpload, PlainText } = wp.editor;

// Import registerBlockType() from block building libary
const { registerBlockType } = wp.blocks;

// Get button from default components
const { Button } = wp.components;

// Import SCSS files
import './style.scss';
import './editor.scss';

// // SVG icon path
// const iconEl = el('svg', { width: 20, height: 16 },
//   el('path', { d="M10 0C4.478 0 0 3.425 0 7.646c0 1.405.503 2.717 1.366 3.846L.032 16 5.6 14.508c1.329.499 2.818.787 4.4.787 5.523 0 10-3.424 10-7.648C20 3.425 15.523 0 10 0zM6.022 8.51c-.671 0-1.216-.547-1.216-1.223s.545-1.223 1.216-1.223c.673 0 1.217.547 1.217 1.223S6.695 8.51 6.022 8.51zm3.731 0c-.672 0-1.217-.547-1.217-1.223s.545-1.223 1.217-1.223 1.216.547 1.216 1.223-.544 1.223-1.216 1.223zm3.81 0c-.671 0-1.216-.547-1.216-1.223s.545-1.223 1.216-1.223c.673 0 1.217.547 1.217 1.223s-.544 1.223-1.217 1.223z" } )
// );

// Register new Block
registerBlockType('social-proof-slider/main', {
    title: 'SP Testimonials Slider',
    // icon: iconEl,
    icon: 'format-chat',
    category: 'common',
    attributes: {
        title: {
            source: 'text',
            selector: '.card__title'
        },
        body: {
            type: 'array',
            source: 'children',
            selector: '.card__body'
        },
        imageAlt: {
            attribute: 'alt',
            selector: '.card__image'
        },
        imageUrl: {
            attribute: 'src',
            selector: '.card__image'
        }
    },
    edit({ attributes, className, setAttributes }) {

        const getImageButton = (openEvent) => {
            if(attributes.imageUrl) {
                return (
                    <img
                        src={ attributes.imageUrl }
                        onClick={ openEvent }
                        className="image"
                    />
                );
            } else {
                return (
                    <div className="button-container">
                        <Button
                            onClick={ openEvent }
                            className="button button-large"
                        >
                            Pick an image
                        </Button>
                    </div>
                );
            }
        };

        return (
            <div className="container">
                <MediaUpload
                    onSelect={ media => { setAttributes({ imageAlt: media.alt, imageUrl: media.url }); } }
                    type="image"
                    value={ attributes.imageID }
                    render={ ({ open }) => getImageButton(open) }
                />
                <PlainText
                    onChange={ content => setAttributes({ title: content }) }
                    value={ attributes.title }
                    placeholder="Your card title"
                    className="heading"
                />
                <RichText
                    onChange={ content => setAttributes({ body: content }) }
                    value={ attributes.body }
                    multiline="p"
                    placeholder="Your card text"
                />
            </div>
        );

    },
    save({ attributes }) {

        const cardImage = (src, alt) => {
            if(!src) return null;

            if(alt) {
                return (
                    <img
                        className="card__image"
                        src={ src }
                        alt={ alt }
                    />
                );
            }

            // No alt set, so let's hide it from screen readers
            return (
                <img
                    className="card__image"
                    src={ src }
                    alt=""
                    aria-hidden="true"
                />
            );
        };

        return (
            <div className="card">
                { cardImage(attributes.imageUrl, attributes.imageAlt) }
                <div className="card__content">
                    <h3 className="card__title">{ attributes.title }</h3>
                    <div className="card__body">
                        { attributes.body }
                    </div>
                </div>
            </div>
        );

    }

});
