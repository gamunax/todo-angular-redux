export class Todo {
  id: number;
  title: string;
  completed: boolean;

  constructor(title: string) {
    this.title =  title;
    this.id = new Date().getTime();
    this.completed = false;
  }
}