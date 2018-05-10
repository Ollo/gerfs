
// Route Page Components
import PageHome from 'components/PageHome'
import PageUser from 'components/PageUser'
import PageLogin from 'components/PageLogin'
import PageAdd from 'components/PageAdd'

export default [
  {
    'path': '/',
    'load': () => Promise.resolve(PageHome)
  },
  {
    'path': '/user',
    'load': () => Promise.resolve(PageUser)
  },
  {
    'path': '/add',
    'load': () => Promise.resolve(PageAdd)
  },
  {
    'path': '/login',
    'load': () => Promise.resolve(PageLogin)
  }
]
