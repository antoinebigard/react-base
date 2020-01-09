const config = {
  dev: {
    urls: ["staging.compo.io", "staging.compo.io.s3-website.eu-west-3.amazonaws.com", "d2jrabmg7v6r0e.cloudfront.net"],
    aws: {
      // apiGateway: {
      //   name: "api",
      //   region: "eu-west-3",
      //   endpoint: "https://api-staging.compo.io",
      // },
      cognito: {
        region: "eu-west-1", // REGION
        userPoolId: "eu-west-1_sbpGx8dNf", // USER_POOL_ID
        userPoolWebClientId: "4lmfmrkr92hs2ia0aj8gg63otm", // APP_CLIENT_ID
        identityPoolId: "eu-west-1:168982a3-4829-48e4-a08a-db5707a6897d", // IDENTITY_POOL_ID
      },
    },
  },
  prod: {
    urls: ["compo.io", "compo.io.s3-website.eu-west-3.amazonaws.com", "dw0ouf9617bq7.cloudfront.net"],
    aws: {
      // apiGateway: {
      //   name: "api",
      //   region: "eu-west-3",
      //   endpoint: "https://api.compo.io",
      // },
      cognito: {
        region: "eu-west-1", // REGION
        userPoolId: "eu-west-1_nGiRmHtxc", // USER_POOL_ID
        userPoolWebClientId: "4ol4n4bj11n7c2rhff3gr09j7u", // APP_CLIENT_ID
        identityPoolId: "eu-west-1:e37b1952-7d2f-41ed-84e7-04eae54920d2", // IDENTITY_POOL_ID
      },
    },
  },
};

export const isStage = () => {
  let stage = "dev";
  if (config.dev.urls.includes(window.location.hostname)) {
    stage = "staging";
  } else if (config.prod.urls.includes(window.location.hostname)) {
    stage = "prod";
  }
  return stage;
};

export default config;
