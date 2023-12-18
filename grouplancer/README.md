# Fetch User Data

URL: localhost:8080/api/auth/getuser/:id
give user id instead of :id

# Create Group

URL: localhost:8080/api/group/create-group
Pass data from body

{
  "leader": ""(send id here),
  "gName": ""(group name),
  "gDesc": ""(group description),
  "projName": ""(project name),
  "goal": ""(goal),
  "domains": [
    "Web dev",
    "App dev"
  ](pass domains in array form),
  "groupType": ""(group type),
  "whoCanJoin": ""(who can join),
  "groupMembers": 2(group member number)
}

# Send OTP

URL: localhost:8080/api/auth/verify-otp (POST Request)
Pass 'activationToken' that will be get from signup and 'activationCode' that will be get in mail in body