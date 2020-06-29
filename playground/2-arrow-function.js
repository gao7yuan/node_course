// const square = function(x) {
//     return x * x
// }

// const square = (x) => {
//     return x * x
// }

// const square = (x) => x * x

// console.log(square(3))

const event = {
    name: 'Birthday Party',
    guestList: ['Yuan', 'fy', 'tovelo'],
    // printGuestList: function() {
    //     console.log('Guest list for ' + this.name)
    // }

    // An alternative:
    printGuestList() {
        // "function" in forEach has its own "this" binding, 
        // so in order to access "name", we create "that"
        // const that = this
        // console.log('Guest list for ' + this.name)
        // this.guestList.forEach(function(guest) {
        //     console.log(guest + ' is attending ' + that.name)
        // })

        // Or use arrow function to solve the problem
        console.log('Guest list for ' + this.name)
        this.guestList.forEach((guest) => {
            console.log(guest + ' is attending ' + this.name)
        })
    }

    // Arrow function in this case does not recognize "this"
    // printGuestList: () => {
    //     console.log('Guest list for ' + this.name)
    // }
}

event.printGuestList()