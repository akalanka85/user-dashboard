export interface User {
  id: number;
  name: string;
  email: string;
  phone: string;
  website: string;
  address: {
    suite: string;
    zipcode: string;
    street: string;
    city: string;
  };
}
