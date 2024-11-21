import Image      from "next/image";
import Style      from "./page.module.css";

/**Images of sites */
import Dente      from "../../public/dente.png";
import aparelho   from "../../public/aparelho.png";
import Alberto    from "../../public/cliente01.png";
import Eliana     from "../../public/cliente02.png";
import Carla      from "../../public/cliente03.png";
import DraAna     from "../../public/dentista01.png";
import DrCarlos   from "../../public/dentista02.png";

/**Cards of sites*/
import Avaliation from "./components/CardsAvaliation"
import InfoCards  from "./components/CardsInfo";


/**Links imported*/
import Link from "next/link/"

export default function Home() {

let nome    = ["Alberto".toUpperCase(),"Eliana".toUpperCase(),"Carla".toUpperCase()];
let content = "Por dois anos eu fiz o tratamento com Dentes saudáveis que me atendeu com profissionalismo e cuidado.";

let horarioDiaUtil = "9:00 ás 18:00";
let horarioSabado  = "9:00 ás 17:00";
let horarioDomingo = "9:00 ás 12:00";

let diaSemanas = ["Segunda-Feira".toUpperCase(),"Terça-Feira".toUpperCase(),"Quarta-Feira".toUpperCase(),"Quinta-Feira".toUpperCase(),"Sexta-Feira".toUpperCase(),"Sábado".toUpperCase(),"Domingo".toUpperCase()]; 

let TitlePreRodape = "Onde Estamos Localizados?".toUpperCase();

return (
<>

<header className={Style.Header}>
<h2><Image src={Dente}/>Dentes Saudáveis</h2>
</header> 

{/**Seção conteúdo corpo da pagina */}
<main className={Style.BodyContent}>

{/**Container Pré Apresentação */}
<div className={Style.ContentPreApresentation}>
    
<div>
<h2>OS MELHORES <span>APARELHOS DENTÁRIOS</span></h2>
<h4>Confira abaixo todas as especialidades odontológicas que temos a sua disposição.</h4>

<section>
<p><Image src={Dente} alt={"Dente.png"}/>Pré-Avaliação</p>
<p className={"Text-right"}><Image src={Dente} alt={"Dente.png"}/>Aparelhos Dentários</p>
<p><Image src={Dente} alt={"Dente.png"}/>Raio-X Digital</p>
<p className={"Text-right"}><Image src={Dente} alt={"Dente.png"}/>Clareamento Dental</p>
</section>
</div>

</div>
{/**Fim container pré apresentação*/}

{/**Seção Dicas*/}
<div className={Style.ContentDicas}>
<h2 className={Style.TitleSpecial}>Por Que utilizar aparelhos?</h2>
<Image src={aparelho} alt={"aparelho.png"}/>

<section>

<div>
<h2>Alinhar os dentes</h2>
<p>Dentes desalinhados causam problemas nos dentes e podem afetar a digestão dos alimentos e a respiração</p>
</div>

<div>
<h2>Melhorar a dicção e a higiene dentária</h2>
<p>Muitas pessoas não conseguem nem utilizar o fio dental devido a posição de sua dentição Contudo a correção possibilita o cuidado com a saúde bucal de forma bem mais ampla.</p>
</div>

<div>
<h2>Corrigir o espaço entre os dentes</h2>
<p>Uma definição desalinhada e com espaços significativos incomodam muitas pessoas Usar aparelho nos dentes é uma das formas mais eficientes para que esses problemas possam ser corrigidos.</p>
</div>

</section>

</div>
{/**Fim Seção Dicas*/}


{/**Seção Cards*/}

<div className={Style.ContainerCard}>
<Avaliation Img={Alberto} Titulo={nome[0]} Content={content} Msg={"IMG.png"}/>
<Avaliation Img={Eliana} Titulo={nome[1]}  Content={content} Msg={"IMG.png"}/>
<Avaliation Img={Carla} Titulo={nome[2]}  Content={content} Msg={"IMG.png"}/>
</div>


<div className={Style.CardInfo}>
<InfoCards>
<nav>
<li>{`${diaSemanas[0]} ${horarioDiaUtil}`}</li>
<li>{`${diaSemanas[1]} ${horarioDiaUtil}`}</li>
<li>{`${diaSemanas[2]} ${horarioDiaUtil}`}</li>
<li>{`${diaSemanas[3]} ${horarioDiaUtil}`}</li>
<li>{`${diaSemanas[4]} ${horarioDiaUtil}`}</li>
<li>{`${diaSemanas[5]} ${horarioSabado }`}</li>
<li>{`${diaSemanas[6]} ${horarioDomingo}`}</li>
</nav>
</InfoCards>

<InfoCards>

<div className={Style.CardsIMG}>
<Image src={DraAna} alt={'DraAna.png'}/>
<b>Dra.Ana - Ortodontista Segundas e Sextas</b>
</div>

<div className={Style.CardsIMG}>
<Image src={DrCarlos} alt={"DrCarlos.png"}/>
<b>DrCarlos - Endodontia Terças e Quartas</b>
</div>

</InfoCards>

<InfoCards>
<div className={Style.CardSpan}>
<span>Ligue para Agendar uma Consulta.</span>
<span>(21)3699-9999</span>
<span>(21)97788-5566</span>
</div>
</InfoCards>
</div>

{/**Fim Seção Cards*/}


{/*Seção Pré Rodapé*/}

<div className={Style.Footer_Pre_RodapeStyle}>
<h2>{TitlePreRodape}</h2>
<p>Av.Ayrton Senna,3000 - Barra da Tíjuca, Rio de Janeiro - RJ.CEP:22775-904</p>
<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3673.1180637970806!2d-43.368804531500984!3d-22.982685594595146!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9bda2c2293fa63%3A0x539cb07246f0e38d!2sVia%20Parque%20Shopping!5e0!3m2!1spt-BR!2sbr!4v1732028027757!5m2!1spt-BR!2sbr" width="100%" height="350" style={{border: 0}} ></iframe>
</div>

{/*Fim Seção Pré Rodapé */}

{/*Seção Rodape*/}
<div className={Style.RodapeStyle}>
<p>&copy; CopyRight 2024 || Consultório Dentes Saudáveis</p>
<i><Link href="https://github.com/GutemberghVieira">Development By <span>Gutembergh Vieira</span></Link></i>
</div>
{/*Fim Seção Rodape*/}

</main>
{/**Fim seção conteúdo corpo da página*/}

</>
);
}
