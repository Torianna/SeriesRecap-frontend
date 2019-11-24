import { Component, OnInit } from '@angular/core';
import { Series } from '../../models/series';
import { SeriesService } from '../../services/series.service';
import { MatDialogRef } from '@angular/material';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-series',
  templateUrl: './add-series.component.html',
  styleUrls: ['./add-series.component.scss']
})
export class AddSeriesComponent implements OnInit {
  photo: string;
  isUrl = false;
  series: Series =
    {
      name: '',
      description: '',
      year: '',
      photo: '',
      rate: {
        plot: 0,
        effects: 0,
        budget: 0,
        ending: 0
      }

    };

  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;


  constructor(private service: SeriesService,
              private dialogRef: MatDialogRef<AddSeriesComponent>,
              private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.firstFormGroup = this.formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this.formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
  }

  async addSeries() {
    console.log(this.series);
    // this.service.addSeries(this.series)
    //   .then(() => {
    //     this.dialogRef.close();
    //   })
    //   .catch(err => {
    //     alert('Something went wrong');
    //     console.error(err);
    //   });
  }


  displayPhoto() {
    this.isUrl = true;
  }
}
