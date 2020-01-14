//import Amplify, { Auth } from "aws-amplify";
import Amplify from "aws-amplify";
import config, { isStage } from "../config";

const STAGE = isStage();
const envConfig = STAGE === "dev" || STAGE === "staging" ? config.dev.aws : config.prod.aws;

const configure = async () => {
  Amplify.configure({
    Auth: envConfig.cognito,
    //API: await apiConfig(),
  });
};

export default configure;

// const apiConfig = () => {
//   return {
//     endpoints: [
//       {
//         ...envConfig.apiGateway,
//         custom_header: async () => {
//           const { token, session } = await getTokenAndSession();
//           return {
//             Authorization: token || JSON.stringify(session),
//           };
//         },
//       },
//     ],
//   };
// };

// const getTokenAndSession = async () => {
//   let token = null;
//   let session = null;

//   try {
//     session = await Auth.currentSession();
//     token = session.getAccessToken().getJwtToken();
//   } catch (e) {
//     session = await Auth.currentCredentials();
//     session = session.data;
//   }

//   return {
//     token,
//     session,
//   };
// };
