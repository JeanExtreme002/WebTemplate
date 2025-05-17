const commitlint = require('@commitlint/cz-commitlint');

function predicate(search, choice) {
  return choice.toLowerCase().includes(search.toLowerCase());
}

function normalizeChoice(choice, fallback, resolve = (c) => c) {
  if (typeof choice === 'string') {
    return resolve(choice);
  } else if (choice.value) {
    return resolve(choice.value);
  }
  return resolve(fallback);
}

function patchQuestionValidate(question) {
  const { validate } = question;
  return (choice) => validate(normalizeChoice(choice));
}

function patchCzPrompt(cz) {
  const { prompt } = cz;
  return (questions) =>
    prompt(
      questions.map((question) => {
        if (question.type === 'list') {
          question.type = 'autocomplete';
          question.validate = patchQuestionValidate(question);
          question.source = async (_, input) => {
            input = (input || '').trim();
            if (!input) return question.choices;
            return question.choices.filter((choice) =>
              normalizeChoice(choice, true, (c) => predicate(input, c))
            );
          };
        }
        return question;
      })
    );
}

module.exports = {
  async prompter(cz, commit) {
    const autocomplete = await import('inquirer-autocomplete-prompt');
    cz.prompt.registerPrompt('autocomplete', autocomplete.default);
    cz.prompt = patchCzPrompt(cz);
    return commitlint.prompter(cz, commit);
  },
};
