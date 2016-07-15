var code_editor = document.getElementById('code_editor');
//var button_down = document.getElementById('button_down');


$("#button_down").click(function(){
  console.log(code_editor.value);
  //$("div").append('"' + code_editor.value + '"');
  $("div").append(code_editor.value);
  download("opa", 'testfile.txt', 'text/pain');
  // createFile(code_editor.value);
});


function download(text, name, type) {
  var a = document.getElementById("a");
  var file = new Blob([text], {type: type});
  a.href = URL.createObjectURL(file);
  a.download = name;
}

// function createFile(code){
//   var fso = CreateObject("Scripting.FileSystemObject");
//   var a = fso.CreateTextFile("/home/natan/Área de Trabalho/testfile.html", true);
//   a.writeline(code);
//   a.Close();
// }
