import Form from '../../components/home/Form'
import './index.scss'
import { useEffect, useState } from "react"
import { useSearchParams } from "react-router-dom"
import UnsuccessForm from '../../components/home/UnsuccessForm'

function Home() {

    const [params] = useSearchParams()
    const [validate, setValidate] = useState(false)
    const [loader, setLoader] = useState(true)
    const utm_source = params.get('utm_source')
    const utm_medium = params.get('utm_medium')
    const utm_term   = params.get('utm_term')

    useEffect(()=>{
        if(utm_source && utm_medium && utm_term) {
            const utm = {'utm_source':utm_source, 'utm_medium':utm_medium, 'utm_term':utm_term}
            localStorage.setItem('utm',JSON.stringify(utm))
            setValidate(true)
            setLoader(false)
        } else if(!utm_source || !utm_medium || !utm_term) {
            setLoader(false)
        }
    },[utm_source, utm_medium, utm_term])

    return(
        <section className="container display-f center-f height-v">
            {loader && 'Yükleniyor...'}
            {validate && !loader && <Form />}
            {!validate && !loader && <UnsuccessForm />}
        </section>
    )
}

export default Home