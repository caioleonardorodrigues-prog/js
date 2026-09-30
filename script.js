const preco = 67000
const quantidade = 67
const subtotal = preco * quantidade

const precoMinimo = 67
const Temdesconto = subtotal > precoMinimo

const cidadeCliente = "A"
const cidadeLoja = "B"

const temFrete = Temdesconto && cidadeCliente == cidadeLoja

const msg= `Preço: R$ ${preco}
            Quantidade: R$ ${quantidade}
            subtotal: R$ ${subtotal}
            Valor mínimo para desconto: R$ ${precoMinimo}
            Desconto aplicado? ${Temdesconto ? "sim" : "não"}
            frete grátis: ${temFrete ? "Sim" : "Não"}`

            console.log (msg)