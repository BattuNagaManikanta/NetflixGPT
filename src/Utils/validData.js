export function checkValidData(email,password){
    const isEmailValid=/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    const isPasswordValid=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&^])[A-Za-z\d@.#$!%*?&]{8,15}$/.test(password);

    // console.log(isEmailValid);
    

    if(!isEmailValid) return "Email Id is not valid";
    if(!isPasswordValid) return "Passowrd is not valid";

    return null;

}