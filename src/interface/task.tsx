export interface ITask {
  crawl_progress: string;
  id: string;
  result: ITaskResult[];
}

export interface ITaskResult {
  page_metrics: IPageMetrics[];
}

export interface IPageMetrics {
  links_external: number;
  links_internal: number;
  duplicate_title: number;
  duplicate_description: number;
  duplicate_content: number;
  broken_links: number;
  broken_resources: number;
  links_relation_conflict: number;
  redirect_loop: number;
  onpage_score: number;
  non_indexable: number;
  checks: ICheck[];
}

export interface ICheck {
  canonical: number;
  duplicate_meta_tags: number;
  no_description: number;
  frame: number;
  large_page_size: number;
  irrelevant_description: number;
  irrelevant_meta_keywords: number;
  is_https: number;
  is_http: number;
  title_too_long: number;
  low_content_rate: number;
  small_page_size: number;
  no_hnumber_tag: number;
  recursive_canonical: number;
  no_favicon: number;
  no_image_alt: number;
  no_image_title: number;
  seo_friendly_url: number;
  seo_friendly_url_characters_check: number;
  seo_friendly_url_dynamic_check: number;
  seo_friendly_url_keywords_check: number;
  seo_friendly_url_relative_length_check: number;
  title_too_short: number;
  no_content_encoding: number;
  high_waiting_time: number;
  high_loading_time: number;
  is_redirect: number;
  is_broken: number;
  is_4xx_code: number;
  is_5xx_code: number;
  is_www: number;
  no_doctype: number;
  no_encoding_meta_tag: number;
  high_content_rate: number;
  low_character_count: number;
  high_character_count: number;
  low_readability_rate: number;
  irrelevant_title: number;
  deprecated_html_tags: number;
  duplicate_title_tag: number;
  no_title: number;
  flash: number;
  lorem_ipsum: number;
  has_misspelling: null;
  canonical_to_broken: number;
  canonical_to_redirect: number;
  has_links_to_redirects: number;
  is_orphan_page: number;
  has_meta_refresh_redirect: number;
  meta_charset_consistency: number;
  size_greater_than_3mb: number;
  has_html_doctype: number;
  https_to_http_links: number;
  has_render_blocking_resources: number;
  redirect_chain: number;
  canonical_chain: number;
  is_link_relation_conflict: number;
}
