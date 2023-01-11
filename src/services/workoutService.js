   const workout = require ('../models/Workout')
const {v4:uuid} = require ('uuid');
  

   const getAllWorkouts=()=> {
   const Allworkouts= workout.getAllWorkouts();
   return Allworkouts
   };
   
   const getAllWorkout=(workoutid)=> {
      const workout=workout.getOneWorkout(workoutid)
      return workout;
   };
   
   const CreateNewWorkout=(NewWorkout)=> {
      const workoutToInsert={
         ...NewWorkout,
       id: uuid(),
       createAt: new Date().toLocaleDateString("en-US",{timeZone:"UTC"}),
       updateAt: new Date().toLocaleDateString("en-US",{timeZone:"UTC"}),
          
      
      }
      const CreateNewWorkout=workout.CreateNewWorkout(workoutToInsert);
      return CreateNewWorkout;
   };
   
   const UptadeOneWorkout=(workoutid,changes)=> {

      const UptadeWorkout= workout.UptadeOneWorkout(workoutid,changes)

      return UptadeWorkout 
      ;}
    
   const DeleteOneWorkout=(workoutid)=> {
      workout.DeleteOneWorkout(workoutid)
   }
   
   module.exports ={
      getAllWorkouts,
      getAllWorkout,
      CreateNewWorkout,
      UptadeOneWorkout,
      DeleteOneWorkout
   }