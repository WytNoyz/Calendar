var visible = false;
var important = false;
showIcon = `<i class="fas fa-binoculars"></i>`;
hideIcon = `<i class="fas fa-window-close"></i> `;
showImg = `<img src="https://schoolofbeatbox.com/wp-content/plugins/optimizePressPlugin/lib/assets/images/arrows/arrow-blue-2.png">`;
importIcon = `<i class="fas fa-bookmark"></i> `;
unimportIcon = `<i class="far fa-bookmark"></i> `;

var UI = {};
var taskList = [];


function showDetails() {
    console.log("btn clicked!");
    var x = document.getElementById("imgFill");
    if (!visible) {
        UI.secForm.removeClass('invisible');
        UI.btnShow.html(hideIcon);
        visible = true;
    } else {
        UI.secForm.addClass('invisible');
        UI.btnShow.html(showIcon);
        visible = false;
    }
    if (x.style.display === "none") {
        x.style.display = "block";
      } else {
        x.style.display = "none";
      }

}



// ctrl+D to select identical instances
function toggleImportant() {
    if (!important) {
        UI.btnImportant.addClass("fas active")
        UI.btnImportant.removeClass("far")
        important = true;
    } else {
        UI.btnImportant.removeClass("fas active")
        UI.btnImportant.addClass("far")
        important = false;
    }
}

function saveTask(){
    var title = UI.txtTitle.val();
    var desc = UI.txtDescription.val();
    var alert = UI.txtAlert.val();
    var location = UI.txtLocation.val();
    var date = UI.txtDate.val();
    

    var task = new Task(title, important, date, desc, alert, location);
    taskList.push(task);
    clearForm();

    console.log(taskList);
    
}
function clearForm(){
    $(".control").val('');
    UI.btnImportant.removeClass("fas active")
        UI.btnImportant.addClass("far")
        important = false;
}


function init() {
    console.log("main page");
    // learn doing it this way!!!!
    UI = {
        btnShow: $("#btnShow"),
        btnImportant: $("#btnImportant"),
        secForm: $("#secForm"),
        btnSave: $("#btnSave"),
        txtTitle: $("#txtTitle"),
        txtDate: $("#txtDate"),
        txtDescription: $("#txtDescription"),
        txtAlert: $("#txtAlert"),
        txtLocation: $("#txtLocation")


    };
    // get data from servers

    // hook events
    UI.btnShow.click(showDetails);
    UI.btnImportant.click(toggleImportant);
    UI.btnSave.click(saveTask);
    // set the text of an input field.
}

window.onload = init;





/************************************************
Object literal dog = {name: fido}

Object Constructor function Dog(name){
                                this.name= name;
                                }
                                var lola = new Dog('lola');
                                var csharp = new Dog('c#');
ES6
class
*******************************/
