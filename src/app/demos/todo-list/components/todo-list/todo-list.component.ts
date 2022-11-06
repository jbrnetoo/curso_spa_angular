import { Component, Input } from "@angular/core";

@Component({
    selector: 'todo-list',
    templateUrl: './todo-list.component.html',
    styleUrls: ['todo-list.component.css']
})
export class ToDoListComponent {

    @Input()
    list: Task[];
}