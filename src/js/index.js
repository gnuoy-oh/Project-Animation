import "../scss/guide-index.scss";

// ****************************
// svg icon
// ****************************

function requireSvgAll(r) {
  r.keys().forEach(r);
}

requireSvgAll(require.context("../images", true, /\.svg$/));

// ****************************
// png img
// ****************************
