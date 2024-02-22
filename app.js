const allSeats = document.getElementsByClassName("kbd")
const seatNumbetTotal = document.getElementById("seatNumberTotal");


for (const seat of allSeats) {
    seat.addEventListener('click', function (event) {

        const seatName = event.target.innerText;
        const seathtml = document.getElementById(seatName)
        const coloredAdded = seathtml.classList
        console.log(parseInt(seatNumbetTotal.innerText) + 1);
        if (parseInt(seatNumbetTotal.innerText) + 1 <= 4) {
            if (coloredAdded[2] === "colored") {
                removeBackgroundColorById(seatName)
                removeSeat(seatName)

            } else {
                setBackgroundColorById(seatName)
                addSeat(seatName)


            }

            const sectionName = document.getElementById("seatSection");

            var numberOfChildren = sectionName.childElementCount;

            seatNumbetTotal.innerText = numberOfChildren - 1
            const seatTak = 550 * parseInt(numberOfChildren - 1)

            const seatTakaaa = document.getElementById("seatTaka");
            seatTakaaa.innerText = seatTak
            const grandTotalTaka = document.getElementById("grandTotal");
            grandTotalTaka.innerText = seatTak

            // available seat 
            const available = document.getElementById('availableSeat')
            available.innerText = 40 - parseInt(seatNumbetTotal.innerText)


            if (parseInt(seatNumbetTotal.innerText) + 1 === 4) {
                const aplyybtn = document.getElementById("applyBtn");
                aplyybtn.removeAttribute(disabled)
            }

        } else {
            alert("You can not buy more then 4 tickets")
        }


    });

}

document.getElementById("applyBtn").addEventListener('click', function () {
    const grandTotalTaka = document.getElementById("grandTotal");
    const grandTotalValue = parseInt(grandTotalTaka.innerText);
    const inputIdd = document.getElementById("inputId");
    if (inputIdd.value === 'NEW15') {
        grandTotalTaka.innerText = grandTotalValue - grandTotalValue * 0.15
        document.getElementById('inputArea').classList.add('hidden')
        const value = grandTotalValue * 0.15
        addDiscount(value)
    }
    if (inputIdd.value === 'Couple 20') {
        grandTotalTaka.innerText = grandTotalValue - grandTotalValue * 0.2
        document.getElementById('inputArea').classList.add('hidden')
        const value = grandTotalValue * 0.2
        addDiscount(value)
    }

})
function addDiscount(value) {
    const discountId = document.getElementById("discountTaka")

    discountId.innerHTML = `
   <div class="flex justify-between">
   <p>Discount price : </p>
   <p class="mr-8">${value}</p>
</div>
   `
}

function addSeat(seatName) {
    const sectionName = document.getElementById("seatSection");
    const newDiv = document.createElement("div");
    newDiv.setAttribute("id", `${seatName}1`)
    newDiv.innerHTML = `
<div id="">
<div  class="mt-6 flex justify-between mr-8 ">
<p>${seatName} </p>
<p>Economy</p>
<p>550</p>
</div>
<hr class="mt-4 mr-6">
</div>
 
 `

    sectionName.appendChild(newDiv)
}
function removeSeat(seatName) {
    const seatNumber = seatName + 1;
    const seatNameForRemove = document.getElementById(seatNumber)
    let parentElement = seatNameForRemove.parentNode;

    parentElement.removeChild(seatNameForRemove)

}








function setBackgroundColorById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.add('bg-green-500');
    element.classList.add('colored');


}

function removeBackgroundColorById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.remove('bg-green-500');
    element.classList.remove('colored');
}