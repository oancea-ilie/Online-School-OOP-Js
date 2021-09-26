import ControllerStudent from "./controllerStudent.js";
import ViewSingIn from "./viewSingIn.js";


export default class ViewRegister{
    constructor(){
        this.body = document.querySelector('body');
        this.setHeader();
        this.setMain();

        this.firstName = document.querySelector('.signup-first-name');
        this.lastName = document.querySelector('.signup-last-name');
        this.email = document.querySelector('.signup-email');
        this.pass = document.querySelector('.signup-password');

        this.signUpButon = document.querySelector('.signup-singup');
        this.logInButon = document.querySelector('.signup-singin');

        this.eror = document.querySelector('.eror');
        this.eror.style.textAlign = 'center';

        this.signUpButon.addEventListener('click',this.handleRegister);
        this.logInButon.addEventListener('click',this.handleLogIn);
    }

    setHeader=()=>{
        this.body.innerHTML = '';
        this.body.innerHTML +=
        `
        <header>
            <a href="#">Courses</a>
        </header>
        `;
    }

    setMain=()=>{
        this.body.innerHTML =
         `
        <main class="signup-main">
            <h1>Sign Up</h1>
            <p class="eror"></p>
            <p>First Name:</p>
            <input type="text" class="signup-first-name">
            <p>Last Name:</p>
            <input type="text" class="signup-last-name">
            <p>Email Address:</p>
            <input type="text" class="signup-email">
            <p>Password:</p>
            <input type="text" class="signup-password">
            <section class="signup-buttons">
                <a href="#" class="signup-singup">Sing Up</a>
                <a href="#" class="signup-singin">Log In</a>
            </section>
        </main>
         `;
    }
    handleRegister =() =>{
        if(this.firstName.value =='' || this.lastName.value =='' || this.email.value =='' || this.pass.value ==''){
            this.eror.textContent = 'Complete all filds!';
            this.eror.style.color = 'red';
        }else{
            let nou = new ControllerStudent();
            nou.create(this.firstName.value,this.lastName,this.email,this.pass);

            this.eror.textContent = 'Registration complete!';
            this.eror.style.color = 'green';

            this.firstName.value = '';
            this.lastName.value = '';
            this.email.value = '';
            this.pass.value = '';

        }
    }

    handleLogIn=()=>{
        let nou = new ViewSingIn();

    }
}