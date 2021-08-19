const vibes = [
  "... and you are awesome",
  "... and you've got this",
  "... have a super day",
  "... do something amazing"
]

var vibe = vibes[Math.floor(Math.random() * Math.floor(vibes.length))];
document.querySelector(".vibe").append(vibe)
