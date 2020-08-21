module.exports = {
    extends: ['@commitlint/config-conventional'],
    rules: {
        'type-enum': [2,  'always', ['feat', 'fix', 'docs', 'style', 'refactor', 'test', 'revert', 'ci', 'chore']],
    },
    ignores: [(commit) => commit === 'squash'],
};

