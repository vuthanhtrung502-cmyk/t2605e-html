//comment
var x = 10; // Number
x = "hello name!"; // String
x = true; // Boolean
x = 3.14; // Number
x= "3.14159"; // String
var y = 5; // Number
var z = "7"; // String
var t = y + z; // "57
// "1"+2 => "12"
// 1 + 2   => 3
// 1 + "2" => "12"
console.log("hello name!"); 
if(y>0){
}else{
}
for(var i=0; i<10; i++){
}
var arr = [];
//arr [4] = 19;
arr.push(19);
arr.push("xin chào");
arr.push(true);
var nums = [1,2,3,4,5];
console.log(nums);
console.log(7);
console.log("9"+8);
var total = 0;
for(var i=0; i<nums.length; i++){
    total += nums[i];

}
var total2 =0;
nums.map(e=>{
    total2 += e;
});
function tinhTong(a,b){
    var c= a+b;
    console.log(c);
    return c;
}
tinhTong(5,6);
var tt = tinhTong(10,3.14159);
var tx =tinhTong("abc",108);

var nhan_hai_so = (a,b)=>{
    var c= a*b;
    console.log(c);
}
    
// alert("làm gì đó");
// confirm("Bạn có muốn xóa không?"); //return true/false
// prompt("Bạn có muốn xóa không?"); //return string 

// tham chiếu h1 có id là head1 sang đây để xử lí 
var h1e = document.getElementById("head1");

//var h2b = document.getElementsByTagName("head1");
h1e.style.color = "red";
h1e.style.backgroundColor = "yellow";

h1e.textContent = "xin chào các bạn!";
h1e.innerHTML = "<i>xin chào các bạn!</i>";

h1e.classList.add("show-title");

var color =["red","green","blue","yellow","orange"];
var r = 0;
setInterval(()=>{
    // sẽ làm các việc trong này cứ mỗi 1 giây
    var cs =r%5 ;
    h1e.style.color = color[cs];
    r++;

},1000);
function box_click(){
    var c= confirm("ban vua nhan vao toi phai khong");
    var bd= document.getElementById("page");
    if(c){
        // alert("canh cao, khong duoc an tiep nua");
        bd.classList.add("dark");
        bd.classList.remove("light");
    }else{
        // alert("Xin loi toi nham");
        // bd.classList.remov("light");s
        bd.classList.add("light");
        
    }
}
function move_box(){
    var bd = document.getElementById("page");
    bd.classList.add("dark");
}
function move0nt(){
    var bd = document.getElementById("page");
    bd.classList.remove("light");
}
function inputtext(x){
    // hieu rang :y dinh la muon truyen nguyen phan tu  html ben kia sang 
    console.log(x.value);
}
function inputtext2(x){
    console.log(x.value);
    document.getElementById("msg").textContent =x.value;
}

function slc(){
    alert("SLC.....");
}