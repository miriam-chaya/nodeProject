const TasksController={
    getList: (req, res) =>{
        console.log(req.query.status);
        res.res([
            { id: 1, name: "task 1", status: "TODO" },
            { id: 2, name: "task 2", status: "Done" },
        ])
    },
    getById: (req, res) =>{
        res.send(`get task by id ${req.params.id}`);
    },
    add: (req,res)=>{
        res.send("add a new task");
    },
    update: (req,res)=>{
        res.send("update a task");
    },
    delete: (req,res)=>{
        res.send("delete a task");
    },
}
export default TasksController;
