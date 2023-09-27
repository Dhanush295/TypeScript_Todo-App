const auth = async (req,res,next)=>{
    let token = jwt.sign(
        { userId: existingUser.id, email: existingUser.email },
        "secretkeyappearshere",
        { expiresIn: "1h" }
      );
}

export default auth;