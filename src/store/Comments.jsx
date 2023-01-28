import { observer } from 'mobx-react';

const Comments = observer(({store}) => {
    return (
        <table className="table">
            <tbody>
                {
                    store.comments.map((comment, index) => 
                    <tr key={index}>
                       <td>{comment} </td>
                    </tr>)
                }
            </tbody>
        </table>
  );
})

export default Comments;
