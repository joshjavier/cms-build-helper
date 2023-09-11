const directLinkGenerator = (string) => {
  const match = string.match(/[A-Za-z0-9]{8}-[A-Za-z0-9]{4}-[A-Za-z0-9]{4}-[A-Za-z0-9]{4}-[A-Za-z0-9]{12}/)

  return match ? `http://cms.prod.env.works/sitecore/DirectLink.aspx?fo={${itemID.toUpperCase()}}&la=` : null
}

export { directLinkGenerator }
