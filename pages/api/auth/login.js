import fetchJson from '../../../lib/auth/fetchJson'
import withSession from '../../../lib/auth/session'

export default withSession(async (req, res) => {
   const { username, password } = await req.body;
  //const body = await req.body;

  const url = `https://staging.mainteny.com/api/sessions/login?password=${password}&username=${username}`
  console.log({ username, password })
  try {
    // we check that the user exists on GitHub and store some data in session
    const response  = await fetchJson(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      // body: JSON.stringify({ username, password }),
    })
    const user = { isLoggedIn: true, ...response }
    req.session.set('user', user)
    await req.session.save()
    res.json(user)
  } catch (error) {
    console.error(error)
    const { response: fetchResponse } = error
    res.status(fetchResponse?.status || 500).json(error.data)
  }
})