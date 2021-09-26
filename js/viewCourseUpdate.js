import ControllerCourse from "./controllerCourse.js";
import ViewSingIn from "./viewSingIn.js";


export default class ViewCourseUpdate{
    constructor(name,courseName){
        this.courseName = courseName;
        this.name = name;
        this.body = document.querySelector("body");

        this.setHeader();
        this.setMain();

        
        this.logOutButon = document.querySelector(".home-logout-buton");
        this.logOutButon.addEventListener('click',this.handleLogOut);

        this.validationErors = document.querySelector('.course-create-errors');
        this.validationErors.style.display = 'none';

        this.eror = document.querySelector('.eror');

        this.title = document.querySelector(".course-title");
        this.description = document.querySelector('.course-description');
        this.time = document.querySelector('.course-time');
        this.materials = document.querySelector('.course-materials');

        this.createButon = document.querySelector('.create-course');
        this.cancelButon = document.querySelector('.cancel-course');


        this.cancelButon.addEventListener("click",this.handleCancel);
        this.cCourse = new ControllerCourse();

        this.setDetails();

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
        <main class="course-create-main">
        <h1>Update Course</h1>

        <section class="course-create-errors">
            <p>Validation Errors</p>
            <ul>
                <li class="eror">Lorem ipsum dolor sit amet.</li>
            </ul>
        </section>

        <section class="course-create-grid">

            <section class="course-create-details">
                <p>Course Title</p>
                <input type="text" class="course-title">

                <h5>By Joe Smith</h5>

                <p>Course Description</p>
                <textarea cols="30" rows="10" class="course-description"></textarea>
            </section>

            <section class="course-create-time-materials">
                <p>Estimated Time</p>
                <input type="text" class="course-time">
                <p>Materials Needed</p>
                <textarea cols="30" rows="10" class="course-materials"></textarea>
            </section>

            <section class="course-create-buttons">  
                <a href="#" class="create-course">Update Course</a>
                <a href="#" class="cancel-course">Cancel</a>
            </section>
         </section>
        </main>
        `;
    }

    setDetails=()=>{
        this.cCourse.lista.forEach((e)=>{
            if(e.name == this.courseName){
                this.title.value = e.name;
                this.description.value = e.description;
                this.time.value = e.time;
                this.materials.value = e.materials;
            }
        })

    }

    handleLogOut=()=>{
        let nou = new ViewSingIn();
    }
}