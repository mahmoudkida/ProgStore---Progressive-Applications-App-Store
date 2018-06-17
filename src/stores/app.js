import { observable, computed, action } from "mobx";


class progApplication {
    @observable applications =[];

    @action addApplication = (application) => {
        this.applications.push(application);
    };

    @computed get applicationCount(){
        return this.applications.length;
    }


}

const progApplicationStore = new progApplication();

export default progApplicationStore;