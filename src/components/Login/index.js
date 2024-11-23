function Login() {
  const isLogin = true;

  return (
    <>
      {isLogin === true ? (
        <div>
          Logout
        </div>
      ) : (
        <div>
          Login
        </div>
      )}

      {isLogin && <div>/Avatar/</div>}
    </>
  )
}

export default Login;