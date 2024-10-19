import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../service/user.service';
import { IUserRegistered } from '../../models/register';

@Component({
  selector: 'app-detail',
  standalone: true,
  imports: [],
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.css'
})
export class DetailComponent {
 constructor(private route: ActivatedRoute, private userDTO: UserService){}
 id:any="";
 userCreated: IUserRegistered={
  username: "",
  email: "",
  password: "",
  id: "",
  createdAt: "",
};
ngOnInit(){
  this.route.queryParams.subscribe((params)=>{
    const userCreatedString= params['userCreated']
    if (userCreatedString){
      try{
        this.userCreated= JSON.parse(userCreatedString) as IUserRegistered;
      }catch (e){
        console.log("errore", e)
      }
    }else{
      console.warn("nessun dato per userCreated trovato")
    }
  })
  
  console.log(this.route.snapshot.paramMap.get("id"))
  this.id=this.route.snapshot.paramMap.get("id");
  this.userDTO.getById(this.id).subscribe({
    next:(res)=>{
      console.log(res)
    },
    error: (err)=>{
      console.error(err);
    }
  })
}
}
