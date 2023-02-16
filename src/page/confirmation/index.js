import { useEffect, useState } from 'react'
import './index.scss'
import Unsuccess from '../../components/confirmation/Unsuccess'
import Success from '../../components/confirmation/Success'

function Confirmation() {

    const [validate, setValidate] = useState(false)
    const [loader, setLoader] = useState(true)
    const user = JSON.parse(sessionStorage.getItem('user'))
    const utm  = JSON.parse(localStorage.getItem('utm'))
    useEffect(()=>{
        if(user && utm) {
            setValidate(true)
            setLoader(false)
        }else {
            setLoader(false)
        }
    },[user,utm])
    return(
        <>
        <section className='display-f center-f height-v'>
            {loader && 'Yükleniyor...'}
            {validate && !loader && <Success utm={utm} user={user} />}
            {!validate && !loader && <Unsuccess />}
        <footer>
            Copyright ©2023 | All Rights Reserved
        </footer>
        </section>

        </>
    )
}

export default Confirmation