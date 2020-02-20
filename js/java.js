function input_data(){
    var data= prompt("enter name , ID student , number of img from 1 to 5").split(",");
    console.log(data)
    if(data==""){
        alert("Please Enter your data");

    }
    data[2]+=".jpg"
document.getElementById("add_students").innerHTML +=` 
<div class="students_info">
<div class="student_name"></div>
<div class="student_img">
    <img src="img/${data[2]}" alt=""><P>${data[1]}</P></img>
    <b>${data[0]}</b>
</div>`
}
var student = {
     1:["mahmoud",10,"img/1.jpg"]

     ,2:["ahmed",20,"img/2.jpg"]
     
     ,3:["ali",30,"img/3.jpg"]
     
     ,4:["mohammed",40,"img/4.jpg"]
     
     ,5:["youssef",50,"img/5.jpg"]
};

function random_btn(){
    var random_number=Math.ceil(Math.random()*5);
    var x=student[random_number];
document.getElementById("random_num").innerHTML=` <div class="students_info">
<div class="student_name"></div>
<div class="student_img">
    <img src="${x[2]}" alt=""><P>${1}</P></img>
    <b>${x[0]}</b>
</div> `   

}
