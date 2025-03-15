const handleLogin = () => {
    const password = document.getElementById("password").value;
  
    if (password === "123456") {
      // Navbar show হবে
      document.getElementById("navbar").classList.remove("hidden");
      // Login page hide হবে
      document.getElementById("login-page").classList.add("hidden");
      // Dashboard show হবে
      document.getElementById("dashboard").classList.remove("hidden");
    } 
    if(password!=123456){
        alert("Password is Incorrect")
    }
    else {
      document.getElementById("error").classList.remove("hidden");
    }
  };
  
  //    button create
  function loadLessons(){
    // fetch
    fetch("https://openapi.programming-hero.com/api/levels/all")
    .then(res=>res.json())
    .then(data=>displayLesson(data.data))
  }
  
  // {
    // "id": 101,
    // "level_no": 1,
    // "lessonName": "Basic Vocabulary"
  // }
  
  function displayLesson(data){
    // get the container
    const lessonContainer = document.getElementById("lesson-container");
  
    // loop operation 
    for(let lesson of data){
      console.log(lesson); // lesson variables will print 
  
      // create element
    const lessonDiv=document.createElement("div")
    lessonDiv.innerHTML=`
    <button class="btn btn-outline btn-primary"> Lesson-${lesson.level_no} </button>
    `
  
    // append
    lessonContainer.append(lessonDiv)
    }
  
    
  }
  
  loadLessons();