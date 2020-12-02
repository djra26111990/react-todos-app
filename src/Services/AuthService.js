// eslint-disable-next-line import/no-anonymous-default-export
export default {
  login: async (user) => {
    const res = await fetch('/user/login', {
            method: 'method',
            body: JSON.stringify(user),
            haeders: {
                'Content-Type': 'application/json'
            }
        });
        const data = await res.json();
        return data;
  },
  register: async user => {
      const res = await fetch('/user/register', {
          method: "post",
          body: JSON.stringify(user),
          headers: {
              'Content-Type': 'application/json'
          }
      });
      const data = await res.json();
      return data;
  },
  logout: async () => {
      const res = await fetch('/user/logout');
      const data = await res.json();
      return data;
  }
  , isAuthenticated: async () => {
      const res = await fetch('/user/authenticated');
      if (res.status !== 401)
          return res.json().then(data => data);

      else
          return { isAuthenticated: false, user: { username: "", role: "" } };
  }
}