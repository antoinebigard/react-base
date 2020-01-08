const config = {
  dev: {
    urls: ["staging.compo.io", "staging.compo.io.s3-website.eu-west-3.amazonaws.com", "d2jrabmg7v6r0e.cloudfront.net"],
    aws: {
      // apiGateway: {
      //   NAME: "api",
      //   REGION: "eu-west-3",
      //   URL: "https://api-staging.compo.io",
      // },
      cognito: {
        REGION: "eu-west-1",
        USER_POOL_ID: "eu-west-1_sbpGx8dNf",
        APP_CLIENT_ID: "4lmfmrkr92hs2ia0aj8gg63otm",
        IDENTITY_POOL_ID: "eu-west-1:168982a3-4829-48e4-a08a-db5707a6897d",
      },
    },
  },
  prod: {
    urls: ["compo.io", "compo.io.s3-website.eu-west-3.amazonaws.com", "dw0ouf9617bq7.cloudfront.net"],
    aws: {
      // apiGateway: {
      //   NAME: "api",
      //   REGION: "eu-west-3",
      //   URL: "https://api.compo.io",
      // },
      cognito: {
        REGION: "eu-west-1",
        USER_POOL_ID: "eu-west-1_nGiRmHtxc",
        APP_CLIENT_ID: "4ol4n4bj11n7c2rhff3gr09j7u",
        IDENTITY_POOL_ID: "eu-west-1:e37b1952-7d2f-41ed-84e7-04eae54920d2",
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
