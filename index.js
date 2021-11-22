const http = require('http'),
    path = require('path'), // this path provide work with file directory
    express = require('express'),
    fs = require('fs'),
    xmlParse = require('xslt-processor').xmlParse;
const { xsltProcess } = require('xslt-processor');
    xsltProcess = require('xslt-processor').xsltProcess,
    xml2js = require('xml2js')  // this module does XML <--> JSON conversion

const router = express(),
    server = http.createServer('router');
router.get('/',function(req, res){
    res.writeHead(200, {'Content-Type' : 'text/html'});

    let xml = fs.readdirSync('PaddysCafe.xml', 'utf8'),
        xsl =fs.readFileSync('PaddysCafe.xsl', 'utf8');

    let doc = xmlParse(xml),
    stylesheet = xmlParse(xsl);

    let result = xsltProcess(doc, stylesheet);

    res.end(result.toString());
        
});
server.listen(process.env.PORT || 3000, process.env.IP || "0.0.0.0", function() {
    const addr = server.address();
    console.log("Server listening at", addr.address + ":" + addr.port)
});
