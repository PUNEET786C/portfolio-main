function run()
{
    var code = document.getElementById("CODE").value;
    var Result_Box = document.getElementById("result");
    Result_Box.innerHTML = code;
    var code_Box = document.getElementById("Code_Box");
    code_Box.style.display = "none";
    var Result_Box = document.getElementById("result_box");
    Result_Box.style.display = "block";
    Result_Box.setAttribute("class","animate__animated animate__slideInRight")
    var btn = document.getElementById("run_btn");
    btn.style.display = "none";
    var b_btn = document.getElementById("icon");
    b_btn.style.display = "block";


}
function back()
{
    var Result_Box = document.getElementById("result_box");
    Result_Box.style.display = "none";
    var code_Box = document.getElementById("Code_Box");
    code_Box.style.display = "block";
    code_Box.setAttribute("class","animate__animated animate__slideInLeft")
    var b_btn = document.getElementById("icon");
    b_btn.style.display = "none";
    
    var btn = document.getElementById("run_btn");
    btn.style.display = "block";

    
}