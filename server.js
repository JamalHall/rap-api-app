const express = require('express') // must put in quotes or it will look for a variable called express
const cors = require('cors')
const app = express()  // puts all functions that are in express in a variable called app
const PORT = 8000 // port set as a variable to enhance readability

app.use(cors())  // remember express is sitting in the app variable  cors is a method so type cors()

let rappers = {
  '21 savage':  {
    'age': 28,
    'birthName':   'Sheyaa Bin Abraham-Joseph',
    'birthLocation': 'London, England',
    }, 
'chance the rapper':  {
    'age':   27,
    'birthName':  'Chancelor Johnothan Bennett'  ,
    'birthLocation': 'Chicago, Illinois',

    },
    'unknown' :  {
        'age':   null,
        'birthName':  'unknown'  ,
        'birthLocation': 'unknown',
    }
}

//express has set parameters like any other JS method. Express expects a (request, response)

app.get('/',(req,res)=> {  // the forward slash is the home page 
    res.sendFile(__dirname + '/index.html')  // __dirname is the look in current folder of server file shortcut
})

// the ( : colon ) lets express know that this rapperName is a query parameter
app.get('/api/rappers/:rapperName', (req, res)=>{  
    const rapName = req.params.rapperName.toLowerCase()
    console.log('rap Name =',rapName)
    //conditional to handel unknown responses
    if(rappers[rapName]){
    res.json(rappers[rapName])
} else{
    res.json(rappers['unknown'])
}
})
    
// the listen method is where and how the server will hear client request
app.listen(PORT,()=>{ 
    console.log(`Server running on port ${PORT}`) // the console log is to have feedback that server is running
})