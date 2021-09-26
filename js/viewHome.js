import ViewCourse from "./viewCourseCreate.js";
import ViewSingIn from "./viewSingIn.js";
import ControllerCourse from "./controllerCourse.js";
import ViewCourseCreate from "./viewCourseCreate.js";
import ViewCourseDetails from "./viewCourseDetails.js";

export default class ViewHome{
    constructor(name){
        this.name = name;
        this.body = document.querySelector('body');
        this.setHeader();
        this.setMain();
        this.homeMain = document.querySelector('.home-main');

        this.cCourse = new ControllerCourse();
        this.setCards();

        this.homeMain.addEventListener('click',this.handleHomeCards);

        this.logOutButon = document.querySelector('.home-logout-buton');
        this.logOutButon.addEventListener('click',this.handleLogOut);

        this.homeAdCard = document.querySelector(".home-card-add");
        this.homeAdCard.addEventListener('click', this.handleAdCard);

    }

    setHeader=()=>{
        this.body.innerHTML = '';
        this.body.innerHTML +=
        `
        <header>
            <a href="#">Courses</a>
            <section class="logsection">
                <p>Hi, ${this.name}</p>
                <a href="#" class="home-logout-buton">Log Out</a>
            </section>
        </header>
        `;

    }

    setMain=()=>{
        this.body.innerHTML +=
        `
            <main class="home-main">
                
            </main>
        `;
    }

    
    setCards=()=>{
        this.homeMain.innerHTML = '';

        console.log(this.cCourse.lista);
         this.cCourse.lista.forEach((e)=>{
            this.homeMain.innerHTML += `${e.toCard()}`;
         });

         this.homeMain.innerHTML += 
         `
         <a class="home-card-add">
            <i class="fas fa-plus"></i>
            <p>New Course</p>
        </a>
         `;

    }

    handleAdCard=()=>{
        let nou = new ViewCourseCreate(this.name);
    }


    handleHomeCards=(e)=>{
        let obj = e.target;

        if(obj.classList !='home-card-add'){
            let title = obj.children[1];
            title = title.innerHTML;
            let nou  = new ViewCourseDetails(this.name, title);
        }
    }

    handleLogOut=()=>{
        let nou = new ViewSingIn();
    }
    
}