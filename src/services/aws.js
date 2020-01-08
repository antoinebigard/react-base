import { Auth } from "aws-amplify";
import config, { isStage } from "./config";

const STAGE = isStage();

class AuthService {
  getTokenAndSession = async () => {
    let token = null;
    let session = null;

    try {
      session = await Auth.currentSession();
      token = session.getAccessToken().getJwtToken();
    } catch (e) {
      session = await Auth.currentCredentials();
      session = session.data;
    }

    return {
      token,
      session,
    };
  };

  init = () =>
    new Promise(resolve => {
      if (STAGE === "dev" || STAGE === "staging") {
        auth.config
          .set({
            Auth: {
              region: config.dev.cognito.REGION,
              userPoolId: config.dev.cognito.USER_POOL_ID,
              identityPoolId: config.dev.cognito.IDENTITY_POOL_ID,
              userPoolWebClientId: config.dev.cognito.APP_CLIENT_ID,
            },
            API: {
              endpoints: [
                {
                  name: config.dev.apiGateway.NAME,
                  endpoint: config.dev.apiGateway.URL,
                  region: config.dev.apiGateway.REGION,
                  custom_header: async () => {
                    const { token, session } = await this.getTokenAndSession();
                    return {
                      Authorization: token || JSON.stringify(session),
                    };
                  },
                },
              ],
            },
          })
          .then(() => resolve());
      } else {
        auth.config
          .set({
            Auth: {
              region: config.prod.cognito.REGION,
              userPoolId: config.prod.cognito.USER_POOL_ID,
              identityPoolId: config.prod.cognito.IDENTITY_POOL_ID,
              userPoolWebClientId: config.prod.cognito.APP_CLIENT_ID,
            },
            API: {
              endpoints: [
                {
                  name: config.prod.apiGateway.NAME,
                  endpoint: config.prod.apiGateway.URL,
                  region: config.prod.apiGateway.REGION,
                  custom_header: async () => {
                    const { token, session } = await this.getTokenAndSession();
                    return {
                      Authorization: token || JSON.stringify(session),
                    };
                  },
                },
              ],
            },
          })
          .then(() => resolve());
      }
    });
}

const authService = new AuthService();
export default authService;
