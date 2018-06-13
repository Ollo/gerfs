import { ANALYTIC_EVENT } from 'state/analytics/actions'

// Middleware that looks for an ANALYTIC_EVENT action
// to publish event data to 3rd parties (ex GTM)

export const analyticsMiddleware = () => next => (action) => {
  if (action.type === ANALYTIC_EVENT) {
    // Event
    // const { url, eventName, eventCategory, eventAction, eventLabel } = action.payload
    //
    // POST to a dataLayer or similar
    //
    return next(action)
  }
  return next(action)
}
