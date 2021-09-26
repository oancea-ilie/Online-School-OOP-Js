import ViewHome from "./viewHome.js";
import ViewSingIn from "./viewSingIn.js";
import controllerCourse from "./controllerCourse.js";
import ControllerCourse from "./controllerCourse.js";


export default class ViewCourseCreate{
    constructor(name){
        this.name = name;
        this.body = document.querySelector('body');

        this.setHeader();
        this.setMain();

        this.logOutButon = document.querySelector(".home-logout-buton");
        this.logOutButon.addEventListener('click',this.handleLogOut);

        this.validationErors = document.querySelector('.course-create-errors');
        this.validationErors.style.display = 'none';

        this.eror = document.querySelector('.eror');

        this.courseTitle = document.querySelector(".course-title");
        this.courseDescription = document.querySelector(".course-description");
        this.courseTime = document.querySelector(".course-time");
        this.courseMaterials = document.querySelector('.course-materials');

        this.createButon = document.querySelector('.create-course');
        this.createButon.addEventListener('click',this.handleCreateCourse);

        this.cancelButon = document.querySelector('.cancel-course');
        this.cancelButon.addEventListener('click',this.handleCancel);
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
        <h1>Create Course</h1>

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
                <a href="#" class="create-course">Create Course</a>
                <a href="#" class="cancel-course">Cancel</a>
            </section>
         </section>
        </main>
        `;
    }

    handleLogOut=()=>{
        let nou = new ViewSingIn();
    }

    handleCreateCourse=()=>{

        if(this.courseTitle.value != '' && this.courseDescription.value != '' && this.courseTime.value !='' && this.courseMaterials.value != ''){

            let nou = new ControllerCourse();

            nou.create(this.courseTitle.value, this.courseDescription.value,this.courseTime.value, this.courseMaterials.value);

            let home = new ViewHome(this.name);

        }else{
            this.validationErors.style.display = 'block';
            this.eror.textContent = 'Complete all filds!';
        }
    }

    handleCancel=()=>{
        let nou = new ViewHome(this.name);
    }
}