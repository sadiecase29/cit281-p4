const students = require('./p4-data.js');


function getQuestions() {
    return data.map(item => item.question);
}

function getAnswers() {
    return data.map(item => item.answer);
}

function getQuestionsAnswers() {
    return data.map(item => ({ ...item }));
}

    function getQuestion(number = "") {
      
        const index = parseInt(number) - 1;
    
        if (isNaN(index) || index < 0 || index >= data.length) {
            return { question: '', number: '', error: 'Invalid question number' };
        }
    return { ...data[index], number: index + 1, error: '' };
}

function getAnswer(number = "") {
    const index = parseInt(number) - 1;
    if (index < 0 || index >= data.length) {
        return { answer: '', number: '', error: 'Invalid question number' };
    }
    return { answer: data[index].answer, number: index + 1, error: '' };
}

function getQuestionAnswer(number = "") {
    const index = parseInt(number) - 1;
    if (index < 0 || index >= data.length) {
        return { question: '', answer: '', number: '', error: 'Invalid question number' };
    }
    return { question: data[index].question, answer: data[index].answer, number: index + 1, error: '' };
}

module.exports = {
    getQuestions,
    getAnswers, 
    getQuestionsAnswers,
    getQuestion, 
    getAnswer, 
    getQuestionAnswer
};

const { data } = require('./p4-data.js');
console.log(data);

/*****************************
  Module function testing
******************************/
function testing(category, ...args) {
    console.log(`\n** Testing ${category} **`);
    console.log("-------------------------------");
    for (const o of args) {
      console.log(`-> ${category}${o.d}:`);
      console.log(o.f);
    }
  }
  
  // Set a constant to true to test the appropriate function
  const testGetQs = false;
  const testGetAs = false;
  const testGetQsAs = false;
  const testGetQ = true;
  const testGetA = false;
  const testGetQA = false;
  const testAdd = false;      // Extra credit
  const testUpdate = false;   // Extra credit
  const testDelete = false;   // Extra credit

  

if (testGetQs) {
    testing("getQuestions", { d: "()", f: getQuestions() });
}

if (testGetAs) {
    testing("getAnswers", { d: "()", f: getAnswers() });
}

if (testGetQsAs) {
    testing("getQuestionsAnswers", { d: "()", f: getQuestionsAnswers() });
}

if (testGetQ) {
    testing(
        "getQuestion",
        { d: "()", f: getQuestion() },
        { d: "(0)", f: getQuestion(0) },
        { d: "(1)", f: getQuestion(1) },
        { d: "(4)", f: getQuestion(4)
        }
    );
}

if (testGetA) {
    testing(
        "getAnswer",
        { d: "()", f: getAnswer() },
        { d: "(0)", f: getAnswer(0) },
        { d: "(1)", f: getAnswer(1) },
        { d: "(4)", f: getAnswer(4) }
    );
}

if (testGetQA) {
    testing(
        "getQuestionAnswer",
        { d: "()", f: getQuestionAnswer() },
        { d: "(0)", f: getQuestionAnswer(0) },
        { d: "(1)", f: getQuestionAnswer(1) },
        { d: "(4)", f: getQuestionAnswer(4)
        }
    );
}

testGetQs = false;
testGetAs = false;
testGetQsAs = false;
testGetQ = false;
testGetA = false;
testGetQA = false;
testAdd = false;
testUpdate = false;
testDelete = false;
