function addser(){
    User_name=document.getElementById("user_is_his_name-o").value;
    localStorage.setItem("name_of_user",User_name);
    window.location="kwitterRoom.html";
}