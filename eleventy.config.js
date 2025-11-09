export default function (eleventyConfig) {
	eleventyConfig.addBundle("css", {
		bundleHtmlContentFromSelector: "style",
	});
}
