document.addEventListener("DOMContentLoaded", ()=>{
    let score =0;
    const queList = [
        {q:"Capital of Spain is -", ans:1},
        {q:"Where Day of Dead is celebrated?",ans:4},
        {q:"Hom many laws of Newton are there?",ans:1}
    ]
    const optionList =[
        ["Madrid","Paris","Mexico","Delhi"], 
        ["Colombia","Brazil","Russia","Mexico"],
        ["3","1","4","2"] 
    ]
    let currQue=0;

    const startbtn=document.getElementById("start-btn");
    const quebox=document.getElementById("question-container");
    const quetext=document.getElementById("question-text");
    const options=document.getElementById("choices-list");
    const nextBut=document.getElementById("next-btn");
    const resultbox = document.getElementById("result-container");
    const scoreDOM = document.getElementById("score");

    let selectedOption = 0;

    startbtn.addEventListener("click",()=>{
        startbtn.classList.add("hidden");
        quebox.classList.remove("hidden");
        renderQue();
        nextBut.classList.remove("hidden");
    })

    function renderQue(){
        let que = queList[currQue];
        // console.log(que);
        
        quetext.textContent=que.q;
        let optionNumber=1;
        optionList[currQue].forEach(choice => {
            let newel=document.createElement("li");
            newel.textContent=choice;
            newel.id = Number(optionNumber++);
            options.appendChild(newel);
        });
    }
    nextBut.addEventListener("click", ()=>{
        evaluateScore();
        selectedOption=0;
        options.innerHTML="";
        currQue++;
        if(currQue >= queList.length){
            showResult();
        }
        else renderQue();
    })

    options.addEventListener("click", (e)=>{
        if(selectedOption!=0){
            document.getElementById(selectedOption).classList.remove("selected");
        }
        selectedOption=Number(e.target.id);
        e.target.classList.add("selected");
    })

    function evaluateScore(){
        if(selectedOption === Number(queList[currQue].ans)){
            score++;
        }
    }
    function showResult(){
        quebox.classList.add("hidden");
        nextBut.classList.add("hidden");
        resultbox.classList.remove("hidden");
        scoreDOM.textContent=`${score}/${queList.length}`;
    }

    document.getElementById("restart-btn").addEventListener("click",()=>{
        location.reload();
    })
})