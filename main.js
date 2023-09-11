// import { directLinkGenerator } from "./dlgen.js"

const ticketInput = document.getElementById('ticket')
const linksEl = document.getElementById('links')
const carouselEl = document.getElementById('carousel')
const smartlinksEl = document.getElementById('smartlinks')
const restqaEl = document.getElementById('restqa')
const offersEl = document.getElementById('offers')

const directlinkInput = document.querySelector('input.directlink')
const directlink = document.querySelector('a.directlink')
const directlinkError = document.querySelector('p.directlink')

class CasinoLinks {
  rootDomains = {
    "MC": "betmgm",
    "BC": "borgataonline",
    "PC": "partycasino"
  }

  paths = {
    "carousel": "/games",
    "smartlinks": "/p/tools/smartlinks",
    "restqa": "/promo/p/tools/qa",
    "offers": "/promo/offers"
  }

  constructor(label, state) {
    this.label = this.rootDomains[label]
    this.tld = state === "ON" ? ".ca" : ".com"
    this.state = (label === "PC" || label === "BC" && state === "NJ") ? "" : `${state.toLowerCase()}.`
    // this.path = paths[dest]
  }

  get carouselUrl() {
    return `https://casino.${this.state}${this.label}${this.tld}/en${this.paths.carousel}`
  }

  get smartlinksUrl() {
    return `https://casino.${this.state}${this.label}${this.tld}/en${this.paths.smartlinks}`
  }

  get restqaUrl() {
    return `https://promo.${this.state}${this.label}${this.tld}/en${this.paths.restqa}`
  }

  get offersUrl() {
    return `https://promo.${this.state}${this.label}${this.tld}/en${this.paths.offers}`
  }
}

const directLinkGenerator = (string) => {
  const match = string.match(/[A-Za-z0-9]{8}-[A-Za-z0-9]{4}-[A-Za-z0-9]{4}-[A-Za-z0-9]{4}-[A-Za-z0-9]{12}/)

  return match ? `http://cms.prod.env.works/sitecore/DirectLink.aspx?fo={${match[0].toUpperCase()}}&la=` : null
}

// Event handlers
function updateLinks(e) {
  // get the state and label from ticket
  let [label, state] = e.target.value.match(/\b\w\w\b/g)

  let links = new CasinoLinks(label.toUpperCase(), state.toUpperCase())

   // update the links
  carouselEl.href = links.carouselUrl
  smartlinksEl.href = links.smartlinksUrl
  restqaEl.href = links.restqaUrl
  offersEl.href = links.offersUrl

  // show the links
  linksEl.removeAttribute('hidden')
}

function updateDirectLink(e) {
  const string = e.target.value.trim()
  const directLink = directLinkGenerator(string)

  if (directLink) {
    directlink.href = directLinkGenerator(string)
    directlink.removeAttribute('hidden')
    directlinkError.textContent = ""
  } else {
    directlinkError.textContent = "No Sitecore ID found."
    directlink.setAttribute('hidden', "")
  }
}

ticketInput.addEventListener('blur', updateLinks)
directlinkInput.addEventListener('blur', updateDirectLink)
