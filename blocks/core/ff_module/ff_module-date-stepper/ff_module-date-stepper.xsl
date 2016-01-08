<xsl:template name="ff_module-date-stepper">
    <xsl:param name="data" />
    <div class="ff_module-date-stepper">
        <a class="ff_module-date-stepper__link ff_module-date-stepper__link--prev" href="{$data//planner/@previousUrl}"><span class="ff_icon ff_icon-page-back-blue"></span><span class="ff_util-icon-text">Previous</span></a>
        <h3 class="ff_module-date-stepper__title">
            <span class="ff_module-date-stepper__title"><xsl:value-of select="$data//planner/@title"/></span>
        </h3>
        <a class="ff_module-date-stepper__link ff_module-date-stepper__link--next" href="{$data//planner/@nextUrl}"><span class="ff_icon ff_icon-page-forward-blue"></span><span class="ff_util-icon-text">Next</span></a>
    </div>
</xsl:template>
