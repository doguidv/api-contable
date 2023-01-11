const workoutService=   requiere ("../service/workoutService");



const getAllWorkouts = (req,res)=>{
    const Allworkouts= workoutService.getAllWorkouts();

    res.send({status:'OK', data: Allworkouts});
}

const getAllWorkout  = (req,res)=>{
    const {params:{workoutid}}=req

    if (!workoutid){
        return
    }
    const getoneWorkout= workoutService.getAllWorkout(req.params.workoutid);

    res.send(`Get workout ${req.params.workoutid}`)

        const workout   =   workoutService.getOneWorkout(workoutid)
        res.send({status:'OK', data: workouts});

}


const  CreateNewWorkout  = (req,res)=>{
    const {body}= req;

    if (!body.Fecha||   !body.Detalle   ||  !body.importe    ||  !body.id_categorias){
        return;
    }
    const NewWorkout ={
        Fecha: body.Fecha,
        Detalle:body.Detalle,
        importe: body.importe,
        id_categorias: body.id_categorias
    };
const CreateoneWork= workoutService.CreateNewWorkout(NewWorkout)
    res.status(201).send({status:"OK", data:CreateNewWorkout })
    return 
 }

 const  UptadeOneWorkout  = (req,res)=>{
    const {
        body,
        params:{workout},
    }   =  req

    if(!workoutid){
        return;
    }
    const UptadeWorkout= workoutService.UptadeOneWorkout(workoutid,body)
    res.send({status:'OK', data: UptadeWorkout});
    }    


 const DeleteOneWorkout  = (req,res)=>{
    const {
        params:{workoutid}
    }=req
    if(!workoutid){
        return
    }
    workoutService.DeleteOneWorkout(workoutid)
        res.status(204).send({status:'OK'});
 }

 

module.exports={
    getAllWorkout,
    getAllWorkouts,
    CreateNewWorkout,
    UptadeOneWorkout,
    DeleteOneWorkout
};