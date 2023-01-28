import { makeObservable, observable, action, computed } from 'mobx';

export class PostStoreImpl {
   likesCount: number = 0;
   comments:string[] = ["Wow!!", "awesome"]

   constructor() {
      makeObservable(this, {
        likesCount: observable,
        comments: observable,
        updateCount: action,
        postComment: action,
        commentsCount: computed
      })
   }

   updateCount() {
     this.likesCount++;
   }

   postComment(comment: string) {
     this.comments.push(comment)
   }

   get commentsCount() {
    return this.comments.length
   }

}

export const PostStore = new PostStoreImpl();