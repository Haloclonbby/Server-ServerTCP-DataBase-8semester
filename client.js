const net = require('net');
const readline = require('readline-sync')

const options = {
    port: 9000,
    host: '179.19.70.49'
}

const client = net.createConnection(options)

client.on('connect', ()=>{
    console.log('Conexión satisfactoria!!')
    sendLine()
})

client.on('data', (data)=>{
    console.log('El servidor dice:' + data)
    sendLine()
})

client.on('error', (err)=>{
    console.log(err.message)
})

function sendLine() {
    var line = readline.question('\ndigite alguna cosa\t')
    if (line == "0") {
        client.end()
    }else{
        client.write(line)
    }
}