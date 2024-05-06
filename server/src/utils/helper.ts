export enum HttpStatusCode {
  OK = 200,
  CREATED = 201,
  BAD_REQUEST = 400,
  NOT_FOUND = 404,
  INTERNAL_SERVER = 500,
  UNAUTHORIZED = 401,
  FORBIDDEN = 403,
}


export const SuccessMessage = {
  USER_REGISTER_SUCCESS: 'Your Account has been Created',
  USER_LOGIN_SUCCESS: "Your have Logged In",
  USER_LOGOUT_SUCCESS : 'You have been Successfully logged out'
}

export const ErrorMessage = { 
  DEFAULT_ERROR_MESSAGE : "Something went wrong",
  ROUTE_NOT_FOUND : "Route not found",
  USER_ALREADY_EXIST: "Email already exists",
  USER_NOT_FOUND: "Invalid Email or Password",
  INVALID_PASSWORD: "Invalid Email or Password",
  INVALID_EMAIL: "Invalid email",
  NOT_AUTHORIZED: "You are not authorized to access this route",
  INVALID_CREDENTIALS: "Invalid credentials",
  RATE_LIMIT_ERROR: 'You have already tried registering twice. Please wait for a while'

}