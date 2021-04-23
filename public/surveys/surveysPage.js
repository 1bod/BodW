var surveyDB = [{ "title": "S1", "description": "A placeholder survey", "questions": [{ "name": "Can you answer ?", "type": "radio", "choices": ["Yes", "No"] }] }]
console.log(surveyDB)
surveyDB.forEach(survey => {
    let element = '<div class="col-6  my-2"> <div class="card p-1"> <div class="card-body"> <h5 class="card-title">' + survey.title+'</h5> <p class="card-text">' + _.escape(survey.description) + '</p> <a href="' + _.escape(survey.title) + '" class="btn btn-primary">Take the survey</a> </div> </div> </div>'
    console.log(element)
    document.querySelector('.selectedSurveyList .row').insertAdjacentHTML("beforeend",element)
}
)