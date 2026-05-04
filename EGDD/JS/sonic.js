let SONIC_DIREITA=1;
let SONIC_ESQUERDA=2;

function Sonic(context, teclado, imagem){
    this.context=context;
    this.teclado=teclado;
    this.x=0;
    this.y=0;
    this.velocidade=10;
    this.quadro=new Spritesheet(context, imagem, 3, 8);
    this.quadro.intervalo=60;
    this.andando=false;
    this.direcao= SONIC_DIREITA;
}
Sonic.prototype={
    atualizar: function(){
        if(this.teclado.pressionada(SETA_DIREITA)){
            if(!this.andando || this.direcao != SONIC_DIREITA){
                this.quadro.linha=1;
                this.quadro.coluna=0;
            }
                this.andando=true;
                this.direcao=SONIC_DIREITA;
                this.quadro.proximoQuadro();
                this.x += this.velocidade;
        }
        else if(this.teclado.pressionada(SETA_ESQUERDA)){
            if(!this.andando || this.direcao != SONIC_ESQUERDA){
                this.quadro.linha=2;
                this.quadro.coluna=0;
            }
            this.andando=true;
            this.direcao=SONIC_ESQUERDA;
            this.quadro.proximoQuadro();
            this.x -= this.velocidade;
        }
        else{
            if(this.direcao == SONIC_DIREITA)
                this.quadro.coluna=0;
            else if(this.direcao==SONIC_ESQUERDA)
                this.quadro.coluna=1;

            this.quadro.linha=0;
            this.andando=false;
        }

    },
    desenhar:function(){
        this.quadro.desenhar(this.x, this.y);
    }
}
