let madLibs = [
    {
        id: 0,
        title: 'The Squirrel',
        entryItems: [
            { name: '' },
            { noun: '' },
            { verb: '' },
            { verb_that_ends_in_ing: '' }
        ],
        passage: 'There was a squirrel named %%%%. He always went to the %%%% where he would %%%% really fast. Until a hunter shot him for %%%% too often.'
    },
    {
        id: 1,
        title: 'Opera',
        entryItems: [
            { adjective: '' },
            { country: '' },
            { adjective: '' },
            { noun: '' },
            { body_part: '' },
            { body_part: '' },
            { adjective: '' },
            { animal: '' },
            { beverage: '' },
            { violent_act_ending_with_ing: '' },
            { verb_past_tense: '' },
            { animal: ''},
            { small_item: ''},
            { large_item: ''}
        ],
        passage: 'Opera refers to a %%%% art form, originating in %%%%, \
        in which the %%%% content is conveyed to the %%%% as much through music, both vocal and instrumental, \
        as it is through the %%%%. By contrast, in musical theater an actor\'s %%%% is primary, \
        and the music plays a lesser role. \
        The %%%% %%%% in opera is presented using the primary elements of theater such as %%%%, costumes, and %%%%. \
        However, the words of the opera, or libretto, are %%%% rather than spoken. \
        The singers are accompanied by a musical %%%% ranging from a small instrumental %%%% to a full symphonic %%%%.'
    },
    {
        id: 2,
        title: 'The Crocodile',
        entryItems: [
            { adjective: '' },
            { plural_noun: '' },
            { adjective: '' },
            { adverb: '' },
            { plural_body_part: '' },
            { plural_noun: '' },
            { verb_ending_with_ing: '' },
        ],
        passage: 'How doth the little crocodile\
        Improve his %%%% tail,\
        And pour the %%%% of the Nile\
        On every %%%% scale!\
        How %%%% he seems to grin,\
        How neatly spreads his %%%%,\
        And welcomes little %%%% in,\
        With gently %%%% jaws!'
    },
    {
        id: 3,
        title: 'Pulp Fiction',
        entryItems: [
            { noun: '' },
            { place: ''},
            { mean_name: ''},
            { celebrity: ''},
            { noun: ''},
            { silly_nickname: ''},
            { adjective: ''},
            { adjective: ''},
            { adjective: ''},
            { noun: ''},
            { mildly_violent_verb_ends_with_s: ''},
            { verb_ending_with_ing: ''},
            { noun: ''},
            { verb: ''},
            { verb_past_tense: ''}
        ],
        passage: `Jules: What does Marsellus Wallace look like?
        Brett: ..What?
        Jules: \[angrily throws the %%%% in the room] What %%%% are you from!?
        Brett: Wha-what?
        Jules: "What" ain't no country I ever heard of! They speak English in "What"!?
        Brett: What?
        Jules: ENGLISH, %%%% DO YOU SPEAK IT!?
        Brett: Yes!!
        Jules: THEN YOU KNOW WHAT I’M SAYING!
        Brett: Yes..!
        Jules: DESCRIBE WHAT %%%% LOOKS LIKE!
        Brett: Wha-what I—?
        Jules: [points %%%% directly in Brett's face] SAY "WHAT" AGAIN! SAY "WHAT" AGAIN! I DARE YOU! I DOUBLE-DARE YOU, %%%% SAY "WHAT" ONE MORE %%%% TIME!
        Brett: H-H-He's %%%%...
        Jules: GO ON!
        Brett: ...He's %%%%...!
        Jules: Does he look like a %%%%?!
        Brett: What? [Jules %%%% Brett in the shoulder] AGHH!! Anh..!!
        Jules: [%%%% at the top of his lungs] DOES! HE! LOOK!... LIKE! A %%%%?!?!
        Brett: NO!
        Jules: Then why'd you try to %%%% him like one, Brett?
        Brett: I didn't...!
        Jules: Yes, you did! YES, you DID, Brett!
        Brett: No... no....
        Jules But Marsellus Wallace don't like to be %%%% by anybody except Mrs. Wallace.`
    },
    {
        id:4,
        title: 'The Star Wars Tragedy',
        entryItems: [
            { silly_nickname: ''},
            { group_of_people: ''},
            { animal: ''},
            { plural_noun: ''},
            { verb_ending_with_ing: ''}, 
            { plural_noun: ''},
            { body_part: ''},
            { house_pet: ''},
            { celebrity: ''}
        ],
        passage: `Did you ever hear the tragedy of Darth %%%% The Wise? I thought not. It’s not a story the %%%% would tell you. 
        It’s a Sith legend. He was a Dark %%%% of the Sith, so powerful and so wise he could 
        use %%%% to influence the midichlorians to create life… 
        He had such a knowledge of the dark side that he could even keep the ones he cared about from %%%%. 
        The dark side of the Force is a pathway to many %%%% some consider to be unnatural. 
        He became so powerful… the only thing he was afraid of was losing his %%%%, which eventually, of course, he did. 
        Unfortunately, he taught his apprentice everything he knew, then his %%%% killed him in his sleep. 
        Ironic. He could save %%%% from death, but not himself.`
    }
]

