<xsl:template name="ff_module-date-picker-jumpto">
    <xsl:param name="data" />

    <div class="ff_module-date-picker-jumpto__icon">
        <span class="ff_icon ff_icon-calendar-blue ff_module-date-picker-jumpto__trigger" data-ff="date-picker-container">
			<xsl:apply-templates select="$data" mode="ff_module-date-picker-jumpto-input" />
        </span>
    </div>
</xsl:template>

<xsl:template match="*[string(@dateUrlPrefix)]" mode="ff_module-date-picker-jumpto-input">
    <input class="ff_module-date-picker-jumpto__cal" data-ff="date-picker" data-ff-url-prefix="{@dateUrlPrefix}" value="{@date}"/>
</xsl:template>

<xsl:template match="*[string(@target-input-id)]" mode="ff_module-date-picker-jumpto-input">
    <input
      class="ff_module-date-picker-jumpto__cal"
      data-ff="date-picker"
      data-ff-target-input-id="{@target-input-id}"
      data-ff-display-format="{@display-format}"
      value="{@date}"
      autocomplete="off"
      autocorrect="off" />
</xsl:template>
