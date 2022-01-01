import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import './App.css';
import './Padma.css';

function App() {

  return (
    <div className='container'>
      <table className='box'>
        <tbody>
        <tr>
          <td>
            <img src="https://picsum.photos/200/300" alt="" width="200px" />
          </td>
          <td>
            <h5>Product Name</h5>
            <h5>Brand Name</h5>
            <h5><span>$</span>29.99</h5>
          </td>
        </tr>
        <tr>
          <td>
            <h5>Hyderbad</h5>
          </td>
          <td>
            <h5>Date: 01:01:2022</h5>
          </td>
        </tr>
        <td colSpan="2">Description of product/item</td>
        </tbody>

      </table>
    </div>
  );
}

export default App;
