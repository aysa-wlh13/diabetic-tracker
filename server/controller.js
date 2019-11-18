const tracker = [
    {
        bloodSugar: 90,
        food: 'juice',
        grams: 12,
        units:'',
        time: '12:00',
        date: '11/18/19'
    },
    {
        bloodSugar: 200,
        food: '',
        grams: '',
        units: 4,
        time: '4:00',
        date: '11/18/19'
    },   
    {
        bloodSugar: 150,
        food: 'potato',
        grams: 59,
        units: 8,
        time: '6:00',
        date: '11/18/19'
    }
];


module.exports = {
    //get
    allTracker(req, res){
        res.status(200).send(tracker);
    },

    //post
    addTracker(req, res){
        const {bloodSugar, food, grams, units, time, date} = req.body

        tracker.push({bloodSugar, food, grams, units, time, date})

        res.status(200).send(tracker);
    },

    //delete
    deleteTracker(req, res){
        const {index} = req.params;

        tracker.splice(index, 1);

        res.status(200).send(tracker);
    },

    //put
    editTracker(req, res){
        const {index, newTracker} = req.body;

        tracker[index].info = newTracker;

        res.status(200).send(tracker);
    }
};