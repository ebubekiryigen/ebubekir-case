import { Icon } from "../Icon"

const UnsuccessForm = () => {
    return(
        <div className='thank-you display-f center-f'>
            <h1 className='bold'>BAŞARISIZ</h1>
            <Icon name="unsuccess" />
            <p>Birşeyler yanlış gitti. Lütfen kampanya linkinden geldiğinize emin olun.</p>
        </div>
    )
}

export default UnsuccessForm