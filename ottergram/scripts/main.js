/**
 * Created by chalypeng on 18/02/2017.
 */
var DETAIL_IMAGE_SELECTOR = '[data-image-role="target"]';
var DETAIL_TITLE_SELECTOR = '[data-image-role="title"]';
var DETAIL_LINK_SELECTOR = '[data-image-role="trigger"]';
var DETAIL_FRAME_SELECTOR = '[data-image-role="frame"]';
var TINY_EFFECT_CLASS = 'is-tiny';
var HIDDEN_DETAIL_CLASS = 'hidden-detail';
var ESC_KEY = 27;

function setDetails(imageUrl, titleText) {
    'use strict';
    // set the detail image
    var detailImage = document.querySelector(DETAIL_IMAGE_SELECTOR);
    // detailImage.setAttribute('src', 'img/otter3.jpg');
    detailImage.setAttribute('src', imageUrl);

    // set the detail title
    var detailTitle = document.querySelector(DETAIL_TITLE_SELECTOR);
    // detailTitle.textContent = 'You Should Be Dancing';
    detailTitle.textContent = titleText;
}

function imageFromThumb(thumbnail) {
    'use strict';
    return thumbnail.getAttribute('data-image-url');
}

function titleFromThumb(thumbnail) {
    'use strict';
    return thumbnail.getAttribute('data-image-title');
}

function setDetailsFromThumb(thumbnail) {
    'use strict';
    setDetails(imageFromThumb(thumbnail), titleFromThumb(thumbnail));
}

function addThumbClickHander(thumb) {
    'use strict';
    thumb.addEventListener('click', function (event) {
        event.preventDefault();
        setDetailsFromThumb(thumb);
        showDetails();
    });
}

function getThumbnailsArray() {
    'use strict';
    var thumbnails = document.querySelectorAll(DETAIL_LINK_SELECTOR);
    var thumbnailArray = [].slice.call(thumbnails);
    return thumbnailArray;
}

function hideDetails() {
    'use strict';
    document.body.classList.add(HIDDEN_DETAIL_CLASS);
}
function showDetails() {
    'use strict';
    var frame = document.querySelector(DETAIL_FRAME_SELECTOR);
    document.body.classList.remove(HIDDEN_DETAIL_CLASS);
    frame.classList.add(TINY_EFFECT_CLASS);
    setTimeout(function () {
        frame.classList.remove(TINY_EFFECT_CLASS);
    },50);
}
function addKeyPresshandler() {
    'use strict';
    document.body.addEventListener('keyup', function (event) {
        event.preventDefault();
        console.log(event.keyCode);
        if (event.keyCode === ESC_KEY) {
            hideDetails();
        }
    });
}

function initializeEvents() {
    'use strict';
    var thumbnails = getThumbnailsArray();
    thumbnails.forEach(addThumbClickHander);
    // console.log('init finished!');
    addKeyPresshandler();
}

// execute initializeEvents
initializeEvents();

