type AuthSignUpFields = {
  name?: string;
  email?: string;
  password?: string;
  password2?: string;
};

type AuthSignInFields = {
  email?: string;
  password?: string;
};

type AuthError = {
  name: string[];
  email: string[];
  password: string[];
  password2: string[];
};
