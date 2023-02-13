const constant = {
    DataBase_URI : process.env.Database_URI,

    DataBases : {
        Todos : "Todos"
    },

    UserTypes : {
        User : "User",
        Agent : "Agent"
    },

    MESSAGES: {
        Fetched : "Resources is succesfully fetched.",
        Update : "Resource is Updated.",
        Error : "Error occured.",
        Created :"Resource created succesfully.",
        Deleted:"Resource is succesfully delected."

    }
}

module.exports = constant