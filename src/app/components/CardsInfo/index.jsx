
import CardInfoStyle from "./CardStyle.module.css";

export default function CardInfo(props)
{
return(
<div className={CardInfoStyle.StyleCardInfo}>
<h2>INFORMAÇÕES</h2>

<div className={CardInfoStyle.Card}>
{props.children}
</div>

</div>
);
}