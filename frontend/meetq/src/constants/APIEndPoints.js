// local django server links

export const REGISTER_URL ="127.0.0.1:8000/accounts/register/";
export const LOGIN_URL ="127.0.0.1:8000/accounts/login/";
export const LOGOUT_URL ="127.0.0.1:8000/accounts/logout/";
export const REFRESH_URL ="127.0.0.1:8000/accounts/api/token/refresh/";
export const OBTAIN_TOKEN_URL ="127.0.0.1:8000/accounts/api/token/";
export const PROFILE_URL ="127.0.0.1:8000/accounts/profile/view/";
export const PROFILE_EDIT_URL ="127.0.0.1:8000/accounts/profile/edit/";
export const CONTACTS_VIEW_URL ="127.0.0.1:8000/accounts/api/contacts/";
export const ALL_CALENDARS_URL ="127.0.0.1:8000/calendars/calendars";
export const CALENDAR_DETAILS_URL ="127.0.0.1:8000/calendars/calendar/<calendar_id>/";  // Replace <calendar_id> with actual ID when used
export const CREATE_CALENDAR_URL ="127.0.0.1:8000/calendars/calendar/create/";
export const EDIT_CALENDAR_URL ="127.0.0.1:8000/calendars/calendar/edit/<calendar_id>/";  // Replace <calendar_id> with actual ID when used
export const INVITE_URL ="127.0.0.1:8000/calendars/calendar/<calendar_id>/invite/<invitee_id>/";  // Replace <calendar_id> and <invitee_id> with actual IDs when used
export const INVITE_RESPONSE_URL ="127.0.0.1:8000/calendars/calendar/<calendar_id>/invite/<invitee_id>/response";  // Replace <invitee_id> with actual ID when used
export const SEND_INVITE_URL ="127.0.0.1:8000/send_invite/";
export const CREATE_TIMESLOT_URL ="127.0.0.1:8000/timeslot/create/";


// MEETQ Deployed Server links
// export const REGISTER_URL = "meetq.onrender.com/accounts/register/";
// export const LOGIN_URL = "meetq.onrender.com/accounts/login/";
// export const LOGOUT_URL = "meetq.onrender.com/accounts/logout/";
// export const REFRESH_URL = "meetq.onrender.com/accounts/api/token/refresh/";
// export const OBTAIN_TOKEN_URL = "meetq.onrender.com/accounts/api/token/";
// export const PROFILE_URL = "meetq.onrender.com/accounts/profile/view/";
// export const PROFILE_EDIT_URL = "meetq.onrender.com/accounts/profile/edit/";
// export const CONTACTS_VIEW_URL = "meetq.onrender.com/accounts/api/contacts/";
// export const ALL_CALENDARS_URL = "meetq.onrender.com/calendars/calendars";
// export const CALENDAR_DETAILS_URL = "meetq.onrender.com/calendars/calendar/<calendar_id>/";  // Replace <calendar_id> with actual ID when used
// export const CREATE_CALENDAR_URL = "meetq.onrender.com/calendars/calendar/create/";
// export const EDIT_CALENDAR_URL = "meetq.onrender.com/calendars/calendar/edit/<calendar_id>/";  // Replace <calendar_id> with actual ID when used
// export const INVITE_URL = "meetq.onrender.com/calendars/calendar/<calendar_id>/invite/<invitee_id>/";  // Replace <calendar_id> and <invitee_id> with actual IDs when used
// export const INVITE_RESPONSE_URL = "meetq.onrender.com/calendars/calendar/<calendar_id>/invite/<invitee_id>/response";  // Replace <invitee_id> with actual ID when used
// export const SEND_INVITE_URL = "meetq.onrender.com/send_invite/";
// export const CREATE_TIMESLOT_URL = "meetq.onrender.com/timeslot/create/";