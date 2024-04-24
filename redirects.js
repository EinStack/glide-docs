const { config } = require("./config");

// Don't forget to apply any changes to public/_redirects file too
// NextJS redirects don't work in Netlify for some reason

exports.tempRedirects = [
    ["/discord", config.company.discord],
    // Glide
    ["/glide/github", config.glide.github],
    ["/glide/producthunt", config.glide.productHunt],
    ["/glide/artifacthub", config.glide.artifactHub],
    ["/glide/dockerhub", config.glide.dockerhub],
    ["/glide/releases", config.glide.releases],
    ["/glide/roadmap", config.glide.roadmap],
    ["/glide/geps", config.glide.geps],
    ["/glide/conduct", config.glide.geps],
    ["/glide/contributing", config.glide.contributing],
    ["/glide/examples", config.glide.examples],
    ["/glide/new-issue", config.glide.newIssue],
    ["/glide/new-vuln", config.glide.newVuln],
]
