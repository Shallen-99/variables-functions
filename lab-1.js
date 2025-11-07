function formatFullName(firstName, lastName) {
    function cap(name){
        if(!name) return "Invalid name input"
        return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase()
    }
    return `${cap(lastName)}, ${cap(firstName)}`
}

console.log(formatFullName("shallen", "ashford"))