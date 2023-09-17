import { IResult } from "@/interface/api.response";
import React from "react";
// Import the Result[0] interface

interface ResultProps {
  result: IResult[];
}

const ResultListComponent: React.FC<ResultProps> = ({ result }) => {

  


  return (
    <div className="lg:text-lg text-xs text-center  lg:flex  my-24 border-2 border-gray-300 rounded-2xl p-12 shadow-xl bg-white ">
      
      

     
      <ul>
      <h2 className="text-2xl text-gray-600">Domain Info</h2>
        <li>Name: {result[0].domain_info.name}</li>
        <li>CMS: {result[0].domain_info.cms}</li>
        <li>IP: {result[0].domain_info.ip}</li>
        <li>Server: {result[0].domain_info.server}</li>
        <li>Crawl Start: {result[0].domain_info.crawl_start}</li>
        <li>Crawl End: {result[0].domain_info.crawl_end || "N/A"}</li>
        <li>Extended Crawl Status: {result[0].domain_info.extended_crawl_status}</li>
        <li>SSL Valid Certificate: {result[0].domain_info.ssl_info.valid_certificate ? "Yes" : "No"}</li>
        <li>Certificate Issuer: {result[0].domain_info.ssl_info.certificate_issuer}</li>
        <li>Certificate Subject: {result[0].domain_info.ssl_info.certificate_subject}</li>
        <li>Certificate Version: {result[0].domain_info.ssl_info.certificate_version}</li>
        <li>Certificate Hash: {result[0].domain_info.ssl_info.certificate_hash}</li>
        <li>Certificate Expiration Date: {result[0].domain_info.ssl_info.certificate_expiration_date}</li>
        <li>Sitemap: {result[0].domain_info.checks.sitemap ? "Yes" : "No"}</li>
        <li>Robots.txt: {result[0].domain_info.checks.robots_txt ? "Yes" : "No"}</li>
        <li>Start Page Deny Flag: {result[0].domain_info.checks.start_page_deny_flag ? "Yes" : "No"}</li>
        <li>SSL: {result[0].domain_info.checks.ssl ? "Yes" : "No"}</li>
        <li>HTTP2: {result[0].domain_info.checks.http2 ? "Yes" : "No"}</li>
        <li>Test Canonicalization: {result[0].domain_info.checks.test_canonicalization ? "Yes" : "No"}</li>
        <li>Test WWW Redirect: {result[0].domain_info.checks.test_www_redirect ? "Yes" : "No"}</li>
        <li>Test Hidden Server Signature: {result[0].domain_info.checks.test_hidden_server_signature ? "Yes" : "No"}</li>
        <li>Test Page Not Found: {result[0].domain_info.checks.test_page_not_found ? "Yes" : "No"}</li>
        <li>Test Directory Browsing: {result[0].domain_info.checks.test_directory_browsing ? "Yes" : "No"}</li>
        <li>Test HTTPS Redirect: {result[0].domain_info.checks.test_https_redirect ? "Yes" : "No"}</li>
        <li>Total Pages: {result[0].domain_info.total_pages}</li>
        <li>Page Not Found Status Code: {result[0].domain_info.page_not_found_status_code}</li>
        <li>Canonicalization Status Code: {result[0].domain_info.canonicalization_status_code}</li>
        <li>Directory Browsing Status Code: {result[0].domain_info.directory_browsing_status_code}</li>
        <li>WWW Redirect Status Code: {result[0].domain_info.www_redirect_status_code}</li>
        <li>Main Domain: {result[0].domain_info.main_domain}</li>
      </ul>

      <ul>
      <h2 className="text-2xl text-gray-600">Page Metrics</h2>
        <li>Links External:  {result[0].page_metrics?.links_external}</li>
        <li>Links Internal: {result[0].page_metrics.links_internal}</li>
        <li>Duplicate Title: {result[0].page_metrics.duplicate_title}</li>
        <li>Duplicate Description: {result[0].page_metrics.duplicate_description}</li>
        <li>Duplicate Content: {result[0].page_metrics.duplicate_content}</li>
        <li>Broken Links: {result[0].page_metrics.broken_links}</li>
        <li>Broken Resources: {result[0].page_metrics.broken_resources}</li>
        <li>Links Relation Conflict: {result[0].page_metrics.links_relation_conflict}</li>
        <li>Redirect Loop: {result[0].page_metrics.redirect_loop}</li>
        <li>Onpage Score: {result[0].page_metrics.onpage_score}</li>
        <li>Non Indexable: {result[0].page_metrics.non_indexable}</li>
        <li>Canonical: {result[0].page_metrics.checks.canonical}</li>
        <li>Duplicate Meta Tags: {result[0].page_metrics.checks.duplicate_meta_tags}</li>
        <li>No Description: {result[0].page_metrics.checks.no_description}</li>
        <li>Frame: {result[0].page_metrics.checks.frame}</li>
        <li>Large Page Size: {result[0].page_metrics.checks.large_page_size}</li>
        <li>Irrelevant Description: {result[0].page_metrics.checks.irrelevant_description}</li>
        <li>Irrelevant Meta Keywords: {result[0].page_metrics.checks.irrelevant_meta_keywords}</li>
        <li>Is HTTPS: {result[0].page_metrics.checks.is_https}</li>
        <li>Is HTTP: {result[0].page_metrics.checks.is_http}</li>
        <li>Title Too Long: {result[0].page_metrics.checks.title_too_long}</li>
        <li>Low Content Rate: {result[0].page_metrics.checks.low_content_rate}</li>
        <li>Small Page Size: {result[0].page_metrics.checks.small_page_size}</li>
        <li>No H1 Tag: {result[0].page_metrics.checks.no_h1_tag}</li>
        <li>Recursive Canonical: {result[0].page_metrics.checks.recursive_canonical}</li>
        <li>No Favicon: {result[0].page_metrics.checks.no_favicon}</li>
        <li>No Image Alt: {result[0].page_metrics.checks.no_image_alt}</li>
        <li>No Image Title: {result[0].page_metrics.checks.no_image_title}</li>
        <li>SEO Friendly URL: {result[0].page_metrics.checks.seo_friendly_url}</li>
        <li>SEO Friendly URL Characters Check: {result[0].page_metrics.checks.seo_friendly_url_characters_check}</li>
        <li>SEO Friendly URL Dynamic Check: {result[0].page_metrics.checks.seo_friendly_url_dynamic_check}</li>
        <li>SEO Friendly URL Keywords Check: {result[0].page_metrics.checks.seo_friendly_url_keywords_check}</li>
        <li>SEO Friendly URL Relative Length Check: {result[0].page_metrics.checks.seo_friendly_url_relative_length_check}</li>
        <li>Title Too Short: {result[0].page_metrics.checks.title_too_short}</li>
        <li>No Content Encoding: {result[0].page_metrics.checks.no_content_encoding}</li>
        <li>High Waiting Time: {result[0].page_metrics.checks.high_waiting_time}</li>
        <li>High Loading Time: {result[0].page_metrics.checks.high_loading_time}</li>
        <li>Is Redirect: {result[0].page_metrics.checks.is_redirect}</li>
        <li>Is Broken: {result[0].page_metrics.checks.is_broken}</li>
        <li>Is 4xx Code: {result[0].page_metrics.checks.is_4xx_code}</li>
        <li>Is 5xx Code: {result[0].page_metrics.checks.is_5xx_code}</li>
        <li>Is WWW: {result[0].page_metrics.checks.is_www}</li>
        <li>No Doctype: {result[0].page_metrics.checks.no_doctype}</li>
        <li>No Encoding Meta Tag: {result[0].page_metrics.checks.no_encoding_meta_tag}</li>
        <li>High Content Rate: {result[0].page_metrics.checks.high_content_rate}</li>
        <li>Low Character Count: {result[0].page_metrics.checks.low_character_count}</li>
        <li>High Character Count: {result[0].page_metrics.checks.high_character_count}</li>
        <li>Low Readability Rate: {result[0].page_metrics.checks.low_readability_rate}</li>
        <li>Irrelevant Title: {result[0].page_metrics.checks.irrelevant_title}</li>
        <li>Deprecated HTML Tags: {result[0].page_metrics.checks.deprecated_html_tags}</li>
        <li>Duplicate Title Tag: {result[0].page_metrics.checks.duplicate_title_tag}</li>
        <li>No Title: {result[0].page_metrics.checks.no_title}</li>
        <li>Flash: {result[0].page_metrics.checks.flash}</li>
        <li>Canonical To Broken: {result[0].page_metrics.checks.canonical_to_broken}</li>
        <li>Canonical To Redirect: {result[0].page_metrics.checks.canonical_to_redirect}</li>
        <li>Has Links To Redirects: {result[0].page_metrics.checks.has_links_to_redirects}</li>
        <li>Is Orphan Page: {result[0].page_metrics.checks.is_orphan_page}</li>
        <li>Has Meta Refresh Redirect: {result[0].page_metrics.checks.has_meta_refresh_redirect}</li>
        <li>Meta Charset Consistency: {result[0].page_metrics.checks.meta_charset_consistency}</li>
        <li>Size Greater Than 3MB: {result[0].page_metrics.checks.size_greater_than_3mb}</li>
        <li>Has HTML Doctype: {result[0].page_metrics.checks.has_html_doctype}</li>
        <li>HTTPS To HTTP Links: {result[0].page_metrics.checks.https_to_http_links}</li>
        <li>Has Render Blocking Resources: {result[0].page_metrics.checks.has_render_blocking_resources}</li>
        <li>Redirect Chain: {result[0].page_metrics.checks.redirect_chain}</li>
        <li>Canonical Chain: {result[0].page_metrics.checks.canonical_chain}</li>
        <li>Is Link Relation Conflict: {result[0].page_metrics.checks.is_link_relation_conflict}</li>
      </ul>

      
    </div>
  );
};

export default ResultListComponent;
