export const ANALYTIC_EVENT = 'ANALYTIC_EVENT'

export const analyticEvent = ({ url, eventName, eventCategory, eventAction, eventLabel }) => (
  {
    type: ANALYTIC_EVENT,
    payload: {
      url,
      eventName,
      eventCategory,
      eventAction,
      eventLabel
    }
  }
)
