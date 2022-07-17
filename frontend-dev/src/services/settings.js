const GOOGLE_URL = process.env.NODE_ENV === 'production' ?
  'https://auth.ikodi.eu/google'
:
  'http://localhost:5050/google';

const GITHUB_URL = process.env.NODE_ENV === 'production' ?
'https://auth.ikodi.eu/github'
:
'http://localhost:5050/github';

const BASE_URL = process.env.NODE_ENV === 'production' ?
  'https://auth.ikodi.eu'
:
  'http://localhost:5050';

export {GOOGLE_URL, GITHUB_URL, BASE_URL};
