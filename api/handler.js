export default function handler(request, response) {
    response.status(200).json({
        body: {
            name:'Diego',
            age:29
        },
        query: request.query,
        cookies: request.cookies,
    });
}