let madLibsFinished = [
    {
        id: 0,
        title: 'The Squirrel named Jim',
        entryItems: [
            { name: 'Jim' },
            { noun: 'basketball court' },
            { verb: 'run' },
            { verb_that_ends_in_ing: 'running' }
        ],
        passage: 'There was a squirrel named %%%%. He always went to the %%%% where he would %%%% really fast. Until a hunter shot him for %%%% too often.'
    }
]

let id = 2;
let idSaved = 1;

module.exports = {
    getMadLibs: (req, res) => {
        res.status(200).send(madLibs);
    },

    getMadLib: (req, res) => {
        const { id } = req.params
        const index = madLibs.findIndex(element => element.id === +id)
        if (index === -1) {
            return res.status(500).send('couldn\'t find Id')
        }
        res.status(200).send(madLibs[index]);
    },

    getFinishedMadLibs: (req, res) => {
        res.status(200).send(madLibsFinished);
    },

    getFinishedMadLib: (req, res) => {
        const { id } = req.params
        // console.log(id)
        const index = madLibsFinished.findIndex(element => element.id === +id)
        if (index === -1) {
            return res.status(500).send('couldn\'t find Id')
        }
        res.status(200).send(madLibsFinished[index]);
    },

    deleteMadLib: (req, res) => {

    },

    deleteFinishedMadLib: (req, res) => {
        const { id } = req.params;
        const index = madLibsFinished.findIndex(element => element.id === +id)
        if (index === -1) {
            return res.status(500).send('couldn\'t find Id')
        }
        madLibsFinished.splice(index, 1);
        res.status(200).send(madLibsFinished);
    },

    addMadLib: (req, res) => {

    },

    addFinishedMadLib: (req, res) => {
        // console.log(req.body)
        const { title, entryItems, passage } = req.body;
        if (!title || !entryItems || !passage) {
            return res.status(500).send('Needs a title, entry items, and passage')
        }

        madLibsFinished = [...madLibsFinished, { id: idSaved, title, entryItems, passage }];
        idSaved++;
        res.status(200).send(madLibsFinished)
    },

    editFinishedMadLib: (req, res) => {
        const { title, entryItems } = req.body;
        const { id } = req.params;

        if (!title && !entryItems) {
            return res.status(500).send('You need something to change! Otherwise, why are you doing this?')
        }
        const index = madLibsFinished.findIndex(element => element.id === +id)

        madLibsFinished[index] = {
            id: +id,
            title: title || madLibsFinished[index].title,
            entryItems: entryItems || madLibsFinished[index].entryItems,
            passage: madLibsFinished[index].passage
        }

        res.status(200).send(madLibsFinished);
    }
}