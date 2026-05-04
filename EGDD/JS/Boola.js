
function Bola(context){ 

    this.context=context; 
    this.x=0; 
    this.y=0; 
    this.velocidadeX=0; 
    this.velocidadeY=0; 

 // Atributos padrão do desenho 

    this.cor='black'; 
    this.raio=10; 

} 

  

Bola.prototype={ 

    atualizar: function(){ 

       let ctx=this.context; 
       this.x+=this.velocidadeX; 
       this.y+=this.velocidadeY; 

  

       if(this.x< this.raio || this.x > canvas.width - this.raio){ 
        this.velocidadeX *= -1; 

        } 

         

       if(this.y < this.raio || this.y > canvas.height - this.raio){ 
         this.velocidadeY*= -1; 

        } 

         

    }, 

    desenhar: function(){ 

       let ctx=this.context; 

       ctx.save(); 

       // Cor da bolnha sendo modificada 

       ctx.fillStyle = this.cor; 

       // Desenhar 

       ctx.beginPath(); 

       ctx.arc(this.x, this.y, this.raio, 0, 2*Math.PI, false); 

       ctx.fill(); 

       // Resetar as configuração da bolinha  

       ctx.restore(); 

    } 

} 
