const workingHours = (req,res,next)=>{
    const now = new Date();
    const day = now.getDay();
    const hour = now.getHours();

    if(day >= 1 && day <= 6 && hour >=9 && hour < 23) {
        next();
    } else {
        res.send("<h1> Sorry ,we are only available from monday to friday at 9AM to 5PM");
    }
};

export {workingHours};