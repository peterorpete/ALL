//https://reactjs.org/docs/react-component.html#setstate
//setState() enqueues changes to the component state and tells React that this component and its children need to be re-rendered with the updated state. This is the primary method you use to update the user interface in response to event handlers and server responses.

////
// *example 1
////
class App extends Component {
 constructor() {
  super();
  this.state = {
   monsters: [],
   searchField: "",
  };
 }
 componentDidMount() {
  fetch("http://jsonplaceholder.typicode.com/users")
   .then((response) => response.json())
   .then((users) => this.setState({ monsters: users }));
 }

 render() {
  return (
   <div className="App">
    <input type="search" placeholder="Search Monsters" onChange={(e) => this.setState({ searchField: e.target.value })} />
    <CardList monsters={this.state.monsters}></CardList>
   </div>
  );
 }
}
export default App;
