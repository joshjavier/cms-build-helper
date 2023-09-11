# IDEA: Build Helper Tool

## Why?

- Some text needs to be copy-pasted multiple times. Would be nice (and also less prone to mistakes) if this can be done with one click (vs. selecting text and pressing Ctrl-c).
- Links like Casino landing page, SmartLinks, and Rest ID checker are based on the label and state indicated in the ticket name. Which means we can generate them instead of typing them manually.

  For example:

  Casino landing page:
  `https://casino.{{state.}}{{label}}.com/en/games`
  Path: `/en/games`

  SmartLinks:
  `https://casino.{{state.}}{{label}}.com/en/p/tools/smartlinks`
  Path: `/en/p/tools/smartlinks`

  Rest ID checker:
  `https://promo.{{state.}}{{label}}.com/en/promo/p/tools/qa`
  Path: `/en/promo/p/tools/qa`

  Promo offers:
  `https://promo.{{state.}}{{label}}.com/en/promo/offers`
  Path: `/en/promo/offers`

- Rest ID is the item ID in the Sitecore direct link. Not exactly sure how to make this useful in application.

  For example:

  - Rest ID: /id/23eaf77b-11a5-4ec0-ae08-b6582ea8d0b4
  - Sitecore DL: http://cms.prod.env.works/sitecore/DirectLink.aspx?fo={23EAF77B-11A5-4EC0-AE08-B6582EA8D0B4}&la=

  `http://cms.prod.env.works/sitecore/DirectLink.aspx?fo={{{ID}}}&la=`
