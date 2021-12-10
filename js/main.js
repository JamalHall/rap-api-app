alert('js file loaded')
//event listener added to button
document.querySelector('button').addEventListener('click', getRapName)

//async await fetch that is retrieving json and logging
async function getRapName(){
// added an event listener and form element to grab form value from html
const rapName = document.querySelector('input').value
    try {
    const res = await fetch(`https://rap-api-jh.herokuapp.com/api/rappers/${rapName}`)
    const data = await res.json() // with out this await the promise is left pending
    console.log(data)
    document.querySelector('#result').innerText = `Real Name: ${data.birthName} \n Born: ${data.birthLocation} \n Age: ${data.age}`
    }
    catch(err){ console.log(err)}
}