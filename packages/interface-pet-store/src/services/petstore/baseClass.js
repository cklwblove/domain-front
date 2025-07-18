class ApiResponse {
  /** code */
  code = 0;

  /** message */
  message = '';

  /** type */
  type = '';
}

class Category {
  /** id */
  id = 0;

  /** name */
  name = '';
}

class Order {
  /** complete */
  complete = false;

  /** id */
  id = 0;

  /** petId */
  petId = 0;

  /** quantity */
  quantity = 0;

  /** shipDate */
  shipDate = '';

  /** Order Status */
  status = 'placed';
}

class Pet {
  /** category */
  category = new Category();

  /** id */
  id = 0;

  /** name */
  name = '';

  /** photoUrls */
  photoUrls = [];

  /** pet status in the store */
  status = 'available';

  /** tags */
  tags = [];
}

class Tag {
  /** id */
  id = 0;

  /** name */
  name = '';
}

class User {
  /** email */
  email = '';

  /** firstName */
  firstName = '';

  /** id */
  id = 0;

  /** lastName */
  lastName = '';

  /** password */
  password = '';

  /** phone */
  phone = '';

  /** User Status */
  userStatus = 0;

  /** username */
  username = '';
}

export const petstore = {
  ApiResponse,
  Category,
  Order,
  Pet,
  Tag,
  User
};
