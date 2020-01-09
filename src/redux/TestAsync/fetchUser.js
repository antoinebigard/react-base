export const fetchUsers = () => {
  return dispatch => {
    dispatch(fetchUsersRequest());
    axios
      .get("https://jsonplaceholder.typicode.com/users/1")
      .then(response => {
        // response.data is the users
        const users = response.data;
        dispatch(fetchUsersSuccess(users));
      })
      .catch(error => {
        // error.message is the error message
        dispatch(fetchUsersFailure(error.message));
      });
  };
};

const getUser = () => {
  return fetch("https://jsonplaceholder.typicode.com/users/1", {
    method: "GET",
  });
};

useEffect(async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users/1", {
      method: "GET",
    });
    const json = await response.json();
    setData(json);
  } catch (e) {
    setError(e.message || "Unexpected error");
  }
  setLoading(false);
}, []);

useEffect(() => {
  async function fetchData() {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        return setLoading(false);
      }

      api.setToken(token);
      const { user } = await api.get("/user/token");

      console.log("user", user);
      i18n.changeLanguage(user.language);

      if (!user) {
        localStorage.removeItem("token");
        return setLoading(false);
      }

      const { organisation } = await api.get("/organisation");
      if (!organisation.chatEnabled) {
        document.body.classList.add("chat-disabled");
      }
      JMAKER.load(user, organisation);
      i18n.changeLanguage(user.language);

      const { workshops } = await api.get(`/workshop?user_id=${user._id}`);

      JMAKER.setUserWorkshops(workshops);

      if (process.env.NODE_ENV === "production") {
        Sentry.init({
          dsn: "https://516c503831444d29b4f5f4447a80b6ce@sentry.io/1820697",
          environment: "careercoach",
        });
        Sentry.configureScope(scope => scope.setUser({ id: user._id }));
      }

      amplitude.init(user);
      amplitude.logEvent("signin", {});

      activecampaign.init(user);
      activecampaign.logEvent("user_signin", {});

      dispatch(setInit(user, organisation));
    } catch (e) {
      console.log("error", e);
      localStorage.removeItem("token");
    }
    setLoading(false);
  }
  fetchData();
}, []);
