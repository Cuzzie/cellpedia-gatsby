module.exports.isEng = lang => lang === "ENG"

module.exports.convertSlugToPath = (slug, lang) => {
  let path = slug.replace("-en", "")
  if (this.isEng(lang)) {
    path = `/en${path}`
  }
  return path
}