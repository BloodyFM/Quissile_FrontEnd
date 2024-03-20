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

/*

    useEffect(() => {
        fetchQuizData()
        fetchQuestionData()
    }, [])

    const fetchQuizData = async () => {
        const data = await getQuizes()
        setQuizes(data.data)
    }
    const fetchQuestionData = async () => {
        const data = await getQuestions()
        setQuestions(data.data)
    }

    */



