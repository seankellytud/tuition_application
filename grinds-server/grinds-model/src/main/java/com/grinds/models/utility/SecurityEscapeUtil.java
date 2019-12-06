package com.grinds.models.utility;

import org.apache.commons.lang.StringEscapeUtils;
import org.jsoup.Jsoup;
import org.jsoup.safety.Whitelist;

public final class SecurityEscapeUtil {
	public static String cleanIt(String arg0) {
        return Jsoup.clean(
                StringEscapeUtils.escapeHtml(StringEscapeUtils.escapeJavaScript(StringEscapeUtils.escapeSql(arg0)))
                , Whitelist.basic());
    }
}
