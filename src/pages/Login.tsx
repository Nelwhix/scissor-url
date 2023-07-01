
export default function Login() {
    return <>
         <div id="sign">
        <p>Sign in with:</p>
        <button id="free"> <a  href="free.html"> <img src="./google.svg" />Google</a></button>
        <button id="free"> <a href="free.html"> <img src="./apple.svg" />Apple</a></button>
        </div>
        
        <div id="action">
        <form action="/action_page.php">
            <label for="username or email address"></label>
            <input type="text" id="fname" name="username" placeholder="Email address or username"><br>
        
            <label for="password"></label>
            <input type="text" id="password" name="password" placeholder="Password"><br>
        
           
           
          </form>
          <a href="password.html">forgot your password?</a><br>
        
          <button id="email"> <a style="color: white;" href="free.html">Log in</a></button>
        
          <h5 style="margin-top: 10px; margin: 15px; padding: 15px;">Don't have an account? <button type ="button" class="log">
            <a  href="sign.html">Sign up</a></h5>
        
            <p>By signing up, you agree to <br>
                Scissor's Terms of Service, Privacy Policy and Acceptable Use Policy.</p>
          </div>
    </>
}