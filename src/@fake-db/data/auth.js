import mock from '../mock';

const data = {
  users: [
    {
      id: 1,
      fullName: 'Thor Son Of Odin',
      username: 'thor@avengers.org',
      password: 'thor2021',
      countryId: 2,
    },
    {
      id: 2,
      fullName: 'Tony Stark',
      username: 'ironman@avengers.org',
      password: 'ironman2021',
      countryId: 2,
    },
    {
      id: 3,
      fullName: 'Steven Rogers',
      username: 'captain@avengers.org',
      password: 'captain2021',
      countryId: 2,
    },
    {
      id: 4,
      fullName: 'Natasha Romanoff',
      username: 'nat@avengers.org',
      password: 'nati2021',
      countryId: 2,
    },
  ],
};

mock.onGet('/users').reply(200, {
  users: data.users,
});

mock.onPost('/login').reply((request) => {
  const { username, password } = JSON.parse(request.data);
  console.log(username);
  console.log(password);
  return [200, {}];
});
