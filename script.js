function enter(event) {
    if (event.key === `Enter`) {
        list();
    }
}


function list() {
    let work = document.querySelector(`.work`).value.trim();

    let list1 = document.querySelector(`.list-1`).innerHTML.replace(/^\d+\./,``);
    let list2 = document.querySelector(`.list-2`).innerHTML.replace(/^\d+\./,``);
    let list3 = document.querySelector(`.list-3`).innerHTML.replace(/^\d+\./,``);
    let list4 = document.querySelector(`.list-4`).innerHTML.replace(/^\d+\./,``);

   
    if (work === `` && list1 === ``) { 
       return;
    }
    else if(work !== `` && list1 === ``){
        document.querySelector(`.list-1`).innerHTML = `1.` + work;
        document.querySelector(`.work`).value = ``;
    }
    else if(work !== `` && list2 === ``){
        document.querySelector(`.list-2`).innerHTML = `2.` + work;
        document.querySelector(`.work`).value = ``;
    }
    else if(work !== `` && list3 === ``){
        document.querySelector(`.list-3`).innerHTML = `3.` + work;
        document.querySelector(`.work`).value = ``;
    }
    else if(work !== `` && list4 === ``){
        document.querySelector(`.list-4`).innerHTML = `4.` + work;
        document.querySelector(`.work`).value = ``;
    }
    else if(work !== `` && list4 !== ``){
        document.querySelector(`.list-4`).innerHTML = `4.`+list3;
        document.querySelector(`.list-3`).innerHTML = `3.`+list2;
        document.querySelector(`.list-2`).innerHTML = `2.`+list1;
        document.querySelector(`.list-1`).innerHTML = `1.`+work;
        document.querySelector(`.work`).value = ``;
    }
}