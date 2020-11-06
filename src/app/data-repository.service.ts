import { Injectable } from '@angular/core';
import { GFTDataModel } from './data.model';

@Injectable({
  providedIn: 'root'
})
export class DataRepositoryService {

  private GFT_TRAINING: Array<GFTDataModel> = [];

  constructor() {
    // as soon as service loads, make call to database
    this.populateDataFromDataBase();
  }

  /**
   * @description: populates data from database
   */
  private populateDataFromDataBase(): void {
    this.GFT_TRAINING = [
      { batchId: 'Batch_01', course: 'Java', trainerName: 'Sharmili', numberOfStudents: 19, studentNames: ['mishu', 'vandana', 'sumedha'] },
      { batchId: 'Batch_02', course: 'Angular', trainerName: 'Navin', numberOfStudents: 15, studentNames: ['aakash', 'goplani', 'trainer'] }
    ];
  }

  /**
   * @description: adds data to database
   * @param: data {GFTDataModel} - dat to be added within database
   */
  public addTrainingData(data: GFTDataModel): void {
    this.GFT_TRAINING.push(data);
  }

  /**
   * @description: fetch/read data copy
   */
  public fetchTrainingData(): GFTDataModel[] {
    return this.GFT_TRAINING.slice();
  }
}
