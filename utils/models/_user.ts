export default interface User {
  user: {
    id: string;
    name: string;
    email: string;
  }
  token: string;
  refreshToken: string;
};