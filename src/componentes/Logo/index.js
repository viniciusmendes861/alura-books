import logo from '../../imagens/logo.svg'
import styled from 'styled-components'

const LogoContainer = styled.div`
    display: flex;
    font-size: 30px;
    margin-left: 1em;
`

const LogoImagem = styled.img`
    margin-right: 10px;
`

function Logo() {
        return (
        <LogoContainer>
            <LogoImagem src={logo} alt='Logo da Alura Books' className='logo-img'/>
            <p><strong>Alura</strong>Books</p>
        </LogoContainer>
        )
}

export default Logo