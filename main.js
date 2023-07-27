let input = document.getElementById('input')
let btn = document.getElementById('btn')
let Name = document.getElementById('name')
let def = document.getElementById('def')
let syn = document.getElementById('syn')
let date = document.getElementById('date')
let issn = document.getElementById('issn')
let acq = document.getElementById('acq')

let library = [
    {
        word: "Things Fall Apart",
        auth: "This is a fruit located in the Nothern America.",
        syn: "Chimobi Achiebe",
        acq: "Donation",
        issn: "SN12356789",
        date: "12-19-1997"
    },
    {
        word: "Things Fall Apart",
        auth: "This is a fruit located in the Nothern America.",
        syn: "Chimobi Achiebe",
        acq: "Donation",
        issn: "SN12356789",
        date: "12-19-1997"
    },
    {
        word: "Things Fall Apart",
        auth: "This is a fruit located in the Nothern America.",
        syn: "Chimobi Achiebe",
        acq: "Donation",
        issn: "SN12356789",
        date: "12-19-1997"
    },
    {
        word: "Things Fall Apart",
        auth: "This is a fruit located in the Nothern America.",
        syn: "Chimobi Achiebe",
        acq: "Donation",
        issn: "SN12356789",
        date: "12-19-1997"
    },
    {
        word: "Things Fall Apart",
        auth: "This is a fruit located in the Nothern America.",
        syn: "Chimobi Achiebe",
        acq: "Donation",
        issn: "SN12356789",
        date: "12-19-1997"
    },
    {
        word: "Things Fall Apart",
        auth: "This is a fruit located in the Nothern America.",
        syn: "Chimobi Achiebe",
        acq: "Donation",
        issn: "SN12356789",
        date: "12-19-1997"
    },
    {
        word: "Things Fall Apart",
        auth: "This is a fruit located in the Nothern America.",
        syn: "Chimobi Achiebe",
        acq: "Donation",
        issn: "SN12356789",
        date: "12-19-1997"
    },
    {
        word: "Things Fall Apart",
        auth: "This is a fruit located in the Nothern America.",
        syn: "Chimobi Achiebe",
        acq: "Donation",
        issn: "SN12356789",
        date: "12-19-1997"
    },
    {
        word: "Things Fall Apart",
        auth: "This is a fruit located in the Nothern America.",
        syn: "Chimobi Achiebe",
        acq: "Donation",
        issn: "SN12356789",
        date: "12-19-1997"
    },
    {
        word: "Things Fall Apart",
        auth: "This is a fruit located in the Nothern America.",
        syn: "Chimobi Achiebe",
        acq: "Donation",
        issn: "SN12356789",
        date: "12-19-1997"
    },
    {
        word: "Things Fall Apart",
        auth: "This is a fruit located in the Nothern America.",
        syn: "Chimobi Achiebe",
        acq: "Donation",
        issn: "SN12356789",
        date: "12-19-1997"
    },
    
]

btn.addEventListener('click', ()=>{
    let inputVal = String(input.value).trim().toLowerCase()
    if(inputVal === ""){
        alert("Please type a text")
    }
    let result = library.find((dict)=> dict.word.toLowerCase() === inputVal)
    if(result){
        Name.textContent = result.word
        def.textContent = result.def
        syn.textContent = result.auth
        acq.textContent = result.acq
        issn.textContent = result.issn
        date.textContent = result.date

    }
    else{
        Name.textContent = "Word Not Found"
        def.textContent = ""
        syn.textContent = ""
        date.textContent = ""
        issn.textContent = ""
        acq.textContent = ""
    }
    input.value =""
})

input.addEventListener('keyup', (e)=>{
    if(e.key == 'Enter'){
        let inputVal = String(input.value).trim().toLowerCase()
    if(inputVal === ""){
        alert("Please type a text")
    }
    let result = library.find((dict)=> dict.word.toLowerCase() === inputVal)
    if(result){
        Name.textContent = result.word
        def.textContent = result.def
        syn.textContent = result.syn
        acq.textContent = result.acq
        issn.textContent = result.issn
        date.textContent = result.date
    }
    else{
        Name.textContent = "Word Not Found"
        def.textContent = ""
        syn.textContent = ""
        date.textContent = ""
        issn.textContent = ""
        acq.textContent = ""
    }
    input.value =""
    }
})












