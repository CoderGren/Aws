
exports.handler = async function(event) {
    console.log('request: ', JSON.stringify(event))
    return {
        statusCode: 200,
        headers: {
            'Content-Type': 'text/plain',
        },
        body: `Good Afternoon, CDK! You've hit ${event.path}\n`,
    }
}