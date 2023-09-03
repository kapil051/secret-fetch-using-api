
  import express from "express";
  import axios  from "axios";

     const port=3000;
     const app=express();

      app.use(express.static("public"));

   app.get("/",async(req,res)=>{

       try{

         const response=await axios.get("https://secrets-api.appbrewery.com/random");

           let secret=response.data.secret;
           let name=response.data.username;

              console.log(secret,name);

             res.render("index.ejs",{
                  secret:secret,
                  name:name,
             })   

       }catch{
    
        console.error('Error making GET request:', error);
        res.status(500).json({ error: 'Internal Server Error' });

       }

   })   

  app.listen(port,()=>{
        console.log(`server is up and running at ${port}`);
  })   
      

