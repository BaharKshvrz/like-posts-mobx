import React from 'react';
import { PostStoreImpl } from './PostStore';
import Form from './Form';
import Comments from './Comments';
import Buttons from './Buttons'
import Count from './Count'

interface PostListProps {
    store: PostStoreImpl
}

export const PostList: React.FC<PostListProps> = ({store}) => {
   return <div>
            <Count store={store}/>
            <Buttons store={store}/>
            <Form store={store}/>
            <Comments store={store}/>
       </div>
};

