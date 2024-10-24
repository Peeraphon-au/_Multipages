import Counter from './Counter/Counter'
import Timer from './Timer/Timer'

import './Components.css';
import Add from './Add/Add'
import Temperatures from './Temperatures/Temperatures'

function Components() {
    return (
        <div className='components-container'>
      <div className='components-header'>
        <h1>REACT COMPONENT</h1>
      </div>

      <div className='section-container'>
        <span className='section'>
          <Counter />
          <Timer />
        </span>
        <span className='timer-section'>
          <Add />
        </span>
      </div>
      
      <div className='temperatures-section'>
        <Temperatures />
      </div>

      <div className='components-footer'>
        <p>นาย พีระพล คูณมา รหัส 66066639</p>
      </div>
    </div>
      );
}

export default Components;