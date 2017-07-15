import { action, observable } from 'mobx';
export class ClassStore {
    @observable 
    public classMates: ClassMate[] = [
        {name: 'Lim-gang-min', phoneNumber: '01088342232'},
        {name: 'Hwang-Jin-Woo', phoneNumber: '01033242323'}
    ];
    @action
    public addClassMate = (newClassMate: ClassMate) => {
        this.classMates.push(newClassMate);
    }
    @action
    public removeClassMate = (index: number): void => {
        this.classMates.splice(index, 1);
    }
}
export default new ClassStore;