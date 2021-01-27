import withSession from '../../../lib/auth/session'

export default withSession(async (req, res) => {
  const user = req.session.get('user')

  if (user) {
    // read the user id from the session and then do an API request
    // to get more information on the user if needed
    res.json({
      isLoggedIn: true,
      ...user,
    })
  } else {
    res.json({
      isLoggedIn: false,
    })
  }
})