'use client'

import TitleComponent from '@/component/TitleComponent/TitleComponent'
import './ui/HomeComments.scss'
import HomeCommentApi from './api/HomeCommentsApi'
import CommentCard from '@/component/Cards/CommentCard/CommentCard'

export default function HomeComments() {

    const { commentData } = HomeCommentApi()

    return (
        <div className="HomeComments">
            <div className="my-container">
                <TitleComponent
                    title={'Отзывы'}
                />
            </div>
            
            <div className="HomeComments_wrapper">
                {
                    commentData?.map((comment, index) => {
                        return (
                            <div key={index}>
                                <CommentCard
                                    name={comment?.full_name}
                                    position={comment?.position}
                                    image={comment?.image}
                                    comment={comment?.comment}
                                />
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}