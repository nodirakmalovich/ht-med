import ServiceCard from '@/component/Cards/ServiceCard/ServiceCard'
import { HomeServicesApi } from './api/HomeServicesApi'
import './ui/HomeServices.scss'

export default function HomeServices() {
    return (
        <div className="HomeServices">
            <div className="my-container">
                <div className="HomeServices_wrapper">
                    <div className="HomeServices_wrapper_title">
                        <p className="HomeServices_wrapper_title_text">
                            Наши сервисы
                        </p>

                        <div className='HomeServices_wrapper_title_line'></div>
                    </div>

                    <div className='HomeServices_wrapper_catalog'>
                        {HomeServicesApi.map((service, index) => {
                            return (
                                <ServiceCard
                                    key={index}
                                    bg_image={service.image}
                                    title={service.title}
                                    description={service.description}
                                />
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}