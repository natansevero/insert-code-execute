var code_editor = document.getElementById('code_editor');
//var button_down = document.getElementById('button_down');


$("#button_down").click(function(){
  console.log(code_editor.value);
  //$("div").append('"' + code_editor.value + '"');
  $("div").append(code_editor.value);
});
