window.addEventListener("DOMContentLoaded",async()=>
{
 const getFirstQuestions=await fetch('http://localhost:5000/question',{method:"GET"});
 const data=await getFirstQuestions.json();
 const additionalQuestions=document.getElementById('additionalQuestions');
 additionalQuestions.innerHTML=`<div>${data.question}</div>
 ${data.options.map((option)=>(`<input type="radio" name="ageInput" class="s1" value=${option.value}>
<label>${option.value}</label>`)).join('')}`;
const radioInputs = document.getElementsByClassName('s1');
for(let item of radioInputs){
    console.log(item);
    item.addEventListener("change",async(e) => {
        const selectedValue = item.value;
        prevValue=selectedValue;
    })
};
})
const fetchQuestion=async(value)=>
{
 console.log(value);
 const data=await fetch(`http://localhost:5000/question/${value}`,{method:"GET"});
 const currQuestion=await data.json();
additionalQuestions.innerHTML=`<div> ${currQuestion.question}
${currQuestion.options.map((option)=>(`<input type="radio" name="ageInput" class="s1" value=${option.value}>
<label>${option.value}</label>`)).join('')
}
 </div>`;
 const radioInputs = document.getElementsByClassName('s1');
 for(let item of radioInputs){
     console.log(item);
     item.addEventListener("change",async(e) => {
         const selectedValue = item.value;
         console.log(selectedValue);
         prevValue=selectedValue;
     })
 };
}
const nextButton=document.getElementById("nextButton");
nextButton.addEventListener("click",async()=>
{
  await fetchQuestion(prevValue);
})
const submitBtn=document.getElementById('submitBtn');
submitBtn.addEventListener("click",async()=>
{  
    const data=await fetch('http://localhost:5000/submitdata',{method:'GET',
    headers:{ "Content-Type": "application/json"}});
    console.log(await data.json());
});