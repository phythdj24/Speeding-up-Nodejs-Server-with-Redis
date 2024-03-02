import client from "./client.js";

const init = async()=>{

    // await client.set('msg:4', 'hey from node js')
      const result = await client.get('msg:4');
      console.log("Result =>" ,result);
}

init()