class ListManager {
    constructor(data){
        this.data = data;
    }
    getList(){
        return this.data;
    }
    getOne(id){
        return this.data.find(e => e.id == id);
    }
    add(element){
        this.data = this.data.concat(element);
        return element;
    }
    update(element){
        this.data = this.data.filter(e => e.id != element.id).concat(element);
    }
    remove(id){
        this.data = this.data.filter(e => e.id != id);
        return true;
    }
}

module.exports = function (data) {
    return new ListManager(data);
};