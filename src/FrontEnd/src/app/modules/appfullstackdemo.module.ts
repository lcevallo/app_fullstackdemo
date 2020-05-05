import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
//import { AdminLayoutRoutes } from 'app/template/admin-layout/admin-layout.routing';
import { RouterModule } from "@angular/router";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";

import { IConfig, NgxMaskModule } from "ngx-mask"; //for ngmask
export const options: Partial<IConfig> | (() => Partial<IConfig>) = {};
import { MaterialModule } from "./material.module";

import { ForbiddenComponent } from "./auth/forbidden/forbidden.component";
import { ForbiddenMessageComponent } from "./auth/forbidden/forbiddenmessage/forbiddenmessage.component";
import { NumberPickerModule } from "ng-number-picker";
import { EnumDescriber } from "../shared/enum-describer.service";
import { AppFullStackDemoRoutes } from "./appfullstackdemo.routing";
import { UserComponent } from "../pages/user/user.component";
import { UserListComponent } from "../pages/user/user-list/user-list.component";
import { UserCuComponent } from "../pages/user/user-cu/user-cu.component";

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AppFullStackDemoRoutes), //My File of Rotes
    FormsModule,
    ReactiveFormsModule, //i had to change from MobileControlModule to AppModule (main) because if not, Custom-Validators is not working
    //AdminLayoutModule, //I need to import AdminLayout module, because i need DashBoard that it exports
    MaterialModule, //My containner of Material Module components
    NumberPickerModule, //for the numberpicker (company screen > hours equipment not seen)
    NgxMaskModule.forRoot(options), //to MASK on inputs, like telephone    
  ],
  declarations: [
    ForbiddenComponent,
    ForbiddenMessageComponent,
    // Modules from the Real system
    UserComponent,
    UserCuComponent,
    UserListComponent,
    EnumDescriber,
  ],
  //to open in a Modal (be injected) needs to be here in entry
  entryComponents: [
    UserCuComponent
    //DeviceModelCuComponent,
    //ManufacturerCuComponent
  ],
})
export class AppFullStackDemoModule { }