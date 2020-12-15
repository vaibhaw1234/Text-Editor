import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { from } from 'rxjs';
import{TextEditorComponent} from './components/text-editor/text-editor.component'
const routes: Routes = [
  {
    path: '',
    component: TextEditorComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
