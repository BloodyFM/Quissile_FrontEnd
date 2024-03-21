import { Alternative, Quiz } from "../App"

export const getQuizes = async () => {
    return await fetch("https://localhost:7067/quizes", {method: "GET"})
    .then((res) => {
        return res.json()
    }).catch((error: string) => {
        console.error("error fetching quizes: ", error)
    })
} 

export const getQuiz = async (id: number) => {
    return await fetch(`https://localhost:7067/quizes/${id}`, {method: "GET"})
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

export const getQuestion = async (id:number) => {
    return await fetch(`https://localhost:7067/questions/${id}`, {method: "GET"})
    .then((res) => {
        return res.json()
    }).catch((error: string) => {
        console.error("error fetching question", error)
    })
}

export const addQuestion = async (text: string) => {
    return await fetch("https://localhost:7067/questions", 
    {method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({text: text})})
    .then((res) => {
        if (!res.ok){
            throw new Error("Network response is not ok")
        }
        return res.json()
    })
    .catch((error: string) => {
        console.error("error adding question", error)
    })
}

export const updateQuestion = async (id: number, text:string) => {
    return await fetch(`https://localhost:7067/questions/${id}`, 
    {method: "PUT",
    headers: {
        "Content-Type":"application/json"
    },
    body: JSON.stringify({text: text})
    })
    .then((res) => {
        return res.json()
    }).catch((error: string) => {
        console.error("error updating question", error)
    })
}

export const addQuestionToQuiz = async (id: number, text: string, quizId: number) => {
    return await fetch(`https://localhost:7067/questions/${id}`, 
    {method: "PUT",
    headers: {
        "Content-Type":"application/json"
    },
    body: JSON.stringify({text: text, quizId: quizId})
    })
    .then((res) => {
        return res.json()
    }).catch((error: string) => {
        console.error("error updating question", error)
    })
}

export const addQuiz = async (title: string) => {
    return await fetch("https://localhost:7067/quizes", 
    {method: "POST",
    headers: {
        "Content-Type":"application/json"
    },
    body: JSON.stringify({title: title})
    })
    .then((res) => {
        if (!res.ok){
            throw new Error("Network response is not ok")
        }
        return res.json()
    })
    .catch((error: string) => {
        console.error("error adding quiz", error)
    })
} 

export const updateTitle = async (id:number, title:string) => {
    return await fetch(`https://localhost:7067/quizes/${id}`, 
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
    return await fetch(`https://localhost:7067/quizes/${id}`, {method: "DELETE"})
    .then((res) => {
        return res.json()
    }).catch((error: string) => {
        console.error("error deleting quiz", error)
    })
}

export const deleteQuestion = async (id: number) => {
    return await fetch(`https://localhost:7067/questions/${id}`, {method: "DELETE"})
    .then((res) => {
        return res.json()
    }).catch((error: string) => {
        console.error("error deleting question", error)
    })
}

export const deleteAlternative = async (alternativeId: number) => {
    return await fetch(`https://localhost:7067/alternatives/${alternativeId}`, {method: "DELETE"})
    .then((res) => {
        return res.json()
    }).catch((error: string) => {
        console.error("Error deleting alternative: ", error)
    })
}

export const updateQuestionAlternatives = async (questionId: number, text: string, quizId: number | null, alternatives: Alternative[]) => {
    const body = {
        quizId: quizId,
        text: text,
        alternatives
    }
    return await fetch(`https://localhost:7067/questions/${questionId}`, 
    {method: "PUT", 
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify(body)
    }).then((res) => {
        return res.json()
    }).catch((error: string) => {
        console.error("error updating alternatives in question", error)
    })
}


