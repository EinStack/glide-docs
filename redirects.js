const { config } = require("./config");

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
