import Model from './js/model';
import View from './js/view';
import Controller from './js/controller';

const model = new Model();
const view = new View();

/*model.getItems().then(items => {
    view.init(items);
});*/

const controller = new Controller(view, model);





