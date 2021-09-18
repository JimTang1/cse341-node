const fs = require('fs');
const lists =['User1','User2','User3'];

const requestHandler =(req, res) =>{
    const url = req.url;
    const method = req.method;

    if(url === '/'){
        res.write('<html>');
        res.write('<head><title>This is title page</title></head>')
        res.write('<body><p>Hey! Welcome to my first project!</p><form action="/create-user" method="POST"><input type ="text" name="username"><button type="submit">submit</button></form>')
        res.write('<p>This button will take you to the user list</p><form action="/users" method="POST"><button type="submit">submit</button></form></body>')
        res.write('</html>');
        return res.end();
    }
    if(url === '/users'){
        res.write('<html>');
        res.write('<head><title>This is title page</title></head>')
        res.write('<body>')
        res.write('<p>Here is your user list</p>')
        res.write('<p>User1-3 is my dummy data</p>')

        console.log(lists)
        for(let list of lists){
            res.write(`<li>${list}</li>`);
        }
        res.write('</body>')

        res.write('</html>');
        return res.end();
    }
    
    if(url === '/create-user' && method ==="POST"){
        const body =[];

        req.on('data', (chunk) =>{
            body.push(chunk);
        });

        return req.on('end', ()=>{
            const parsedBody = Buffer.concat(body).toString();
            console.log(parsedBody.split('=')[1]);

            const newUser = parsedBody.split('=')[1];
            lists.push(newUser);
            console.log(lists);
            // res.statusCode = 302;
            // res.setHeader('Location','/users');
            res.writeHead(302,{'Location':'/users'})
            res.end();
        });

    }

};

module.exports = requestHandler;
