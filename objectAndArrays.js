// -----------------------------Objects And Arrays

let person =
{
    name: "Riya",
    age: 22,
    greet: function(name)
    {
        console.log("Hello! "+ name);
    }
};

console.log(person.name);
person.greet(person.name);