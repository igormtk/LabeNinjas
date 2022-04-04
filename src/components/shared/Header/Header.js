import React from "react";
import Logo from "../../../assets/imagens/logo.png";
import Carrinho1 from "../../../assets/imagens/carrinho1.svg";
import Carrinho2 from "../../../assets/imagens/carrinho2.svg";
import Menu from "../../../assets/imagens/clarity_menu-line.svg";
import {
  ConteinerHome,
  CabecalhoHome,
  CabecalhoHomeMobile,
  ConteinerMobile,
  ConteinerCadastro,
  LogoTextoCadastro,
  ConteinerProdutos,
  ConteinerCarrinho,
  TextoCarrinho,
} from "./StyledHeader";

export default function Header(props) {
  if (props.pagina === "Home" || props.pagina === "Vazia") {
    return (
      <ConteinerHome>
        <img src={Logo} alt="Logo" onClick={props.home} />
        <CabecalhoHome>
          <h3 onClick={props.telaVazia}>Como Funciona</h3>
          <h3 onClick={props.telaVazia}>Entrar</h3>
        </CabecalhoHome>
        <CabecalhoHomeMobile>
          <summary>
            <img src={Menu} alt="Menu" />
          </summary>
          <ConteinerMobile>
            <h3 onClick={props.telaVazia}>Como Funciona</h3>
            <h3 onClick={props.telaVazia}>Entrar</h3>
          </ConteinerMobile>
        </CabecalhoHomeMobile>
      </ConteinerHome>
    );
  } else if (props.pagina === "Produtos") {
    return (
      <ConteinerProdutos>
        <img src={Logo} alt="Logo" onClick={props.home} />
        <img src={Carrinho2} alt="Ícone carrinho" onClick={props.carrinho} />
      </ConteinerProdutos>
    );
  } else if (props.pagina === "Cadastro") {
    return (
      <ConteinerCadastro>
        <LogoTextoCadastro>
          <img src={Logo} alt="Logo" onClick={props.home} />
          <p>A maior plataforma de contratação de serviços do Brasil.</p>
        </LogoTextoCadastro>
        <button onClick={props.produtos}>Contratar um Ninja</button>
      </ConteinerCadastro>
    );
  } else if (props.pagina === "Carrinho") {
    return (
      <ConteinerCarrinho>
        <TextoCarrinho>
          <img src={Logo} alt="Logo" onClick={props.home} />
          <p>A maior plataforma de contratação de serviços do Brasil</p>
        </TextoCarrinho>
        <img
          src={Carrinho1}
          alt="Ícone carrinho"
          onClick={props.carrinho}
          width="30"
        />
      </ConteinerCarrinho>
    );
  }
}
