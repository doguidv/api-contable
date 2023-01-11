const { CreateNewWorkout, UptadeOneWorkout, DeleteOneWorkout } = require('../Controllers/workoutController');
const DB    = require ('./db.json');
const {saveToDatabase}= require ("./utils");

const getAllWorkouts = ()  => {
    return  DB.workouts
};

const getOneWorkout=(workoutid)=>{
    const workout=DB.workouts.find((workout)  =>    workout.id==workoutid)
    if (!workout){
    return workout
    }
    return workout
}
const CreateNewWorkout =(NewWorkout)=>
{
    const isAllreadyAdded = DB.workouts.findIndex((workouts)==  workouts.name)  >-1

    if(isAllreadyAdded){
    return
    }
    DB.workouts.push (NewWorkout)
    saveToDatabase(DB)
return  NewWorkout
};

const UptadeOneWorkout=(workoutid,changes)=>{
    const IndexForUpdate= DB.workouts.findIndex((workout)=>(workout.id=workoutid)
    )
    if(IndexForUpdate==-1){
        return  
    }

    const UptadeWorkout={ 
    ...DB.workouts[IndexForUpdate],
    ...changes,
    updateAt:new Date().toLocaleString("en-US",{timeZone:"UTC"})
    }

    DB.workouts[IndexForUpdate]=UptadeOneWorkout
    saveToDatabase(DB);
    return UptadeWorkout
}
const DeleteOneWorkout=(workoutid)=>{

    const IndexForDelete=Db.workouts.findIndex((workout)=>workout.id=workoutid)
    if(IndexForDelete==-1){
        return
    }
    DB.workouts.splice(IndexForDelete,1)
    saveToDatabase(DB);
    
}
module.exports={getAllWorkouts,getOneWorkout , CreateNewWorkout,UptadeOneWorkout,DeleteOneWorkout };