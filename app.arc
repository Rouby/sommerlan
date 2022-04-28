@app
sommerlan-app

@aws
profile sommerlan-app
region eu-central-1

@plugins
copper/plugin-cognito

@http
/*
  method any
  src server

@static

@cognito
StandardAttributes email locale name picture preferred_username
RecoveryOptions verified_email

# @tables
# users
#   id *String
#   name **String
