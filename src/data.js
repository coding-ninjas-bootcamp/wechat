import faker from 'faker';

const totalUsers = 10;

/**
 * id `user-0` is YOU!
 */
export const users = Array.from({ length: totalUsers }, (_, i) => ({
  id: `user-${i}`,
  firstName: faker.name.firstName(),
  lastName: faker.name.lastName(),
  phone: faker.phone.phoneNumber(),
  avatar: faker.image.avatar(),
}));

export const messages = Array.from({ length: totalUsers * 10 }, (_, i) => ({
  id: `message-${i}`,
  body: faker.lorem.sentences(),
  createdAt: faker.date.recent(),
  createdBy:
    Math.random() > 0.5 ? `user-${Math.floor(i / totalUsers)}` : `user-0`,
}));

/**
 * Note: channel with id `channel-0` and members `user-0` (YOU) and `user-0` (YOU) is the WeChat file transfer channel,
 * which allows you talking to yourself
 */
export const channels = Array.from({ length: totalUsers }, (_, i) => ({
  id: `channel-${i}`,
  name: i ? faker.lorem.words() : 'File Transfer',
  members: ['user-0', `user-${i}`],
  messages: Array.from(
    { length: totalUsers },
    (_, j) => `message-${i * totalUsers + j}`,
  ),
}));
