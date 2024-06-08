const fastify = require('fastify')();
const { getQuestions } = require('./p4-module.js');

fastify.get('/cit/question', (request, reply) => {
    const questions = getQuestions();
    const response = {
        error: '',
        statusCode: 200,
        questions: questions
    };
    reply.send(response);
});

fastify.get('/cit/answer', (request, reply) => {
    const answers = getAnswers();
    const response = {
        error: '',
        statusCode: 200,
        answers: answers
    };
    reply.send(response);
});

fastify.get('/cit/questionanswer', (request, reply) => {
    const questionsAnswers = getQuestionsAnswers();
    const response = {
        error: '',
        statusCode: 200,
        questions_answers: questionsAnswers
    };
    reply.send(response);
});

fastify.get('/cit/question/:number', (request, reply) => {
    const { number } = request.params;
    const result = getQuestion(number);
    reply.send({
        error: result.error,
        statusCode: result.error ? 400 : 200,
        question: result.question,
        number: result.number
    });
});

fastify.get('/cit/answer/:number', (request, reply) => {
    const { number } = request.params;
    const result = getAnswer(number);
    reply.send({
        error: result.error,
        statusCode: result.error ? 400 : 200,
        answer: result.answer,
        number: result.number
    });
});

fastify.get('/cit/questionanswer/:number', (request, reply) => {
    const { number } = request.params;
    const result = getQuestionAnswer(number);
    reply.send({
        error: result.error,
        statusCode: result.error ? 400 : 200,
        question: result.question,
        answer: result.answer,
        number: result.number
    });
});

fastify.setNotFoundHandler((request, reply) => {
    reply
        .code(404)
        .send({ error: 'Route not found', statusCode: 404 });
});

const start = async () => {
    try {
        await fastify.listen(3000);
        console.log('Server running on port 3000');
    } catch (err) {
        console.error(err);
        process.exit(1);
    }
};

start();
