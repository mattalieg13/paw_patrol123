let availableKeyword = [
    'HTML',
    'CSS',
    'Easy Tutorials',
    'Web design tutorials',
    'JavaScript',
    'Where to learn coding online',
    'Where to learn wed design',
    'How to create a website',
];

 const resultBox = document.querySelector(".result-box");
 const inputBox = document.getElementById("input-box");

 inputBox.onkeyup = function(){
    let result = [];
    let input = inputBox.value;
    if(input.length){
        result = availableKeyword.filter((keyword)=>{
            return keyword.toLowerCase().includes(input.toLowerCase());
        });
        console.log(result);
    }
    display(result);
 }

 function display(result){
    const content = result.map((list)=>{
        return "<li onclick= selectInput(this)>" + list + "</li>";
    });

    resultsBox.innerHTML = "<ul>" + content.join('') + "</ul>";
 }

 function selectInput(list){
    inputBox.value = list.innerHTML;
    resultsBox.innerHTML = '';
 }