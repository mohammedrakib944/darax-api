export interface IUser {
  _id?: string;
  name: string;
  email: string;
  password?: string;
  address?: string;
  phone?: string;
  image?: string;
  postal_code?: string;
  role?: string;
  is_banned?: boolean;
  created_at?: string;
}
