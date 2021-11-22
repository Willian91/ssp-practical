const http = require('http'),
    path = require('path'), // this path provide work with file directory
    express = require('express'),
    fs = require('fs'),
    xmlParse = require('xslt-processor').xmlParse
    xsltProcess = require('xslt-processor').xsltProcess,
    xml2js = require('xml2js')  // this module does XML <--> JSON conversion
