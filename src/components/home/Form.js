import { useState } from "react"
import { Controller, useForm } from "react-hook-form"
import IntlTelInput from "react-intl-tel-input"
import { useNavigate } from "react-router-dom"
import 'react-intl-tel-input/dist/main.css'
import { parsePhoneNumber  } from "libphonenumber-js"



const Form = () =>{

    const navigate   = useNavigate()
    const [telPhoneLocation, setTelPhoneLocation] = useState('TR')
    const {register,control, handleSubmit, formState:{errors}} = useForm()
    const handleLocation = (status, value, countryData) =>{
        setTelPhoneLocation(countryData.iso2.toUpperCase())
    }
    const onSubmit = (data) => {
        const user = {'name':data.name,'email':data.email,'phone':data.phone}
        sessionStorage.setItem('user', JSON.stringify(user))
        navigate('/confirmation')
    }
    return(
        <form onSubmit={handleSubmit(onSubmit)} className="display-f">
            <div className="form-control display-f">
                <label htmlFor="name">Ad Soyad</label>
                <input type="text" id="name" {...register('name',{required:"Ad Soyad alanının doldurulması zorunludur."})} />
                {errors.name && <span>{errors.name.message}</span>}
            </div>
            <div className="form-control display-f">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" {...register('email',{required:"Mail alanının doldurulması zorunludur", pattern:{
                    value:/^\S+@\S+$/i,
                    message:"Lütfen geçerli bir mail adresi giriniz"
                }})} />
                {errors.email && <span>{errors.email.message}</span>}
            </div>
            <div className="form-control display-f">
                <label htmlFor="phone">Telefon Numarası</label>
                <Controller
                    control={control}
                    name="phone"
                    rules={{
                        validate:{
                        validPhoneNumber:(value)=>{
                            try {
                                const phoneNumber = parsePhoneNumber(value,telPhoneLocation)
                                return phoneNumber.isValid()
                            } catch (error) {
                                return false
                            }
                        },
                        }
                    }}
                    render={({ field: { onChange, value } }) => (
                    <IntlTelInput
                        containerClassName="intl-tel-input"
                        inputClassName="w-100"
                        fieldId="phone"
                        fieldName="phone"
                        onPhoneNumberChange={(status, value, countryData, number, id) => onChange(value)}
                        onPhoneNumberBlur={handleLocation}
                        defaultCountry="tr"
                        preferredCountries={['tr']}
                        value={value}
                    />
                    )}
                />
                {errors.phone && <span>Lütfen geçerli bir telefon numarası giriniz</span>}
            </div>
            <button type="submit">Kayıt Ol</button>
        </form>
    )
}

export default Form