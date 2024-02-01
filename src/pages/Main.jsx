import { Snowfall } from "react-snowfall"
import {useNavigate} from 'react-router-dom'
import '../App.css'

export const Main = () => {

    const navigate = useNavigate() 


    const handleSaveUserInformation = (e) => {
        e.preventDefault()

        const formData = Object.fromEntries(new FormData(e.target).entries())

        window.localStorage.setItem('user_information', JSON.stringify(formData))

        navigate('/test')
    }

    return (
        <section className='form_root'>
            <h1>Матрица наступила</h1>
            <form className='user_form' onSubmit={handleSaveUserInformation}>
                <h3>Заполните информацию о себе</h3>
                <input type="text" name='full_name' placeholder='Ваше ФИО' />
                <input type="text" name='age' placeholder='Ваш возраст' />
                <input type="text" name='phone' placeholder='Ваш номер телефона' />
                <select name="educational_institution">
                    <option value="Школа-лицей №38">Школа-лицей №38</option>
                    <option value="Средняя общеобразовательная школа № 49">Средняя общеобразовательная школа № 49</option>
                    <option value="Средняя общеобразовательная школа № 49">Средняя общеобразовательная школа № 49</option>
                    <option value="Школа №28">Школа № 28</option>
                    <option value="Средняя общеобразовательная школа № 20">Средняя общеобразовательная школа № 20</option>
                    <option value="ВКО КГУ СОШ № 11">ВКО КГУ СОШ № 11</option>
                    <option value="Средняя общеобразовательная школа № 36">Средняя общеобразовательная школа № 36</option>
                    <option value="Средняя общеобразовательная школа № 8">Средняя общеобразовательная школа № 8</option>
                    <option value="Школа № 25">Школа № 25</option>
                </select>
                <input type="text" name='cource' placeholder='Ваш класс/курс' />
                <input type="submit" value="Начать тест" />
            </form>
            <Snowfall />
        </section>
    )
}
