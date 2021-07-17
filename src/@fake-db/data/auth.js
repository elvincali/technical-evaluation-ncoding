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

mock.onPost('/login').reply((request) => {
  const { username, password } = JSON.parse(request.data);

  const user = data.users.find((u) => u.username === username && u.password === password);

  if (user) {
    const userData = {
      id: user.id,
      fullName: user.fullName,
      username: user.username,
    };

    const response = {
      userData,
      accessToken: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI4IiwianRpI...',
    };

    return [200, { data: response }];
  }

  return [422, {
    message: 'Email or password incorrect!',
  }];
});

mock.onPost('/signup').reply((request) => {
  try {
    const {
      fullName, username, password, countryId,
    } = JSON.parse(request.data);

    const newUser = {
      id: data.users.length + 1,
      fullName,
      username,
      password,
      countryId,
    };

    data.users.push(newUser);
    const userData = {
      ...newUser,
    };

    delete userData.password;

    const response = {
      userData,
      accessToken: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI4IiwianRpI...',
    };

    return [200, { data: response }];
  } catch (e) {
    return [422, {
      message: 'Error!',
    }];
  }
});
