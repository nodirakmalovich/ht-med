import AdvantageCard from '@/component/Cards/AdvantageCard/AdvantageCard'
import { advantageData } from './api/HomeAdvantagesApi'
import './ui/HomeAdvantages.scss'

export default function HomeAdvantages() {



    return (
        <div className="HomeAdvantages">
            <div className="my-container">
                <div className="HomeAdvantages_wrapper">
                    <div className="HomeAdvantages_wrapper_title">
                        <p className="HomeAdvantages_wrapper_title_text">
                            Преимущества работы с нами
                        </p>

                        <div className='HomeAdvantages_wrapper_title_line'></div>
                    </div>

                    <div className="HomeAdvantages_wrapper_categories">
                        {
                            advantageData.map((category, index) => {
                                return (
                                    <AdvantageCard
                                        key={index}
                                        image={category.image}
                                        name={category.name}
                                        description={category.description}

                                    />
                                )
                            })
                        }
                    </div>

                    <div className="HomeAdvantages_wrapper_info">
                        <p className='HomeAdvantages_wrapper_info_text'>
                            Мы работаем на рынке уже больше 7 лет, и за это время смогли наладить взаимовыгодные отношения с большим количеством известных зарубежных производителей медицинской техники, лабораторных приборов и оборудования.
                        </p>

                        <p className='HomeAdvantages_wrapper_info_text'>

                            Мы защищаем жизнь и здоровье миллионов людей, поставляя высокотехнологичное медицинское оборудование по доступным ценам. Это дает возможность удовлетворять потребности лечебных учреждений и эффективно расходовать бюджетные средства.
                        </p>
                    </div>

                </div>
            </div>
        </div>
    )
}