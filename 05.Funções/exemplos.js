// strinf fixa, sem necessidadede parametro
function cumprimentar1(){
    console.log('oi gente!')
   }
   
cumprimentar1()

//recebe via parametro o nome da pessoa
function cumprimentaPessoa1(pessoa){
    console.log(`oi, ${pessoa}!`)
}

cumprimentaPessoa1('Helena')

//junta dois
function cumprimentar(){
    return 'Oi gente!'
}
   
function cumprimentaPessoa(nomePessoa) {
    console.log(`${cumprimentar()} Meu nome é ${nomePessoa}`)
}
   
cumprimentaPessoa('Paula') 
// “Oi gente! Meu nome é Paula”