function square(i)
{
  return i * i;
}
 
function main()
{
  console.log(square(5));
}  
main()
console.log("----------------------------------")
  let yankees =
     {"Ruth": "RF", "Gehrig": "1B", "Mantle": "CF", "Jeter": "SS"};
  console.log(yankees["Gehrig"]);
  console.log(yankees.Gehrig);
  for (let yankee in yankees)
     console.log(
        yankee + " => " + yankees[yankee]);



