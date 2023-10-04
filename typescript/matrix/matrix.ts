export class Matrix {
  private _rows: number[][];
  private _columns: number[][];


  constructor(input: string) {
    this._rows = input.split('\n').map((row) => {
      return row.split(' ').map((value) => {
        return parseInt(value);
      });
    });

    this._columns = this._rows[0].map((_, index) => {
      return this._rows.map((row) => {
        return row[index];
      });
    });
  }

  get rows(): number[][] {
    return this._rows;
  }

  get columns(): number[][] {
    return this._columns;
  }
}
