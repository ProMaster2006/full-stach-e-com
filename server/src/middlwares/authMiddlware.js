import  jwt from "jsonwebtoken"

export const authMiddlware = (req, res, next) => {
    try {
        const token = req.headers.authorization.split(' ')[1];

        if(!token) {
            return res.json({message: "Пользователь не авторизован"})
        }
        
        const decoded = jwt.verify(token, process.env.SECRET_KEY)

        

        req.user = decoded
        next()
    } catch (error) {
        console.log(error.message)
        res.json({message: 'error'})
    }
}