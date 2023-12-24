# Fetch User Data -> Done

URL: localhost:8080/api/user/getuser/:id
give user id instead of :id 
DONE

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
  "publicGroup": (boolean value),
  "anyoneCanJoin": (boolean value),
}
DONE

# Send OTP

URL: localhost:8080/api/auth/verify-otp (POST Request)
Pass 'activationToken' that will be get from signup and 'activationCode' that will be get in mail in body
DONE

# Invite member to the group

URL: localhost:8080/api/group/invite-members (POST Request)
Pass 'auth-token' in header (Take it from localstorage)

Pass data from body
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

Pass data from body
{
  "groupId": "<pass group id>"
}


# Remove member

URL: localhost:8080/api/group/remove-member (DELETE Request)
Pass 'auth-token' in header (Take it from localstorage)

Pass data from body
{
  "userId": "<pass userId of the user who is being removed>",
  "groupId": "<pass group id>"
}


# Delete Group

URL: localhost:8080/api/group/delete-group (DELETE Request)
Pass 'auth-token' in header (Take it from localstorage)

Pass data from body
{
  "groupId":"<pass group id>"
}


# Fetch all groups

URL: localhost:8080/api/group/get-all-groups (GET Request)
Pass 'auth-token' in header (Take it from localstorage)


# Fetch joined groups

URL: localhost:8080/api/user/get-joined-groups/<pass user id here> (GET Request)
Pass 'auth-token' in header (Take it from localstorage)


# Get Group Info

URL: localhost:8080/api/group/get-group-details/:id (GET Request)
Pass 'auth-token' in header (Take it from localstorage) and pass group id in params


# Delete User

URL: localhost:8080/api/auth/deactivate-user (DELETE Request)
Pass 'auth-token' in header (Take it from localstorage)

Pass data from body
{
  "userId":"<pass user id>"
}


# Edit group info (In testing...don't fetch it)

URL: localhost:8080/api/group/edit-group-info (PUT Request)
Pass 'auth-token' in header (Take it from localstorage)

Pass data from body
{
  "groupId": "<pass group id>",
  "data": {
    "projName": "Softwre development",
    "publicGroup": true,
    "gDesc": "A group for developing softwares"
  }
}