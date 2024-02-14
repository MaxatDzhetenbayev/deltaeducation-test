import { Snowfall } from "react-snowfall"
import { useNavigate } from 'react-router-dom'
import '../App.css'
import { educational_institution } from "../consts/educational_institution"
import emailjs from '@emailjs/browser'

export const Main = () => {

    const navigate = useNavigate()


    const handleSaveUserInformation = (e) => {
        e.preventDefault()

        const formData = Object.fromEntries(new FormData(e.target).entries())

        window.localStorage.setItem('user_information', JSON.stringify(formData))

        emailjs.send('service_okoza0b', 'template_omybhpc', formData, 'myx63XfRfUvzWa19x')
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
            }, (err) => {
                console.log('FAILED...', err);
            });

        navigate('/test')
    }

    return (
        <section className='form_root'>
            <form className='user_form' onSubmit={handleSaveUserInformation}>
                <h1>Игра - QUIZ</h1>
                <section style={{
                    marginTop: 20,
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 10
                }}>
                    <h3 style={{ marginTop: 20 }}>Заполните информацию о себе</h3>
                    <input required type="text" name='full_name' placeholder='Ваше ФИО' />
                    <input required type="text" name='age' placeholder='Ваш возраст' />
                    <input required type="text" name='phone' placeholder='Ваш номер телефона' />
                    <select required name="educational_institution">
                        <option value="" selected disabled hidden>Выберите свое образовательное учреждение</option>
                        {
                            educational_institution.map((value) => (
                                <option value={value} >{value}</option>
                            ))
                        }
                    </select>
                    <input required type="text" name='cource' placeholder='Ваш класс/курс' />
                    <input required type="submit" value="Начать тест" />
                </section>
            </form>
            <img src="./qr.svg" alt="" style={{ marginTop: 40 }} />
            <Snowfall />
        </section>
    )
}