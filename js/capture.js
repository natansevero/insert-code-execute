define(function(require){
  const fs = require('fs');
  var code_editor = document.getElementById('code_editor');
  var button_down = document.getElementById('button_down');
 
  const file = 'code.html';
  const callback = (err) => {
    if(err) throw err
    else console.log("Download feito com Sucesso");
  }

  $("#button_down").click(function(){
    console.log(code_editor.value);
    const data = code_editor.value;
    //$("div").append('"' + code_editor.value + '"');
    $("div").append(code_editor.value);

    fs.writeFile(file, data, callback);
  });
});
