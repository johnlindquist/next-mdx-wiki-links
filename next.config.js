const withMdxEnhanced = require("next-mdx-enhanced")
const remarkWikiLink = require("remark-wiki-link")

module.exports = withMdxEnhanced({
  layoutPath: "layouts",
  defaultLayout: true,
  fileExtensions: ["mdx"],
  remarkPlugins: [
    [
      remarkWikiLink,
      {
        pageResolver: name => [
          name.replace(/ /g, "-").toLowerCase(),
        ],
        hrefTemplate: permalink => `/${permalink}`,
      },
    ],
  ],
  rehypePlugins: [],
  extendFrontMatter: {
    process: (mdxContent, frontMatter) => {},
    phase: "prebuild|loader|both",
  },
})({
  pageExtensions: ["js", "jsx", "tsx", "ts", "mdx", "md"],
})
