const req = require('sync-request')
const optly = require('@optimizely/optimizely-sdk')

const myURL = 'https://cdn.optimizely.com/datafiles/5mmjndwYhc52GX24jLSvD.json'

const request = req('GET', myURL)
console.log('\x1b[45m%s\x1b[0m', 'request >>> ', request)

const datafile = JSON.parse(request.body.toString())
console.log('\x1b[45m%s\x1b[0m', 'datafile >>> ', datafile)

const optimizelyClientInstance = optly.createInstance({ datafile })
console.log('\x1b[45m%s\x1b[0m', 'optimizelyClientInstance >>> ', optimizelyClientInstance)

const userId = 'Piglet'
const variation = optimizelyClientInstance.activate('fornodejsdemo', userId, { location: 'Amsterdam' })
if (variation === 'variation_1') {
  console.log(`userId: ${userId} from Amsterdam -> in variation_1`)
  const track = optimizelyClientInstance.track('eventToTrack', userId, { location: 'Amsterdam' })
  console.log(track)
  // const user = optimizelyClientInstance.createUserContext(userId, { location: 'Amsterdam' })
  // user.trackEvent('eventToTrack')
} else {
  console.log('NOT in variation_1')
}
