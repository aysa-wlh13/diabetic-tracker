const tracker = [
    {
        bloodSugar: '90',
        food: 'juice',
        grams: '12',
        units:'',
        time: '12:00',
        date: '11/18/19'
    },
    {
        bloodSugar: '200',
        food: '',
        grams: '',
        units:'4',
        time: '4:00',
        date: '11/18/19'
    },   
    {
        bloodSugar: '150',
        food: 'potato',
        grams: '59',
        units:'8',
        time: '6:00',
        date: '11/18/19'
    }
]


module.exports = {
    //get
    allTracker(req, res){
        res.status(200).send(tracker);
    },

    //post
    addTracker(req, res){
        res.status(200).send(tracker);
    },

    //delete
    deleteTracker(req, res){
        res.status(200).send(tracker);
    },

    //put
    editTracker(req, res){
        res.status(200).send(tracker);
    }
};