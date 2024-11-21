import Style from "./style.module.css";
import Image from "next/image";

export default function CardsAvaliation({Img,Titulo,Content,Msg})
{
return(
<div className={Style.Avaliation}>
<Image src={Img} alt={Msg} title={Msg}/>
<h2>{Titulo}</h2>
<p>{Content}</p>
</div>
);
}