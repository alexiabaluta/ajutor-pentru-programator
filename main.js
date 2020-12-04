const subjects = ['PC', 'USO', 'Mate1', 'Mate2']

$(document).ready(function(){
  subjects.forEach(function(value){
    $("#formControlSelect").append("<option>"+value+"</option>");
  })



  $("#modal-btn").click(function(){
    var input_sel = $('#formControlSelect').val();
    var input_title = $('#project-title').val();
    //alert(input_sel);
    if (input_sel != "Alege materia" && input_title)
      $("#plangeri").append("<div><p id=\"form-prompts-text\" style=\"margin-bottom: 0px; black;\">"+input_title+"</p><p id=\"form-prompts-text\" style=\"margin-top: 0px; color: #92E3A9;\">"+input_sel+"</p></div>");
  });



});