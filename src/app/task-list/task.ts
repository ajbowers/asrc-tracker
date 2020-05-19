export class Task {
    name: string;
    description: string;
    dateCreated: string;

    constructor(name, description) {
        this.name = name;
        this.description = description;
        this.dateCreated = new Date().toDateString();
    }
}