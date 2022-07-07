export type addressType = {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
};

export type contactType = {
  name: string;
  email: string;
  address: addressType;
};
