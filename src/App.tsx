import { PostList } from './store/PostList';
import { PostStore } from './store/PostStore'

function App() {
  return (
    <div className="App">
        <PostList store={PostStore}/>
    </div>
  );
}

export default App;
