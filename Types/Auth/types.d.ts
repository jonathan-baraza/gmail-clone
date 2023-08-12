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

type AuthSignUpError = {
  name: string[];
  email: string[];
  password: string[];
  password2: string[];
  errorMessage?: string;
};

type AuthSignInError = {
  email: string[];
  password: string[];
  errorMessage?: string;
};


type AuthUser={
  name:string;
  email:string;
  username?:string;
  photo?:string;
}

type SetAuthUser = {
  user: AuthUser|null;
  isAuthenticated: boolean;
};

type ProfileUpdateFields={
  photo:string,
  username:string
}