const routesHandler = (req, res) => {
    res.writeHead(200, { "Content-Type": "text/html" });

    res.write(
        '<html>' + 
            '<head><title>First Node App</title></head>' +
            '<body>'
    );

    if ( req.url === '/' ) {
        res.write(
            '<div>' +
                '<a href="/monday">Monday</a><br/>' + 
                '<a href="/tuesday">Tuesday</a><br/>' +
                '<a href="/wednesday">Wednesday</a><br/>' +
                '<a href="/thursday">Thursday</a><br/>' +
                '<a href="/friday">Friday</a><br/>' +
                '<a href="/saturday">Saturday</a><br/>' +
                '<a href="/sunday">Sunday</a>' +
            '</div>'
        );
        return res.end();
    }
    
    const day = req.url.split('/')[1];
    const date = new Date();
    const time = date.toLocaleTimeString();

    res.write(
        '<div style="text-align: center;">' +
            '<h3>' + day.toUpperCase() + '</h3>' +
            '<p>' +
                '<b>' + 'Current Time:' + '</b>' +
                '<br/>' + time +
            '</p>' +
        '</div>'
    );

    res.write(
        '</body></html>'
    );

    res.end();
}

module.exports = routesHandler;