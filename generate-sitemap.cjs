const Sitemap = require("react-router-sitemap").default;

(async () => {
    const { default: Routerx } = await import("./src/Router.js"); // Adjust the path if necessary

    function generateSitemap() {
        return new Sitemap(Routerx)
            .build("http://localhost:5173") // Use your localhost URL or your live site URL if deploying
            .save("./public/sitemap.xml"); // Save the sitemap in the public directory
    }

    generateSitemap();
})();
