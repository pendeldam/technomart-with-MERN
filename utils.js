function formatImageName(string) {
  return string.toLowerCase().split(' ').join('_');
}

function setCapitalLetter(name) {
  return name.replace(name[0], name[0].toUpperCase());
}

exports.formatImageName = formatImageName;
exports.setCapitalLetter = setCapitalLetter;
