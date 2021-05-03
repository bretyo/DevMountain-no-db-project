let madLibs = [
    {
        id: 0,
        title: 'The Squirrel',
        entryItems: [
            {name: ''},
            {noun: ''},
            {verb: ''},
            {verb_that_ends_in_ing: ''}
        ],
        passage: 'There was a squirrel named %%%%. He always went to the %%%% where he would %%%% really fast. Until a hunter shot him for %%%% too often.'
    },
    {
        id: 1,
        title: 'The Squirrel',
        entryItems: [
            {name: ''},
            {noun: ''},
            {verb: ''},
            {verb_that_ends_in_ing: ''}
        ],
        passage: 'There was a squirrel named %%%%. He always went to the %%%% where he would %%%% really fast. Until a hunter shot him for %%%% too often.'
    }
]

let madLibsFinished = [
    {
        id: 0,
        title: 'The Squirrel named Jim',
        entryItems: [
            {name: 'Jim'},
            {noun: 'basketball court'},
            {verb: 'run'},
            {verb_that_ends_in_ing: 'running'}
        ],
        passage: 'There was a squirrel named %%%%. He always went to the %%%% where he would %%%% really fast. Until a hunter shot him for %%%% too often.'
    }
]

let id = 2;
let idSaved = 1;

module.exports = {
    getMadLibs : (req, res)=>{
        res.status(200).send(madLibs);
    },

    getMadLib : (req, res)=>{
        const {id} = req.params
        const index = madLibs.findIndex(element=>element.id === +id)
        if(index === -1){
            return res.status(500).send('couldn\'t find Id')
        }
        res.status(200).send(madLibs[index]);
    },

    getFinishedMadLibs : (req, res)=>{
        res.status(200).send(madLibsFinished);
    },

    getFinishedMadLib : (req, res)=>{
        const {id} = req.params
        console.log(id)
        const index = madLibsFinished.findIndex(element=>element.id === +id)
        if(index === -1){
            return res.status(500).send('couldn\'t find Id')
        }
        res.status(200).send(madLibsFinished[index]);
    },

    deleteMadLib: (req,res)=>{

    },

    deleteFinishedMadLib: (req, res)=>{
        const {id} = req.params;
        const index = madLibsFinished.findIndex(element=>element.id === +id)
        if(index === -1){
            return res.status(500).send('couldn\'t find Id')
        }
        madLibsFinished.splice(index, 1);
        res.status(200).send(madLibsFinished);
    },

    addMadLib: (req,res)=>{

    },

    addFinishedMadLib: (req, res)=>{
        console.log(req.body)
        const {title, entryItems,passage} = req.body;
        if(!title || !entryItems || !passage){
            return    res.status(500).send('Needs a title, entry items, and passage')
        }

        madLibsFinished = [...madLibsFinished, {id: idSaved, title, entryItems, passage}];
        idSaved++;
        res.status(200).send(madLibsFinished)
    },

    editFinishedMadLib: (req,res)=>{
        const {title, entryItems} = req.body;
        const {id} = req.params;

        if(!title && !entryItems){
            return    res.status(500).send('You need something to change! Otherwise, why are you doing this?')
        }
        const index = madLibsFinished.findIndex(element=>element.id === +id)

        madLibsFinished[index] = {
            id: +id,
            title: title || madLibsFinished[index].title,
            entryItems: entryItems|| madLibsFinished[index].entryItems,
            passage: madLibsFinished[index].passage
        }

        res.status(200).send(madLibsFinished);
    }
}