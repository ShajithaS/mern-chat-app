

//Middleware to protect routes
export const protectRoute = async (req, res, next)=>{
     try{
        const token = req.headers.token;

        const decoded = jwt.verify(token, process.env.JWT_SECRET)
     }
     catch(error){

     }
}