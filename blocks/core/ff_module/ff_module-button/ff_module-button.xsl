<xsl:template name="ff_module-button">
    <xsl:param name="data" />
    <div class="ff_module-button {$data/classes}">
        <button><xsl:value-of select="$data/text" /></button>
    </div>
</xsl:template>