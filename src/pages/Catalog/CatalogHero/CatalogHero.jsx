'use client'

import { CatalogHeroApi } from './api/CatalogHeroApi'
import './ui/CatalogHero.scss'

export default function CatalogHero() {

    const { catalogCategories } = CatalogHeroApi()


    return (
        <div className="CatalogHero ">
            <div className="CatalogHero_wrapper my-container">
                <div className="CatalogHero_wrapper_title">
                    <p className="CatalogHero_wrapper_title_text">
                        Категории товаров
                    </p>
                </div>

                {
                    catalogCategories?.map((category, index) => {
                        return (
                            <p key={index}>{category?.name}</p>
                        )
                    })
                }

            </div>
        </div>
    )
}