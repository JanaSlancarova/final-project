export default async function(eleventyConfig) {
  // Výchozí výstupní složka je: _site
  // Zkopírovat složku images/ do _site/images
  eleventyConfig.addPassthroughCopy("images");
  // Zkopírovat složku css/ to _site/css/
  eleventyConfig.addPassthroughCopy("css");
  eleventyConfig.addPassthroughCopy("js");
  eleventyConfig.addFilter("randomLimit", (arr, limit, currPage) => {
  // Filters out current page
  const pageArr = arr.filter((page) => page.url !== currPage);

  // Randomizes remaining items
  pageArr.sort(() => {
    return 0.5 - Math.random();
  });

  // Returns array items up to limit
  return pageArr.slice(0, limit);
});
}






export const config = {
  // jako šablonu nebo soubor s obsahem
  // můžeme použít následující formáty
  templateFormats: ["njk", "html", "md"],

  // jako šablonovací jazyk zvolíme pro všechny
  // formáty výše jazyk Nunjucks
  markdownTemplateEngine: "njk",
  htmlTemplateEngine: "njk",
  dataTemplateEngine: "njk",
};