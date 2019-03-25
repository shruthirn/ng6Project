import { Component, OnInit , OnChanges} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  userDetail: any;
  constructor(private route:ActivatedRoute, private data:DataService) { 
    
    this.route.params.subscribe(
      
      params => {
        this.userDetail = params.id
        console.log(this.userDetail)
      }
        
      
      
    )

  }

  ngOnInit() {
    this.data.getUserDetail(this.userDetail).subscribe(
      data =>{ this.userDetail = data
      console.log(this.userDetail)}
    )
   
  }

  ngOnChanges(){
    
  }

}
