const  counters_class = document.querySelectorAll('.counters');
const speed = 200;

counters_class.forEach(curcounter =>{
    const updateCount = () => {
        const target = parseInt(curcounter.getAttribute('data-number'));
        const initial = parseInt(curcounter.innerText);

        const inc = Math.trunc(target / speed);

        if(initial < target){
            initial.innerText = initial + inc;
            setTimeout(updateCount, 10);
        }

    }

    updateCount();
});