const DAPR = require("@dapr/dapr");

const http = new DAPR.DaprClient("localhost", "3500");
module.exports = {
    daprClient : http,
    DaprClient : DAPR.DaprClient,
    HttpMethod : DAPR.HttpMethod,
    CommunicationProtocolEnum : DAPR.CommunicationProtocolEnum,
      LogLevel : DAPR.LogLevel
};
