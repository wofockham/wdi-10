# require 'rubygems' # Modern Ruby doesn't require this require anymore.
require 'nokogiri'
require 'open-uri'

BASE_CRAIGS_URL = "http://sydney.craigslist.com.au"
CNT = "#{ BASE_CRAIGS_URL }/search/act"

doc_cta = Nokogiri::HTML(open(CNT))

rows = doc_cta.css('div.content .row .txt .pl a')

hrefs = []
pages = []

rows.each do |r|
  h = r.attr('href')
  hrefs << h if h =~ /^\/act/
end

hrefs.each do |href|
  pages << Nokogiri::HTML(open(BASE_CRAIGS_URL + href))
end

pages.each do |page|
  puts page.css('section#postingbody').text
end