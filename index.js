
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
      

// HINTS:
// 1. Import express and axios

// 2. Create an express app and set the port number.

// 3. Use the public folder for static files.

// 4. When the user goes to the home page it should render the index.ejs file.

// 5. Use axios to get a random secret and pass it to index.ejs to display the
// secret and the username of the secret.

// 6. Listen on your predefined port and start the server.
