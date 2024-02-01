import { Snowfall } from "react-snowfall"
import { useNavigate } from 'react-router-dom'
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
                        <option value="" selected disabled hidden>Выберите свое образовательное учреждение </option>
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
                    <input required type="text" name='cource' placeholder='Ваш класс/курс' />
                    <input required type="submit" value="Начать тест" />
                </section>
            </form>
            <Snowfall />
        </section>
    )
}
