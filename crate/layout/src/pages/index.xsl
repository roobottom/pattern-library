<?xml version="1.0" ?>
<xsl:stylesheet version="1.0"
    xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
    xmlns:ff_module="http://www.fireflylearning/module">

    <xsl:import href="{{xslRoot}}layout/imports/page-title.xsl"/>
    <xsl:import href="{{xslRoot}}layout/imports/page-content.xsl"/>

    <xsl:import href="{{xslRoot}}layout/imports/block-listing.xsl"/>
    <xsl:import href="{{xslRoot}}layout/imports/page-listing.xsl"/>

    <xsl:import href="{{xslRoot}}layout/imports/dropdown-files.xsl"/>

    <xsl:template match="page/blocks" mode="listing">
        <xsl:call-template name="block-listing" />
    </xsl:template>

    <xsl:template match="/">

        <html class="no-js" lang="">
            <head>
            <meta charset="utf-8"/>
            <meta http-equiv="x-ua-compatible" content="ie=edge"/>
            <title><xsl:value-of select="page/title"/></title>
            <meta name="description" content=""/>
            <meta name="viewport" content="width=device-width, initial-scale=1"/>
            <!-- <link rel="apple-touch-icon" href="apple-touch-icon.png"> -->
            <!-- Place favicon.ico in the root directory -->
            <link rel="stylesheet" href="/css/crate.min.css"/>
            <link rel="stylesheet" href="/css/blocks.min.css"/>

        </head>
        <body>

            <xsl:call-template name="page-title">
                <xsl:with-param name="text" select="page/title"/>
            </xsl:call-template>

            <xsl:call-template name="page-content">
                <xsl:with-param name="content" select="page/content"/>
            </xsl:call-template>

            <h3>Blocks</h3>

            <xsl:apply-templates select="page/blocks" mode="listing"/>



            <h3>Pages</h3>
            <xsl:call-template name="page-listing" />

            <xsl:call-template name="dropdown-files" />

            <script src="/vendor/js/jquery-1.11.3.js"></script>
            <script src="/js/blocks.js"></script>
            <script>
        // Adds class of svg to the html tag if svg is enabled
        (function flagSVG() {
            var ns = {'svg': 'http://www.w3.org/2000/svg'};
            if(document.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#BasicStructure", "1.1")) {document.getElementsByTagName('html')[0].className += ' svg';}
        })();

        (function (document, undefined) {
            // Pattern selector
            document.getElementById('pattern-submit').style.display = 'none';
            document.getElementById('pattern-select').onchange = function() {
                //document.location=this.options[this.selectedIndex].value;
                var val = this.value;
                if (val !== "") {
                    window.location = val;
                }
            }
        })(document);

    </script>
        </body>
        </html>
    </xsl:template>

</xsl:stylesheet>
