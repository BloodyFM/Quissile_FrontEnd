export const getQuizes = async () => {
    return await fetch("https://localhost:7067/quiz", {method: "GET"})
    .then((res) => {
        return res.json()
    }).catch((error: string) => {
        console.error("error fetching quizes: ", error)
    })
} 

export const getQuiz = async (id: number) => {
    return await fetch(`https://localhost:7067/quiz/${id}`, {method: "GET"})
    .then((res) => {
        return res.json()
    }).catch((error: string) => {
        console.error("error fetching quiz: ", error)
    })
} 

export const getQuestions = async () => {
    return await fetch("https://localhost:7067/questions", {method: "GET"})
    .then((res) => {
        return res.json()
    }).catch((error: string) => {
        console.error("error fetching questions: ", error)
    })
}

export const updateTitle = async (id:number, title:string) => {
    return await fetch(`https://localhost:7067/quiz/${id}`, 
    {method: "PUT",
    headers: {
        "Content-Type": "application/json" 
    },
    body: JSON.stringify({title: title})
    })
    .then((res) => {
        if (!res.ok){
            throw new Error("Network response is not ok")
        }
        return res.json()
    })
    .catch((error) => {
        console.error("error updating quiz title", error)
    })
}

export const deleteQuizById = async (id: number) => {
    return await fetch(`https://localhost:7067/quiz/${id}`, {method: "DELETE"})
    .then((res) => {
        return res.json()
    }).catch((error: string) => {
        console.error("error deleting quiz", error)
    })
}

/*



    */



