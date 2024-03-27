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
DONE

# Join Group

URL: localhost:8080/api/group/join-group (PUT Request)
Pass 'auth-token' in header (Take it from localstorage)

Pass data from body
{
  "groupId": "<pass group id>"
}
DONE

# Remove member

URL: localhost:8080/api/group/remove-member (DELETE Request)
Pass 'auth-token' in header (Take it from localstorage)

Pass data from body
{
  "userId": "<pass userId of the user who is being removed>",
  "groupId": "<pass group id>"
}
DONE


# Delete Group

URL: localhost:8080/api/group/delete-group (DELETE Request)
Pass 'auth-token' in header (Take it from localstorage)

Pass data from body
{
  "groupId":"<pass group id>"
}
DONE

# Fetch all groups

URL: localhost:8080/api/group/get-all-groups (GET Request)
Pass 'auth-token' in header (Take it from localstorage)
DONE

# Fetch joined groups

URL: localhost:8080/api/user/get-joined-groups/<pass user id here> (GET Request)
Pass 'auth-token' in header (Take it from localstorage)
DONE

# Get Group Info

URL: localhost:8080/api/group/get-group-details/:id (GET Request)
Pass 'auth-token' in header (Take it from localstorage) and pass group id in params
DONE

# Delete User

URL: localhost:8080/api/auth/deactivate-user (DELETE Request)
Pass 'auth-token' in header (Take it from localstorage)

Pass data from body
{
  "userId":"<pass user id>"
}
Done

# Edit group info 

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

# Send Join request mail

URL: localhost:8080/api/group/join-request (POST Request)
Pass 'auth-token' in header (Take it from localstorage)

{
  "groupId":"<pass group id>",
  "invitationLink":"<send accept/reject the request link>"
}

# Accept join request mail

URL: localhost:8080/api/group/add-member (PUT Request)
Pass 'auth-token' in header (Take it from localstorage)

{
  "userId": "<pass the userId who will join>",
  "groupId": "<pass group id>"
}

# Create Tweet

URL: localhost:8080/api/tweet/create-post (POST Request)
pass auth token

{
  "groupId":"<group id>",
  "content":"<text>"
}
Done

# Delete Tweet

URL: localhost:8080/api/tweet/delete-post (DELETE Request)
pass auth token

{
  "groupId":"<group id>",
  "tweetId":"<tweet id>"
}
Done

# Fetch posts

URL: localhost:8080/api/tweet/get-posts/:id(pass id here) (GET Request)
pass auth token
Done





const WorkExperienceSchema = new Schema({
    companyName: {
        type: String,
        required: true,
    },
    duration: {
        type: String,
        required: true,
    },
    startDate: {
        type: Schema.Types.Mixed,
    },
    endDate: {
        type: Schema.Types.Mixed,
    },
}, { timestamps: true });

const EducationSchema = new Schema({
    institutionName: {
        type: String,
        required: true,
    },
    duration: {
        type: String,
        required: true,
    },
    startDate: {
        type: Schema.Types.Mixed,
    },
    endDate: {
        type: Schema.Types.Mixed,
    },
}, { timestamps: true });


# Send message <POST>
/conversation/create-conversation
pass auth-token
body:
{
  chatId, message, senderId
}
Done

# Delete Message <DELETE>
/conversation/delete-message/:id<message_id>
pass auth-token

# Fetch all chats of one conversation <GET>
/conversation/get-all-messages/:id<conversation_id>
pass auth-token
Done

# fetch all conversations belongs to a user <GET>
/conversation/get-all-conversations
pass auth-token
Done
