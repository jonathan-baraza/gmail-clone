type AuthFields = {
  name?: string;
  email?: string;
  password?: string;
  password2?: string;
};

type AuthError = {
  name: string[];
  email: string[];
  password: string[];
  password2: string[];
};
