// const GOOGLE_URL='https://accounts.google.com/o/oauth2/v2/auth?access_type=offline&prompt=consent&scope=https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.email%20https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.profile&response_type=code&client_id=833458253347-t41nik9rq23lprjb74lskuk9977gcuda.apps.googleusercontent.com&redirect_uri=http%3A%2F%2Flocalhost%3A5050%2Fgoogle'
const GOOGLE_URL = 'http://localhost:5050/google';

const GITHUB_URL = 'http://localhost:5050/github';

const BASE_URL = process.env.NODE_ENV === 'production' ? 'https://auth.ikodi.eu' : 'http://localhost:5050';
export {GOOGLE_URL, GITHUB_URL, BASE_URL};
