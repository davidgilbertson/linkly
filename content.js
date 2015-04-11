console.log('  --  >  content.js:1');

function has(bigString, littleString) {
    return bigString.indexOf(littleString) > -1;
}

function hostFromUrl(url) {
    var result = url.match(/.*\/\/(.*)?\//);
    if (result.length > 1) {
        return result[1].replace('www.', '');
    } else {
        return null;
    }
}

function openInSameTab(link) {
    console.log('  --  >  This is a local link, stay on the page');
    link.target = '';
}

function openInNewTab(link) {
    link.target = '_blank';
    console.log('  --  >  This is a link to another page, set target to blank');
}

function handleClick(e) {
    e.preventDefault(); // for testing abort all links anyway.
    var link = e.target;
    var thisHost;
    var targetHost;

    if (link.nodeName !== 'A') return;

    if (has(link.href, '://') && !has(link.href, 'http')) {
        return openInNewTab(link);
    }

    thisHost = 'www.something.com'.replace('www.', '');
    targetHost = hostFromUrl(link.href);

    console.log('  --  >  targetHost:', targetHost);

    if (!targetHost || thisHost === targetHost) {
        return openInSameTab(link);
    } else {
        return openInNewTab(link);
    }
}


document.addEventListener('click', handleClick);