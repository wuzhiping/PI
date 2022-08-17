# https://blog.hypriot.com/downloads/

https://dbeaver.io/download/

 CREATE DATABASE IF NOT EXISTS scada DEFAULT CHARSET utf8 COLLATE utf8_general_ci;

# References
* https://github.com/wuzhiping/dapr-compose
* https://github.com/wuzhiping/app0x


<pre>
global dapr = require("/opt/bpm/node_modules/@dapr/dapr");

define Inbound {
    header:null,
    payload:null,
    constructor : function(header,payload){
        this.payload = payload;
        this.header = header;
    }
}

rule "Stamp"
{
   when{
      i : Inbound 1==1;
   }
   then{
      const http = new dapr.DaprClient("127.0.0.1", "3500");
      http.invoker.invoke("app0x" , "model/err" , dapr.HttpMethod.POST, { from:"dapr",value:"abc",temp:(new Date()).getTime() })
                  .then(  (d)=> { console.dir(d);outBound.result = d; next()})
                  .catch( (e)=> { console.dir(e);outBound.result = i.payload;next() });

   }
}

</pre>

# host
<pre>
docker run --rm -it --net=host -p 3500:3500 daprio/daprd:edge ./daprd -app-id app0x xxxxx yyyyy zzzzz
curl http://localhost:3500/v1.0/healthz
</pre>
