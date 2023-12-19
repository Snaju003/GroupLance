# Fetch User Data -> Done

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

# Invite member to the group

URL: localhost:8080/api/group/invite-members (POST Request)
Pass 'auth-token' in header (Take it from localstorage)


{
  "invitedUserMail": "<give mail id of the invited user>",
  "invitationLink": "<give invitation link>",
  "group": {
    "id": "<send group id>",
    "name": "<enter group name>",
    "desc": "<enter group description>"
  },
  "inviterName": "<enter group leader name>"
}


# Join Group

URL: localhost:8080/api/group/join-group (PUT Request)
Pass 'auth-token' in header (Take it from localstorage)

{
  "userId": "<pass userId of the user who is joining>",
  "groupId": "<pass group id>"
}


# Remove member

URL: localhost:8080/api/group/remove-member (DELETE Request)
Pass 'auth-token' in header (Take it from localstorage)

{
  "userId": "<pass userId of the user who is being removed>",
  "groupId": "<pass group id>"
}
