import * as React from 'react';
import { ClassStore } from './stores/classStore';
import { inject, observer } from 'mobx-react';
import AddClassMate from './components/addClassMate';
import Mate from './components/mate';

@inject('classStore')
@observer 
class App extends React.Component<{
  classStore?: ClassStore
}, {}> {
  public render(): JSX.Element {
    const Store = this.props.classStore as ClassStore;
    return (
      <div>
        <ul>
        {Store.classMates.map((classmate: ClassMate, index: number) => {
          return <Mate key={index} index={index} classmate={classmate} removeClassMate={Store.removeClassMate}/>;
        })}
        </ul>
        <AddClassMate addMate={Store.addClassMate} />
      </div>
    );
  }
}
export default App;