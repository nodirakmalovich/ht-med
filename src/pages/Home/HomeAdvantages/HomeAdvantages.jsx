import AdvantageCard from '@/component/Cards/AdvantageCard/AdvantageCard'
import { advantageData } from './api/HomeAdvantagesApi'
import './ui/HomeAdvantages.scss'
import TitleComponent from '@/component/TitleComponent/TitleComponent'

export default function HomeAdvantages() {



    return (
        <div className="HomeAdvantages">
            <div className="my-container">
                <div className="HomeAdvantages_wrapper">
                    <TitleComponent
                        title={'Преимущества работы с нами'}
                    />

                    <div className="HomeAdvantages_wrapper_categories">
                        {
                            advantageData.map((category, index) => {
                                return (
                                    <div key={index}>
                                        <AdvantageCard
                                            image={category.image}
                                            name={category.name}
                                            description={category.description}

                                        />
                                    </div>
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