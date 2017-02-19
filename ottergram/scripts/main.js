/**
 * Created by chalypeng on 18/02/2017.
 */
var DETAIL_IMAGE_SELECTOR = '[data-image-role="target"]';
var DETAIL_TITLE_SELECTOR = '[data-image-role="title"]';
var DETAIL_LINK_SELECTOR = '[data-image-role="trigger"]';

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
    });
}

function getThumbnailsArray() {
    'use strict';
    var thumbnails = document.querySelectorAll(DETAIL_LINK_SELECTOR);
    var thumbnailArray = [].slice.call(thumbnails);
    return thumbnailArray;
}

function initializeEvents() {
    'use strict';
    var thumbnails = getThumbnailsArray();
    thumbnails.forEach(addThumbClickHander);
    // console.log('init finished!');
}

// execute initializeEvents
initializeEvents();

