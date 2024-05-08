// JavaScript function to parse a URL.
function parseURL(url) {
    // Create an anchor element and set its href attribute to the given URL
    let parser = document.createElement('a');
    parser.href = url;
    // Return an object with various components of the URL
    return {
        protocol: parser.protocol,
        hostname: parser.hostname,
        port: parser.port,
        pathname: parser.pathname,
        search: parser.search,
        hash: parser.hash
    };
}
