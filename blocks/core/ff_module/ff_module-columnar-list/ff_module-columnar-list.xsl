<xsl:template name="ff_module-columnar-list">
    <xsl:param name="data" />
    <ul class="ff_module-columnar-list">
    	
        	<xsl:attribute name="class">
                <xsl:text>ff_module-columnar-list</xsl:text>
                <xsl:if test="$data/top-section/@modifier"> ff_module-columnar-list--<xsl:value-of select="$data/top-section/@modifier"/></xsl:if>
            </xsl:attribute>
    		
    		<xsl:for-each select="$data//subsection">
    	    	<li class="ff_module-columnar-list__item">
    		    	<xsl:choose>
    					<xsl:when test="@url">
    						<a class="ff_module-columnar-list__link" href="{@url}"><span class="ff_module-columnar-list__content"><xsl:value-of select="@title" /></span></a>
    				    </xsl:when>
    				    <xsl:otherwise>
    				    	<span class="ff_module-columnar-list__content"><xsl:value-of select="@title" /></span>
    		    		</xsl:otherwise>
    		    	</xsl:choose>
    		    </li>
    	    </xsl:for-each>

	</ul>
</xsl:template>