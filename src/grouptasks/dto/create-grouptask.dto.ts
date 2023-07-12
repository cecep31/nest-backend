import { Project } from 'src/projects/entities/project.entity';
import { Task } from 'src/tasks/entities/task.entity';

export class CreateGrouptaskDto {
  id: string;

  name: string;

  order: string;
  
  tasks: Task[];

  project: Project;
}
