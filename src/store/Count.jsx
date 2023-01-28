import { observer } from 'mobx-react';

const Count = observer(({store}) => {
    return (
        <div className="row reactions-count" >
          <div className="col-sm" align="left">
             <i className="fa fa-thumbs-up"/> {store.likesCount}
         </div>
         <div className="col-sm" align="right">
             {store.commentsCount} comments
         </div>
        </div>
  );
})

export default Count;
