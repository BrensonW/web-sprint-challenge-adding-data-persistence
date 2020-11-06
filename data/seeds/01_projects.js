exports.seed = async function(knex) {
    await knex('projects').insert([
        { name: 'Build A Car', description: 'Build yourself your own car', completed: false},
        { name: 'Build A Better AI', description: 'Build an AI that knows truths', completed: false},
        { name: 'Build A PC', description: 'Build your own gaming machine', completed: false},
    ])
}