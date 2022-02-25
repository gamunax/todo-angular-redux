export class Todo {
  id: number;
  title: string;
  completed: boolean;

  constructor(title: string) {
    this.title =  title;
    this.id = Math.random();
    this.completed = false;
  }
}