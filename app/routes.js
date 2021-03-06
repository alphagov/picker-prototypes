var express = require('express')
var locationServiceV1 = require('./services/location-v1')
var locationServiceV2 = require('./services/location-v2')
var locationServiceV3 = require('./services/location-v3')
var demoLocationService = require('./services/demo-location-v1')
var router = express.Router()

// Route index page
router.get('/', function (req, res) {
  res.render('index')
})

// add your routes here
router.get('/country-picker-4', function (req, res) {
  var locale = 'en-GB'

  res.render('country-picker-4', {
    html_lang: 'en',
    graph: locationServiceV1.locationGraph,
    locations: locationServiceV1.canonicalLocationList(locale),
    reverseMap: locationServiceV1.locationReverseMap(locale),
    locale: locale
  })
})

router.get('/country-picker-4.cy', function (req, res) {
  var locale = 'cy'

  res.render('country-picker-4', {
    html_lang: locale,
    graph: locationServiceV1.locationGraph,
    locations: locationServiceV1.canonicalLocationList(locale),
    reverseMap: locationServiceV1.locationReverseMap(locale),
    locale: locale
  })
})

router.get('/location-picker-5', function (req, res) {
  var locale = 'en-GB'

  res.render('location-picker-5', {
    html_lang: 'en',
    graph: locationServiceV2.locationGraph,
    locations: locationServiceV2.canonicalLocationList(locale),
    reverseMap: locationServiceV2.locationReverseMap(locale),
    locale: locale
  })
})

router.get('/location-picker-5.cy', function (req, res) {
  var locale = 'cy'

  res.render('location-picker-5', {
    html_lang: locale,
    graph: locationServiceV2.locationGraph,
    locations: locationServiceV2.canonicalLocationList(locale),
    reverseMap: locationServiceV2.locationReverseMap(locale),
    locale: locale
  })
})

router.get('/location-picker-6', function (req, res) {
  var locale = 'en-GB'

  res.render('location-picker-6', {
    html_lang: 'en',
    graph: locationServiceV2.locationGraph,
    locations: locationServiceV2.canonicalLocationList(locale),
    reverseMap: locationServiceV2.locationReverseMap(locale),
    locale: locale
  })
})

router.get('/location-picker-6.cy', function (req, res) {
  var locale = 'cy'

  res.render('location-picker-6', {
    html_lang: locale,
    graph: locationServiceV2.locationGraph,
    locations: locationServiceV2.canonicalLocationList(locale),
    reverseMap: locationServiceV2.locationReverseMap(locale),
    locale: locale
  })
})

router.get('/location-picker-7', function (req, res) {
  var locale = 'en-GB'

  res.render('location-picker-7', {
    html_lang: 'en',
    graph: locationServiceV3.locationGraph,
    locations: locationServiceV3.canonicalLocationList(locale),
    reverseMap: locationServiceV3.locationReverseMap(locale),
    locale: locale
  })
})

router.get('/location-picker-7.cy', function (req, res) {
  var locale = 'cy'

  res.render('location-picker-7', {
    html_lang: locale,
    graph: locationServiceV3.locationGraph,
    locations: locationServiceV3.canonicalLocationList(locale),
    reverseMap: locationServiceV3.locationReverseMap(locale),
    locale: locale
  })
})

router.get('/location-picker-8', function (req, res) {
  var locale = 'en-GB'

  res.render('location-picker-8', {
    html_lang: 'en',
    graph: locationServiceV3.locationGraph,
    locations: locationServiceV3.canonicalLocationList(locale),
    reverseMap: locationServiceV3.locationReverseMap(locale),
    locale: locale
  })
})

router.get('/demo-picker', function (req, res) {
  var locale = 'en-GB'

  res.render('demo-picker', {
    html_lang: 'en',
    graph: demoLocationService.locationGraph,
    locations: demoLocationService.canonicalLocationList(locale),
    reverseMap: demoLocationService.locationReverseMap(locale),
    locale: locale
  })
})

router.get('/demo-picker.cy', function (req, res) {
  var locale = 'cy'

  res.render('demo-picker', {
    html_lang: locale,
    graph: demoLocationService.locationGraph,
    locations: demoLocationService.canonicalLocationList(locale),
    reverseMap: demoLocationService.locationReverseMap(locale),
    locale: locale
  })
})

router.all('/passport/passport-details', function (req, res) {
  var locale = 'en-GB'

  res.render('passport/passport-details', {
    html_lang: 'en',
    graph: demoLocationService.locationGraph,
    locations: demoLocationService.canonicalLocationList(locale),
    reverseMap: demoLocationService.locationReverseMap(locale),
    locale: locale
  })
})

router.get('/passport/application-complete', function (req, res) {
  res.render('passport/application-complete', {
  })
})

router.post('/passport/application-complete', function (req, res) {
  res.redirect('/passport/application-complete')
})

router.get('/country-of-birth/country-of-birth', function (req, res) {
  var locale = 'en-GB'
  res.render('country-of-birth/country-of-birth', {
    html_lang: 'en',
    graph: locationServiceV3.locationGraph,
    locations: locationServiceV3.canonicalLocationList(locale),
    reverseMap: locationServiceV3.locationReverseMap(locale),
    locale: locale
  })
})

router.post('/country-of-birth/country-of-birth', function (req, res) {
  res.redirect('/country-of-birth/country-visited')
})

router.get('/country-of-birth/country-visited', function (req, res) {
  var locale = 'en-GB'

  res.render('country-of-birth/country-visited', {
    html_lang: 'en',
    graph: locationServiceV3.locationGraph,
    locations: locationServiceV3.canonicalLocationList(locale),
    reverseMap: locationServiceV3.locationReverseMap(locale),
    locale: locale
  })
})

router.post('/country-of-birth/country-visited', function (req, res) {
  res.redirect('/country-of-birth/country-visit-next')
})

router.get('/country-of-birth/country-visit-next', function (req, res) {
  var locale = 'en-GB'

  res.render('country-of-birth/country-visit-next', {
    html_lang: 'en',
    graph: locationServiceV3.locationGraph,
    locations: locationServiceV3.canonicalLocationList(locale),
    reverseMap: locationServiceV3.locationReverseMap(locale),
    locale: locale
  })
})

router.post('/country-of-birth/country-visit-next', function (req, res) {
  res.redirect('/country-of-birth/country-visit-other')
})

router.get('/country-of-birth/country-visit-other', function (req, res) {
  var locale = 'en-GB'

  res.render('country-of-birth/country-visit-other', {
    html_lang: 'en',
    graph: locationServiceV3.locationGraph,
    locations: locationServiceV3.canonicalLocationList(locale),
    reverseMap: locationServiceV3.locationReverseMap(locale),
    locale: locale
  })
})

router.post('/country-of-birth/country-visit-other', function (req, res) {
  res.redirect('/country-of-birth/application-complete')
})

router.get('/country-of-birth/application-complete', function (req, res) {
  res.render('country-of-birth/application-complete', {
  })
})

router.get('/charity/country-location', function (req, res) {
  var locale = 'en-GB'

  res.render('charity/country-location', {
    html_lang: 'en',
    graph: locationServiceV3.locationGraph,
    locations: locationServiceV3.canonicalLocationList(locale),
    reverseMap: locationServiceV3.locationReverseMap(locale),
    locale: locale
  })
})

module.exports = router
