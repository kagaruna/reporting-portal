import React from "react";
import SvgIcon from "../components/SvgIcon";
import "../css/development.scss";

class DevelopmentPage extends React.Component {
    render() {
        return (
            <div className='development-mode'>
                <div className='header'>
                    Страница <span>«{this.props.title}»</span> в разработке
                </div>
                <div className='description'>
                    <p>Добро пожаловать!</p>

                    <p>
                        Мы рады сообщить Вам, что работа над улучшением
                        функционала идёт полным ходом. Совсем скоро Вы сможете
                        оценить все преимущества обновлённой версии нашего
                        портала.
                    </p>

                    <p>
                        Мы тщательно продумываем каждый аспект новой страницы,
                        чтобы сделать Ваше пребывание здесь максимально
                        комфортным и информативным.
                    </p>

                    <p>
                        Вас ждут новые разделы и расширенные возможности. Мы
                        уверены, что Вам понравится результат нашей работы и Вы
                        будете приятно удивлены возможностями, которые
                        откроютcся перед Вами!
                    </p>
                </div>
                <div className='background'>
                    <SvgIcon id='development-bg' className='development-bg' />
                </div>
            </div>
        );
    }
}

export default DevelopmentPage;
