import ServiceCard from '@/component/Cards/ServiceCard/ServiceCard'
import { HomeServicesApi } from './api/HomeServicesApi'
import './ui/HomeServices.scss'
import TitleComponent from '@/component/TitleComponent/TitleComponent'

export default function HomeServices() {
    return (
        <div className="HomeServices">
            <div className="my-container">
                <div className="HomeServices_wrapper">
                    <TitleComponent
                        title={'Наши сервисы'}
                    />

                    <div className='HomeServices_wrapper_catalog'>
                        {HomeServicesApi.map((service, index) => {
                            return (
                                <div key={index}>
                                    <ServiceCard
                                        bg_image={service.image}
                                        title={service.title}
                                        description={service.description}
                                    />
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}