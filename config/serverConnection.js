
const serverConnection = (app)=>{
    try{
        const port = parseInt(process.env.PORT)
        app.listen(port,'0.0.0.0',()=>{
            console.log(`Server started on http://localhost:${port}`);
        })
    }catch(error){
        console.error('Error starting server',error);
    }
}

export default serverConnection