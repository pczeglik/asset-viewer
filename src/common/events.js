export class ChangeCategoryEvent {
    constructor(category, callback) {
        this.args = [category, callback]
    }
}
