/*
const students = ["aniket", "sai", "mukesh", "saish"]

students.forEach((student, index)=>{
    console.log("sending email to " + student)
})
*/
const students = ["aniket", "sai", "mukesh", "saish"]

const val = students.map((student, index)=>{
    console.log("sending email to " + student)
    if (index%2==0)
    {
        return "email sent to " + student
    }
    else
    {
        return "email not sent to " + student
    }
})

console.log(val)
